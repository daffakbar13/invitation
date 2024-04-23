import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { animated, config, useSpring } from '@react-spring/web'
import Image from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import useGlobalStore from '@/lib/hooks/useGlobalStore'
import UsersService from '@/lib/services/users/users.service'

const Content: React.FC = () => {
  const { setActiveScreen } = useGlobalStore()
  const { data, isSuccess } = UsersService.GetBride.useQuery()
  const [animate, setAnimate] = React.useState(false)
  const style = useSpring({
    opacity: animate ? 1 : 0,
    scale: animate ? 1 : 0,
    config: config.molasses,
  })

  function onOpenInvitation() {
    if (document.body.requestFullscreen) {
      document.body
        .requestFullscreen()
        .catch(console.error)
        .finally(() => setActiveScreen(1))
    } else {
      setActiveScreen(1)
    }
  }

  React.useEffect(() => {
    setAnimate(true)
  })

  return (
    <animated.div style={style}>
      {isSuccess && (
        <Stack
          gap={1}
          width={300}
          padding={(e) => e.spacing(1, 1, 10, 1)}
          borderRadius={24}
          boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.12)"
          sx={{ backgroundColor: '#FFFFFF69' }}
        >
          <Box
            height={360}
            borderRadius="192px 192px 0 0"
            sx={{
              backgroundImage: `url(${images.gedeBiru1.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '500px',
              backgroundPosition: 'center -270px',
            }}
          >
            <Box
              width="100%"
              height="100%"
              sx={{ backgroundImage: 'linear-gradient(180deg, #44546E00 36%, #44546E 100%)' }}
            ></Box>
          </Box>
          <Box>
            <Typography
              className={fonts.analogue.className}
              fontSize={35}
              color="#D7AC64"
              sx={{ textShadow: '1px 1px 1px white' }}
            >
              Alvina & Daffa
            </Typography>
          </Box>
          <Stack gap={2}>
            <Typography className={fonts.bodebeck.className} fontSize={14} fontWeight="bold">
              Kepada Yth: <br />
              Bapak/Ibu/Saudara/i
            </Typography>
            <Typography className={fonts.analogue.className} fontSize={26}>
              Illa Laila
            </Typography>
            <Box>
              <Button onClick={onOpenInvitation}>
                <CardGiftcardRoundedIcon /> &nbsp; Buka Undangan
              </Button>
            </Box>
            <Typography className={fonts.bodebeck.className} fontSize={12} fontWeight="bold">
              * Mohon maaf bila <br /> ada kesalahan nama dan gelar
            </Typography>
          </Stack>
        </Stack>
      )}
    </animated.div>
  )
}

export default Content
