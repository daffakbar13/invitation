import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

import fonts from '@/assets/fonts'
import images from '@/assets/images'
import Section from '@/lib/components/Section'
import GuestsService from '@/lib/services/guests/guests.service'
import WishesService from '@/lib/services/wishes/wishes.service'

dayjs.extend(relativeTime)

const ScreenG: NextPage = () => {
  const { id } = useParams()
  const detail = GuestsService.GetGuestDetail.useQuery(id as string)
  const wishes = WishesService.GetWishes.useQuery()
  const createWish = WishesService.CreateWish.useMutation()
  const [copyIndex, setCopyIndex] = React.useState(-1)

  React.useEffect(() => {
    if (copyIndex >= 0) {
      setTimeout(() => {
        setCopyIndex(-1)
      }, 3000)
    }
  }, [copyIndex])

  return (
    <Section
      gap={3}
      paddingX={3}
      paddingY={9}
      sx={{
        backgroundImage: `url(${images.bg2.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        '> *': { width: '100%' },
      }}
    >
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Stack
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={3}
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
            fontSize={32}
            sx={{ textShadow: '1px 1px 1px white' }}
          >
            Wedding Gift
          </Typography>
          <Typography className={fonts.bodebeck.className} fontWeight="bold" maxWidth="80%">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah
            ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </Typography>
          <Stack gap={2} alignItems="center">
            {[
              {
                name: 'M Daffa Raihan Akbar',
                cardNumber: '157 053 1219',
                logo: images.bca,
                isBank: true,
                isGift: false,
              },
              {
                name: 'Alvina Damayanti',
                cardNumber: '0822 6243 4804',
                logo: images.dana,
                isBank: false,
                isGift: false,
              },
              {
                name: 'Alvina Damayanti',
                address: 'Dusun Baregbeg RT/RW 018/005, Kec. Lakbok, Kab. Ciamis',
                cardNumber: '',
                phoneNumber: '0822 6243 4804',
                logo: images.dana,
                isBank: false,
                isGift: true,
              },
            ].map((e, i) => (
              <Stack
                key={i}
                height={172}
                width="85%"
                justifyContent="center"
                alignItems={e.isGift ? 'center' : 'start'}
                border="1px solid white"
                borderRadius={2}
                padding={2}
                sx={{
                  backgroundImage: `url(${images.bgBank.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center right',
                  backgroundSize: 'cover',
                  boxShadow: (theme) => theme.shadows[4],
                }}
              >
                {!e.isGift && (
                  <>
                    <Box alignSelf="end">
                      <Image {...e.logo} alt="bank" style={{ height: 22, width: 'auto' }} />
                    </Box>
                    <Box height={30}>
                      {e.isBank && (
                        <Image
                          {...images.chipAtm}
                          alt="chip"
                          style={{ height: 30, width: 'auto' }}
                        />
                      )}
                    </Box>
                    <Typography className={fonts.jura.className} fontSize={15} fontWeight="bold">
                      {e.cardNumber}
                    </Typography>
                    <Typography className={fonts.jura.className} fontSize={15} fontWeight="bold">
                      {e.name}
                    </Typography>
                    <Box alignSelf="end" marginTop={1}>
                      <Button
                        size="small"
                        onClick={() => {
                          navigator.clipboard?.writeText(e.cardNumber.replaceAll(' ', ''))
                          setCopyIndex(i)
                        }}
                      >
                        <Box display="flex" gap={0.5} alignItems="center">
                          {copyIndex === i ? (
                            <LibraryAddCheckRoundedIcon sx={{ fontSize: 12 }} />
                          ) : (
                            <ContentCopyRoundedIcon sx={{ fontSize: 12 }} />
                          )}
                          <Typography fontSize={10}>Salin</Typography>
                        </Box>
                      </Button>
                    </Box>
                  </>
                )}
                {e.isGift && (
                  <>
                    <CardGiftcardRoundedIcon sx={{ fontSize: 24 }} />
                    <Typography fontSize={15} fontWeight="bold" marginBottom={1}>
                      Kirim Hadiah
                    </Typography>
                    <Typography
                      className={fonts.jura.className}
                      color="black"
                      fontSize={12}
                      fontWeight="bold"
                    >
                      Nama Penerima : {e.name}
                    </Typography>
                    <Typography
                      className={fonts.jura.className}
                      color="black"
                      fontSize={12}
                      fontWeight="bold"
                    >
                      No. HP : {e.name}
                    </Typography>
                    <Typography
                      className={fonts.jura.className}
                      color="black"
                      fontSize={12}
                      fontWeight="bold"
                    >
                      {e.address}
                    </Typography>
                  </>
                )}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Stack
          component="form"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={2}
          borderRadius={4}
          paddingY={5}
          paddingX={3}
          sx={{
            backgroundImage: `linear-gradient(180deg, #FFFFFF94 0%, #ffffffb5 100%), url(${images.bg3.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
          onSubmit={(e) => {
            e.preventDefault()
            const target = e.target as any
            const [name, description, , status] = target

            if (detail.isSuccess && [name, description, status].every((f) => f.value)) {
              createWish.mutate(
                [
                  {
                    guest_id: detail.data.id,
                    group_id: detail.data.groupId,
                    name: name.value,
                    description: description.value,
                    status: Number(status.value),
                  },
                ],
                { onSuccess: () => wishes.refetch() },
              )
            }
          }}
        >
          <Typography
            className={fonts.analogue.className}
            color="#D5AF6F"
            fontSize={32}
            sx={{ textShadow: '1px 1px 1px white' }}
          >
            Wishes
          </Typography>
          <Typography className={fonts.bodebeck.className} fontWeight="bold" maxWidth="80%">
            Berikan ucapan harapan dan do’a kepada kedua mempelai
          </Typography>
          <TextField name="name" variant="filled" placeholder="Nama" fullWidth />
          <TextField name="description" variant="filled" placeholder="Ucapan" fullWidth multiline />
          <Select
            name="status"
            defaultValue={1}
            fullWidth
            placeholder="Konfirmasi Kehadiran"
            size="small"
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ textAlign: 'left' }}
            displayEmpty
          >
            <MenuItem value={1}>Hadir</MenuItem>
            <MenuItem value={2}>Tidak Hadir</MenuItem>
            <MenuItem value={3}>Masih Bingung</MenuItem>
          </Select>
          <Button fullWidth type="submit">
            Kirim
          </Button>
          <Stack gap={1} width="100%" borderRadius={2} maxHeight={300} overflow="scroll">
            {wishes.isSuccess &&
              wishes.data.map((wish, i) => (
                <Stack
                  key={i}
                  borderRadius={2}
                  padding={2}
                  textAlign="left"
                  sx={{ backgroundColor: 'white' }}
                >
                  <Typography
                    className={fonts.arimaMadurai.className}
                    fontSize={12}
                    fontWeight="bold"
                    marginBottom={1}
                  >
                    {wish.name} &nbsp;
                    {wish.status === 1 && (
                      <CheckCircleOutlineRoundedIcon fontSize="inherit" color="success" />
                    )}
                    {wish.status === 2 && (
                      <HighlightOffRoundedIcon fontSize="inherit" color="error" />
                    )}
                  </Typography>
                  <Typography className={fonts.arimaMadurai.className} fontSize={12}>
                    {wish.description}
                  </Typography>
                  <Typography
                    className={fonts.arimaMadurai.className}
                    fontSize={10}
                    textAlign="right"
                  >
                    {dayjs(wish.createdAt).fromNow()}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>
      </motion.div>
    </Section>
  )
}

export default ScreenG
