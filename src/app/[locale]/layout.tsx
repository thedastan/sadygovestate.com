import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { arial } from '@/constants/fonts/fonts'
import { SITE_NAME } from '@/constants/seo/seo.constants'

import ClientProvider from '../(providers)/ClientProvider'
import { Providers } from '../(providers)/providers'
import Head from '../Head'

import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: '...'
}

interface RootLayoutProps {
	children: React.ReactNode
	params: {
		locale: string
	}
}
export default async function RootLayout({
	children,
	params
}: Readonly<RootLayoutProps>) {
	const messages = JSON.parse(
		JSON.stringify(
			(await import(`../../../messages/${params.locale}.json`)).default
		)
	)

	return (
		<html lang={params.locale}>
			<Head />
			<body className={arial.className}>
				<ClientProvider
					locale={params.locale}
					messages={messages}
				>
					<ChakraProvider>
						<Providers>{children}</Providers>
					</ChakraProvider>
				</ClientProvider>
				{/* <YandexMetrika /> */}
			</body>
		</html>
	)
}
