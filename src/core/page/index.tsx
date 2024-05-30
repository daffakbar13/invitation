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
import ScreenI from '../screens/ScreenI'

const Page: NextPage = () => {
  const { isOpenedInvitation, media, setIsFullScreen, setActiveScreen, closeInvitation, setMedia } =
    useGlobalStore()
  const isContentLoaded = [media.videos.opening, media.audios.backsound].every((e) =>
    e.includes('blob'),
  )

  async function hitFile(file: string) {
    if (file.includes('blob')) {
      return Promise.resolve()
    }
    return fetch(file, {
      cache: 'force-cache',
      next: { revalidate: 60 * 60 * 24 * 30 * 12 },
    })
      .then((res) => res.blob())
      .then((blob) => setMedia(file, URL.createObjectURL(blob)))
  }

  React.useEffect(() => {
    Promise.all([media.videos.opening, media.audios.backsound].map(hitFile)).then(() =>
      Promise.all([
        Promise.all(Object.values(media.audios).map(hitFile)),
        Promise.all(Object.values(media.images).map(hitFile)),
        Promise.all(Object.values(media.videos).map(hitFile)),
      ]),
    )

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
      {isOpenedInvitation && (
        <audio id="backsound" src={media.audios.backsound} autoPlay loop>
          <source src={media.audios.backsound} type="audio/mp3" />
        </audio>
      )}
    </Stack>
  )
}

export default Page
