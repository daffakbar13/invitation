import Stack from '@mui/material/Stack'
import { NextPage } from 'next'
import React from 'react'

import ScreenA from '@/core/screens/ScreenA'
import ScreenB from '@/core/screens/ScreenB'
import ScreenC from '@/core/screens/ScreenC'
import ScreenD from '@/core/screens/ScreenD'
import ScreenE from '@/core/screens/ScreenE'
import ScreenF from '@/core/screens/ScreenF'
import ScreenG from '@/core/screens/ScreenG'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

import ScreenH from '../screens/ScreenH'

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
      <ScreenA />
      {isOpenedInvitation && (
        <>
          <ScreenC />
          <ScreenB />
          <ScreenD />
          <ScreenE />
          <ScreenF />
          <ScreenG />
          <ScreenH />
        </>
      )}
    </Stack>
  )
}

export default Page
