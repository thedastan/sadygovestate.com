'use client'

import { Box, Container, Divider, Flex, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import { FiMapPin } from 'react-icons/fi'

import DefImage from '@/assets/img/slider-image.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'

import CatalogCard from '../ui/cards/catalog-card'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'
import TitleComponent from '../ui/texts/TitleComponent'

const PropertyDetail = () => {
	const { clientWidth } = useFullWindowSize()
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex gap={{ xl: '52px', md: '24px', base: '34px' }}>
					<Box
						maxW='650px'
						w='100%'
					>
						<TitleComponent>Люксовый жилой комплекс в Бангоке</TitleComponent>
						<Flex
							mt='4'
							gap='3'
							alignItems='center'
						>
							<FiMapPin fontSize='16px' />
							<Description
								fontSize='14px'
								lineHeight='16.94px'
							>
								The Collection, St.Regis Resort, Saadiyat Island, Abu Dhabi
							</Description>
						</Flex>
						<Flex
							mt='43px'
							gap='30px'
							alignItems='center'
						>
							<PropertyParams
								title='$200,000'
								subtitle='цена'
								isFirst={true}
							/>
							<PropertyParams
								title='150m2'
								subtitle='площадь'
							/>
							<PropertyParams
								title='2022г'
								subtitle='Квартира'
							/>
						</Flex>
					</Box>

					<Box
						maxW='800px'
						w='100%'
					>
						<Box
							h='500px'
							w='100%'
							rounded='16px'
							overflow='hidden'
						>
							<Image
								src={DefImage}
								alt='Image'
								className='full-image'
							/>
						</Box>

						<SimpleGrid
							mt='14px'
							spacing='14px'
							columns={3}
						>
							{[1, 2, 3].map(el => (
								<Box
									key={el}
									h='260px'
									w='100%'
									rounded='16px'
									overflow='hidden'
								>
									<Image
										src={DefImage}
										alt='Image'
										className='full-image'
										width={257}
										height={260}
									/>
								</Box>
							))}
						</SimpleGrid>
					</Box>
				</Flex>
			</Container>

			<Container
				maxW={CONTAINER_WIDTH}
				mt={{ md: '154px', base: '60px' }}
			>
				<TitleComponent query='объекты'>Похожие объекты</TitleComponent>
			</Container>

			<Flex
				mt={{ md: '10', base: '5' }}
				overflowX='auto'
				className='unscroll'
			>
				<Flex
					gap='6'
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					<CatalogCard />
					<CatalogCard />
					<CatalogCard />
					<CatalogCard />
				</Flex>
			</Flex>
		</Box>
	)
}

function PropertyParams(props: {
	title: string
	subtitle: string
	isFirst?: boolean
}) {
	return (
		<Flex
			alignItems='center'
			gap='30px'
		>
			{!props.isFirst && (
				<Divider
					orientation='vertical'
					bg='#D9D9D9'
					h='43px'
					w='2px'
				/>
			)}
			<Box>
				<Title32>{props.title}</Title32>
				<Description
					mt='1'
					fontSize='14px'
					lineHeight='16.94px'
				>
					{props.subtitle}
				</Description>
			</Box>
		</Flex>
	)
}

export default PropertyDetail
