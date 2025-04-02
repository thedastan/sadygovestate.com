'use client'

import { Container, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import HeroSwiper from './swiper'
import { MainPageProps } from './swiper/types'

const HomeHero = (props: MainPageProps) => {
	const t = useTranslations('Titles')
	return (
		<Container maxW={CONTAINER_WIDTH}>
			<HeroSwiper {...props} />

			<Text
				mt={{ md: '0', base: '30px' }}
				maxW='247px'
				fontWeight='400'
				fontSize='18px'
				lineHeight='20.7px'
				color='#333139'
			>
				{t('recommendations_roi')}
			</Text>
		</Container>
	)
}

export default HomeHero
