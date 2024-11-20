export interface ICityList {
	id: number
	cities: ICity[]
}

export interface ICountry {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
	flag: string
	image: string
	cities: ICity[]
}

export interface ICity {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
	image: any
	total_properties: number
}

