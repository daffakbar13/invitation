import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const ScreenI: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section>
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 15 }}
      >
        <Stack justifyContent="center" alignItems="center" height="inherit" gap={2}>
          <Typography className={fonts.oranienBaum.className} fontSize={18} color="white">
            THE WEDDING OF
          </Typography>
          <Stack>
            <Typography color="white" className={fonts.oranienBaum.className} fontSize={60}>
              Alvina
            </Typography>
            <Typography color="white" className={fonts.bodebeck.className} fontSize={24}>
              and
            </Typography>
            <Typography color="white" className={fonts.oranienBaum.className} fontSize={60}>
              Daffa
            </Typography>
          </Stack>
          <Typography color="white" className={fonts.oranienBaum.className} fontSize={18}>
            12 . 06 . 2024
          </Typography>
          <motion.div
            style={{
              width: 'max-content',
              borderRadius: 16,
              border: '1px solid white',
              padding: '16px 4px',
              height: 60,
              overflow: 'hidden',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 20 }}
          >
            <motion.div
              initial={{ marginTop: 0 }}
              animate={{ marginTop: 8 }}
              transition={{ duration: 1.2, delay: 20, repeat: Infinity, repeatType: 'mirror' }}
            >
              <ArrowDownwardRoundedIcon sx={{ color: 'white' }} />
            </motion.div>
          </motion.div>
        </Stack>
      </motion.div>
      <video
        id="opening-video"
        autoPlay
        playsInline
        muted
        style={{ height: '100vh', pointerEvents: 'none' }}
      >
        <source src={media.videos.opening} type="video/mp4" />
      </video>
    </Section>
  )
}

export default ScreenI
