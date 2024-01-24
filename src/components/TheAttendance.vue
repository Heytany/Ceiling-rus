<script setup lang="ts">
const props = $defineProps<{
  dataAttendance: { type: Attendance, required: true }
}>()

const attendance = ref<any>(props.dataAttendance)
</script>

<template>
  <div class="container">
    <div class="attendance" :class="{ 'dark-attendance': isDark }">
      <div class="attendance-text">
        <h2 class="h1-c">
          {{ attendance.title }}
        </h2>
        <p class="suntitle-c" v-html="attendance.subtitle" />
        <button
          v-if="attendance.isButton"
          type="button"
          class="subtitle-c btn-secondary"
        >
          Подробнее →
        </button>
      </div>
      <div class="attendance-row">
        <div class="attendance-item">
          <div i-fontisto-shopping-sale uno-icon />
          <div>
            Скидки 5-10%
          </div>
        </div>
        <div class="attendance-item">
          <div i-jam-book uno-icon />
          <div>
            Работа по договору
          </div>
        </div>
        <div class="attendance-item">
          <div i-ph-shield-check uno-icon />
          <div>
            Гарантия качества
          </div>
        </div>
        <div class="attendance-item">
          <div i-ph-briefcase-fill uno-icon />
          <div>
            15 лет на рынке
          </div>
        </div>
        <div class="attendance-item">
          <div i-ph-ruler uno-icon />
          <div>
            Бесплатный замер
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.attendance
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  gap: 15px
  padding: 50px 0 0 0

  @include mq-min('notebook')
    padding: 100px 20px 0 0

  &-row
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    flex-wrap: wrap

    @include mq-min('notebook')
      align-items: start
      gap: 40px
      flex-wrap: nowrap

  &-item
    display: flex
    align-items: center
    flex-direction: column
    gap: 12px
    color: $color-default
    text-align: center
    justify-content: center
    width: 100%
    gap: 5px

    @include mq-min('phone')
      width: 30%
      gap: 10px

    @include mq-min('notebook')
      min-width: calc(20% - 70px)
      gap: 12px

    [uno-icon]
      width: 60px
      height: 60px

  &-text
    background: $color-white
    color: $color-default
    text-align: center
    margin-bottom: 20px

    @include mq-min('notebook')
      margin-bottom: 35px

    h2
      margin-bottom: 20px

.dark-attendance
  .attendance-text,.attendance-item
    color: $color-white
  .attendance-text
    background: $color-default
</style>
