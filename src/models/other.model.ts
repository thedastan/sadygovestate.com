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
	full_name: string
	phone: string
	description: string
	country: Partial<IFormSelect>
	type: Partial<IFormSelect>
}
