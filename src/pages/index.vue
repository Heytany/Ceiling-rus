<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const main = useMainPageStore()
</script>

<template>
  <div class="index-page">
    <TheBanner :data-banner="main.banner" />
    <TheAbout :data-about="main.about" />
    <TheAttendance :data-attendance="main.attendance" />
    <TheGallery />
  </div>
</template>

<style lang="sass">
.index-page
  margin-bottom: 80px

  @include mq-min('tablet')
    margin-bottom: 100px

  @include mq-min('notebook')
    margin-bottom: 120px
</style>
