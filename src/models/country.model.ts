export interface ICity {
	id: number
	cities: ICityList[]
}

export interface ICityList {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
}

export interface ICountry {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
	flag: string
	image: string
}

export interface IFilterListProps {
	id: number
	name_ru: string
	name_en?: string
	name_ar?: string
	flag?: string
}
