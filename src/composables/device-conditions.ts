import { ref, watchEffect } from 'vue'

function useMedia(query: string) {
  const matches = ref(true)

  watchEffect((onInvalidate) => {
    const media = window.matchMedia(query)

    if (Boolean(media.matches) !== Boolean(matches))
      matches.value = media.matches

    const onChange = () => {
      matches.value = media.matches
    }

    media.addEventListener('change', onChange)

    onInvalidate(() => {
      media.removeEventListener('change', onChange)
    })
  })

  return matches
}

const isDesktop = useMedia('(min-width: 1365px), screen')

const isNotebook = useMedia('(min-width: 1024px) and (max-width: 1364px)')

const isTablet = useMedia('(min-width: 768px) and (max-width: 1023px)')

const isMobile = useMedia('(min-width: 0) and (max-width: 767px)')

export default { isDesktop, isNotebook, isTablet, isMobile }
