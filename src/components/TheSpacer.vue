<script setup lang="ts">
const props = $defineProps<{
  dataSpacer: { type: Banner, required: true }
}>()

const spacer = ref<any>(props.dataSpacer)
</script>

<template>
  <div class="spacer">
    <picture>
      <source :srcset="spacer.srcMobileOpt" type="image/webp" media="(max-width: 1365px)">
      <source :srcset="spacer.srcMobile" media="(max-width: 1365px)">
      <source :srcset="spacer.srcOpt" type="image/webp">
      <img :src="spacer.src" alt="photo">
    </picture>
  </div>
</template>

<style lang="sass">
.spacer
  img
    height: 81px
    width: 100%
    object-fit: cover

    @include mq-min('tablet')
      height: 148px
</style>
