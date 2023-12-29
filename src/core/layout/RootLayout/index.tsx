import dynamic from 'next/dynamic'
import React from 'react'

import RootLayoutProps from './types'

const MuiProvider = dynamic(() => import('@/core/providers/MuiProvider'))
const MainLayout = dynamic(() => import('../MainLayout'))

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang={'id'}>
      <body>
        <MuiProvider>
          <MainLayout>{children}</MainLayout>
        </MuiProvider>
      </body>
    </html>
  )
}

export default RootLayout
