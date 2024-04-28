import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'

const Card = ({ children }: React.PropsWithChildren) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    {children}
  </motion.div>
)

const ScreenF: NextPage = () => (
  <Section
    justifyContent="start"
    gap={2}
    paddingX={2}
    paddingY={4}
    sx={{
      backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${images.bg3.src})`,
      backgroundRepeat: 'repeat-y',
      backgroundPosition: 'bottom center',
    }}
  >
    <motion.div
      initial={{ translateY: -50 }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Typography
        className={fonts.analogue.className}
        color="#D5AF6F"
        fontSize={38}
        sx={{ textShadow: '1px 1px 1px white' }}
      >
        Gallery
      </Typography>
    </motion.div>
    <Stack
      gap={1}
      flex={1}
      width="100%"
      sx={{
        '> *': { gap: 1 },
        '> * > *': { flex: 1 },
        img: {
          width: '100%',
          height: 'auto',
          borderRadius: 0.5,
          objectFit: 'cover',
          aspectRatio: '191/286',
          '&[alt="biru landscape"], &[alt="jawa landscape"]': { aspectRatio: 'unset' },
        },
      }}
    >
      <Box display="flex">
        <Card>
          <Image {...images.biru1} alt="biru 1" />
        </Card>
        <Card>
          <Image {...images.biru2} alt="biru 2" />
        </Card>
      </Box>
      <Box display="flex" flexBasis="30%">
        <Card>
          <Image {...images.biruLandscape} alt="biru landscape" />
        </Card>
      </Box>
      <Box display="flex">
        <Card>
          <Image {...images.biru3} alt="biru 3" />
        </Card>
        <Card>
          <Image {...images.biru4} alt="biru 4" />
        </Card>
        <Card>
          <Image {...images.biru5} alt="biru 5" />
        </Card>
      </Box>
      <Box display="flex">
        <Card>
          <Image {...images.jawa1} alt="jawa 1" />
        </Card>
        <Card>
          <Image {...images.jawa2} alt="jawa 2" />
        </Card>
      </Box>
      <Box display="flex" flexBasis="40%">
        <Card>
          <Image {...images.jawaLandscape} alt="jawa landscape" />
        </Card>
      </Box>
      <Box display="flex">
        <Card>
          <Image {...images.jawa3} alt="jawa 3" />
        </Card>
        <Card>
          <Image {...images.jawa4} alt="jawa 4" />
        </Card>
      </Box>
    </Stack>
  </Section>
)

export default ScreenF
