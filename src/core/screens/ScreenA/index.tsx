import { NextPage } from 'next'

import Screen from '@/lib/components/Screen'

import Content from './components/Content'

const ScreenA: NextPage = () => (
  <Screen gap={2}>
    <Content />
  </Screen>
)
export default ScreenA
