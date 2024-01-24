<script setup lang="ts">
import { useZoomImageMove, useZoomImageWheel } from '@zoom-image/vue'

const props = $defineProps({
  src: { type: String, required: true },
  isOpen: { type: Boolean, required: true },
})

const isMounted = ref(false)
const {
  createZoomImage: createZoomImageWheel,
} = useZoomImageWheel()
const { createZoomImage: createZoomImageMove } = useZoomImageMove()

const imageWheelContainerRef = ref<HTMLDivElement>()
const imageMoveContainerRef = ref<HTMLDivElement>()
const isDesktop = ref(deviceConditions.isDesktop || deviceConditions.isNotebook)

onMounted(() => {
  nextTick(() => {
    isMounted.value = true
  })
})
watch(
  isDesktop,
  async (val: boolean) => {
    if (isMounted) {
      await nextTick()

      if (val) {
        createZoomImageMove(imageMoveContainerRef.value as HTMLDivElement, {
          zoomImageSource: props.src,
        })
      }
      else if (!val) {
        createZoomImageWheel(imageWheelContainerRef.value as HTMLDivElement)
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <div v-if="!isDesktop">
    <div ref="imageWheelContainerRef" class="img-zoom-container cursor-crosshair duration-500">
      <img class="h-full w-full" alt="Large Pic" :src="props.src">
    </div>
  </div>

  <div v-if="isDesktop">
    <div ref="imageMoveContainerRef" class="img-zoom-container relative cursor-crosshair overflow-hidden">
      <img class="h-full w-full" alt="Large Pic" :src="props.src">
    </div>
  </div>
</template>

<style lang="sass">
.img-zoom-container
  max-width: 90vw
  max-height: calc(var(--vh, 1vh) * 90)
  width: 100%
</style>
