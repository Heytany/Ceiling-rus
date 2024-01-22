<script setup lang="ts">
const router = useRouter()
const footer = useMasterPageStore()
</script>

<template>
  <footer class="footer" :class="{ 'dark-footer': isDark }">
    <div class="footer-wrap">
      <div class="footer-container container">
        <address class="footer-row">
          <a class="footer-link group" :href="footer.phoneFormatted">
            <span i-carbon-phone-filled flex-inline icon-btn class="group-hover:bg-hex-FFCA00" />
            <span>
              {{ footer.phone }}
            </span></a>
          <a class="footer-link group" :href="`mailto:${footer.email}`">
            <span i-carbon-email flex-inline icon-btn class="group-hover:bg-hex-FFCA00" />
            <span>
              {{ footer.email }}
            </span></a>
        </address>
        <div class="footer-img-wrap">
          <img class="header-icon" src="/favicon.svg" alt="Логотип Ceiling.rus" @click="router.push(footer.logoRoute)">
          <span>
            {{ footer.bottomText }}
          </span>
        </div>
        <nav class="footer-row">
          <a class="footer-link group" :href="footer.vkHref">
            <span i-basil-vk-solid flex-inline icon-btn class="group-hover:bg-hex-FFCA00" />
            <span>
              {{ footer.vkHref }}
            </span></a>
          <a
            class="footer-link group"
            href="https://github.com/antfu/vitesse-lite"
            target="_blank"
            title="GitHub"
          >
            <span i-carbon-logo-github flex-inline icon-btn class="group-hover:bg-hex-FFCA00" />
            <span>
              made with vitesse-lite
            </span></a>
        </nav>
      </div>
    </div>
    <div class="footer-wrap reversed">
      <div class="footer-container container">
        <span>
          {{ footer.copyright }}
        </span>
        <span>
          Политика конфиденциальности
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">
.footer-link + .footer-link
  margin-top: 20px

.footer
  &-wrap
    background: $color-default
    color: $color-white

    .footer-container
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-between
      gap: 15px
      padding-top: 55px
      padding-bottom: 55px

      @include mq-min('notebook')
        flex-direction: row
        align-items: normal

    &.reversed
      background: $color-white
      color: $color-default

      .footer-container
        justify-content: space-between
        padding-top: 20px
        padding-bottom: 45px
        span
          text-align: center

        @include mq-min('notebook')
          text-align: start

  &-img-wrap
    max-width: 688px
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 24px
    order: -1
    span
      text-align: center

    @include mq-min('notebook')
      order: 0

  &-link
    display: flex
    align-items: center
    gap: 10px
    span
      font-style: normal

.dark-footer
  .footer-wrap
    background: $color-white
    color: $color-default

    &.reversed
      background: $color-default
      color: $color-white
</style>
