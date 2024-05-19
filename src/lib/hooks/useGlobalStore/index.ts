import { create } from 'zustand'

import UseGlobalStore from './types'

const useGlobalStore = create<UseGlobalStore>((set, get) => ({
  isContentLoaded: false,
  isOpenedInvitation: false,
  isFullScreen: false,
  Screens: [],
  activeScreen: 0,
  touchStartClientY: 0,
  previewGallery: null,
  videoOpeningUrl: '',
  media: {
    videos: {
      cinematic: '/videos/cinematic.mp4',
      opening: '/videos/opening.mp4',
    },
    audios: {
      backsound: '/audios/backsound.mp3',
    },
    images: {
      bb: '/images/BB.webp',
      bg1: '/images/background-1.webp',
      bg2: '/images/background-2.jpg',
      bg3: '/images/background-3.webp',
      bgBank: '/images/bg-bank.webp',
      biru1: '/images/biru_1.jpg',
      biru2: '/images/biru_2.jpg',
      biru3: '/images/biru_3.jpg',
      biru4: '/images/biru_4.jpg',
      biru5: '/images/biru_5.jpg',
      bca: '/images/bca.png',
      biruLandscape: '/images/biru_landscape.jpg',
      chipAtm: '/images/chip-atm.png',
      dana: '/images/dana.png',
      jawa1: '/images/jawa_1.jpg',
      jawa2: '/images/jawa_2.jpg',
      jawa3: '/images/jawa_3.jpg',
      jawa4: '/images/jawa_4.jpg',
      jawaLandscape: '/images/jawa_landscape.jpg',
      jawaAlvina: '/images/jawa-alvina.jpeg',
      jawaDaffa: '/images/jawa-daffa.jpg',
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
