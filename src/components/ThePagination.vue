<script setup lang="ts">
const page = ref(1)
const catalog = useCatalogPageStore()
const data = Array.from(Array(22).keys()).map((item) => {
  return {
    index: item,
    value: `this_${item}`,
    title: '',
    subtitle: '',
    rowTitle: `Светящееся полотно ${item}`,
    rowSubtitle: 'Натяжной потолок со святящимся полотном можно сделать как цельным, где свет исходит от всей потолочной поверхности, так и виде светящегося окна - за счет вставки полупрозрачной пленки в основной потолок',
    items: [
      {
        img: '/main/slider/1-min.jpg',
        imgZoom: '/main/slider/modal/1.jpg',
      },
      {
        img: '/main/slider/2-min.jpg',
        imgZoom: '/main/slider/modal/2.jpg',
      },
      {
        img: '/main/slider/3-min.jpg',
        imgZoom: '/main/slider/modal/3.jpg',
      },
      {
        img: '/main/slider/4-min.jpg',
        imgZoom: '/main/slider/modal/4.jpg',
      },
      {
        img: '/main/slider/5-min.jpg',
        imgZoom: '/main/slider/modal/5.jpg',
      },
      {
        img: '/main/slider/6-min.jpg',
        imgZoom: '/main/slider/modal/6.jpg',
      },
      {
        img: '/main/slider/7-min.jpg',
        imgZoom: '/main/slider/modal/7.jpg',
      },
      {
        img: '/main/slider/8-min.jpg',
        imgZoom: '/main/slider/modal/8.jpg',
      },
    ],
  }
})

const perPage = 3

const paginatedData = computed(() =>
  data.slice((page.value - 1) * perPage, page.value * perPage),
)

const pageCount = computed(() =>
  Math.ceil(data.length / perPage),
)

function nextPage() {
  if (page.value !== Math.ceil(data.length / perPage))
    page.value += 1
}

function backPage() {
  if (page.value !== 1)
    page.value -= 1
}

function goToPage(numPage: number) {
  page.value = numPage
}

watch(
  paginatedData,
  async (val: Array<Gallery>) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    catalog.initCatalogPage({ catalog: val })
  },
)
</script>

<template>
  <div class="container">
    <div class="pagination">
      <button v-if="page !== 1" i-carbon-arrow-left icon-btn @click="backPage">
        prev
      </button>
      <button
        v-for="item in pageCount" :key="item"
        class="subtitle-c pagination-btn"
        :class="{ active: page === item }"
        @click="() => goToPage(item)"
      >
        {{ item }}
      </button>
      <button v-if="page !== pageCount" i-carbon-arrow-right icon-btn @click="nextPage">
        next
      </button>
    </div>
  </div>
</template>

<style lang="sass">
.pagination
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  gap: 10px

  &-btn
    background: transparent
    border-radius: 50%
    width: 40px
    height: 40px
    border: 1px solid gray

    &.active
      border: 1px solid $color-yellow
</style>
