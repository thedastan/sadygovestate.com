import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { PropsWithChildren, useEffect, useState } from 'react'

import { LoadingImage } from '@/config/helpers'
import { attribute_From } from '@/config/intl-variables'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { useCountries } from '@/hooks/useCountries'
import useTypedLocale from '@/hooks/useLocale'

import SlideProvider from './slide-provider'
import { ICity, ICountry } from '@/models/country.model'

const CountriesSwiper = () => {
	const [active, setActive] = useState<ICountry>()
	const [isLoading, setLoading] = useState(true)
	const { data } = useCountries()
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	useEffect(() => {
		if (data?.length) {
			setActive(data[0])
			LoadingImage(data[0]?.image, setLoading)
		}
	}, [data])
	return (
		<SlideProvider
			bgImage={active?.image || ''}
			title={t('recommended_countries')}
			path={DASHBOARD_PAGES.CATALOG(locale)}
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
					{active?.cities.map((el, idx) => (
						<Box
							key={el.id}
							mt={{
								md: idx % 2 === 0 ? '92px' : '0',
								base: idx % 2 === 0 ? '0' : '179px'
							}}
						>
							<CityCard city={el} />
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
						{data?.map(el => (
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

function CityCard({ city }: { city: ICity }) {
	const locale = useTypedLocale()
	return (
		<Flex
			flexDirection='column'
			alignItems='center'
			gap='6px'
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
					opacity='.7'
					fontSize='12px'
					lineHeight='13.8px'
					fontWeight='400'
				>
					{city[`name_${locale}`]}
				</Text>
				<Text
					fontSize='14px'
					lineHeight='16.1px'
					fontWeight='700'
				>
					{attribute_From[locale]} $200,000*
				</Text>
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
	)
}

export default CountriesSwiper
