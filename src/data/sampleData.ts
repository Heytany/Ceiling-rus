// Структура данных для отображения в вёрстке (статичные данные)
declare global {
  interface Window {
    globalData: SampleData
  }

  interface HeaderMenuItem {
    id: number
    name: string
    route: string
    isImportant: boolean
  }

  interface MasterPage {
    logoRoute: string
    phone: string
    phoneFormatted: string
    email: string
    vkHref: string
    items: HeaderMenuItem[]
    bottomText: string
    copyright: string
  }

  interface MainPage {
    banner: Banner
  }

  interface ImgContainer {
    src: string
    srcOpt: string
    srcMobile: string
    srcMobileOpt: string
  }

  interface Banner {
    isText: boolean
    title: string
    subtitle: string
    img: ImgContainer
  }

  interface SampleData {
    masterPage: MasterPage
    mainPage: MainPage
  }
}

export default {
  masterPage: {
    logoRoute: '/',
    vkHref: 'https://vk.com/ceilingrus',
    phone: '8 (906) 033-05-56',
    phoneFormatted: 'tel:+89060330556',
    email: 'info@ceiling.ru',
    copyright: `©${String(new Date().getFullYear())} Ceiling - Все права защищены`,
    bottomText: 'Работаем по индивидуальным проектам, с разработкой уникальных дизайнов в Дубне, Дмитрове, Кимрах',
    items: [
      {
        id: 1,
        name: 'Главная',
        route: '/',
        isImportant: false,
      },
      {
        id: 2,
        name: 'О компании',
        route: '',
        isImportant: false,
      },
      {
        id: 3,
        name: 'Услуги',
        route: '',
        isImportant: false,
      },
      {
        id: 4,
        name: 'Наши работы',
        route: '',
        isImportant: false,
      },
      {
        id: 5,
        name: 'Контакты',
        route: '',
        isImportant: false,
      },
      {
        id: 6,
        name: 'Заказать звонок',
        route: '',
        isImportant: true,
      },
    ],
  },

  mainPage: {
    banner: {
      isText: true,
      title: 'Натяжные потолки любой сложности',
      subtitle: 'Работаем по индивидуальным проектам, с разработкой уникальных дизайнов в Дубне, Дмитрове, Кимрах',
      img: {
        src: '/main/banner.jpg',
        srcOpt: '/main/banner.webp',
        srcMobile: '/main/banner-mobile.jpg',
        srcMobileOpt: '/main/banner-mobile.webp',
      },
    },
  },
}
