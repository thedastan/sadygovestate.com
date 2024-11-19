'use client'

import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'
import { useProperties } from '@/hooks/useProperties'

import CatalogCard from '../ui/cards/catalog-card'
import TitlePages from '../ui/texts/TitlePages'

import CatalogGridComponent from './catalog-grid'

const filter_list = [
	'Квартиры',
	'Виллы',
	'Офисные помещения',
	'Гостиницы и отели',
	'Новостройки'
]
const Catalog = () => {
	const [filterActive, setFilterActive] = useState(filter_list[0])
	const { data, isLoading } = useProperties()

	const { clientWidth } = useFullWindowSize()
	return (
		<Box>
			<TitlePages
				mb={{ md: '50px', base: '17px' }}
				px='4'
				textAlign='center'
			>
				Каталог объектов
			</TitlePages>

			<Box
				display={{ md: 'none', base: 'block' }}
				mb='17px'
				px='4'
			>
				<TypeBuildingButtons />
			</Box>
			<Flex
				overflowX='auto'
				className='unscroll'
				justifyContent={{ xl: 'center', base: 'start' }}
			>
				<Flex
					gap={{ md: '17px', sm: '3', base: '5px' }}
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					<Box display={{ md: 'block', base: 'none' }}>
						<TypeBuildingButtons />
					</Box>
					{filter_list.map((el, idx) => (
						<Button
							key={idx}
							onClick={() => setFilterActive(el)}
							variant='none'
							rounded='100px'
							h={{ sm: '46px', base: '38px' }}
							px={{ md: '22px', base: '18.36px' }}
							lineHeight={{ sm: '18.4px', base: '14px' }}
							fontWeight='700'
							bg={filterActive === el ? '#333139' : '#F2F2F2'}
							color={filterActive === el ? '#FFFFFF' : '#333139'}
							fontSize={{
								sm: filterActive === el ? '16px' : '14px',
								base: filterActive === el ? '13.35px' : '11.7px'
							}}
						>
							{el}
						</Button>
					))}
				</Flex>
			</Flex>
			<Container maxW={CONTAINER_WIDTH}>
				<CatalogGridComponent
					data={data}
					isLoading={isLoading}
				/>
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
			alignItems='center'
			py={{ md: '2', base: '2.5' }}
			gap={{ md: '1', base: '7px' }}
			h={{ md: '46px', base: '51px' }}
		>
			<Button
				onClick={() => setTypeBuilding(0)}
				variant='none'
				rounded='200px'
				w={{ md: 'auto', base: '43%' }}
				maxH={{ md: '30px', base: '39px' }}
				px='3'
				lineHeight={{ md: '13.8px', sm: '18px', base: '14px' }}
				fontSize={{ md: '12px', sm: '16px', base: '13px' }}
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
				w={{ md: 'auto', base: '57%' }}
				maxH={{ md: '30px', base: '39px' }}
				px='3'
				lineHeight={{ md: '13.8px', sm: '18px', base: '14px' }}
				fontSize={{ md: '12px', sm: '16px', base: '13px' }}
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
