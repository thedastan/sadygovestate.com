import { useQuery } from '@tanstack/react-query'

import { countryService } from '@/service/country.service'

export function useCountries() {
	const { data, isLoading } = useQuery({
		queryKey: ['countries-get'],
		queryFn: () => countryService.getCountries()
	})

	return { data, isLoading }
}

export function useOffices() {
	const { data, isLoading } = useQuery({
		queryKey: ['office'],
		queryFn: () => countryService.getOffice()
	})

	return { data, isLoading }
}

export function useCities(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['city', id],
		queryFn: () => countryService.getCity(id)
	})

	return { data, isLoading }
}
