import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const ScreenA: NextPage = () => {
  const { isOpenedInvitation, setActiveScreen } = useGlobalStore()

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

  return (
    <Section
      gap={2}
      flex={1}
      sx={{
        backgroundImage: `url(${images.bg1.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        ...(isOpenedInvitation && {
          minHeight: '100vh',
        }),
      }}
    >
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgcolor="#d5d5d5"
        sx={{ opacity: 0.2, pointerEvents: 'none' }}
      />
      <motion.div
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Stack
          gap={1}
          width={280}
          padding={(e) => e.spacing(1, 1, 10, 1)}
          borderRadius={24}
          boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.12)"
          sx={{ backgroundColor: '#FFFFFF69' }}
        >
          <Box
            height={320}
            borderRadius="192px 192px 0 0"
            sx={{
              backgroundImage: `url(${images.biru3.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
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
            <Typography className={fonts.bodebeck.className} fontWeight="bold">
              Kepada Yth: <br />
              Bapak/Ibu/Saudara/i
            </Typography>
            <Typography className={fonts.analogue.className} fontSize={26}>
              Illa Laila
            </Typography>
            {!isOpenedInvitation && (
              <Box>
                <Button onClick={onOpenInvitation}>
                  <CardGiftcardRoundedIcon /> &nbsp; Buka Undangan
                </Button>
              </Box>
            )}
            <Typography className={fonts.bodebeck.className} fontSize={12} fontWeight="bold">
              * Mohon maaf bila <br /> ada kesalahan nama dan gelar
            </Typography>
          </Stack>
        </Stack>
      </motion.div>
    </Section>
  )
}

export default ScreenA
