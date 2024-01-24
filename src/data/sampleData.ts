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
    about: About
    attendance: Attendance
    gallery: Gallery
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

  interface About {
    isButton: boolean
    title: string
    subtitle: string
    firstImg: ImgContainer
    secondImg: ImgContainer
  }

  interface Attendance {
    title: string
    subtitle: string
  }

  interface Gallery {
    title: string
    subtitle: string
    rowTitle: string
    rowSubtitle: string
    items: Array<string>
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
    about: {
      isButton: true,
      title: 'О компании',
      subtitle: '«Ceiling.rus» – компания, которая специализируется на ремонтно-строительных работах, а именно монтажом натяжных полотен в городах Дубна, Кимры, а также Дмитров. Успешно работаем на рынке более 15 лет. За эти десятилетия в компании сформировалась уютная атмосфера, стабилизировались цены и при этом улучшилось качество материалов, которые никак не вредят вашему драгоценному здоровью.',
      firstImg: {
        src: '/about/first-min.jpg',
        srcOpt: '/about/first-min.webp',
        srcMobile: '/about/first-min-m.jpg',
        srcMobileOpt: '/about/first-min-m.webp',
      },
      secondImg: {
        src: '/about/second-min.jpg',
        srcOpt: '/about/second-min.webp',
        srcMobile: '/about/second-min-m.jpg',
        srcMobileOpt: '/about/second-min-m.webp',
      },
    },
    attendance: {
      title: 'Услуги',
      subtitle: 'При заказе натяжного потолка по индивидуальному заказу <br> светильники в подарок!',
    },
    gallery: {
      title: 'Наши работы',
      subtitle: 'Натяжные потолки на любой вкус',
      rowTitle: 'Светящееся полотно',
      rowSubtitle: 'Натяжной потолок со святящимся полотном можно сделать как цельным, где свет исходит от всей потолочной поверхности, так и виде светящегося окна - за счет вставки полупрозрачной пленки в основной потолок',
      items: [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
        'https://swiperjs.com/demos/images/nature-10.jpg',
      ],
    },
  },
}
