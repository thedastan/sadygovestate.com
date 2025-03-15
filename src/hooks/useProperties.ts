import { useQuery } from '@tanstack/react-query'

import { IFilterStateValue } from '@/store/slices/storage-slice'

import { RootProperty } from '@/models/property.model'
import { propertyService } from '@/service/property.service'

export function useProperties(
	params?: IFilterStateValue,
	isInvestment?: boolean
) {
	const { data, isLoading } = useQuery({
		queryKey: ['properties-get', params],
		queryFn: () => propertyService.getAll(!!isInvestment, params)
	})
	const count_pages = getCountPages(data)
	const data_main_page = data?.results?.filter(item => item.main_page)
	return { data: data?.results, isLoading, data_main_page, count_pages }
}

export function usePropertyDetail(slug: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['property-detail', slug],
		queryFn: () => propertyService.getDetail(slug)
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

export function useRecommendProperties() {
	const { data, isLoading } = useQuery({
		queryKey: ['recommended-get'],
		queryFn: () => propertyService.getRecommended()
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

export function useBlog() {
	const { data, isLoading } = useQuery({
		queryKey: ['blog'],
		queryFn: () => propertyService.getBlog()
	})

	return { data, isLoading }
}

// export function useBlogSlug(slug_en: string) {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ['blog-detail', slug_en],
// 		queryFn: () => propertyService.getDetailSlug(slug_en)
// 	})

// 	return { data, isLoading }
// }

// export function useBlogSlug(slug_en: string) {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ['blog-detail', slug_en],
// 		queryFn: () => propertyService.getDetailSlug(slug_en)
// 	})

// 	console.log(data, 'nnnnnnnnnnn')

// 	return { data, isLoading }
// }

function getCountPages(data: RootProperty | undefined): number[] {
	const result: number[] = []
	const count = data?.count ? Math.ceil(data.count / 8) : 1
	for (let i = 1; i <= count; i++) {
		result.push(i)
	}
	return result
}
