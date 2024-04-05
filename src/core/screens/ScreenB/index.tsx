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

const ScreenB: NextPage = () => {
  const { data, isSuccess } = UsersService.GetBride.useQuery()
  const [animate, setAnimate] = React.useState(false)
  const cpp = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? 0 : -200,
    config: config.molasses,
  })
  const cpw = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? 0 : 200,
    config: config.molasses,
  })

  React.useEffect(() => setAnimate(true))
  return (
    <>
      {isSuccess && (
        <Screen
          gap={2}
          sx={{
            backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${images.bg3.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
          }}
        >
          {(['cpw', 'cpp'] as const).map((key, i) => {
            const current = data[key]
            const isMale = current.gender === 'male'
            return (
              <>
                <Box key={i} width="80%">
                  <animated.div style={isMale ? cpp : cpw}>
                    <Stack key={i} width="100%" alignItems="center">
                      <Box
                        width={140}
                        height={180}
                        borderRadius={1}
                        padding={0.5}
                        boxShadow="0px 0px 6px 0px rgba(0,0,0,0.5)"
                      >
                        <Box
                          width="100%"
                          height="100%"
                          borderRadius={1}
                          sx={{
                            backgroundImage: `url(${images[isMale ? 'latarBiruDaffa' : 'latarBiruAlvina'].src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom center',
                          }}
                        ></Box>
                      </Box>
                      {/* <Typography className={fonts.philosopher.className} fontSize={42}>
                        - {current.shortName} -
                      </Typography> */}
                      <Typography fontSize={28} fontWeight="bold">
                        {current.fullName}
                      </Typography>
                      <Box marginTop={2}>
                        <Typography fontSize={14}>
                          {isMale ? 'Putra' : 'Putri'} ke - {current.childOrder}
                        </Typography>
                        <Typography fontSize={14} fontWeight="bold">
                          {(['father', 'mother'] as const)
                            .map((parent) => {
                              const { isAlm, name } = current[parent]
                              const isFather = parent === 'father'
                              return [isAlm ? '(Alm)' : null, isFather ? 'Bpk.' : 'Ibu', name].join(
                                ' ',
                              )
                            })
                            .join(' & ')}
                        </Typography>
                      </Box>
                    </Stack>
                  </animated.div>
                </Box>
              </>
            )
          })}
        </Screen>
      )}
    </>
  )
}

export default ScreenB
