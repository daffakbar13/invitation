import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Navbar: React.FC = () => {
  const { Screens, activeScreen, setActiveScreen } = useGlobalStore()

  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      gap={2}
      padding={(e) => e.spacing(1, 2)}
    >
      {Screens.map((e, i) => (
        <Stack
          key={i}
          justifyContent="center"
          alignItems="center"
          gap={0.5}
          height={60}
          width={60}
          borderRadius={1}
          sx={{
            background: activeScreen === i ? (e) => e.palette.primary.main : 'none',
            cursor: 'pointer',
          }}
          onClick={() => setActiveScreen(i)}
        >
          <e.Icon />
          <Typography fontSize={12}>{e.title}</Typography>
        </Stack>
      ))}
    </Box>
  )
}

export default Navbar
