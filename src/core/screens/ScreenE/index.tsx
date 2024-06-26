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
          initial={{ opacity: 0, translateY: i ? 100 : -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                className={fonts.analogue.className}
                color="#D5AF6F"
                fontSize={38}
                sx={{ textShadow: '1px 1px 1px white' }}
              >
                {e.title}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ translateX: 20 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.bodebeck.className} fontSize={15} fontWeight="bold">
                Rabu
              </Typography>
            </motion.div>
            <motion.div
              initial={{ translateY: -20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                className={fonts.analogue.className}
                color="#D5AF6F"
                fontSize={59}
                sx={{ textShadow: '1px 1px 1px white' }}
              >
                12
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography className={fonts.newsReader.className} fontSize={15}>
                Juni 2024
              </Typography>
            </motion.div>
            <motion.div
              initial={{ translateY: 20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                className={fonts.bodebeck.className}
                fontSize={13}
                fontWeight="bold"
                marginY={1}
              >
                Pukul: {e.startTime} - {e.endTime}
              </Typography>
            </motion.div>
            <Box width="50%">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Divider sx={{ '::before, ::after': { borderColor: 'primary.main' } }}>
                  <PlaceIcon sx={{ fontSize: 28 }} />
                </Divider>
              </motion.div>
            </Box>
            <Typography className={fonts.bodebeck.className} fontWeight="600" width="80%">
              <motion.div
                initial={{ translateY: 20 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1.2 }}
              >
                Dusun Baregbeg, RT/RW 018/005, Kec. Lakbok, Kab. Ciamis
              </motion.div>
            </Typography>
          </Stack>
        </motion.div>
      ))}
      <Box sx={{ borderRadius: 4 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d989.1308032767587!2d108.6791192695827!3d-7.407194669624196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjQnMjUuOSJTIDEwOMKwNDAnNDcuMiJF!5e0!3m2!1sen!2sid!4v1717083952504!5m2!1sen!2sid"
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
