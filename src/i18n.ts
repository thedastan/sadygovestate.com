import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { EnumIntl, ILocale, IntlType } from './types/intl.types'

// Can be imported from a shared config

export const locales_data: ILocale[] = [
	{
		name: 'english',
		locale: EnumIntl.ENGLISH,
		short_name: 'ENG'
	},
	{
		name: 'arabic',
		locale: EnumIntl.ARABIC,
		short_name: 'AR'
	},
	{
		name: 'русский',
		locale: EnumIntl.RUSSIAN,
		short_name: 'RU'
	}
]

export const LOCALES = locales_data.map(el => el.locale)

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!LOCALES.includes(locale as IntlType)) notFound()

	return {
		messages: (await import(`../messages/${locale}.json`)).default
	}
})
