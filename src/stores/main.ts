import { defineStore } from 'pinia'

export const useMainPageStore = defineStore('main-page', () => {
  const banner = ref(<Banner>{})
  const about = ref(<About>{})
  const attendance = ref(<Attendance>{})
  const gallery = ref(<Gallery>{})

  function initMainPage(this: any, dataObj: MainPage) {
    for (const key in dataObj) {
      const currentVal = dataObj[key as keyof MainPage]
      this[key] = currentVal
    }
  }

  return {
    initMainPage,
    banner,
    about,
    attendance,
    gallery,
  }
})
