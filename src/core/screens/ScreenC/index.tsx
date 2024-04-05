import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { animated, config, useSpring } from '@react-spring/web'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Screen from '@/lib/components/Screen'
import UsersService from '@/lib/services/users/users.service'

const ScreenC: NextPage = () => {
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
          gap={8}
          sx={{
            backgroundImage: `url(${images.bg2.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            color: 'white',
          }}
        >
          <animated.div style={circle}>
            <Stack
              justifyContent="center"
              alignItems="center"
              width={180}
              height={180}
              sx={{
                backgroundImage: `url('${images.bb.src}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
            >
              <Typography className={fonts.philosopher.className} fontSize={52} fontWeight="bold">
                A & D
              </Typography>
              {/* <Typography>12 / 06 / 2024</Typography> */}
            </Stack>
          </animated.div>
          <Stack gap={4} width="80%" fontStyle="italic">
            <animated.div style={terjemah}>
              <Typography>
                Dan di antara tanda-tanda kekuasaan-Nva ialah Dia menciptakan untukmu isteri-isteri
                dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan
                dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu
                benar-benar terdapat tanda-tanda bagi kaum vang berfikir.
              </Typography>
            </animated.div>
            <animated.div style={suratAyat}>
              <Typography>~ Ar-Rum 21 ~</Typography>
            </animated.div>
          </Stack>
        </Screen>
      )}
    </>
  )
}

export default ScreenC
