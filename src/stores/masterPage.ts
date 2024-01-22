import { defineStore } from 'pinia'

export const useMasterPageStore = defineStore('master-page', () => {
  const logoRoute = ref('')
  const vkHref = ref('')
  const phone = ref('')
  const email = ref('')
  const bottomText = ref('')
  const copyright = ref('')
  const phoneFormatted = ref('')
  const items = ref(new Array<HeaderMenuItem>())

  function initMasterPage(this: any, dataObj: MasterPage) {
    for (const key in dataObj) {
      const currentVal = dataObj[key as keyof MasterPage]
      this[key] = currentVal
    }
  }

  return {
    initMasterPage,
    items,
    logoRoute,
    vkHref,
    phone,
    phoneFormatted,
    email,
    bottomText,
    copyright,
  }
})
