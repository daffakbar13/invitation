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
  openPreviewGallery(img) {
    return () => {
      set({ previewGallery: img })
    }
  },
  closePreviewGallery() {
    set({ previewGallery: null })
  },
}))

export default useGlobalStore
