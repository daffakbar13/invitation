import Stack, { StackProps } from '@mui/material/Stack'
import styled from '@mui/material/styles/styled'

const Main = styled((props: StackProps) => <Stack component="main" {...props} />)(({ theme }) => ({
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'hidden',
  '& > *': {
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
  },
  '& > :first-child': {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: theme.shadows[16],

    '& > section': {
      width: '100%',
      height: '100%',
    },
  },
}))

export default Main
