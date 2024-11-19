import { useQuery } from '@tanstack/react-query'

import { countryService } from '@/service/country.service'

export function useCountries() {
	const { data, isLoading } = useQuery({
		queryKey: ['countries-get'],
		queryFn: () => countryService.getCountries()
	})

	return { data, isLoading }
}

export function useCitys(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['city', id],
		queryFn: () => countryService.getCity(id)
	})

	return { data, isLoading }
}
