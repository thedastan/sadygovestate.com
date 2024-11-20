import useTypedLocale from './useLocale'
import { IFilterValue } from '@/models/other.model'
import { EnumIntl, IntlType } from '@/models/types/intl-types'

export function useCreatorPriceObject(values: number[]) {
	const locale: IntlType = useTypedLocale()

	const price_list: IFilterValue[] = values.map((value, idx) => {
		const keys: Record<EnumIntl, string> = {
			[EnumIntl.RUSSIAN]: `до $${value}`,
			[EnumIntl.ENGLISH]: `Up to $${value}`,
			[EnumIntl.ARABIC]: `ما يصل إلى ${value} دولار`
		}
		return {
			value,
			text: keys[locale]
		}
	})

	return { price_list }
}
