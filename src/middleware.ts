import createMiddleware from 'next-intl/middleware'

import { LOCALES } from './i18n'
import { EnumIntl } from './types/intl.types'

const locales = LOCALES

export default createMiddleware({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale: EnumIntl.RUSSIAN
})

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(en|ru|ar)/:path*']
}
