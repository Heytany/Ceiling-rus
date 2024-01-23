<script setup lang="ts">
const props = $defineProps<{
  dataBanner: { type: Banner, required: true }
}>()

const banner = ref<any>(props.dataBanner)
</script>

<template>
  <div class="banner" :class="{ 'dark-banner': isDark }">
    <picture>
      <source :srcset="banner.img.srcMobileOpt" type="image/webp" media="(max-width: 1365px)">
      <source :srcset="banner.img.srcMobile" media="(max-width: 1365px)">
      <source :srcset="banner.img.srcOpt" type="image/webp">
      <img :src="banner.img.src" alt="photo">
    </picture>
    <div class="banner-container container">
      <div class="banner-text">
        <h1 class="h1-c">
          {{ banner.title }}
        </h1>
        <hr class="hr-c">
        <p class="subtitle-c">
          {{ banner.subtitle }}
        </p>
        <button
          type="button"
          class="subtitle-c btn"
        >
          Оставить заявку на расчёт →
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.banner
  position: relative

  img
    min-height: 420px
    object-fit: cover

    @include mq('tablet')
      max-height: 700px
      width: 100%
  &-container
    position: absolute
    left: 0
    bottom: 0
    right: 0

  &-text
    max-width: 585px
    width: 100%
    background: $color-white
    padding: 40px 30px 30px 30px
    margin: auto
    color: $color-default

    @include mq-min('notebook')
      margin: 0 0 0 auto
      padding: 80px 60px 60px 60px

    .btn
      margin-top: 30px
      &:not(:hover)
        color: $color-default

    hr
      border-color: $color-default

.dark-banner
  .banner-text
    color: $color-white
    background: $color-default
    hr
      border-color: $color-white
</style>
