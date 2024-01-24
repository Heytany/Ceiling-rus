<script setup lang="ts">
import { useZoomImageMove, useZoomImageWheel } from '@zoom-image/vue'

const props = $defineProps({
  src: { type: String, required: true },
})

const srcLoaded = ref (props.src)
const {
  createZoomImage: createZoomImageWheel,
} = useZoomImageWheel()

const { createZoomImage: createZoomImageMove } = useZoomImageMove()
const emit = defineEmit('fullLoaded')
const imageContainerRef = ref<HTMLDivElement>()
const imageRef = ref<HTMLImageElement>()

const isDesktop = ref(deviceConditions.isDesktop || deviceConditions.isNotebook)

onUnmounted(() => {
  if (imageRef.value) {
    imageRef.value.removeEventListener('load', setEmitOK)
    imageRef.value.removeEventListener('error', setEmitErr)
  }
})

watch(
  isDesktop,
  async (val: boolean) => {
    await nextTick()

    if (val) {
      createZoomImageMove(imageContainerRef.value as HTMLDivElement, {
        zoomImageSource: props.src,
      })
    }
    else {
      createZoomImageWheel(imageContainerRef.value as HTMLDivElement)
    }
  },
  { immediate: true },
)

watch(
  srcLoaded,
  async () => {
    await nextTick()
    if (isDesktop)
      loadImage(imageRef.value as HTMLImageElement)
  },
  { immediate: true },
)

function setEmitOK() {
  setTimeout(() => {
    emit(true)
  }, 100)
}

function setEmitErr() {
  setTimeout(() => {
    emit(false)
  }, 100)
}

function loadImage(elem: HTMLImageElement) {
  if (elem) {
    elem.addEventListener('load', setEmitOK)
    elem.addEventListener('error', setEmitErr)
  }
  else {
    setEmitOK()
  }
}
</script>

<template>
  <div>
    <div ref="imageContainerRef" class="img-zoom-container relative cursor-crosshair overflow-hidden">
      <img ref="imageRef" loading="lazy" class="img-zoomed h-full w-full" :src="props.src">
    </div>
  </div>
</template>

<style lang="sass">
.img-zoom-container
  max-width: 90vw
  max-height: calc(var(--vh, 1vh) * 90)
  width: 100%
  background: transparent

  .img-zoomed
    object-fit: contain
    max-height: inherit
    max-width: inherit
    background: transparent
</style>
