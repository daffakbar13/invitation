'use client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React from 'react'

export default function Home() {
  const [showAlert, setShowAlert] = React.useState(true)

  React.useEffect(() => {
    const handlerEvent = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    }
    document.onclick = handlerEvent
    document.ontouchstart = handlerEvent
    const timeout = setTimeout(() => {
      setShowAlert(false)
    }, 1000 * 3)

    return () => clearTimeout(timeout)
  })
  return (
    <div>
      <video
        width="100%"
        loop
        muted
        autoPlay
        onClick={(e) => {
          e.preventDefault()
          document.documentElement.requestFullscreen()
          e.currentTarget.muted = false
        }}
      >
        <source src="/assets/videos/dummy_3d.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1,
          padding: '20vh 0',
          pointerEvents: 'none',
          opacity: showAlert ? 1 : 0,
          transition: 'all ease .9s',
        }}
      >
        <div
          style={{
            backgroundColor: 'red',
            height: 'max-content',
          }}
        >
          Scroll to see invitation details
        </div>
      </div>
    </div>
  )
}
