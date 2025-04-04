'use client'

import {
	Box,
	Container,
	Flex,
	SkeletonCircle,
	SkeletonText
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import CountryCard from '@/components/ui/cards/country-card'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useCountries } from '@/hooks/useCountries'
import { useFullWindowSize } from '@/hooks/useFullHeight'

import { ICountry } from '@/models/country.model'

interface Props {
	data?: ICountry[]
}
const IdealCity = ({ data }: Props) => {
	// const { data, isLoading } = useCountries()
	const t = useTranslations('Titles')
	const { clientWidth } = useFullWindowSize()
	return (
		<Box mt={{ md: '125px', base: '60px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='space-between'
					alignItems='center'
				>
					<TitleComponent query={t('find_ideal_city.query')}>
						{t('find_ideal_city.title')}
					</TitleComponent>
				</Flex>
			</Container>
			<Flex
				mt={{ md: '50px', base: '30px' }}
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
					{/* {isLoading &&
						[1, 2, 3, 4, 5].map(idx => <SkeletonCountries key={idx} />)} */}
					{data?.map(el => (
						<CountryCard
							key={el.id}
							el={el}
							offer_text={t('offers')}
							watch_text={t('see_more')}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}

function SkeletonCountries() {
	return (
		<Flex
			flexDirection='column'
			alignItems='center'
			gap='4'
		>
			<SkeletonCircle
				w={{ md: '260px', base: '180px' }}
				h={{ md: '260px', base: '180px' }}
			/>
			<SkeletonText
				mt='3'
				w='70%'
				noOfLines={1}
				skeletonHeight={2}
			/>
			<SkeletonText
				w='50%'
				noOfLines={1}
				skeletonHeight={2}
			/>
		</Flex>
	)
}

export default IdealCity
