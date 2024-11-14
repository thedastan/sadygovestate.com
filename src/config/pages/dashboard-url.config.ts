import { IntlType } from '@/types/intl.types'

class DASHBOARD {
	HOME = (locale: IntlType) => {
		return `/${locale}`
	}
	CATALOG = (locale: IntlType) => {
		return `/${locale}/catalog`
	}
	DETAIL = (locale: IntlType) => {
		return `/${locale}/detail`
	}
}
export const DASHBOARD_PAGES = new DASHBOARD()
