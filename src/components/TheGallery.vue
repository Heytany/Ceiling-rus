<script setup lang="ts">
import Swiper from 'swiper/bundle'
import 'swiper/css'

let swiper: any = null
let _swiper2: any = null
const mySwiper = ref<any>()
const mySwiper2 = ref<any>()
const props = $defineProps<{
  dataGallery: { type: Gallery, required: true }
}>()
const gallery = ref<any>(props.dataGallery)
const isModalOpened = ref(false)
const sliderActive = ref('')

function openModal(val: string) {
  sliderActive.value = val
  isModalOpened.value = true
}

function closeModal() {
  isModalOpened.value = false
}

onMounted(() => {
  swiper = new Swiper(mySwiper.value, {
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
  _swiper2 = new Swiper(mySwiper2.value, {
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
    <Modal :is-open="isModalOpened" name="first-modal" @modal-close="closeModal">
      <template #content>
        <Zoom :src="sliderActive" />
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
        <div ref="mySwiper2" :class="{ ok: _swiper2 }" class="swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in gallery.items" :key="`slider1${index}`" class="swiper-slide" loading="lazy" @click="openModal(item.imgZoom)">
              <img :src="item.img">
              <div class="swiper-lazy-preloader" />
            </div>
          </div>
        </div>
      </div>

      <div ref="mySwiper" thumbsSlider="" class="swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in gallery.items" :key="`slider2${index}`" class="swiper-slide" loading="lazy">
            <img :src="item.img">
            <div class="swiper-lazy-preloader" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
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
    img
      display: block
      width: 100%
      height: 100%
      max-height: 300px
      object-fit: cover

  .swiper
    width: 100%
    margin-left: auto
    margin-right: auto

  .mySwiper
    height: 20%
    box-sizing: border-box
    padding: 10px 0

    .swiper-slide
      width: 25%
      height: 100%
      opacity: 0.4

    .swiper-slide-thumb-active
      opacity: 1

.dark-gallery
  .gallery-text
    color: $color-white

  hr
    border-color: $color-white
</style>
