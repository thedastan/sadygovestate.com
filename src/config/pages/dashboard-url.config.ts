import { IntlType } from '@/models/types/intl-types'

class DASHBOARD {
	HOME = (locale: IntlType) => {
		return `/${locale}`
	}
	CATALOG = (locale: IntlType) => {
		return `/${locale}/catalog`
	}
	CATALOG_INVESTMENT = (locale: IntlType) => {
		return `/${locale}/catalog/investment`
	}
	DETAIL = (locale: IntlType, slug: string) => {
		return `/${locale}/property/${slug}`
	}
}

export const DASHBOARD_PAGES = new DASHBOARD()

export const DETAIL_PATH_KEY_WORD = '/property'
