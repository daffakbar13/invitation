import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { animated, config, useSpring } from '@react-spring/web'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Screen from '@/lib/components/Screen'

const ScreenF: NextPage = () => {
  const [animate, setAnimate] = React.useState(false)
  const card = useSpring({
    scale: animate ? 1 : 0.6,
    config: config.molasses,
  })
  const header = useSpring({
    translateY: animate ? 0 : -100,
    config: config.molasses,
  })

  React.useEffect(() => setAnimate(true))

  return (
    <Screen
      justifyContent="start"
      gap={1}
      paddingX={2}
      paddingY={2}
      sx={{
        backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${images.bg3.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <animated.div style={header}>
        <Typography className={fonts.analogue.className} color="#D5AF6F" fontSize={30}>
          Gallery
        </Typography>
      </animated.div>
      <Stack
        gap={1}
        flex={1}
        width="100%"
        sx={{
          '> * > *': { flex: 1 },
          '> * > * > *': {
            height: '100%',
            borderRadius: 0.5,
          },
        }}
      >
        <Box display="flex" gap={1} flexBasis="100%">
          <animated.div style={card}>
            <Box
              sx={{
                backgroundImage: `url(${images.biru1.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
              }}
            />
          </animated.div>
          <animated.div style={card}>
            <Box
              sx={{
                backgroundImage: `url(${images.biru2.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
              }}
            />
          </animated.div>
        </Box>
        <Box display="flex" flexBasis="30%">
          <animated.div style={card}>
            <Box
              sx={{
                backgroundImage: `url(${images.biruLandscape.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </animated.div>
        </Box>
        <Box display="flex" gap={1} flexBasis="70%">
          <animated.div style={card}>
            <Box
              sx={{
                backgroundImage: `url(${images.biru3.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
              }}
            />
          </animated.div>
          <animated.div style={card}>
            <Box
              sx={{
                backgroundImage: `url(${images.biru4.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
              }}
            />
          </animated.div>
          <animated.div style={card}>
            <Box
              sx={{
                backgroundImage: `url(${images.biru5.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
              }}
            />
          </animated.div>
        </Box>
      </Stack>
    </Screen>
  )
}

export default ScreenF
