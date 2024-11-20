import { PUBLIC_API } from '@/api/interceptors'

import { ICityList, ICountry } from '@/models/country.model'
import { IOffice } from '@/models/office.model'

class CountryService {
	private BASE_URL = 'property/'

	async getCountries() {
		const response = await PUBLIC_API.get<ICountry[]>(
			`${this.BASE_URL + 'country/'}`
		)

		return response.data
	}

	async getOffice() {
		const response = await PUBLIC_API.get<IOffice[]>(`${this.BASE_URL}office/`)

		return response.data
	}

	async getCity(id: number) {
		const response = await PUBLIC_API.get<ICityList[]>(
			`${this.BASE_URL}city/${id}/`
		)

		return response.data
	}
}

export const countryService = new CountryService()
