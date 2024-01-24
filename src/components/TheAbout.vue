<script setup lang="ts">
const props = $defineProps<{
  dataAbout: { type: About, required: true }
}>()

const router = useRouter()
const about = ref<any>(props.dataAbout)
const isDesktop = ref(deviceConditions.isDesktop)
const isNotebook = ref(deviceConditions.isNotebook)
</script>

<template>
  <div class="container">
    <div class="about" :class="{ 'dark-about': isDark }">
      <div v-if="!isDesktop && !isNotebook" class="about-desc-img">
        <picture>
          <source :srcset="about.firstImg.srcMobileOpt" type="image/webp" media="(max-width: 1365px)">
          <source :srcset="about.firstImg.srcMobile" media="(max-width: 1365px)">
          <source :srcset="about.firstImg.srcOpt" type="image/webp">
          <img :src="about.firstImg.src" alt="photo">
        </picture>
      </div>
      <div class="about-text">
        <h2 class="h1-c">
          {{ about.title }}
        </h2>
        <hr class="hr-c">
        <p class="subtitle-c">
          {{ about.subtitle }}
        </p>
        <button
          v-if="about.isButton"
          type="button"
          class="subtitle-c btn-secondary"
          @click="router.push('/about')"
        >
          Подробнее →
        </button>
      </div>
      <div class="about-desc-img">
        <picture v-if="isDesktop || isNotebook">
          <source :srcset="about.firstImg.srcMobileOpt" type="image/webp" media="(max-width: 1365px)">
          <source :srcset="about.firstImg.srcMobile" media="(max-width: 1365px)">
          <source :srcset="about.firstImg.srcOpt" type="image/webp">
          <img :src="about.firstImg.src" alt="photo">
        </picture>
        <picture>
          <source :srcset="about.secondImg.srcMobileOpt" type="image/webp" media="(max-width: 1365px)">
          <source :srcset="about.secondImg.srcMobile" media="(max-width: 1365px)">
          <source :srcset="about.secondImg.srcOpt" type="image/webp">
          <img :src="about.secondImg.src" alt="photo">
        </picture>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.about
  display: flex
  align-items: center
  justify-content: space-between
  gap: 15px
  padding: 50px 0 0 0
  flex-wrap: wrap

  @include mq-min('notebook')
    padding: 100px 20px 0 0
    flex-wrap: nowrap

  &-desc-img
    flex-shrink: 0
    display: flex
    justify-content: space-between
    gap: 20px

    @include mq('notebook')
      width: 100%

    @include mq('notebook')
      margin-left: -16px
      margin-right: -16px
      width: calc(100% + 32px)

  &-text
    background: $color-white
    color: $color-default

    @include mq('notebook')
      width: 100%

    hr
      border-color: $color-default

    .btn-secondary
      margin-top: 30px

.dark-about
  .about-text
    color: $color-white
    background: $color-default
    hr
      border-color: $color-white
</style>
