import { Box, Container, Flex, List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import DefImage from '@/assets/img/slider-image.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const PrimeRealEstate = () => {
	const list = [
		'Мы — команда профессионалов, стремящихся сделать покупку недвижимости удобными и безопасными.',
		'Наш приоритет — ваши интересы и достижения целей в сфере недвижимости.',
		'Предоставляем качественные услуги в сфере недвижимости, помогая клиентам найти идеальные объекты по всему миру.'
	]
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '182px', base: '122px' }}
		>
			<Flex
				w='100%'
				position='relative'
			>
				<Box
					px='40px'
					py='80px'
					w={{ lg: '45%', base: '100%' }}
					bg='#F2F2F2'
					rounded='20px'
					position='relative'
					zIndex='1'
				>
					<TitleComponent query='Real Estate'>
						12 Prime Real Estate
					</TitleComponent>

					<List
						styleType='disc'
						mt='40px'
						pb='5'
					>
						{list.map((el, idx) => (
							<ListItem
								key={idx}
								mb='5'
							>
								<Description
									fontWeight='300'
									fontSize='20px'
									lineHeight='24px'
								>
									{el}
								</Description>
							</ListItem>
						))}
					</List>

					<Flex
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						w='172px'
						h='172px'
						rounded='50%'
						bg='#4A4A4A'
						color='#FFFFFF'
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
							Связаться
						</Text>
					</Flex>
				</Box>
				<Flex
					position='absolute'
					zIndex='0'
					right='0'
					h='100%'
					alignItems='center'
					top='0'
				>
					<Box
						maxW='885px'
						w='100%'
						maxH='577px'
						rounded='20px'
						overflow='hidden'
					>
						<Image
							src={DefImage}
							alt='Image'
							className='full-image'
						/>
					</Box>
				</Flex>
			</Flex>
		</Container>
	)
}

export default PrimeRealEstate
