'use client'

import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'

import CatalogCard from '../ui/cards/catalog-card'
import TitlePages from '../ui/texts/TitlePages'

const filter_list = [
	'Квартиры',
	'Виллы',
	'Офисные помещения',
	'Гостиницы и отели',
	'Новостройки'
]
const Catalog = () => {
	const [filterActive, setFilterActive] = useState(filter_list[0])

	const { clientWidth } = useFullWindowSize()
	return (
		<Box>
			<TitlePages
				px='4'
				textAlign='center'
			>
				Каталог объектов
			</TitlePages>
			<Flex
				mt='50px'
				overflowX='auto'
				className='unscroll'
				justifyContent={{ xl: 'center', base: 'start' }}
			>
				<Flex
					gap='17px'
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					<TypeBuildingButtons />
					{filter_list.map((el, idx) => (
						<Button
							key={idx}
							onClick={() => setFilterActive(el)}
							variant='none'
							rounded='100px'
							h='46px'
							px='22px'
							lineHeight='18.4px'
							fontWeight='700'
							bg={filterActive === el ? '#333139' : '#F2F2F2'}
							color={filterActive === el ? '#FFFFFF' : '#333139'}
							fontSize={filterActive === el ? '16px' : '14px'}
						>
							{el}
						</Button>
					))}
				</Flex>
			</Flex>
			<Container maxW={CONTAINER_WIDTH}>
				<SimpleGrid
					mt='50px'
					spacing='6'
					columns={{ lg: 4, md: 3, base: 2 }}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
						<CatalogCard key={el} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}

interface TypeBuildingButtonsProps {}
function TypeBuildingButtons(props: TypeBuildingButtonsProps) {
	const [typeBuilding, setTypeBuilding] = useState<0 | 1>(0)

	return (
		<Flex
			bg='#F2F2F2'
			rounded='100px'
			px='10px'
			py='2'
			gap='1'
			h='46px'
		>
			<Button
				onClick={() => setTypeBuilding(0)}
				variant='none'
				rounded='200px'
				h='30px'
				px='3'
				lineHeight='13.8px'
				fontSize='12px'
				fontWeight='400'
				bg={!typeBuilding ? '#FFFFFF' : 'transparent'}
				color='#000000'
				opacity={!typeBuilding ? '1' : '.7'}
			>
				Готовые объекты
			</Button>
			<Button
				onClick={() => setTypeBuilding(1)}
				variant='none'
				rounded='200px'
				h='30px'
				px='3'
				lineHeight='13.8px'
				fontSize='12px'
				fontWeight='400'
				bg={typeBuilding ? '#FFFFFF' : 'transparent'}
				color='#000000'
				opacity={typeBuilding ? '1' : '.7'}
			>
				На этапе строительства
			</Button>
		</Flex>
	)
}

export default Catalog
