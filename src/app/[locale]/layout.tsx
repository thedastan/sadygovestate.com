import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { arial } from '@/constants/fonts/fonts'
import { SITE_NAME } from '@/constants/seo/seo.constants'

import Head from '../Head'
import { Providers } from '../providers'

import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: '...'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head />
			<body className={arial.className}>
				<ChakraProvider>
					<Providers>{children}</Providers>
				</ChakraProvider>

				{/* <YandexMetrika /> */}
			</body>
		</html>
	)
}
