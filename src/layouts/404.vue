<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="error-layout">
    <div>
      <button icon-btn @click="toggleDark()">
        <div class="icon-huge" sass-mod i-carbon-sun dark:i-carbon-moon />
      </button>
    </div>
    <RouterView />
    <div class="error-layout-column">
      <button btn m="3 t4" @click="router.push('/')">
        Главная страница
      </button>
      <button btn m="3 t4" @click="router.back()">
        Назад
      </button>
    </div>
  </div>
</template>

<style lang="sass">
[sass-mod].icon-huge
  width: 65px
  height: 65px

.error-layout
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100%
  padding: 30px 15px

  &-column
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    button
      max-width: 375px
      width: 100%

  div
    text-align: center
</style>
