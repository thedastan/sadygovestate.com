import { IFilterStateValue } from '@/store/slices/storage-slice'

import { PUBLIC_API } from '@/api/interceptors'

import {
	IProperty,
	IPropertyDetail,
	IPropertyStage,
	IPropertyType,
	RootProperty
} from '@/models/property.model'

class PropertyService {
	private BASE_URL = 'property/'

	async getAll(isInvestment: boolean, params?: IFilterStateValue) {
		try {
			const country = params?.country?.id ? `country=${params.country.id}` : ''
			const type = params?.type?.id ? `tipo=${params.type.id}` : ''
			const stage = params?.stage?.id ? `stage=${params.stage.id}` : ''
			const page = params?.page ? `page=${params.page}` : ''
			const max_price = params?.price?.value
				? `max_price=${params.price.value}`
				: ''

			const arr = [country, type, stage, max_price, page].filter(el => !!el)
			const filter_path = arr.length ? '?' + arr.join('&') : ''

			const result_path = isInvestment
				? 'investment/' + filter_path
				: filter_path
			const response = await PUBLIC_API.get<RootProperty>(
				this.BASE_URL + result_path
			)

			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getInvestment() {
		try {
			const response = await PUBLIC_API.get<IProperty[]>(
				this.BASE_URL + 'investment/'
			)

			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getRecommended() {
		try {
			const response = await PUBLIC_API.get<IProperty[]>(
				this.BASE_URL + 'recommend/'
			)

			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getDetail(slug: string) {
		try {
			const response = await PUBLIC_API.get<IPropertyDetail>(
				this.BASE_URL + `detail/${slug}`
			)

			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getStages() {
		try {
			const response = await PUBLIC_API.get<IPropertyStage[]>(
				`${this.BASE_URL}stage/`
			)

			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getTypes() {
		try {
			const response = await PUBLIC_API.get<IPropertyType[]>(
				`${this.BASE_URL}type/`
			)

			return response.data
		} catch (e) {
			console.error(e)
		}
	}
}

export const propertyService = new PropertyService()
