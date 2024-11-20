import { Box } from '@chakra-ui/react'

import BgImage from '@/assets/img/slider-investment.jpeg'

import SlideProvider from './slide-provider'

const ObjectsForInvestment = () => {
	return (
		<SlideProvider
			bgImage={BgImage}
			path=''
			title='Объекты для инвестиций'
		>
			<Box></Box>
		</SlideProvider>
	)
}

export default ObjectsForInvestment
