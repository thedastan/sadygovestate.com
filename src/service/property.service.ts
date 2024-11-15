import { PUBLIC_API } from '@/api/interceptors'

class PropertyService {
	private BASE_URL = 'property/property/'

	async getAll(search?: string) {
		const searchParam = !!search ? `?search=${search}` : ''
		const response = await PUBLIC_API.get<any[]>(
			`${this.BASE_URL + searchParam}`
		)

		return response.data
	}

	async getDetail(id: string) {
		const response = await PUBLIC_API.get<any>(`${this.BASE_URL + id}/`)

		return response.data
	}

	async getMainProducts() {
		const response = await PUBLIC_API.get<any[]>(`${this.BASE_URL}special/`)

		return response.data
	}
}

export const propertyService = new PropertyService()
