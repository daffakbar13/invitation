import PlaceIcon from '@mui/icons-material/Place'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const ScreenE: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section
      gap={3}
      paddingX={3}
      paddingY={9}
      sx={{
        backgroundImage: `url(${media.images.bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        '> *': {
          width: '100%',
        },
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
              backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${media.images.bg3})`,
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
      <Box sx={{ borderRadius: 4 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.523248986885!2d108.67718807528504!3d-7.407190672942661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65870020c0a209%3A0xef568b5c720add22!2sRumah%20Nini%20Kariah!5e0!3m2!1sen!2sid!4v1716099652676!5m2!1sen!2sid"
          width="600"
          height="450"
          style={{ width: '100%', border: 0, borderRadius: 32 }}
          loading="lazy"
        />
      </Box>
    </Section>
  )
}

export default ScreenE
