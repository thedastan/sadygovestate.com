import { Box } from '@chakra-ui/react'

import BgImage from '@/assets/img/slider-recomended.jpeg'

import SlideProvider from './slide-provider'

const FeaturedProperties = () => {
	return (
		<SlideProvider
			bgImage={BgImage}
			path=''
			title='Рекомендуемые недвижимости'
		>
			<Box></Box>
		</SlideProvider>
	)
}

export default FeaturedProperties
