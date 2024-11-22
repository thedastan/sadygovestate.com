import { Container, Text } from '@chakra-ui/react'

import SliderImage from '@/assets/img/slider-image.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import HeroSwiper from './swiper'

const HomeHero = () => {
	return (
		<Container maxW={CONTAINER_WIDTH}>
			<HeroSwiper images={[SliderImage, SliderImage]} />

			<Text
				mt={{ md: '0', base: '30px' }}
				maxW='247px'
				fontWeight='400'
				fontSize='18px'
				lineHeight='20.7px'
				color='#333139'
			>
				*-рекомендации от компании с быстрым ROI
			</Text>
		</Container>
	)
}

export default HomeHero
