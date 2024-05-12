import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'

const ScreenC: NextPage = () => (
  <Section
    gap={8}
    paddingY={8}
    sx={{
      backgroundImage: `url(${images.bg2.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      color: 'white',
    }}
  >
    <motion.div initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ duration: 1.2 }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        width={180}
        height={180}
        sx={{
          backgroundImage: `url('${images.bb.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Typography className={fonts.edensor.className} fontSize={50}>
            A & D
          </Typography>
        </motion.div>
      </Stack>
    </motion.div>
    <Stack gap={4} width="80%">
      <motion.div
        initial={{ translateY: -100 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.bodebeck.className}>
          Dan di antara tanda-tanda kekuasaan-Nva ialah Dia menciptakan untukmu isteri-isteri dari
          jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
          diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum vang berfikir.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ translateX: 100 }}
        whileInView={{ translateX: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.bodebeck.className} fontWeight="bold">
          ~ Ar-Rum 21 ~
        </Typography>
      </motion.div>
    </Stack>
  </Section>
)

export default ScreenC
