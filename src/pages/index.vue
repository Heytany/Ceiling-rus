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
    <TheAttendance :data-attendance="main.attendance" />
    <div class="container" style="height: 100vh;">
    </div>
  </div>
</template>
