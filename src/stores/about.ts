import { defineStore } from 'pinia'

export const useAboutPageStore = defineStore('about-page', () => {
  const spacer = ref(<ImgContainer>{})
  const about = ref(<About>{})
  const articles = ref(Array<string>)
  function initAboutPage(this: any, dataObj: AboutPage) {
    for (const key in dataObj) {
      const currentVal = dataObj[key as keyof AboutPage]
      this[key] = currentVal
    }
  }

  return {
    initAboutPage,
    about,
    spacer,
    articles,
  }
})
