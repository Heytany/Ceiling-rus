<script setup lang="ts">
defineOptions({
  name: 'About',
})

const about = useAboutPageStore()
</script>

<template>
  <div class="index-page about-page" :class="{ 'dark-about-page': isDark }">
    <TheSpacer :data-spacer="about.spacer" />
    <div class="breadcrumbs container">
      <SiteBreadcrumbs />
    </div>
    <TheAbout :data-about="about.about" />
    <div class="container">
      <article v-for="(item, index) in about.articles" :key="`articles${String(index)}`" class="subtitle-c" v-html="item" />
    </div>
  </div>
</template>

<style lang="sass">
.about-page
  .breadcrumbs
    margin-top: 20px
    margin-bottom: 40px

    @include mq-min('tablet')
      margin-top: 30px
      margin-bottom: 60px

    @include mq-min('notebook')
      margin-bottom: 90px

  article
    margin-top: 40px

    @include mq-min('tablet')
      margin-top: 60px

    @include mq-min('notebook')
      margin-top: 90px

.index-page
  margin-bottom: 80px

  @include mq-min('tablet')
    margin-bottom: 100px

  @include mq-min('notebook')
    margin-bottom: 120px
</style>
