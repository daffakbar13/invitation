import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Card = ({ children }: React.PropsWithChildren) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    {children}
  </motion.div>
)

const ScreenF: NextPage = () => {
  const { previewGallery, media, openPreviewGallery, closePreviewGallery } = useGlobalStore()

  const renderImages = (isLandscape: boolean, ...images: string[]) =>
    images.map((img, i) => (
      <Card key={i}>
        <Image
          src={img}
          height={100}
          width={100}
          alt={'gallery'}
          quality={1}
          style={{ ...(isLandscape && { aspectRatio: 'unset' }) }}
          onClick={openPreviewGallery(img)}
        />
      </Card>
    ))

  return (
    <Section
      justifyContent="start"
      gap={2}
      paddingX={2}
      paddingY={4}
      sx={{
        backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${media.images.bg3})`,
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
          '> * > *': { flex: 1, cursor: 'pointer' },
          img: {
            width: '100%',
            height: 'auto',
            borderRadius: 0.5,
            objectFit: 'cover',
            aspectRatio: '191/286',
          },
        }}
      >
        <Box display="flex">{renderImages(false, media.images.biru1, media.images.biru2)}</Box>
        <Box display="flex" flexBasis="30%">
          {renderImages(true, media.images.biruLandscape)}
        </Box>
        <Box display="flex">
          {renderImages(false, media.images.biru3, media.images.biru4, media.images.biru5)}
        </Box>
        <Box display="flex">{renderImages(false, media.images.jawa1, media.images.jawa2)}</Box>
        <Box display="flex" flexBasis="40%">
          {renderImages(true, media.images.jawaLandscape)}
        </Box>
        <Box display="flex">{renderImages(false, media.images.jawa3, media.images.jawa4)}</Box>
      </Stack>
      <Dialog open={previewGallery !== null} fullWidth onClose={closePreviewGallery}>
        {previewGallery && (
          <Image
            src={previewGallery}
            height={100}
            width={100}
            alt={'gallery'}
            quality={10}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </Dialog>
    </Section>
  )
}

export default ScreenF
