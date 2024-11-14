'use client'

import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import SliderImage from '@/assets/img/slider-image.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'

const IdealCity = () => {
	const { clientWidth } = useFullWindowSize()
	return (
		<Box mt='125px'>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='space-between'
					alignItems='center'
				>
					<TitleComponent query='идеальный город'>
						Найдите cвой идеальный город
					</TitleComponent>
				</Flex>
			</Container>
			<Flex
				mt='50px'
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
					{[1, 2, 3, 4, 5, 6, 7].map(el => (
						<Flex
							key={el}
							flexDirection='column'
							alignItems='center'
						>
							<Box
								w='260px'
								h='260px'
								rounded='50%'
								overflow='hidden'
							>
								<Image
									src={SliderImage}
									alt='Image'
									className='full-image'
								/>
							</Box>
							<Title
								mt='5'
								fontWeight='400'
								letterSpacing='auto'
							>
								Россия, Москва
							</Title>
							<Text
								mt='3'
								fontSize='18px'
								lineHeight='20.7px'
								fontWeight='400'
								color='#333139'
							>
								123 предложений
							</Text>
						</Flex>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}

export default IdealCity
