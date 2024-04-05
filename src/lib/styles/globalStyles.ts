import { SxProps } from '@mui/material/styles'

const globalStyles: SxProps = {
  '& *': { boxSizing: 'border-box' },
  '& html, body': {
    margin: 0,
    padding: 0,
    scrollBehavior: 'smooth',
    color: '#4A5A74',
  },
  '::-webkit-scrollbar': {
    width: 0,
    height: 0,
  },
}

export default globalStyles
