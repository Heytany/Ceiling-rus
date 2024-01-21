<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>
    <button icon-btn @click="toggleDark()">
      <div class="icon-huge" sass-mod i-carbon-sun dark:i-carbon-moon />
    </button>
  </div>
  <RouterView />
  <div>
    <button btn-hex-262a37 text-sm btn m="3 t8" @click="router.push('/')">
      Главная страница
    </button>
    <button text-sm btn m="3 t8" @click="router.back()">
      Назад
    </button>
  </div>
</template>

<style lang="sass">
[sass-mod].icon-huge
  width: 65px
  height: 65px
</style>
