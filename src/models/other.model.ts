export interface IFilterValue {
	value: number
	text: string
}

export interface IReview {
	id: number
	full_name: string
	comment: string
	rating: number
	created_at: string
}

export interface IVideo {
	id: number
	link: string
}

export interface IFormSelect {
	id: number
	name: string
}

export interface IFormState {
	phone: string
	full_name: string
	message: string
	tipo: Partial<IFormSelect>
	country: Partial<IFormSelect>
}
