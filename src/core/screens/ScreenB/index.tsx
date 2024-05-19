import InstagramIcon from '@mui/icons-material/Instagram'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const data = {
  cpp: {
    shortName: 'Daffa',
    childOrder: 3,
    father: {
      name: 'Mahna',
      isAlm: false,
    },
    role: 'cpp',
    fullName: 'Muhammad Daffa Raihan Akbar',
    gender: 'male',
    mother: {
      name: 'Tien Kartini P.',
      isAlm: false,
    },
  },
  cpw: {
    shortName: 'Alvina',
    childOrder: 1,
    father: {
      name: 'Dadi Supriadi',
      isAlm: true,
    },
    role: 'cpw',
    fullName: 'Alvina Damayanti',
    gender: 'female',
    mother: {
      name: 'Jeuminah',
      isAlm: false,
    },
  },
}

const ScreenB: NextPage = () => {
  const { media } = useGlobalStore()
  return (
    <Section
      gap={2}
      paddingX={3}
      paddingY={12}
      sx={{
        backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${media.images.bg3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.analogue.className} color="#D5AF6F" fontSize={30}>
          Our Special Day
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.bodebeck.className} fontSize={12} fontWeight="bold">
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian
          untuk menghadiri acara pernikahan kami:
        </Typography>
      </motion.div>
      <Stack gap={10} alignItems="center" marginTop={4}>
        {([data.cpw, data.cpp] as const).map((current, i) => {
          const isMale = current.gender === 'male'
          return (
            <Box key={i} width="80%">
              <motion.div
                initial={{ opacity: 0, translateY: i ? 200 : -200 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.2 }}
              >
                <Stack key={i} width="100%" alignItems="center" gap={2}>
                  <Box
                    width={140}
                    height={180}
                    borderRadius={1}
                    padding={0.5}
                    boxShadow="0px 0px 6px 0px rgba(0,0,0,0.5)"
                  >
                    <Box
                      width="100%"
                      height="100%"
                      borderRadius={1}
                      sx={{
                        backgroundImage: `url(${media.images[i ? 'jawaDaffa' : 'jawaAlvina']})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom center',
                      }}
                    ></Box>
                  </Box>
                  <Typography className={fonts.analogue.className} fontSize={30} marginTop={2}>
                    {current.fullName}
                  </Typography>
                  <Box>
                    <Typography className={fonts.bodebeck.className} fontWeight="bold">
                      {isMale ? 'Putra' : 'Putri'} ke - {current.childOrder}
                    </Typography>
                    <Typography className={fonts.bodebeck.className} fontWeight="bold">
                      {(['father', 'mother'] as const)
                        .map((parent) => {
                          const { isAlm, name } = current[parent]
                          const isFather = parent === 'father'
                          return [isAlm ? '(Alm.)' : null, isFather ? 'Bpk.' : 'Ibu', name].join(
                            ' ',
                          )
                        })
                        .join(' & ')}
                    </Typography>
                  </Box>
                  <Box
                    height={36}
                    padding={1}
                    bgcolor="#D5AF6F"
                    color="white"
                    borderRadius={4}
                    sx={{ cursor: 'pointer', ':hover': { bgcolor: 'primary.main' } }}
                  >
                    <InstagramIcon
                      onClick={() =>
                        window.open(
                          'https://instagram.com/'.concat(isMale ? 'daffakbar_13' : '_alvinaa02'),
                          '_blank',
                        )
                      }
                    />
                  </Box>
                </Stack>
              </motion.div>
            </Box>
          )
        })}
      </Stack>
    </Section>
  )
}

export default ScreenB
