<script setup lang="ts">
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'Catalog',
})

const catalogStore = useCatalogPageStore()
const { catalog } = storeToRefs(catalogStore)
</script>

<template>
  <div class="index-page catalog-page" :class="{ 'catalog-about-page': isDark }">
    <TheSpacer :data-spacer="catalogStore.spacer" />
    <div class="breadcrumbs container">
      <SiteBreadcrumbs />
    </div>
    <div class="container">
      <TheBanner :data-banner="catalogStore.banner" />
    </div>
    <div v-if="catalog.length" class="catalog-page-items-wrapper">
      <TheGallery v-for="(item, index) in catalog" :key="`gal${String(index)}`" :is-catalog="true" :inverted="Boolean(Number(index) % 2 === 0)" :data-gallery="item" />
    </div>
    <ThePagination />
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
