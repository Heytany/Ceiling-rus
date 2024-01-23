<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const main = useMainPageStore()
</script>

<template>
  <div>
    <TheBanner :data-banner="main.banner" />
    <TheAbout :data-about="main.about" />
    <div style="height: 100vh;" />
  </div>
</template>
