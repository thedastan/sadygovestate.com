import { Box } from '@chakra-ui/react'

import MainSlider from '@/assets/img/slider-image.jpeg'

import SlideProvider from './slide-provider'

const CountriesSwiper = () => {
	return (
		<SlideProvider
			bgImage={MainSlider}
			title='Страны для выгодных покупок'
			path=''
		>
			<Box></Box>
		</SlideProvider>
	)
}

export default CountriesSwiper
