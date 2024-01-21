<script setup lang="ts">
const router = useRouter()
const currentRoute = router.currentRoute.value.name
const matches = ref(0)
const isDesktop = ref(deviceConditions.isDesktop)
const isNotebook = ref(deviceConditions.isNotebook)
const isBurgerOpen = ref(false)
const header = useHeaderStore()

function hideBurger(event: any): void {
  const { target } = event
  if (target?.id === 'menu')
    isBurgerOpen.value = false
}

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
    <div v-if="isDesktop || isNotebook" class="header-wrapper">
      <img class="header-icon" src="/favicon.svg" alt="Логотип Ceiling.rus" @click="router.push(header.logoRoute)">
      <nav>
        <ul class="header-menu">
          <li v-for="item in header.items" :key="`${item.id}menu`" :class="[{ active: matches === item.id }, { important: item.isImportant }]">
            {{ item.name }}
          </li>
        </ul>
      </nav>
      <address class="header-address">
        <button icon-btn @click="toggleDark()">
          <div i-carbon-sun dark:i-carbon-moon />
        </button>

        <a i-basil-vk-solid icon-btn target="_blank" :href="header.vkHref" />

        <a :href="header.phoneFormatted">
          <span i-carbon-phone-filled flex-inline icon-btn />
          <span>
            {{ header.phone }}
          </span></a>
      </address>
    </div>
    <div v-if="!isDesktop && !isNotebook" class="header-wrapper-mobile">
      <div class="burger">
        <div class="burger-content">
          <nav role="navigation">
            <div id="menuToggle">
              <input v-model="isBurgerOpen" type="checkbox">
              <span />
              <span />
              <span />
              <div id="menu" @click="hideBurger($event)">
                <div class="menu-content">
                  <img class="header-icon" src="/favicon.svg" alt="Логотип Ceiling.rus" @click="router.push(header.logoRoute)">
                  <ul>
                    <li v-for="item in header.items" :key="`${item.id}menu`">
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <img class="header-icon" src="/favicon.svg" alt="Логотип Ceiling.rus" @click="router.push(header.logoRoute)">
      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>
    </div>
  </header>
</template>

<style lang="sass">
//Desktop part
.header
  padding: 16px 32px 0 16px
  max-width: 1920px
  margin: 0 auto
  width: 100%

  &-icon
    display: block
    cursor: pointer
    width: 100px
    height: 50px

    @include mq-min('tablet')
      width: 164px
      height: 84px

  a[i-basil-vk-solid]
    width: 1.5em
    height: 1.5em

@include mq-min('tablet')
  .header
    padding: 32px 50px 0 32px
    font-size: 15px
    font-weight: 600
    line-height: 100%

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

//Mobile Part
.header-wrapper-mobile
  display: flex
  alight-items: center
  justify-content: space-between
  gap: 10px
.burger
  .burger-content
    width: 65px
    height: 65px

    nav
      height: 65px

  #menuToggle
    display: flex
    flex-direction: column
    position: relative
    top: 25px
    left: 25px
    z-index: 1
    -webkit-user-select: none
    user-select: none

    input
      display: flex
      width: 40px
      height: 32px
      position: absolute
      cursor: pointer
      opacity: 0
      z-index: 2

    span
      display: flex
      width: 29px
      height: 2px
      margin-bottom: 5px
      position: relative
      background: $color-default
      border-radius: 3px
      z-index: 1
      transform-origin: 5px 0px
      transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      &:first-child
        transform-origin: 0% 0%

      &:nth-last-child(2)
        transform-origin: 0% 100%

    input:checked ~ span
      opacity: 1
      transform: rotate(45deg) translate(-3px, -1px)
      background: #36383F

    input:checked ~ span:nth-last-child(3)
      opacity: 0
      transform: rotate(0deg) scale(0.2, 0.2)

    input:checked ~ span:nth-last-child(2)
      transform: rotate(-45deg) translate(0, -1px)

    input:checked ~ #menu
      transform: none

  #menu
    position: fixed
    top: 0
    left: 0
    min-width: 100vw
    height: 100vh
    transform-origin: 0% 0%
    transform: translate(-100%, 0)
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)
    .menu-content
      height: inherit
      width: fit-content
      min-width: 320px
      max-width: 70vw
      box-shadow: 0 0 10px #85888C
      padding: 50px
      padding-top: 75px
      background-color: #F5F6FA
      -webkit-font-smoothing: antialiased

      ul
        margin-top: 10px

        li
          padding: 10px 0
          transition-delay: 2s
          color: $color-default

.dark-header
  .header-menu
    .active:not(.important), li:not(.important):hover, li:not(.important):active
        border-bottom-color: $color-white

  .burger
    #menuToggle
      span
        background: $color-white
</style>