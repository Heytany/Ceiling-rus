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

  function updateCatalog(data: any) {
    catalog.value = data
  }

  return {
    initCatalogPage,
    updateCatalog,
    banner,
    spacer,
    catalog,
  }
} })
