/* eslint-disable no-underscore-dangle */
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
      biru1: '/images/biru-1.jpg',
      biru2: '/images/biru-2.jpg',
      biru3: '/images/biru-3.jpg',
      biru4: '/images/biru-4.jpg',
      biru5: '/images/biru-5.jpg',
      bca: '/images/bca.png',
      biruLandscape: '/images/biru-landscape.jpg',
      chipAtm: '/images/chip-atm.png',
      dana: '/images/dana.png',
      jawa1: '/images/jawa-1.jpg',
      jawa2: '/images/jawa-2.jpg',
      jawa3: '/images/jawa-3.jpg',
      jawa4: '/images/jawa-4.jpg',
      jawa5: '/images/jawa-5.jpg',
      jawaLandscape: '/images/jawa-landscape.jpg',
      jawaAlvina: '/images/jawa-alvina.jpg',
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
  setMedia(file, url) {
    const { media } = get()

    Object.entries(media).forEach(([key, value]) => {
      Object.entries(value).forEach(([_key, _value]) => {
        if (_value === file) {
          // eslint-disable-next-line no-extra-semi
          ;((media as any)[key] as any)[_key] = url
        }
      })
    })

    set({ media })
  },
}))

export default useGlobalStore
