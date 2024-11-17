'use client'

import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	List,
	SimpleGrid
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiMapPin } from 'react-icons/fi'
import { IoCheckmarkOutline } from 'react-icons/io5'

import DefImage from '@/assets/img/slider-image.jpeg'
import CatalogBathroomIcon from '@/assets/svg/CatalogBathroomIcon'
import CatalogBedIcon from '@/assets/svg/CatalogBedIcon'
import CatalogGarageIcon from '@/assets/svg/CatalogGarageIcon'
import CatalogPersonIcon from '@/assets/svg/CatalogPersonIcon'
import SaveIcon from '@/assets/svg/SaveIcon'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'

import CatalogCard from '../ui/cards/catalog-card'
import CharacteristicsCard from '../ui/cards/characteristic-card'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'
import TitleComponent from '../ui/texts/TitleComponent'

const PropertyDetail = () => {
	const { clientWidth } = useFullWindowSize()

	const TitleDetailPage = (
		<>
			<TitleComponent>Люксовый жилой комплекс в Бангоке</TitleComponent>
			<Flex
				mt={{ md: '4', base: '3' }}
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
		</>
	)
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					gap={{ xl: '52px', md: '24px', base: '34px' }}
					flexDirection={{ lg: 'row', base: 'column-reverse' }}
				>
					<Box
						maxW='650px'
						w={{ xl: '650px', base: '100%' }}
					>
						<Box display={{ lg: 'block', base: 'none' }}>{TitleDetailPage}</Box>
						<Flex
							mt={{ md: '43px', base: '0' }}
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
						<Flex
							my={{ md: '40px', base: '30px' }}
							gap='6px'
							flexWrap={{ xl: 'nowrap', base: 'wrap' }}
						>
							<CharacteristicsCard
								icon={CatalogBedIcon}
								text='3 спальни'
							/>
							<CharacteristicsCard
								icon={CatalogBathroomIcon}
								text='3 ванных'
							/>
							<CharacteristicsCard
								icon={CatalogGarageIcon}
								text='гостиная'
							/>
							<CharacteristicsCard
								icon={CatalogPersonIcon}
								text='5-7 человек'
							/>
							<SaveAsPdfButton />
						</Flex>
						<Description
							lineHeight='26px'
							color='#12141D'
						>
							Просторная квартира площадью 150 м² с тремя спальнями и гостиной,
							расположена на 10-м этаже современного жилого комплекса в центре
							города. Из окон открывается панорамный вид на город, создавая
							атмосферу уюта и комфорта.
						</Description>
						<Box
							mt='4'
							bg='#F2F2F2'
							rounded='14px'
							pt='30px'
							px='6'
						>
							<ListItem2>Рядом с метро и торговыми центрами</ListItem2>
							<ListItem2>Открытая планировка</ListItem2>
							<ListItem2>На 10-м этаже с видом на город</ListItem2>
							<ListItem2>В 10 минутах от пляжа</ListItem2>
							<ListItem2>Современный дизайн, премиальная отделка</ListItem2>
						</Box>
					</Box>

					<Box
						maxW='800px'
						w='100%'
					>
						<Box
							display={{ lg: 'none', base: 'block' }}
							mb='3'
						>
							{TitleDetailPage}
						</Box>
						<Box
							h={{ lg: '500px', base: '464px' }}
							w='100%'
							rounded='16px'
							overflow='hidden'
						>
							<Image
								src={DefImage}
								alt='Image'
								className='full-image'
								width={800}
								height={500}
							/>
						</Box>

						<Flex
							mt='14px'
							overflow='auto'
							className='unscroll'
							w='100%'
						>
							<Flex gap='14px'>
								{[1, 2, 3, 4].map(el => (
									<Box
										key={el}
										h={{ lg: '260px', sm: '180px', base: '113.75px' }}
										w={{ xl: '100%', sm: '170px', base: '112.5px' }}
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
							</Flex>
						</Flex>
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
					gap={{ md: '6', base: '3' }}
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					{[1, 2, 3, 4].map(el => (
						<Box
							key={el}
							minW='357px'
						>
							<CatalogCard />
						</Box>
					))}
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

function SaveAsPdfButton() {
	return (
		<Button
			variant='none'
			bg='#4A4A4A'
			rounded='100px'
			maxH='40px'
			px='18px'
			color='#FFFFFF'
			fontSize='14px'
			lineHeight='16.1px'
			letterSpacing='1px'
			fontWeight='400'
			gap='6px'
		>
			PDF <SaveIcon />
		</Button>
	)
}

function ListItem2(props: { children: string }) {
	return (
		<Flex
			alignItems='center'
			gap='5'
			pb={{ md: '6', base: '5' }}
		>
			<IoCheckmarkOutline
				color='#333139'
				fontSize='19px'
			/>
			<Description>{props.children}</Description>
		</Flex>
	)
}

export default PropertyDetail
