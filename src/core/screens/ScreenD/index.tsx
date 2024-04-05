import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { animated, config, useSpring } from '@react-spring/web'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Screen from '@/lib/components/Screen'
import UsersService from '@/lib/services/users/users.service'

const ScreenD: NextPage = () => {
  const { isSuccess } = UsersService.GetBride.useQuery()
  const [animate, setAnimate] = React.useState(false)
  const circle = useSpring({
    scale: animate ? 1 : 0,
    config: config.molasses,
  })
  const terjemah = useSpring({
    translateY: animate ? 0 : -100,
    config: config.molasses,
  })
  const suratAyat = useSpring({
    translateY: animate ? 0 : 200,
    config: config.molasses,
  })

  React.useEffect(() => setAnimate(true))
  return (
    <>
      {isSuccess && (
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
          <Box className={fonts.caveat.className} color="#D5AF6F" fontSize={42} marginBottom={6}>
            Save The Date
          </Box>
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
              <Box display="flex" gap={4} color="white" className={fonts.philosopher.className}>
                <Stack>
                  <Box fontSize={32}>0</Box>
                  <Box>Hari</Box>
                </Stack>
                <Stack>
                  <Box fontSize={32}>0</Box>
                  <Box>Jam</Box>
                </Stack>
                <Stack>
                  <Box fontSize={32}>0</Box>
                  <Box>Menit</Box>
                </Stack>
                <Stack>
                  <Box fontSize={32}>0</Box>
                  <Box>Detik</Box>
                </Stack>
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
            <video width="100%" autoPlay muted>
              <source src="/videos/cinematic.mp4" type="video/mp4" />
            </video>
          </Box>
          <Box padding={3} fontSize={14} fontStyle="italic">
            Siang dan malam berganti begitu cepat, diantara saat saat mendebarkan yang belum pernah
            kami rasakan sebelum nya. Kami nantikan kehadiran para keluarga dan sahabat, untuk
            menjadi saksi ikrar janji suci kami di hari yang bahagia
          </Box>
        </Screen>
      )}
    </>
  )
}

export default ScreenD
