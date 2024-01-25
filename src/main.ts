import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'swiper/css'
import '@unocss/reset/tailwind.css'
import './styles/main.sass'
import 'uno.css'

const pinia = createPinia()
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => setupLayouts(routes),
})
app.use(router)
app.use(pinia)
app.mount('#app')
//  MVP version without backend here
window.globalData = sampleData
useMasterPageStore().initMasterPage(window.globalData.masterPage)
useMainPageStore().initMainPage(window.globalData.mainPage)
useAboutPageStore().initAboutPage(window.globalData.aboutPage)
useCatalogPageStore().initCatalogPage(window.globalData.catalogPage)
