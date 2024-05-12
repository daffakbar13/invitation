import { Newsreader } from 'next/font/google'
import localFont from 'next/font/local'

const newsReader = Newsreader({ subsets: ['latin'] })
const edensor = localFont({ src: './edensor.woff2' })
const bodebeck = localFont({ src: './bodebeck.woff2' })
const analogue = localFont({ src: './analogue.woff2' })
const jura = localFont({ src: './jura.woff2' })
const strawberryCupcakes = localFont({ src: './strawberry-cupcakes.woff2' })
const arimaMadurai = localFont({ src: './arima-madurai.woff2' })
const laluxe = localFont({ src: './laluxe.woff2' })

const fonts = {
  edensor,
  bodebeck,
  analogue,
  newsReader,
  jura,
  strawberryCupcakes,
  arimaMadurai,
  laluxe,
}

export default fonts
