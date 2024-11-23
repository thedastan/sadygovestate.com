import { DM_Sans, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
	subsets: ['latin', 'cyrillic', 'latin-ext', 'greek', 'vietnamese'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const dm_sans = DM_Sans({
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const arial = localFont({ src: './arial/Arial.woff' })
