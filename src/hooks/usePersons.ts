import { useQuery } from '@tanstack/react-query'

import { personsService } from '@/service/persons.service'

export function useEmployees() {
	const { data, isLoading } = useQuery({
		queryKey: ['employees'],
		queryFn: () => personsService.getEmployees()
	})

	return { data, isLoading }
}

export function useReviews() {
	const { data, isLoading } = useQuery({
		queryKey: ['reviews'],
		queryFn: () => personsService.getReviews()
	})

	return { data, isLoading }
}
