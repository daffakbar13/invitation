import Stack from '@mui/material/Stack'
import { NextPage } from 'next'
import React from 'react'

import images from '@/assets/images'
import ScreenA from '@/core/screens/ScreenA'
import ScreenB from '@/core/screens/ScreenB'
import ScreenC from '@/core/screens/ScreenC'
import ScreenD from '@/core/screens/ScreenD'
import ScreenE from '@/core/screens/ScreenE'
import ScreenF from '@/core/screens/ScreenF'
import ScreenG from '@/core/screens/ScreenG'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

import ScreenH from '../screens/ScreenH'
import ScreenI from '../screens/ScreenI'

const Page: NextPage = () => {
  const {
    isContentLoaded,
    isOpenedInvitation,
    setIsFullScreen,
    setActiveScreen,
    closeInvitation,
    setContentLoaded,
    setVideoOpeningUrl,
  } = useGlobalStore()

  React.useEffect(() => {
    setContentLoaded(false)
    Promise.all(
      [
        '/videos/opening.mp4',
        ...Object.keys(images).map((key) => images[key as keyof typeof images].src),
      ].map((url) => fetch(url, { cache: 'force-cache', next: { revalidate: 60 * 60 * 24 } })),
    )
      .then(async ([res]) => setVideoOpeningUrl(URL.createObjectURL(await res.blob())))
      .finally(() => setContentLoaded(true))

    document.onfullscreenchange = () => {
      const isFullScreen = document.fullscreenElement !== null
      setIsFullScreen(isFullScreen)
      setActiveScreen(isFullScreen ? 1 : 0)
      if (!isFullScreen) {
        closeInvitation()
      }
    }
  }, [])

  return (
    <Stack id="container" component="main" sx={{ overflowX: 'hidden', overflowY: 'scroll' }}>
      {(!isOpenedInvitation || !isContentLoaded) && <ScreenA />}
      {isOpenedInvitation && isContentLoaded && (
        <>
          <ScreenI />
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
