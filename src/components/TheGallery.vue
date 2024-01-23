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
  })
  _swiper2 = new Swiper(mySwiper2.value, {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper,
    },
  })
})
</script>

<template>
  <div class="container">
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
      <div class="swiper-button-next" />
      <div class="swiper-button-prev" />
    </div>
    <br>
    <br>
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
</template>

<style lang="sass">
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
