/* eslint-disable no-unused-vars */

import { NextComponentType, NextPage } from 'next'
import { StaticImageData } from 'next/image'

interface Media {
  videos: {
    cinematic: string
    opening: string
  }
  audios: {
    backsound: string
  }
  images: {
    bb: string
    bg1: string
    bg2: string
    bg3: string
    bgBank: string
    biru1: string
    biru2: string
    biru3: string
    biru4: string
    biru5: string
    bca: string
    biruLandscape: string
    chipAtm: string
    dana: string
    jawa1: string
    jawa2: string
    jawa3: string
    jawa4: string
    jawa5: string
    jawaLandscape: string
    jawaAlvina: string
    jawaDaffa: string
  }
}

interface States {
  isContentLoaded: boolean
  isOpenedInvitation: boolean
  isFullScreen: boolean
  Screens: { title: string; Component: NextPage; Icon: NextComponentType }[]
  activeScreen: number
  touchStartClientY: number
  previewGallery: null | string
  videoOpeningUrl: string
  media: Media
}

interface Mutations {
  setContentLoaded(isContentLoaded: boolean): void
  openInvitation(): void
  closeInvitation(): void
  setVideoOpeningUrl(url: string): void
  setIsFullScreen(isFullScreen: boolean): void
  setActiveScreen(activeScreen: number): void
  onChangeActiveScreen(toNext: boolean): void
  onWheel(e: React.WheelEvent<HTMLDivElement>): void
  onTouchStart(e: React.TouchEvent<HTMLDivElement>): void
  onTouchEnd(e: React.TouchEvent<HTMLDivElement>): void
  openPreviewGallery(img: string): () => void
  closePreviewGallery(): void
  setMedia(file: string, url: string): void
}

export default interface UseGlobalStore extends States, Mutations {}
