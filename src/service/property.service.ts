import { PUBLIC_API } from '@/api/interceptors'

import {
	IProperty,
	IPropertyDetail,
	IPropertyStage,
	IPropertyType
} from '@/models/property.model'

class PropertyService {
	private BASE_URL = 'property/property/'

	async getAll(search?: string) {
		const searchParam = !!search ? `?search=${search}` : ''
		const response = await PUBLIC_API.get<IProperty[]>(
			`${this.BASE_URL + searchParam}`
		)

		return response.data
	}

	async getDetail(id: string | number) {
		const response = await PUBLIC_API.get<IPropertyDetail>(
			`${this.BASE_URL + id}/`
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
