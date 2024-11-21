import { useQuery } from '@tanstack/react-query'

import { IFilterStateValue } from '@/store/slices/storage-slice'

import { propertyService } from '@/service/property.service'

export function useProperties(params?: IFilterStateValue) {
	const { data, isLoading } = useQuery({
		queryKey: ['properties-get', params],
		queryFn: () => propertyService.getAll(params)
	})

	return { data, isLoading }
}

export function useInvestmentProperties() {
	const { data, isLoading } = useQuery({
		queryKey: ['investment-get'],
		queryFn: () => propertyService.getInvestment()
	})

	return { data, isLoading }
}

export function usePropertyDetail(id: number | string) {
	const { data, isLoading } = useQuery({
		queryKey: ['property-detail', id],
		queryFn: () => propertyService.getDetail(id)
	})

	return { data, isLoading }
}

export function useStages() {
	const { data, isLoading } = useQuery({
		queryKey: ['stages'],
		queryFn: () => propertyService.getStages()
	})

	return { data, isLoading }
}

export function useTypes() {
	const { data, isLoading } = useQuery({
		queryKey: ['types'],
		queryFn: () => propertyService.getTypes()
	})

	return { data, isLoading }
}
