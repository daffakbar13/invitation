import PlaceIcon from '@mui/icons-material/Place'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { animated, config, useSpring } from '@react-spring/web'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Screen from '@/lib/components/Screen'

const ScreenE: NextPage = () => {
  const [animate, setAnimate] = React.useState(false)
  const card = useSpring({
    scale: animate ? 1 : 0,
    width: '100%',
    height: '100%',
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

  React.useEffect(() => setAnimate(true))

  return (
    <Screen
      gap={3}
      padding={2}
      sx={{
        backgroundImage: `url(${images.bg2.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      {[
        { title: 'Akad Nikah', startTime: '08:00', endTime: '10:00' },
        { title: 'Resepsi', startTime: '10:00', endTime: 'Selesai' },
      ].map((e, i) => (
        <animated.div key={i} style={card}>
          <Stack
            height="100%"
            justifyContent="center"
            alignItems="center"
            borderRadius={4}
            sx={{
              backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${images.bg3.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
            }}
          >
            <Typography
              className={fonts.analogue.className}
              color="#D5AF6F"
              fontSize={30}
              sx={{ textShadow: '1px 1px 1px white' }}
            >
              {e.title}
            </Typography>
            <Typography className={fonts.bodebeck.className} fontWeight="bold" fontStyle="italic">
              Rabu
            </Typography>
            <Typography
              className={fonts.analogue.className}
              color="#D5AF6F"
              fontSize={59}
              sx={{ textShadow: '1px 1px 1px white' }}
            >
              12
            </Typography>
            <Typography className={fonts.newsReader.className}>Juni 2024</Typography>
            <Typography className={fonts.bodebeck.className} fontSize={13} fontWeight="bold">
              Pukul: {e.startTime} - {e.endTime}
            </Typography>
            <Box width="70%">
              <Divider>
                <PlaceIcon sx={{ fontSize: 28 }} />
              </Divider>
            </Box>
            <Typography
              className={fonts.bodebeck.className}
              fontSize={14}
              fontWeight="600"
              width="80%"
            >
              Dusun Baregbeg, RT/RW 018/005, Kec. Lakbok, Kab. Ciamis
            </Typography>
          </Stack>
        </animated.div>
      ))}
    </Screen>
  )
}

export default ScreenE
