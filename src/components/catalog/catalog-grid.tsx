import { SimpleGrid } from '@chakra-ui/react'

import CatalogCard from '../ui/cards/catalog-card'
import EmptyText from '../ui/texts/EmptyText'

import PropertySkeleton from './property-skeleton'
import { IProperty } from '@/models/property.model'

interface CatalogGridComponentProps {
	data?: IProperty[]
	isLoading: boolean
}

const CatalogGridComponent = ({
	data,
	isLoading
}: CatalogGridComponentProps) => {
	return (
		<>
			<SimpleGrid
				mt={{ md: '40px', base: '30px' }}
				spacing={{ xl: '6', lg: '24px 16px', base: '24px 8px' }}
				columns={{ '2xl': 4, lg: 3, sm: 2, base: 1 }}
			>
				{isLoading &&
					[1, 2, 3, 4].map(index => <PropertySkeleton key={index} />)}
				{!isLoading &&
					data?.map(el => (
						<CatalogCard
							key={el.id}
							el={el}
						/>
					))}
			</SimpleGrid>

			{!isLoading && !data?.length && <EmptyText />}
		</>
	)
}

export default CatalogGridComponent
