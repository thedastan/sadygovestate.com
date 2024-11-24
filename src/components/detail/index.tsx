'use client'

import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Spinner
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { IoCheckmarkOutline } from 'react-icons/io5'

import NoPhoto from '@/assets/img/no-photo.png'
import CatalogBathroomIcon from '@/assets/svg/CatalogBathroomIcon'
import CatalogBedIcon from '@/assets/svg/CatalogBedIcon'
import CatalogGarageIcon from '@/assets/svg/CatalogGarageIcon'
import CatalogPersonIcon from '@/assets/svg/CatalogPersonIcon'
import SaveIcon from '@/assets/svg/SaveIcon'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useCreatePDF } from '@/hooks/useCreatePDF'
import { formatToDE } from '@/hooks/useCreatorPriceObject'
import { useFullWindowSize } from '@/hooks/useFullHeight'
import useTypedLocale from '@/hooks/useLocale'
import { usePropertyDetail } from '@/hooks/useProperties'

import Countries from '../countries'
import CatalogCard from '../ui/cards/catalog-card'
import CharacteristicsCard from '../ui/cards/characteristic-card'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'
import TitleComponent from '../ui/texts/TitleComponent'

import DetailSkeleton from './detail-skeleton'
import { IDetailPropertyPayload } from '@/models/other.model'

const PropertyDetail = (params: IDetailPropertyPayload) => {
	const { clientWidth } = useFullWindowSize()
	const locale = useTypedLocale()
	const t = useTranslations('Titles.detail')
	const { data, isLoading } = usePropertyDetail(params)
	const pdfRef = useRef<HTMLDivElement>(null)

	const { createPDF, isLoadingPDF } = useCreatePDF()
	const TitleDetailPage = !!data && (
		<>
			<TitleComponent>{data[`name_${locale}`]}</TitleComponent>
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
					{`${data[`district_${locale}`]}, ${data[`address_${locale}`]}`}
				</Description>
			</Flex>
		</>
	)

	if (isLoading) {
		return <DetailSkeleton />
	}
	if (!data) return <Description px='4'>Что то пошло не так...</Description>
	return (
		<Box ref={pdfRef}>
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
							gap={{ md: '30px', sm: '5', base: '3' }}
							alignItems='center'
						>
							<PropertyParams
								title={`$${formatToDE(data.price)}`}
								subtitle={t('price')}
								isFirst={true}
							/>
							<PropertyParams
								title={`${data?.sqmt} m² - ${data?.sqft} f²`}
								subtitle={t('square')}
							/>
							{!!data?.year && (
								<PropertyParams
									title={`${data.year?.slice(0, 4)}`}
									subtitle={t('handed_over')}
								/>

								// t('handed_over') сдан
								// 	t('renting_out') сдача
							)}
						</Flex>
						<Flex
							my={{ md: '40px', base: '30px' }}
							gap='6px'
							flexWrap={{ xl: 'nowrap', base: 'wrap' }}
						>
							{!!data?.bed_room && (
								<CharacteristicsCard
									icon={CatalogBedIcon}
									text={`${data.bed_room} ${t('bedrooms')}`}
								/>
							)}
							{!!data?.bath && (
								<CharacteristicsCard
									icon={CatalogBathroomIcon}
									text={`${data.bath} ${t('bathrooms')}`}
								/>
							)}
							{!!data?.living_room && (
								<CharacteristicsCard
									icon={CatalogGarageIcon}
									text={t('living_room')}
								/>
							)}
							{!!data?.profitability && (
								<CharacteristicsCard
									icon={CatalogPersonIcon}
									text={`${data.profitability} ${t('people')}`}
								/>
							)}
							<SaveAsPdfButton
								onClick={() => createPDF(pdfRef, data[`slug_${locale}`])}
								isLoading={isLoadingPDF}
							/>
						</Flex>
						<Description
							lineHeight='26px'
							color='#12141D'
						>
							{data[`description_${locale}`]}
						</Description>
						{!!data[`advantage_${locale}`]?.length && (
							<Box
								mt='4'
								bg='#F2F2F2'
								rounded='14px'
								pt='30px'
								px='6'
							>
								{data[`advantage_${locale}`].map(el => (
									<ListItem2 key={el.id}>{el.title}</ListItem2>
								))}
							</Box>
						)}
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
								src={data.main_image || NoPhoto}
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
								{data.prop_image?.map(el => (
									<Box
										key={el.id}
										h={{ lg: '260px', sm: '180px', base: '113.75px' }}
										w={{ xl: '250px', sm: '170px', base: '112.5px' }}
										rounded='16px'
										overflow='hidden'
									>
										<Image
											src={el.image}
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
				<TitleComponent query='объекты'>{t('similar_objects')}</TitleComponent>
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
							{/* <CatalogCard /> */}
						</Box>
					))}
				</Flex>
			</Flex>
			<Countries mt={{ md: '158px', base: '60px' }} />
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
			gap={{ md: '30px', sm: '5', base: '3' }}
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
				<Title32
					fontSize={{ md: '32px', sm: '24px', base: '22px' }}
					lineHeight={{ md: '36.8px', base: '27.6px' }}
				>
					{props.title}
				</Title32>
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

function SaveAsPdfButton(props: { onClick: () => void; isLoading: boolean }) {
	return props.isLoading ? (
		<Flex
			h='40px'
			alignItems='center'
			justifyContent='center'
			w='40px'
		>
			<Spinner />
		</Flex>
	) : (
		<Button
			onClick={props.onClick}
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
