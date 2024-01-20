<script setup lang="ts">
import { isDark } from '~/composables';
</script>

<template>
  <div class="error-404">
    <object v-if="isDark" type="image/svg+xml" data="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg" alt="Kitty Yarn Play 404 SVG animation example" img="" width="100%" />
    <img v-else src="/404/404.gif" alt="404 animation">
  </div>
</template>

<style lang="sass">
  .error-404
    max-width: 732px
    width: 100%
    margin: 0 auto
    display: flex
    align-content: center
</style>

<route lang="yaml">
  meta:
    layout: 404
  </route>
