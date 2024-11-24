'use client'

import { Box } from '@chakra-ui/react'
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
	dehydrate
} from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

import Footer from '@/components/navbar/footer'
import Header from '@/components/navbar/header'
import WhatsappButton from '@/components/ui/buttons/WhatsappButton'

import { store } from '@/store/store'

import useTypedLocale from '@/hooks/useLocale'

import { EnumIntl } from '@/models/types/intl-types'

export function Providers({ children }: PropsWithChildren) {
	const locale = useTypedLocale()
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	const dehydratedState = dehydrate(client)

	return (
		<QueryClientProvider client={client}>
			<HydrationBoundary state={dehydratedState}>
				<Provider store={store}>
					<Header />
					<Box
						mx='auto'
						minH={'100vh'}
						pb={{ md: '100px', base: '60px' }}
						textAlign={locale === EnumIntl.ARABIC ? 'end' : 'start'}
					>
						{children}
					</Box>
					<Footer />
					<WhatsappButton />
					<Toaster
						theme='light'
						position='top-center'
						duration={4000}
						toastOptions={{
							style: {
								background: '#FFFFFF',
								border: 'none',
								borderRadius: '12px',
								color: '#00000080',
								fontSize: '14px',
								fontWeight: '500',
								backgroundBlendMode: 'luminosity',
								minHeight: '60px'
							}
						}}
					/>
				</Provider>
			</HydrationBoundary>
		</QueryClientProvider>
	)
}
