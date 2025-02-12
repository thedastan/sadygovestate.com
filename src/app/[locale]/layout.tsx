import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { arial, inter } from '@/constants/fonts/fonts'
import YandexMetrika from '@/constants/seo/YandexMetrika'
import { SITE_NAME, SEO_DESCRIPTION, SEO_KEY_WORDS } from '@/constants/seo/seo.constants'

import ClientProvider from '../(providers)/ClientProvider'
import { Providers } from '../(providers)/providers'
import Head from '../Head'

import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: `${SEO_DESCRIPTION}`,
  keywords: `${SEO_KEY_WORDS}`
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
  let messages

  try {
    messages = await import(`../../../messages/${params.locale}.json`)
  } catch (e) {
    // Локализация не найдена, подставляем дефолтную
    console.error(`Localization file for ${params.locale} not found. Falling back to English.`);
    messages = await import('../../../messages/en.json')
  }

  return (
    <html lang={params.locale}>
      <Head />
      <body className={inter.className}>
        <ClientProvider locale={params.locale} messages={messages.default}>
          <ChakraProvider>
            <Providers>{children}</Providers>
          </ChakraProvider>
        </ClientProvider>
        <YandexMetrika />
      </body>
    </html>
  )
}
