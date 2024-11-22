import useTypedLocale from './useLocale'
import { IFilterValue } from '@/models/other.model'
import { EnumIntl, IntlType } from '@/models/types/intl-types'

export function formatToDE(value: number) {
	return new Intl.NumberFormat('de-DE').format(value)
}

export function useCreatorPriceObject(values: number[]) {
	const locale: IntlType = useTypedLocale()

	const price_list: IFilterValue[] = values.map((value, idx) => {
		const deFormat = formatToDE(value)
		const keys: Record<EnumIntl, string> = {
			[EnumIntl.RUSSIAN]: `до $${deFormat}`,
			[EnumIntl.ENGLISH]: `Up to $${deFormat}`,
			[EnumIntl.ARABIC]: `ما يصل إلى ${deFormat} دولار`
		}
		return {
			value,
			text: keys[locale]
		}
	})

	return { price_list }
}
