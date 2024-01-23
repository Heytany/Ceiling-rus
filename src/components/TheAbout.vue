<script setup lang="ts">
const props = $defineProps<{
  dataAbout: { type: About, required: true }
}>()

const about = ref<any>(props.dataAbout)
</script>

<template>
  <div class="banner" :class="{ 'dark-banner': isDark }">
    <picture>
      <source :srcset="about.firstImg.srcMobileOpt" type="image/webp" media="(max-width: 1365px)">
      <source :srcset="about.firstImg.srcMobile" media="(max-width: 1365px)">
      <source :srcset="about.firstImg.srcOpt" type="image/webp">
      <img :src="about.firstImg.src" alt="photo">
    </picture>
    {{ about }}
  </div>
</template>

<style lang="sass">

</style>
