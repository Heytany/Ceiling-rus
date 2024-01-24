<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const fullPaths = route.path.split('/')

function calculatePaths(path: string) {
  switch (path) {
    case 'about':
      return 'О компании'
    default:
      return 'Главная'
  }
}
</script>

<template>
  <div class="breadcrumbs" :class="{ 'dark-breadcrumbs': isDark }">
    <ul>
      <li v-for="(item, index) in fullPaths" :key="`bc${String(index)}`" class="subtitle-c" @click="router.push(`/${item}`)">
        {{ calculatePaths(item) }}
      </li>
    </ul>
  </div>
</template>

<style lang="sass">
.breadcrumbs
  ul
    display: flex
    align-items: center
    gap: 8px

    li
      cursor: pointer

      &:hover
        @include mq-min('tablet')
          color: $color-yellow

      &:after
        content: '-'
        display: inline-block
        padding-left: 8px
        pointer-events: none
        color: $color-default

      &:last-of-type:after
        content: none

.dark-breadcrumbs ul li:after
  color: $color-white
</style>
