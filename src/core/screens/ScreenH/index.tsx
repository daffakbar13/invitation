import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'

const ScreenH: NextPage = () => (
  <Section>
    <motion.div
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Stack
        justifyContent="end"
        height={400}
        width="100%"
        position="relative"
        sx={{
          backgroundImage: `url(${images.biru4.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{ backgroundImage: 'linear-gradient(180deg, #EAF0F400 30%, #EAF0F4 89%)' }}
        />
        <Typography className={fonts.laluxe.className} fontSize={40} color="#D8AF6F" zIndex={2}>
          Terimakasih
        </Typography>
      </Stack>
      <Stack
        position="relative"
        height={400}
        width="100%"
        paddingX={6}
        gap={2}
        sx={{
          backgroundImage: `url(${images.bg3.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{ backgroundImage: 'linear-gradient(180deg, #EAF0F4 0%, #EAF0F400 100%)' }}
        />
        <Typography
          className={fonts.newsReader.className}
          fontSize={13}
          fontWeight="500"
          zIndex={2}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan
          hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima
          kasih.
        </Typography>
        <Typography className={fonts.analogue.className} fontSize={35} zIndex={2}>
          Alvina & Daffa
        </Typography>
      </Stack>
    </motion.div>
  </Section>
)

export default ScreenH
