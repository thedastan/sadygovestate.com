'use client'

import { NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'

interface ClientProviderProps extends PropsWithChildren {
	locale: string
	messages: any
}

export default function ClientProvider({
	locale,
	messages,
	children
}: ClientProviderProps) {
	return (
		<NextIntlClientProvider
			locale={locale}
			messages={messages}
			timeZone="Asia/Dubai" // ✅ Добавлено для установки временной зоны
		>
			{children}
		</NextIntlClientProvider>
	)
}
