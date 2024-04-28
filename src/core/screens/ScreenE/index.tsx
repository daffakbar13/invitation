import PlaceIcon from '@mui/icons-material/Place'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'

const ScreenE: NextPage = () => (
  <Section
    gap={3}
    paddingX={3}
    paddingY={9}
    sx={{
      backgroundImage: `url(${images.bg2.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
    }}
  >
    {[
      { title: 'Akad Nikah', startTime: '08:00', endTime: '10:00' },
      { title: 'Resepsi', startTime: '10:00', endTime: 'Selesai' },
    ].map((e, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Stack
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={1}
          borderRadius={4}
          paddingY={5}
          sx={{
            backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${images.bg3.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <Typography
            className={fonts.analogue.className}
            color="#D5AF6F"
            fontSize={38}
            sx={{ textShadow: '1px 1px 1px white' }}
          >
            {e.title}
          </Typography>
          <Typography className={fonts.bodebeck.className} fontSize={15} fontWeight="bold">
            Rabu
          </Typography>
          <Typography
            className={fonts.analogue.className}
            color="#D5AF6F"
            fontSize={59}
            sx={{ textShadow: '1px 1px 1px white' }}
          >
            12
          </Typography>
          <Typography className={fonts.newsReader.className} fontSize={15}>
            Juni 2024
          </Typography>
          <Typography
            className={fonts.bodebeck.className}
            fontSize={13}
            fontWeight="bold"
            marginY={1}
          >
            Pukul: {e.startTime} - {e.endTime}
          </Typography>
          <Box width="50%">
            <Divider sx={{ '::before, ::after': { borderColor: 'primary.main' } }}>
              <PlaceIcon sx={{ fontSize: 28 }} />
            </Divider>
          </Box>
          <Typography className={fonts.bodebeck.className} fontWeight="600" width="80%">
            Dusun Baregbeg, RT/RW 018/005, Kec. Lakbok, Kab. Ciamis
          </Typography>
        </Stack>
      </motion.div>
    ))}
  </Section>
)

export default ScreenE
