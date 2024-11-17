import { SimpleGrid } from '@chakra-ui/react'

import CatalogCard from '../ui/cards/catalog-card'

const CatalogGridComponent = () => {
	return (
		<SimpleGrid
			mt={{ md: '40px', base: '30px' }}
			spacing={{ xl: '6', lg: '24px 16px', base: '24px 8px' }}
			columns={{ '2xl': 4, lg: 3, sm: 2, base: 1 }}
		>
			{[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
				<CatalogCard key={el} />
			))}
		</SimpleGrid>
	)
}

export default CatalogGridComponent
