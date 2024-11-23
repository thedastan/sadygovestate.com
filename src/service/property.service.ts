import { IFilterStateValue } from '@/store/slices/storage-slice'

import { PUBLIC_API } from '@/api/interceptors'

import {
	IProperty,
	IPropertyDetail,
	IPropertyStage,
	IPropertyType
} from '@/models/property.model'

class PropertyService {
	private BASE_URL = 'property/'

	async getAll(isInvestment: boolean, params?: IFilterStateValue) {
		const country = params?.country?.id ? `country=${params.country.id}` : ''
		const type = params?.type?.id ? `tipo=${params.type.id}` : ''
		const stage = params?.stage?.id ? `stage=${params.stage.id}` : ''
		const max_price = params?.price?.value
			? `max_price=${params.price.value}`
			: ''

		const arr = [country, type, stage, max_price].filter(el => !!el)
		const filter_path = arr.length ? '?' + arr.join('&') : ''

		const result_path = isInvestment ? 'investment/' + filter_path : filter_path
		const response = await PUBLIC_API.get<IProperty[]>(
			this.BASE_URL + result_path
		)

		return response.data
	}

	async getInvestment() {
		const response = await PUBLIC_API.get<IProperty[]>(
			this.BASE_URL + 'investment/'
		)

		return response.data
	}

	async getRecommended() {
		const response = await PUBLIC_API.get<IProperty[]>(
			this.BASE_URL + 'recommend/'
		)

		return response.data
	}

	async getDetail(slug: string) {
		const response = await PUBLIC_API.get<IPropertyDetail>(
			this.BASE_URL + `detail/${slug}/`
		)

		return response.data
	}

	async getStages() {
		const response = await PUBLIC_API.get<IPropertyStage[]>(
			`${this.BASE_URL}stage/`
		)

		return response.data
	}

	async getTypes() {
		const response = await PUBLIC_API.get<IPropertyType[]>(
			`${this.BASE_URL}type/`
		)

		return response.data
	}
}

export const propertyService = new PropertyService()
