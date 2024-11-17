import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'

import TitlePages from '@/components/ui/texts/TitlePages'

import SliderImage from '@/assets/img/slider-image.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const HomeHero = () => {
	return (
		<Container maxW={CONTAINER_WIDTH}>
			<Flex
				justifyContent='space-between'
				flexDirection={{ md: 'row', base: 'column' }}
			>
				<TitlePages maxW='901px'>Страны для выгодных покупок</TitlePages>
				<Flex justifyContent={{ md: 'initial', base: 'end' }}>
					<Flex
						flexDirection={{ md: 'column', base: 'row-reverse' }}
						alignItems='center'
						justifyContent='center'
						w={{ md: '172px', base: 'auto' }}
						h={{ md: '172px', base: 'auto' }}
						rounded={{ md: '50%', base: '0' }}
						border={{ md: '1px solid #000000', base: 'none' }}
						color='#000000'
						gap={{ md: '1', base: '2px' }}
						fontSize={{ md: '32px', base: '22px' }}
					>
						<GoArrowUpRight />
						<Text
							textTransform='uppercase'
							fontSize={{ md: '20px', base: '14px' }}
							lineHeight={{ md: '23px', base: '16.1px' }}
							letterSpacing='1px'
							fontWeight='400'
						>
							Подробнее
						</Text>
					</Flex>
				</Flex>
			</Flex>

			<Box mt={{ md: '23px', base: '5' }}>
				<Box
					h={{ md: '450px', base: '487px' }}
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

			<Text
				mt='23px'
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
