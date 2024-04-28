/* eslint-disable no-unused-vars */

import { NextComponentType, NextPage } from 'next'

interface States {
  isOpenedInvitation: boolean
  isFullScreen: boolean
  Screens: { title: string; Component: NextPage; Icon: NextComponentType }[]
  activeScreen: number
  touchStartClientY: number
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
}

export default interface UseGlobalStore extends States, Mutations {}
