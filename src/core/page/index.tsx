import Box from '@mui/material/Box'
import { NextPage } from 'next'
import React from 'react'

import Cover from '@/lib/components/Cover'
import Navbar from '@/lib/components/Navbar'
import Particles from '@/lib/components/Particles'
import ScreenSpring from '@/lib/components/ScreenSpring'
import useGlobalStore from '@/lib/hooks/useGlobalStore'
import UsersService from '@/lib/services/users/users.service'

const Page: NextPage = () => {
  const {
    Screens,
    activeScreen,
    setIsFullScreen,
    setActiveScreen,
    onWheel,
    onTouchStart,
    onTouchEnd,
  } = useGlobalStore()
  const { isSuccess } = UsersService.GetBride.useQuery()

  const ActiveScreen = Screens[activeScreen].Component

  React.useEffect(() => {
    document.onfullscreenchange = () => {
      const isFullScreen = document.fullscreenElement !== null
      setIsFullScreen(isFullScreen)
      setActiveScreen(isFullScreen ? 1 : 0)
    }
  })

  return (
    <>
      <Box id="container" onWheel={onWheel} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Particles />
        <Cover />
        <ScreenSpring />
        {isSuccess && <ActiveScreen />}
      </Box>
      {Boolean(activeScreen) && <Navbar />}
    </>
  )
}

export default Page
