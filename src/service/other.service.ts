import { PUBLIC_API } from '@/api/interceptors';



import { IEmployee } from '@/models/employee.model';
import { IReview, IVideo } from '@/models/other.model';


class PersonsService {
	private BASE_URL = 'property/'

	async getEmployees() {
		const response = await PUBLIC_API.get<IEmployee[]>(
			this.BASE_URL + `employee/`
		)

		return response.data
	}

	async getReviews() {
		const response = await PUBLIC_API.get<IReview[]>(this.BASE_URL + `review/`)

		return response.data
	}

	async getVideo() {
		const response = await PUBLIC_API.get<IVideo[]>(this.BASE_URL + `video/`)

		return response.data
	}
}

export const personsService = new PersonsService()