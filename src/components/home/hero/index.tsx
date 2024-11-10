import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'

import TitlePages from '@/components/ui/texts/TitlePages'

import SliderImage from '@/assets/img/slider-image.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const HomeHero = () => {
	return (
		<Container maxW={CONTAINER_WIDTH}>
			<Flex justifyContent='space-between'>
				<TitlePages maxW='901px'>Страны для выгодных покупок</TitlePages>
				<Flex
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					w='172px'
					h='172px'
					rounded='50%'
					border='1px solid #000000'
					color='#000000'
					gap='1'
				>
					<GoArrowUpRight fontSize='32px' />
					<Text
						textTransform='uppercase'
						fontSize='20px'
						lineHeight='23px'
						letterSpacing='1px'
						fontWeight='400'
					>
						Подробнее
					</Text>
				</Flex>
			</Flex>

			<Box mt='23px'>
				<Box
					h='450px'
					w='100%'
					rounded='20px'
					overflow='hidden'
				>
					<Image
						src={SliderImage}
						alt='Image'
						className='full-image'
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default HomeHero
