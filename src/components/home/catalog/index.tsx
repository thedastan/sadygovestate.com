'use client'

import { Container, Flex, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

import CatalogCard from '@/components/ui/cards/catalog-card'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'

const CatalogHome = () => {
	const locale = useTypedLocale()
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '170px', base: '60px' }}
		>
			<Flex
				gap='14px'
				alignItems='center'
			>
				<TitleComponent query='объектов'>Каталог объектов</TitleComponent>
				<Link href={DASHBOARD_PAGES.CATALOG(locale)}>
					<Flex
						alignItems='center'
						justifyContent='center'
						w='44px'
						h='44px'
						rounded='50%'
						border='1px solid #DFDFDF'
						color='#000000'
					>
						<GoArrowUpRight fontSize='34px' />
					</Flex>
				</Link>
			</Flex>

			<SimpleGrid
				mt='40px'
				spacing='6'
				columns={{ lg: 4, md: 3, base: 2 }}
			>
				{[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
					<CatalogCard key={el} />
				))}
			</SimpleGrid>
		</Container>
	)
}

export default CatalogHome
