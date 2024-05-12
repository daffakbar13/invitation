import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Card = ({ children }: React.PropsWithChildren) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    {children}
  </motion.div>
)

const ScreenF: NextPage = () => {
  const { previewGallery, openPreviewGallery, closePreviewGallery } = useGlobalStore()

  const renderImages = (...images: StaticImageData[]) =>
    images.map((img, i) => (
      <Card key={i}>
        <Image
          src={img.src}
          height={img.height}
          width={img.width}
          blurDataURL={img.blurDataURL}
          alt={'gallery'}
          quality={1}
          style={{ ...(img.src.includes('landscape') && { aspectRatio: 'unset' }) }}
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
        <Box display="flex">{renderImages(images.biru1, images.biru2)}</Box>
        <Box display="flex" flexBasis="30%">
          {renderImages(images.biruLandscape)}
        </Box>
        <Box display="flex">{renderImages(images.biru3, images.biru4, images.biru5)}</Box>
        <Box display="flex">{renderImages(images.jawa1, images.jawa2)}</Box>
        <Box display="flex" flexBasis="40%">
          {renderImages(images.jawaLandscape)}
        </Box>
        <Box display="flex">{renderImages(images.jawa3, images.jawa4)}</Box>
      </Stack>
      <Dialog open={previewGallery !== null} fullWidth onClose={closePreviewGallery}>
        {previewGallery && (
          <Image
            src={previewGallery.src}
            height={previewGallery.height}
            width={previewGallery.width}
            blurDataURL={previewGallery.blurDataURL}
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
