<script setup lang="ts">
import Swiper from 'swiper/bundle'

let swiper: any = null
let _swiper2: any = null
const swiperSub = ref<any>()
const swiperMain = ref<any>()
const props = $defineProps<{
  dataGallery: { type: Gallery, required: true }
}>()
const gallery = ref<any>(props.dataGallery)
const isModalOpened = ref(false)
const sliderActive = ref('')
const isPicLoaded = ref(false)

function openModal(val: string) {
  sliderActive.value = val
  isModalOpened.value = true
}

function closeModal() {
  isModalOpened.value = false
  isPicLoaded.value = false
}

onMounted(() => {
  swiper = new Swiper(swiperSub.value, {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
      1320: {
        spaceBetween: 40,
      },
    },
  })
  _swiper2 = new Swiper(swiperMain.value, {
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    thumbs: {
      swiper,
    },
  })
})
</script>

<template>
  <div class="container">
    <Modal :is-open="isModalOpened" :loader="true" :is-loaded="isPicLoaded" name="first-modal" @modal-close="closeModal">
      <template #content>
        <Zoom :src="sliderActive" @full-loaded="(val) => isPicLoaded = val" />
      </template>
    </Modal>
    <div class="gallery" :class="{ 'dark-gallery': isDark }">
      <div class="gallery-text">
        <h2 class="h1-c">
          {{ gallery.title }}
        </h2>
        <p class="subtitle-c">
          {{ gallery.subtitle }}
        </p>
      </div>
      <div class="gallery-row">
        <div class="gallery-text inner">
          <h2 class="h2-c">
            {{ gallery.rowTitle }}
          </h2>
          <hr class="hr-c">
          <p class="subtitle-c">
            {{ gallery.rowSubtitle }}
          </p>
          <button
            type="button"
            class="subtitle-c btn"
          >
            Другие работы →
          </button>
        </div>
        <div ref="swiperMain" :class="{ ok: _swiper2 }" class="swiper swiper-main">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in gallery.items" :key="`slider1${index}`" class="swiper-slide" @click="openModal(item.imgZoom)">
              <img :src="item.img" loading="lazy">
              <div class="swiper-lazy-preloader" />
            </div>
          </div>
        </div>
      </div>

      <div ref="swiperSub" thumbsSlider="" class="swiper swiper-mini">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in gallery.items" :key="`slider2${index}`" class="swiper-slide">
            <img :src="item.img" loading="lazy">
            <div class="swiper-lazy-preloader" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.swiper-lazy-preloader
  border: 4px solid  $color-yellow
  border-top-color: transparent
.gallery
  padding: 50px 0 0 0

  @include mq-min('notebook')
    padding: 100px 20px 0 0

  &-row
    display: flex
    flex-direction: column
    margin-bottom: 20px
    gap: 20px

    @include mq-min('notebook')
      align-items: center
      flex-direction: row
      justify-content: space-between
      gap: 40px
      margin-bottom: 40px

  &-text
    text-align: center
    color: $color-default
    margin-bottom: 25px

    @include mq-min('notebook')
      margin-bottom: 45px

    h2
      margin-bottom: 20px

    hr
      border-color: $color-default

    .btn
      margin-top: 30px
      &:not(:hover)
        color: $color-default

  &-text.inner
    text-align: left
    width: 100%
    margin-bottom: 0

    @include mq-min('notebook')
      max-width: 40%

  .swiper-slide
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    background-size: cover
    background-position: center
    position: relative
    padding-bottom: 75%
    img
      position: absolute
      display: block
      top: 0
      left: 0
      right: 0
      bottom: 0
      object-fit: cover

  .swiper
    width: 100%
    margin-left: auto
    margin-right: auto

  .swiper-mini
    height: 20%
    box-sizing: border-box
    padding: 10px 0

    .swiper-slide
      width: 25%
      height: 100%
      opacity: 0.4
      padding-bottom: 16%
    .swiper-slide-thumb-active
      opacity: 1

.dark-gallery
  .gallery-text
    color: $color-white

  hr
    border-color: $color-white
</style>
