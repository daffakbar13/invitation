import Stack from '@mui/material/Stack'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

import useGlobalStore from '@/lib/hooks/useGlobalStore'

const ScreenA = dynamic(() => import('@/core/screens/ScreenA'))

const Sections = [
  dynamic(() => import('@/core/screens/ScreenC')),
  dynamic(() => import('@/core/screens/ScreenB')),
  dynamic(() => import('@/core/screens/ScreenD')),
  dynamic(() => import('@/core/screens/ScreenE')),
  dynamic(() => import('@/core/screens/ScreenF')),
  dynamic(() => import('@/core/screens/ScreenG')),
]

const Page: NextPage = () => {
  const { isOpenedInvitation, setIsFullScreen, setActiveScreen, closeInvitation } = useGlobalStore()

  React.useEffect(() => {
    document.onfullscreenchange = () => {
      const isFullScreen = document.fullscreenElement !== null
      setIsFullScreen(isFullScreen)
      setActiveScreen(isFullScreen ? 1 : 0)
      if (!isFullScreen) {
        closeInvitation()
      }
    }
  })

  return (
    <Stack id="container" component="main" sx={{ overflowX: 'hidden', overflowY: 'scroll' }}>
      {!isOpenedInvitation && <ScreenA />}
      {isOpenedInvitation && Sections.map((Component, i) => <Component key={i} />)}
    </Stack>
  )
}

export default Page
