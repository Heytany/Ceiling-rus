<script lang="ts" setup>
const emit = defineEmit('modalClose')
const isLocked = useScrollLock(document)
const props = $defineProps({
  isOpen: { type: Boolean, required: true },
})
const target = ref(null)

onClickOutside(target, () => emit('modalClose'))

watch(() => props.isOpen, (val: boolean) => {
  isLocked.value = val
})
</script>

<template>
  <div v-if="props.isOpen" class="modal-mask" :class="{ 'dark-modal': isDark }">
    <div class="modal-wrapper">
      <div ref="target" class="modal-container">
        <div class="modal-body">
          <slot name="content">
            Default content
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background-color: rgba(0, 0, 0, 0.5)
  display: flex
  align-items: center
  justify-content: center
.modal-container
  max-width: 90vw
  max-height: calc(var(--vh, 1vh) * 90)
  background-color: $color-white
  color: $color-default
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)

  @include mq-min('tablet')
    min-width: 300px
.dark-modal.modal-mask
  background-color: rgba(255, 255, 255, 0.5)
  .modal-container
    background-color: $color-default
    color: $color-white
</style>
