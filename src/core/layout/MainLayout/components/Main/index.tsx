'use client'

import Box, { BoxProps } from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

const Main = styled((props: BoxProps) => <Box component="main" {...props} />)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  height: '100%',
  minHeight: '100vh',
  margin: 'auto',
  boxShadow: theme.shadows[16],
}))

export default Main
