import { Box, Container, Flex } from '@chakra-ui/react'

import LogoSvg from '@/assets/svg/LogoSvg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import FilterHead from '../filter-header'

import BurgerMenu from './burger-menu'

const Header = () => {
	return (
		<Box>
			<Flex
				position='fixed'
				left='0'
				top='0'
				right='0'
				w='100%'
				zIndex='30'
				bg={{ md: 'transparent', base: '#FFFFFF' }}
			>
				<Container maxW={CONTAINER_WIDTH}>
					<Flex
						mt={{ md: '5', base: '0' }}
						h={{ md: 'auto', base: '66px' }}
						alignItems='center'
						justifyContent='space-between'
					>
						<BurgerMenu />
						<Box display={{ md: 'block', base: 'none' }}>
							<FilterHead />
						</Box>
						<Box w={{ md: '60px', base: 'auto' }}>
							<Box display={{ md: 'none', base: 'block' }}>
								<LogoSvg
									width='138'
									height='52'
								/>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Flex>

			<Container maxW={CONTAINER_WIDTH}>
				<Box
					display={{ md: 'none', base: 'block' }}
					mt='72px'
					pb='40px'
				>
					<FilterHead />
				</Box>

				<Flex
					display={{ md: 'flex', base: 'none' }}
					justifyContent='end'
					pt='40px'
					pb='70px'
				>
					<LogoSvg
						width='157'
						height='46'
					/>
				</Flex>
			</Container>
		</Box>
	)
}

export default Header
