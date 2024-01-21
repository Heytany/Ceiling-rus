<script setup lang="ts">
const router = useRouter()
const currentRoute = router.currentRoute.value.name
const matches = ref(0)

switch (currentRoute) {
  case '/':
    matches.value = 1
    break
  default:
    matches.value = 0
}
</script>

<template>
  <header class="header" :class="{ 'dark-header': isDark }">
    <div v-if="deviceConditions.isDesktop || deviceConditions.isNotebook" class="header-wrapper">
      <img @click="router.push('/')" class="header-icon" src="/favicon.svg" alt="Логотип Ceiling.rus">
      <nav>
        <ul class="header-menu">
          <li :class="{ active: matches === 1 }">
            Главная
          </li>
          <li>О компании</li>
          <li>Услуги</li>
          <li>Наши работы</li>
          <li>Контакты</li>
          <li class="important">
            Заказать звонок
          </li>
        </ul>
      </nav>
      <address class="header-address">
        <button icon-btn @click="toggleDark()">
          <div i-carbon-sun dark:i-carbon-moon />
        </button>

        <a i-basil-vk-solid icon-btn target="_blank" href="https://vk.com/heytan" />

        <a href="tel:+89060330556">
          <span i-carbon-phone-filled flex-inline icon-btn />
          <span>
            8 (906) 033-05-56
          </span></a>
      </address>
    </div>
  </header>
</template>

<style lang="sass">
.header
  max-width: 1920px
  margin: 0 auto

  &-icon
    display: block
    cursor: pointer
    width: 100px
    height: 50px

    @include mq-min('notebook')
      width: 164px
      height: 84px

  a[i-basil-vk-solid]
    width: 1.5em
    height: 1.5em

@include mq-min('notebook')
  .header
    padding: 32px 50px 0 32px
    font-size: 15px
    font-weight: 600
    line-height: 100%
    width: 100%

    &-wrapper
      display: flex
      align-items: center
      justify-content: space-between

    &-menu
      display: flex
      align-items: center
      justify-content: center
      gap: 35px

      .active:not(.important), li:not(.important):hover, li:not(.important):active
        @include transition()
        cursor: pointer
        padding-bottom: 1px
        border-bottom: 1px solid $color-default

      .important
        cursor: pointer
        padding: 7px 10px
        background-color: $color-yellow
        color: $color-default
        border-radius: 3px

    &-address
      display: flex
      align-items: center
      justify-content: space-between
      gap: 30px

      a
        display: flex
        align-items: center
        gap: 10px
        span
          font-style: normal

  .dark-header
    .header-menu
      .active:not(.important), li:not(.important):hover, li:not(.important):active
          border-bottom-color: $color-white
</style>
