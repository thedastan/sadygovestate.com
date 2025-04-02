import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { PropsWithChildren, useEffect, useState } from 'react'

import { LoadingImage } from '@/config/helpers'
import { attribute_From } from '@/config/intl-variables'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { formatToDE } from '@/hooks/useCreatorPriceObject'
import useTypedLocale from '@/hooks/useLocale'

import SlideProvider from './slide-provider'
import { ICountry } from '@/models/country.model'
import { IProperty } from '@/models/property.model'

interface Props {
	properties: IProperty[] | undefined
	video?: string
	countries: ICountry[] | undefined
}
const CountriesSwiper = ({ video, countries, properties }: Props) => {
	const [active, setActive] = useState<ICountry>()
	const [isLoading, setLoading] = useState(true)
	const locale = useTypedLocale()
	const [isLargerThanMd] = useMediaQuery('(min-width: 768px)')
	const t = useTranslations('Titles')
	useEffect(() => {
		if (countries?.length) {
			setActive(countries[0])
			LoadingImage(countries[0]?.image, setLoading)
		}
	}, [countries])

	console.log(properties)

	return (
		<SlideProvider
			bgImage={active?.image || ''}
			title={t('recommended_countries')}
			path={video}
			isLoading={isLoading}
		>
			<Flex
				flexDirection='column'
				justifyContent='space-between'
				alignItems={{ lg: 'center', base: 'start' }}
				h='100%'
				pb={{ md: '30px', base: '20.1px' }}
			>
				<Flex
					justifyContent='space-around'
					w='100%'
					mt={{ md: '80px', base: '63px' }}
					gap='3'
					px='3'
				>
					{properties
						?.filter(el => el.country_id === active?.id)
						?.slice(0, isLargerThanMd ? 4 : 2)
						?.map((el, idx) => (
							<Box
								key={el.id}
								mt={{
									md: idx % 2 === 0 ? '92px' : '0',
									base: idx % 2 === 0 ? '0' : '179px'
								}}
							>
								<ItemCard el={el} />
							</Box>
						))}
				</Flex>
				<Flex
					overflowX='auto'
					className='unscroll'
					justifyContent={{ lg: 'center', base: 'start' }}
					w='100%'
				>
					<Flex
						gap={{ md: '17px', sm: '10px', base: '1' }}
						px='4'
					>
						{countries?.map(el => (
							<TabCard
								key={el.id}
								onClick={() => setActive(el)}
								isActive={el.id === active?.id}
							>
								{el[`name_${locale}`]}
							</TabCard>
						))}
					</Flex>
				</Flex>
			</Flex>
		</SlideProvider>
	)
}

interface TabCardProps extends PropsWithChildren {
	isActive: boolean
	onClick: () => void
}

function TabCard(props: TabCardProps) {
	return (
		<Button
			onClick={props.onClick}
			maxH={{ sm: '44px', base: '35.41px' }}
			variant='none'
			whiteSpace='nowrap'
			px='22px'
			rounded='100px'
			fontSize={{ sm: props.isActive ? '16px' : '14px', base: '12px' }}
			lineHeight={{ sm: props.isActive ? '18.4px' : '16.1px', base: '13.8px' }}
			color={props.isActive ? '#333139' : '#FFFFFF'}
			bg={props.isActive ? '#FFFFFF' : '#FFFFFF33'}
			backdropFilter={props.isActive ? '0' : 'blur(20px)'}
		>
			{props.children}
		</Button>
	)
}

function ItemCard({ el }: { el: IProperty }) {
	const locale = useTypedLocale()
	return (
		<Link href={DASHBOARD_PAGES.DETAIL(locale, el.slug_en)}>
			<Flex
				flexDirection='column'
				alignItems='center'
				gap='6px'
				cursor='pointer'
				sx={{
					'&:hover': {
						'.city-circle': {
							padding: '6px'
						},
						'.city-box': {
							bg: '#FFFFFF',
							color: '#333139'
						}
					}
				}}
			>
				<Flex
					flexDirection='column'
					className='city-box'
					alignItems='center'
					gap='6px'
					bg='#FFFFFF33'
					backdropFilter='blur(30px)'
					px='25px'
					py='10.5px'
					rounded='12px'
					color='#FFFFFF'
					transition='.4s'
				>
					<Text
						noOfLines={1}
						opacity='.7'
						fontSize='12px'
						lineHeight='13.8px'
						fontWeight='400'
						maxW='90px'
					>
						{el[`name_${locale}`]}
					</Text>

					<Box
						fontSize='14px'
						lineHeight='16.1px'
						fontWeight='700'
						whiteSpace='nowrap'
					>
						{!!el.price_usd && (
							<Text>{`${attribute_From[locale]} $${formatToDE(el.price_usd)}`}</Text>
						)}
						{!!el.price_aed && (
							<Text>{`${attribute_From[locale]} ${formatToDE(el.price_aed)} AED`}</Text>
						)}
					</Box>
				</Flex>

				<Flex
					className='city-circle'
					w='43px'
					h='43px'
					justifyContent='center'
					transition='.5s'
					alignItems='center'
					padding='14px'
					rounded='50%'
					bg='#FFFFFF33'
					backdropFilter='blur(20px)'
				>
					<Box
						w='100%'
						h='100%'
						rounded='50%'
						bg='#FFFFFF'
					/>
				</Flex>
			</Flex>
		</Link>
	)
}

export default CountriesSwiper
