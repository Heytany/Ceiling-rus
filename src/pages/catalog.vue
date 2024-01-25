<script setup lang="ts">
defineOptions({
  name: 'Catalog',
})

const catalog = useCatalogPageStore()
</script>

<template>
  <div class="index-page catalog-page" :class="{ 'catalog-about-page': isDark }">
    <TheSpacer :data-spacer="catalog.spacer" />
    <div class="breadcrumbs container">
      <SiteBreadcrumbs />
    </div>
    <div class="container">
      <TheBanner :data-banner="catalog.banner" />
    </div>
  </div>
</template>

<style lang="sass">
.catalog-page
  .breadcrumbs
    margin-top: 20px
    margin-bottom: 40px

    @include mq-min('tablet')
      margin-top: 30px
      margin-bottom: 60px

    @include mq-min('notebook')
      margin-bottom: 90px

.index-page
  margin-bottom: 80px

  @include mq-min('tablet')
    margin-bottom: 100px

  @include mq-min('notebook')
    margin-bottom: 120px
</style>
