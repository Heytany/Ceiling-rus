<script setup lang="ts">
import Swiper from 'swiper/bundle'
import 'swiper/css'

let swiper: any = null

let _swiper2: any = null

const mySwiper = ref<any>()
const mySwiper2 = ref<any>()

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
    <div class="gallery" :class="{ 'dark-gallery': isDark }">
      <div class="gallery-text">
        <h2 class="h1-c">
          Наши работы
        </h2>
        <p class="subtitle-c">
          Натяжные потолки на любой вкус
        </p>
      </div>
      <div class="gallery-row">
        <div class="gallery-text inner">
          <h2 class="h2-c">
            Светящееся полотно
          </h2>
          <hr class="hr-c">
          <p class="subtitle-c">
            Натяжной потолок со святящимся полотном можно сделать как цельным, где свет исходит от всей потолочной поверхности, так и виде светящегося окна - за счет вставки полупрозрачной пленки в основной потолок
          </p>
          <button
            type="button"
            class="subtitle-c btn"
          >
            Другие работы →
          </button>
        </div>
        <div ref="mySwiper2" style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" :class="{ ok: _swiper2 }" class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-4.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-5.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-6.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-8.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-9.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-10.jpg">
            </div>
          </div>
        </div>
      </div>

      <div ref="mySwiper" thumbsSlider="" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg">
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg">
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

.dark-gallery
  .gallery-text
    color: $color-white

  hr
    border-color: $color-white

.swiper
  width: 100%
  height: 100%
.swiper-slide
  text-align: center
  font-size: 18px
  background: #fff
  display: flex
  justify-content: center
  align-items: center
.swiper-slide img
  display: block
  width: 100%
  height: 100%
  max-height: 300px
  object-fit: cover
body
  background: #000
  color: #000
.swiper
  width: 100%
  margin-left: auto
  margin-right: auto
.swiper-slide
  background-size: cover
  background-position: center
.mySwiper2
  height: 80%
  width: 100%

.mySwiper
  height: 20%
  box-sizing: border-box
  padding: 10px 0
.mySwiper .swiper-slide
  width: 25%
  height: 100%
  opacity: 0.4
.mySwiper .swiper-slide-thumb-active
  opacity: 1
.swiper-slide img
  display: block
  width: 100%
  height: 100%
  object-fit: cover
</style>
