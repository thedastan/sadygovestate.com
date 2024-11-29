import { useQuery } from '@tanstack/react-query'

import { personsService } from '@/service/other.service'

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

export function useVideo() {
	const { data, isLoading } = useQuery({
		queryKey: ['videos'],
		queryFn: () => personsService.getVideo()
	})

	const link = data ? data[0].link : undefined

	return { link, isLoading }
}
