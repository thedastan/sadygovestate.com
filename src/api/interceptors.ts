import axios, { CreateAxiosDefaults } from 'axios'

export const API_ADDRESS = process.env.NEXT_PUBLIC_BASE_API

const options: CreateAxiosDefaults = {
	baseURL: API_ADDRESS,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: false
}

const PUBLIC_API = axios.create(options)

export { PUBLIC_API }
