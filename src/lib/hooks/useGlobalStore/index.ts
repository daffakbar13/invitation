import dynamic from 'next/dynamic'
import { create } from 'zustand'

import UseGlobalStore from './types'

const useGlobalStore = create<UseGlobalStore>((set, get) => ({
  isContentLoaded: false,
  isOpenedInvitation: false,
  isFullScreen: false,
  Screens: [
    {
      title: 'Home',
      Component: dynamic(() => import('@/core/screens/ScreenA')),
      Icon: dynamic(() => import('@mui/icons-material/HomeRounded')),
    },
    {
      title: 'Surah',
      Component: dynamic(() => import('@/core/screens/ScreenC')),
      Icon: dynamic(() => import('@mui/icons-material/FormatQuoteRounded')),
    },
    {
      title: 'Mempelai',
      Component: dynamic(() => import('@/core/screens/ScreenB')),
      Icon: dynamic(() => import('@mui/icons-material/FavoriteRounded')),
    },
    {
      title: 'Waktu',
      Component: dynamic(() => import('@/core/screens/ScreenD')),
      Icon: dynamic(() => import('@mui/icons-material/HourglassEmptyRounded')),
    },
    {
      title: 'Acara',
      Component: dynamic(() => import('@/core/screens/ScreenE')),
      Icon: dynamic(() => import('@mui/icons-material/CalendarMonthRounded')),
    },
    {
      title: 'Galeri',
      Component: dynamic(() => import('@/core/screens/ScreenF')),
      Icon: dynamic(() => import('@mui/icons-material/CollectionsRounded')),
    },
    {
      title: 'Galeri',
      Component: dynamic(() => import('@/core/screens/ScreenG')),
      Icon: dynamic(() => import('@mui/icons-material/CollectionsRounded')),
    },
  ],
  activeScreen: 0,
  touchStartClientY: 0,
  previewGallery: null,
  videoOpeningUrl: '',
  media: {
    videos: {
      cinematic: '/cinematic.mp4',
      opening: '/opening.mp4',
    },
    audios: {
      backsound: '/backsound.mp3',
    },
    images: {
      bb: '/BB.webp',
      bg1: '/background-1.webp',
      bg2: '/background-2.jpg',
      bg3: '/background-3.webp',
      bgBank: '/bg-bank.webp',
      biru1: '/biru_1.jpg',
      biru2: '/biru_2.jpg',
      biru3: '/biru_3.jpg',
      biru4: '/biru_4.jpg',
      biru5: '/biru_5.jpg',
      bca: '/bca.png',
      biruLandscape: '/biru_landscape.jpg',
      chipAtm: '/chip-atm.png',
      dana: '/dana.png',
      jawa1: '/jawa_1.jpg',
      jawa2: '/jawa_2.jpg',
      jawa3: '/jawa_3.jpg',
      jawa4: '/jawa_4.jpg',
      jawaLandscape: '/jawa_landscape.jpg',
      jawaAlvina: '/jawa-alvina.jpeg',
      jawaDaffa: '/jawa-daffa.jpg',
    },
  },
  setContentLoaded(isContentLoaded) {
    set({ isContentLoaded })
  },
  openInvitation() {
    set({ isOpenedInvitation: true })
  },
  closeInvitation() {
    set({ isOpenedInvitation: false })
  },
  setVideoOpeningUrl(videoOpeningUrl) {
    set({ videoOpeningUrl })
  },
  setIsFullScreen(isFullScreen) {
    set({ isFullScreen })
  },
  setActiveScreen(activeScreen) {
    get().openInvitation()
    set({ activeScreen, isOpenedInvitation: true })
  },
  onChangeActiveScreen(toNext) {
    const { isOpenedInvitation, activeScreen, Screens } = get()
    if (isOpenedInvitation) {
      const isAllowToNext = toNext && activeScreen < Screens.length - 1
      const isAllowToBefore = !toNext && activeScreen > 0

      if (isAllowToNext) {
        set({ activeScreen: activeScreen + 1 })
      }
      if (isAllowToBefore) {
        set({ activeScreen: activeScreen - 1 })
      }
    }
  },
  onWheel(e) {
    get().onChangeActiveScreen(e.deltaY > 0)
  },
  onTouchStart(e) {
    set({ touchStartClientY: e.changedTouches[0].clientY })
  },
  onTouchEnd(e) {
    const { touchStartClientY, onChangeActiveScreen } = get()
    const { clientY } = e.changedTouches[0]
    if (touchStartClientY !== clientY) {
      onChangeActiveScreen(touchStartClientY > clientY)
    }
  },
  openPreviewGallery(previewGallery) {
    return () => {
      set({ previewGallery })
    }
  },
  closePreviewGallery() {
    set({ previewGallery: null })
  },
  setMedia(folder, file, url) {
    const media = get().media as any

    media[folder][file] = url
    set({ media })
  },
}))

export default useGlobalStore
