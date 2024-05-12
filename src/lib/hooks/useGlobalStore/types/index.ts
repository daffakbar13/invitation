/* eslint-disable no-unused-vars */

import { NextComponentType, NextPage } from 'next'
import { StaticImageData } from 'next/image'

interface States {
  isOpenedInvitation: boolean
  isFullScreen: boolean
  Screens: { title: string; Component: NextPage; Icon: NextComponentType }[]
  activeScreen: number
  touchStartClientY: number
  previewGallery: null | StaticImageData
}

interface Mutations {
  openInvitation(): void
  closeInvitation(): void
  setIsFullScreen(isFullScreen: boolean): void
  setActiveScreen(activeScreen: number): void
  onChangeActiveScreen(toNext: boolean): void
  onWheel(e: React.WheelEvent<HTMLDivElement>): void
  onTouchStart(e: React.TouchEvent<HTMLDivElement>): void
  onTouchEnd(e: React.TouchEvent<HTMLDivElement>): void
  openPreviewGallery(img: StaticImageData): () => void
  closePreviewGallery(): void
}

export default interface UseGlobalStore extends States, Mutations {}
