import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { animated, config, useSpring } from '@react-spring/web'
import dayjs from 'dayjs'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Screen from '@/lib/components/Screen'

const getDiff = () => {
  const now = dayjs()
  const resepsi = dayjs('2024-06-12 08:00:00')

  return {
    hari: resepsi.diff(now, 'd'),
    jam: resepsi.diff(now, 'h') % 24,
    menit: resepsi.diff(now, 'm') % 60,
    detik: resepsi.diff(now, 's') % 60,
  }
}

const ScreenD: NextPage = () => {
  const [animate, setAnimate] = React.useState(false)
  const [date, setDate] = React.useState(getDiff())
  const video = useSpring({
    scale: animate ? 1 : 0,
    config: config.molasses,
  })
  const header = useSpring({
    translateY: animate ? 0 : -100,
    config: config.molasses,
  })
  const quotes = useSpring({
    translateY: animate ? 0 : 200,
    config: config.molasses,
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      const diff = getDiff()

      Object.entries(diff).forEach(([key, value]) => {
        if (value < 0) {
          diff[key as keyof typeof diff] = 0
        }
      })

      setDate(diff)
    }, 1000)

    setAnimate(true)

    const videos = document.getElementsByTagName('video')

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < videos.length; i++) {
      const vid = videos[i]
      vid.addEventListener('ended', () => vid.play(), true)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <Screen
      gap={3}
      sx={{
        backgroundImage: `url(${images.bg2.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        color: 'white',
      }}
    >
      <animated.div style={header}>
        <Box
          className={fonts.strawberryCupcakes.className}
          color="#D5AF6F"
          fontSize={35}
          marginBottom={6}
        >
          Save The Date
        </Box>
      </animated.div>
      <animated.div style={video}>
        <Box position="relative">
          <Stack
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            width="100%"
            justifyContent="center"
            alignItems="center"
            gap={1}
            zIndex={2}
            sx={{ aspectRatio: '16/9' }}
          >
            <Box display="flex" gap={4} color="white">
              {Object.entries(date).map(([key, value], i) => (
                <Stack key={i}>
                  <Typography className={fonts.analogue.className} fontSize={30}>
                    {value}
                  </Typography>
                  <Typography className={fonts.bodebeck.className} textTransform="capitalize">
                    {key}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            width="100%"
            zIndex={1}
            sx={{ aspectRatio: '16/9', backgroundColor: '#152648', opacity: 0.5 }}
          ></Box>
          <video width="100%" autoPlay loop muted playsInline>
            <source src="/videos/cinematic.mp4" type="video/mp4" />
          </video>
        </Box>
      </animated.div>
      <animated.div style={quotes}>
        <Typography className={fonts.bodebeck.className} padding={3}>
          Siang dan malam berganti begitu cepat, diantara saat saat mendebarkan yang belum pernah
          kami rasakan sebelum nya. Kami nantikan kehadiran para keluarga dan sahabat, untuk menjadi
          saksi ikrar janji suci kami di hari yang bahagia
        </Typography>
      </animated.div>
    </Screen>
  )
}

export default ScreenD
