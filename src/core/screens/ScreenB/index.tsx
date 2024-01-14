import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { animated, config, useSpring } from '@react-spring/web'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
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
        <Screen gap={2}>
          {(['cpp', 'cpw'] as const).map((key, i) => {
            const current = data[key]
            const isMale = current.gender === 'male'
            return (
              <>
                <Box key={i} width="80%">
                  <animated.div style={isMale ? cpp : cpw}>
                    <Typography className={fonts.allura.className} fontSize={42}>
                      - {current.shortName} -
                    </Typography>
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
                  </animated.div>
                </Box>
                {i === 0 && (
                  <Typography
                    className={fonts.allura.className}
                    fontSize={64}
                    lineHeight={1}
                    color="gray"
                    sx={{ marginBottom: -2 }}
                  >
                    &
                  </Typography>
                )}
              </>
            )
          })}
        </Screen>
      )}
    </>
  )
}

export default ScreenB
