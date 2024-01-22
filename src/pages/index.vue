<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const main = useMainPageStore()
</script>

<template>
  <div>
    <TheBanner :data-banner="main.banner" />
    <div style="height: 100vh;"></div>
  </div>
</template>
