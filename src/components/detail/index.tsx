'use client'

import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Spinner
} from '@chakra-ui/react'
import moment from 'moment'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { IoCheckmarkOutline } from 'react-icons/io5'

import CatalogArtboardIcon from '@/assets/svg/CatalogArtboardIcon'
import CatalogBathroomIcon from '@/assets/svg/CatalogBathroomIcon'
import CatalogBedIcon from '@/assets/svg/CatalogBedIcon'
import CatalogGarageIcon from '@/assets/svg/CatalogGarageIcon'
import CatalogPersonIcon from '@/assets/svg/CatalogPersonIcon'
import SaveIcon from '@/assets/svg/SaveIcon'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useCreatePDF } from '@/hooks/useCreatePDF'
import { formatToDE } from '@/hooks/useCreatorPriceObject'
import useTypedLocale from '@/hooks/useLocale'
import { usePropertyDetail } from '@/hooks/useProperties'

import Countries from '../countries'
import CatalogCard from '../ui/cards/catalog-card'
import CharacteristicsCard from '../ui/cards/characteristic-card'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'
import TitleComponent from '../ui/texts/TitleComponent'

import DetailGallery from './DetailGallery'
import SimilarProducts from './SimilarProducts'
import DetailSkeleton from './detail-skeleton'

const PropertyDetail = (params: { slug: string }) => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles.detail')
	const { data, isLoading } = usePropertyDetail(params.slug)
	const pdfRef = useRef<HTMLDivElement>(null)
	const year = moment(data?.year).year()
	const hasDatePassed = moment().isAfter(moment(data?.year, 'YYYY-MM-DD'))

	const { createPDF, isLoadingPDF } = useCreatePDF()

	const address = !!data
		? `${data[`district_${locale}`] || ''} ${data[`address_${locale}`] ? `, ` + data[`address_${locale}`] : ''}`
		: ''
	const TitleDetailPage = !!data && (
		<>
			{!!data[`name_${locale}`] && (
				<TitleComponent>{data[`name_${locale}`]}</TitleComponent>
			)}
			{!!address.trim() && (
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
						{address}
					</Description>
				</Flex>
			)}
		</>
	)

	if (isLoading) {
		return <DetailSkeleton />
	}
	if (!data) return <Description px='4'>Что то пошло не так...</Description>
	return (
		<Box
			ref={pdfRef}
			css={{
				'@media print': {
					minWidth: '1450px'
				}
			}}
		>
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
							{data.price_usd ? (
								<PropertyParams
									title={`$${formatToDE(data.price_usd)}`}
									subtitle={
										t('price') +
										'  ' +
										`${data.price_aed ? `AED ${data.price_aed}` : ''}`
									}
									isFirst={true}
								/>
							) : data.price_aed ? (
								<PropertyParams
									title={`AED ${formatToDE(data.price_aed)}`}
									subtitle={t('price')}
									isFirst={true}
								/>
							) : null}

							{!!year && (
								<PropertyParams
									title={year.toString()}
									subtitle={hasDatePassed ? t('handed_over') : t('renting_out')}
								/>

								// t('handed_over') сдан
								// 	t('renting_out') сдача
							)}
						</Flex>
						<Flex
							my={{ md: '40px', base: '30px' }}
							gap='8px 6px'
							flexWrap='wrap'
						>
							{!!data?.bed_room && (
								<CharacteristicsCard
									icon={CatalogBedIcon}
									text={`${data.bed_room} ${t('bedrooms')}`}
								/>
							)}
							{!!data?.studio && (
								<CharacteristicsCard
									icon={CatalogBedIcon}
									text={t('studio')}
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
							{!!data?.capacity && (
								<CharacteristicsCard
									icon={CatalogPersonIcon}
									text={`${data.capacity} ${t('people')}`}
								/>
							)}
							<CharacteristicsCard
								icon={CatalogArtboardIcon}
								text={`${data?.sqft} sqft / ${data?.sqmt} sqmt`}
							/>

							{data.pdf ? (
								<Link
									href={data.pdf}
									target='_blank'
								>
									<SaveAsPdfButton
										onClick={() => {}}
										isLoading={false}
									/>
								</Link>
							) : (
								<SaveAsPdfButton
									onClick={() => createPDF(pdfRef, params.slug)}
									isLoading={isLoadingPDF}
								/>
							)}
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

					<Box w={{ '2xl': '800px', xl: '650px', lg: '600px', base: '100%' }}>
						<Box
							display={{ lg: 'none', base: 'block' }}
							mb='3'
						>
							{TitleDetailPage}
						</Box>

						<DetailGallery data={data} />
					</Box>
				</Flex>
			</Container>

			{!!data.tipo && <SimilarProducts type={Number(data.tipo)} />}

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
