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
        <Stack gap={2} padding={(e) => e.spacing(12, 4)} borderRadius={24} border="1px solid">
          <Typography fontWeight="bold">Rabu, 12 Juni 2024</Typography>
          <Image src={images.flower.src} alt="flower" width={250} height={150} />
          <Box>
            <Typography className={fonts.allura.className} fontSize="42px !important">
              {data.cpp.shortName} & {data.cpw.shortName}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={12}>
              Kepada Yth: <br />
              Bapak/Ibu/Saudara/i
            </Typography>
            <Typography fontWeight="bold">Nama Tamu</Typography>
          </Box>
          <Box>
            <Button onClick={onOpenInvitation}>
              <CardGiftcardRoundedIcon /> &nbsp; Buka Undangan
            </Button>
          </Box>
          <Typography fontSize={12}>* Mohon maaf bila ada kesalahan nama dan gelar</Typography>
        </Stack>
      )}
    </animated.div>
  )
}

export default Content
