import { SimpleGrid } from '@chakra-ui/react'

import CatalogCard from '../ui/cards/catalog-card'
import InvestmentCard from '../ui/cards/investment-card'
import EmptyText from '../ui/texts/EmptyText'

import PropertySkeleton from './property-skeleton'
import { IProperty } from '@/models/property.model'

interface CatalogGridComponentProps {
	data?: IProperty[]
	isLoading?: boolean
	isInvestment?: boolean
}

const CatalogGridComponent = ({
	data,
	isLoading,
	isInvestment
}: CatalogGridComponentProps) => {
	return (
		<>
			<SimpleGrid
				mt={{ md: '40px', base: '30px' }}
				spacing={{
					xl: !!isInvestment ? '40px 20px' : '6',
					lg: '24px 16px',
					base: '24px 8px'
				}}
				columns={
					!!isInvestment
						? { md: 2, base: 1 }
						: { '2xl': 3, lg: 3, sm: 2, base: 1 }
				}
			>
				{isLoading &&
					[1, 2, 3, 4].map(index => <PropertySkeleton key={index} />)}
				{!isLoading &&
					!!data &&
					data?.map(el =>
						!isInvestment ? (
							<CatalogCard
								el={el}
								key={el.id}
							/>
						) : (
							<InvestmentCard
								key={el.id}
								el={el}
							/>
						)
					)}
			</SimpleGrid>

			{!isLoading && !data?.length && <EmptyText />}
		</>
	)
}

export default CatalogGridComponent
