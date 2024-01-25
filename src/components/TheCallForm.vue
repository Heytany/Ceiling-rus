<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import {
  email,
  minLength,
  required,
} from '@vuelidate/validators'

const user_data = reactive({
  name: '',
  email: '',
  phone: '',
  comment: '',
})

const dataStatus = ref('')

const user_validations = computed(() => {
  return {
    name: { required },
    email: { required, email },
    phone: { required, minLenght: minLength(18) },
  }
})

const v$ = useVuelidate(user_validations, user_data)

async function submit() {
  const result = await v$.value.$validate()
  result ? dataStatus.value = 'Данные отправились на сервер!🥳' : dataStatus.value = 'Ошибка 😿, проверьте поля формы'
}
</script>

<template>
  <div class="wall" :class="{ 'dark-wall': isDark }">
    <h2 class="h2-c">
      Заказать звонок
    </h2>
    <div class="card">
      <div class="field-box">
        <div class="input-box">
          <input
            id="name"
            v-model="user_data.name"
            type="text"
            placeholder=" "
          >
          <label for="name">Имя*</label>
        </div>
        <div v-for="error in v$.name.$errors" :key="error.$uid" class="error">
          Это обязательное поле
        </div>
      </div>
      <div class="field-box">
        <div class="input-box">
          <input
            id="email"
            v-model="user_data.email"
            type="text"
            placeholder=" "
          >
          <label for="email">E-mail*</label>
        </div>
        <div v-for="error in v$.email.$errors" :key="error.$uid" class="error">
          Введите валидный E-mail
        </div>
      </div>
      <div class="field-box">
        <div class="input-box">
          <input
            id="phone"
            v-model="user_data.phone"
            v-mask="'+# (###) ###-##-##'"
            type="tel"
            placeholder=" "
          >
          <label for="phone">Телефон*</label>
        </div>
        <div v-for="error in v$.phone.$errors" :key="error.$uid" class="error">
          Введите валидный Телефон
        </div>
      </div>
      <div class="field-box">
        <div class="input-box">
          <textarea
            id="textarea"
            v-model="user_data.comment"
            placeholder=" "
          />
          <label for="phone">Комментарий</label>
        </div>
      </div>
      <div class="input-box">
        <button class="btn" @click="submit()">
          Отправить →
        </button>
      </div>
      <div v-if="dataStatus" text-center class="subtitle-c">
        {{ dataStatus }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.wall
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around
  padding: 35px
  background-color: $color-default
  width: 100%

  @include mq-min('notebook')
    max-width: 450px
  .h2-c
    color: $color-white
    text-align: center
    margin-bottom: 10px
    font-size: 18px
  .subtitle-c
    color: $color-white
  .card
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%

  .field-box
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: center
    width: 100%

  .input-box
    display: flex
    flex-direction: column
    position: relative
    margin: 10px 0
    width: 100%
    @include mq-min('notebook')
      margin: 20px 0
  input, textarea
    width: 100%
    width: 65vw
    border: none
    background-color: #ffffff
    border: 1px solid $color-default
    transition: 0.5s
    border-radius: 10px
    padding: 10px 15px
    color: $color-default
    font-size: 14px

    @include mq-min('phone')
      font-size: 16px
      width: 320px

  textarea
    outline: 0
    min-height: 100px

  label
    position: absolute
    height: 100%
    display: flex
    align-items: center
    transition: 0.5s
    color: #3f3f46
    margin-left: 10px
    font-weight: 600

  textarea + label
    height: auto
  .input-box input:focus
    outline: none
    border-radius: 10px
    padding: 10px 20px

  textarea:focus + label,
  textarea:not(:placeholder-shown) + label
    transform: translateY(-26px)
    color: $color-yellow

  input:focus + label,
  input:not(:placeholder-shown) + label
    transform: translateY(-36px)
    color: $color-yellow
  .error
    width: 100%
    max-width: 320px
    font-weight: 700
    font-size: 12px
    font-style: normal
    color: #e3073c
    margin-top: -6px
    margin-bottom: 8px
    @include mq-min('notebook')
      margin-top: -12px

.dark-wall.wall
  background-color: $color-white

  .h2-c
    color: $color-default
  .subtitle-c
    color: $color-default
</style>
