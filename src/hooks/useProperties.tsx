import { useQuery } from '@tanstack/react-query'

import { propertyService } from '@/service/property.service'

export function useProperties() {
	const { data, isLoading } = useQuery({
		queryKey: ['properties-get'],
		queryFn: () => propertyService.getAll()
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
		queryFn: () => propertyService.getStages()
	})

	return { data, isLoading }
}
