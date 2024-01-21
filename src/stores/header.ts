import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  const logoRoute = ref('')
  const vkHref = ref('')
  const phone = ref('')
  const phoneFormatted = ref('')
  const items = ref(new Array<HeaderMenuItem>())

  function initHeader(obj: Header) {
    logoRoute.value = obj.logoRoute
    vkHref.value = obj.vkHref
    items.value = obj.items
    phone.value = obj.phone
    phoneFormatted.value = obj.phoneFormatted
  }

  return {
    initHeader,
    items,
    logoRoute,
    vkHref,
    phone,
    phoneFormatted,
  }
})
