import { Newsreader } from 'next/font/google'
import localFont from 'next/font/local'

const newsReader = Newsreader({ weight: '400', subsets: ['latin'] })
const edensor = localFont({ src: './edensor.woff2' })
const bodebeck = localFont({ src: './bodebeck.woff2' })
const analogue = localFont({ src: './analogue.woff2' })
const strawberryCupcakes = localFont({ src: './strawberry-cupcakes.woff2' })

const fonts = {
  edensor,
  bodebeck,
  analogue,
  newsReader,
  strawberryCupcakes,
}

export default fonts
