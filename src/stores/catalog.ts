import { defineStore } from 'pinia'

export const useCatalogPageStore = defineStore('catalog-page', { state: () => {
  const banner = ref(<Banner>{})
  const spacer = ref(<ImgContainer>{})
  const catalog = ref(Array<Gallery>)
  function initCatalogPage(this: any, dataObj: CatalogPage) {
    for (const key in dataObj) {
      const currentVal = dataObj[key as keyof CatalogPage]
      this[key] = currentVal
    }
  }

  return {
    initCatalogPage,
    banner,
    spacer,
    catalog,
  }
} })
