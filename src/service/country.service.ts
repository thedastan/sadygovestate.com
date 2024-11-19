import { PUBLIC_API } from '@/api/interceptors'

import { ICity, ICountry } from '@/models/country.model'

class CountryService {
	private BASE_URL = 'property/'

	async getCountries() {
		const response = await PUBLIC_API.get<ICountry[]>(
			`${this.BASE_URL + 'country/'}`
		)

		return response.data
	}

	async getCity(id: number) {
		const response = await PUBLIC_API.get<ICity[]>(
			`${this.BASE_URL}city/${id}/`
		)

		return response.data
	}
}

export const countryService = new CountryService()
