import Stack, { StackProps } from '@mui/material/Stack'
import styled from '@mui/material/styles/styled'

const Screen = styled((props: StackProps) => <Stack component="section" {...props} />)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}))

export default Screen
