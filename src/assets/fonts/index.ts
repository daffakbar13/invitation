import { Allura, Caveat, Philosopher } from 'next/font/google'

const allura = Allura({ weight: '400', subsets: ['latin'] })
const philosopher = Philosopher({ weight: '400', subsets: ['latin'] })
const caveat = Caveat({ weight: '400', subsets: ['latin'] })

const fonts = { allura, philosopher, caveat }

export default fonts
