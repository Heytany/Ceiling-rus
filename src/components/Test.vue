<script setup lang="ts">
import { cropImage } from '@zoom-image/core'
import { useZoomImageClick, useZoomImageHover, useZoomImageMove, useZoomImageWheel } from '@zoom-image/vue'

const tabs = ref<
  {
    name: string
    href: string
    current: boolean
    value: 'wheel' | 'hover' | 'move' | 'click'
  }[]
>([
  { name: 'Wheel', href: '#', current: true, value: 'wheel' },
  { name: 'Hover', href: '#', current: false, value: 'hover' },
  { name: 'Move', href: '#', current: false, value: 'move' },
  { name: 'Click', href: '#', current: false, value: 'click' },
])

const croppedImage = ref<string>()
const {
  createZoomImage: createZoomImageWheel,
  zoomImageState: zoomImageWheelState,
  setZoomImageState: setZoomImageWheelState,
} = useZoomImageWheel()
const { createZoomImage: createZoomImageHover } = useZoomImageHover()
const { createZoomImage: createZoomImageMove } = useZoomImageMove()
const { createZoomImage: createZoomImageClick } = useZoomImageClick()

const zoomType = computed(() => {
  const found = tabs.value.find(tab => tab.current)
  return found?.value as 'hover' | 'wheel' | 'move' | 'click'
})

const imageWheelContainerRef = ref<HTMLDivElement>()
const imageMoveContainerRef = ref<HTMLDivElement>()
const imageHoverContainerRef = ref<HTMLDivElement>()
const imageClickContainerRef = ref<HTMLDivElement>()
const zoomTargetRef = ref<HTMLDivElement>()

function handleTabClick(tab: { name: string, href: string, current: boolean }) {
  tabs.value.forEach((tab) => {
    tab.current = false
  })
  tab.current = true
}

async function handleCropWheelZoomImage() {
  croppedImage.value = await cropImage({
    currentZoom: zoomImageWheelState.currentZoom,
    image: (imageWheelContainerRef.value as HTMLDivElement).querySelector('img') as HTMLImageElement,
    positionX: zoomImageWheelState.currentPositionX,
    positionY: zoomImageWheelState.currentPositionY,
    rotation: zoomImageWheelState.currentRotation,
  })
}
function zoomIn() {
  setZoomImageWheelState({
    currentZoom: zoomImageWheelState.currentZoom + 0.5,
  })
}
function zoomOut() {
  setZoomImageWheelState({
    currentZoom: zoomImageWheelState.currentZoom - 0.5,
  })
}

function rotate() {
  setZoomImageWheelState({
    currentRotation: zoomImageWheelState.currentRotation + 90,
  })

  if (croppedImage.value)
    handleCropWheelZoomImage()
}

const croppedImageClasses = computed(() => {
  if (zoomImageWheelState.currentRotation === 90 || zoomImageWheelState.currentRotation === 270)
    return 'h-[200px] w-[300px]'
  else
    return 'h-[300px] w-[200px]'
})

watch(
  zoomType,
  async () => {
    croppedImage.value = ''
    await nextTick()

    if (zoomType.value === 'hover') {
      createZoomImageHover(imageHoverContainerRef.value as HTMLDivElement, {
        zoomImageSource: '/sample.avif',
        customZoom: { width: 300, height: 500 },
        zoomTarget: zoomTargetRef.value as HTMLDivElement,
        scale: 2,
      })
    }

    if (zoomType.value === 'wheel')
      createZoomImageWheel(imageWheelContainerRef.value as HTMLDivElement)

    if (zoomType.value === 'move') {
      createZoomImageMove(imageMoveContainerRef.value as HTMLDivElement, {
        zoomImageSource: '/sample.avif',
      })
    }

    if (zoomType.value === 'click') {
      createZoomImageClick(imageClickContainerRef.value as HTMLDivElement, {
        zoomImageSource: '/sample.avif',
      })
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="p-4 font-sans">
    <nav class="flex pb-4 space-x-4" aria-label="Tabs">
      <a
        v-for="tab in tabs"
        :key="tab.name"
        :href="tab.href"
        class="rounded-md px-3 py-2 text-sm font-medium decoration-none"
        :class="[
          tab.current ? 'text-dark-700 bg-gray-100' : 'text-dark-500 hover:text-dark-700',
        ]" :aria-current="tab.current ? 'page' : undefined"
        @click="handleTabClick(tab)"
      >{{ tab.name }}</a>
    </nav>

    <div v-if="zoomType === 'wheel'" class="space-y-4">
      <p>Scroll / Pinch inside the image to see zoom in-out effect</p>
      <p>Current zoom: {{ `${Math.round(zoomImageWheelState.currentZoom * 100)}%` }}</p>
      <div class="flex items-center gap-4">
        <div class="grid mt-1 h-[300px] w-[300px] place-content-center bg-black">
          <div ref="imageWheelContainerRef" class="h-[300px] w-[200px] cursor-crosshair duration-500">
            <img class="h-full w-full" alt="Large Pic" src="/sample.avif">
          </div>
        </div>
        <img v-if="!!croppedImage" :src="croppedImage" :class="croppedImageClasses" alt="Cropped placeholder">
      </div>

      <div class="flex space-x-2">
        <button class="rounded bg-gray-100 p-2 text-sm text-dark-500 font-medium" @click="zoomIn">
          Zoom in
        </button>
        <button class="rounded bg-gray-100 p-2 text-sm text-dark-500 font-medium" @click="zoomOut">
          Zoom out
        </button>
        <button class="rounded bg-gray-100 p-2 text-sm text-dark-500 font-medium" @click="handleCropWheelZoomImage">
          Crop image
        </button>
        <button class="rounded bg-gray-100 p-2 text-sm text-dark-500 font-medium" @click="rotate">
          Rotate
        </button>
      </div>
    </div>

    <div v-if="zoomType === 'hover'" class="space-y-4">
      <p>Hover inside the image to see zoom effect</p>
      <div ref="imageHoverContainerRef" class="relative mt-1 h-[300px] w-[200px] flex items-start">
        <img class="h-full w-full" alt="Small Pic" src="/sample.avif">
        <div ref="zoomTargetRef" class="absolute left-[350px]" />
      </div>
    </div>

    <div v-if="zoomType === 'move'" class="space-y-4">
      <p>Move mouse inside the image to see zoom effect</p>
      <div ref="imageMoveContainerRef" class="relative mt-1 h-[300px] w-[200px] cursor-crosshair overflow-hidden">
        <img class="h-full w-full" alt="Large Pic" src="/sample.avif">
      </div>
    </div>

    <div v-if="zoomType === 'click'" class="space-y-4">
      <p>Click inside the image to see zoom effect</p>
      <div ref="imageClickContainerRef" class="relative mt-1 h-[300px] w-[200px] cursor-crosshair overflow-hidden">
        <img class="h-full w-full" alt="Large Pic" src="/sample.avif">
      </div>
    </div>
  </div>
</template>
