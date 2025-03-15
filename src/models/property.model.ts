import { IVideo } from './other.model'

export interface RootProperty {
	count: number
	next: string | null
	previous: string | null
	results: IProperty[]
}

export interface IProperty {
	id: number
	name_ru: string
	name_en: string
	name_ar: string
	city_ru: string
	city_en: string
	city_ar: string
	price_usd: number | null
	price_aed: number | null
	slug_en: string
	bed_room: any
	bath: number
	sqft: number
	sqmt: number
	main_image: string
	main_image_s3: string | null
	main_page: boolean
	country_flag: string
	tipo: string
	profitability: string | null
	investment: boolean
	country_id: number
	mortgage: boolean
	installment: boolean
	pdf: string | null
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
	price_usd: number | null
	price_aed: number | null
	bed_room: number | null
	bath: number | null
	living_room: boolean
	sqft: number
	sqmt: number
	prop_image: PropImage[]
	s3prop_image: ImageGroupS3[]
	main_image?: string
	main_image_s3: string | null
	capacity: any
	district_ru: string | null
	district_en: string | null
	district_ar: string | null
	address_ru: string | null
	address_en: string | null
	address_ar: string | null
	year: string | null
	investment: boolean
	profitability: any
	advantage_ru: IAdvantage[]
	advantage_en: IAdvantage[]
	advantage_ar: IAdvantage[]
	country_flag: string
	studio: boolean
	prop_video: IVideo[]
	pdf: string | null
}

export interface PropImage {
	id: number
	image: string
}

export interface ImageGroupS3 {
	id: number
	link: string
}

export interface IAdvantage {
	id: number
	title: string
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

export interface IBlogType {
	id: number
	title_ru: string
	title_en: string
	title_ar: string
	image: string
	created_at: string
	slug_en: string
}

export interface IBlogSlugType {
	id: number | string
	title_ru: string
	title_en: string
	title_ar: string
	image: string
	description_ru: string
	description_en: string
	description_ar: string
	created_at: string
}
