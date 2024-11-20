export interface IProperty {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
	city_ru: string
	city_en: string
	city_ar: string
	price: number
	bed_room: any
	bath: number
	sqft: number
	sqmt: number
	main_image: string
	main_page: boolean
}

export interface IPropertyDetail {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
	tipo: string
	description_ru: string
	description_en: string
	description_ar: string
	price: number
	bed_room: any
	bath: number
	living_room: boolean
	sqft: number
	sqmt: number
	prop_image: PropImage[]
	main_image?: string
	district_ru: any
	district_en: any
	district_ar: any
	address_ru: any
	address_en: any
	address_ar: any
	year: any
	investment: boolean
	profitability: any
	advantage_ru: any[]
	advantage_en: any[]
	advantage_ar: any[]
}

export interface PropImage {
	id: number
	image: string
}

export interface IPropertyStage {
	id: number
	name_ru: string
	name_ar: string
	name_en: string
}

export interface IPropertyType {
	id: number
	name_ru: string
	name_ar: string
	name_en: string
}
