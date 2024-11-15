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
			>
				<Container maxW={CONTAINER_WIDTH}>
					<Flex
						mt='20px'
						alignItems='center'
						// gap='318px'
						justifyContent='space-between'
					>
						<BurgerMenu />
						<FilterHead />
						<Box w='60px' />
					</Flex>
				</Container>
			</Flex>

			<Container maxW={CONTAINER_WIDTH}>
				<Flex
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
