export enum EnumIntl {
	ARABIC = 'sa',
	ENGLISH = 'en',
	RUSSIAN = 'ru'
}

// types
export type IntlType = EnumIntl.ENGLISH | EnumIntl.RUSSIAN | EnumIntl.ARABIC

export interface ILocale {
	name: string
	locale: IntlType
	short_name: string
}
