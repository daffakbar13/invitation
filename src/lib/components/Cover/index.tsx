import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

import images from '@/assets/images'

const Cover = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundImage: `url('${images.cover.src}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  zIndex: -1,
  pointerEvents: 'none',
}))

export default Cover
