'use client'

import { Box } from '@chakra-ui/react'
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
	dehydrate
} from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { Toaster } from 'sonner'

import Header from '@/components/navbar/header'

export function Providers({ children }: PropsWithChildren) {
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
				<Header />
				<Box
					mx='auto'
					minH={'100vh'}
				>
					{children}
				</Box>
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
			</HydrationBoundary>
		</QueryClientProvider>
	)
}
