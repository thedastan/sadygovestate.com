import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import LogoSvg from '@/assets/svg/LogoSvg'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	HEADER_HEIGHT_MINI
} from '@/config/_variables.config'
import {
	DASHBOARD_PAGES,
	DETAIL_PATH_KEY_WORD
} from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'

import FilterHead from '../filter-header'

import HeaderButtons from './HeaderButtons'
import BurgerMenu from './burger-menu'

const Header = () => {
	const pathname = usePathname()
	const locale = useTypedLocale()
	const inDetailPage = pathname.includes(DETAIL_PATH_KEY_WORD)
	const [isLargerThanMd] = useMediaQuery('(min-width: 768px)')
	return (
		<Box>
			<Flex
				position='fixed'
				left='0'
				top='0'
				right='0'
				w='100%'
				zIndex='30'
				h={{ lg: HEADER_HEIGHT, base: HEADER_HEIGHT_MINI }}
				bg='#FFFFFF'
			>
				<Container maxW={CONTAINER_WIDTH}>
					<Flex
						mt={{ lg: '5', base: '0' }}
						alignItems='center'
						justifyContent='space-between'
					>
						<Flex
							justifyContent='start'
							alignItems='center'
							w={{ md: '157px', base: '138px' }}
						>
							<BurgerMenu />

							{inDetailPage && <HeaderButtons />}
						</Flex>
						<Box
							display={{ lg: inDetailPage ? 'none' : 'block', base: 'none' }}
						>
							<FilterHead />
						</Box>
						<Link href={DASHBOARD_PAGES.HOME(locale)}>
							<LogoSvg
								width={isLargerThanMd ? '157' : '138'}
								height={isLargerThanMd ? '46' : '40'}
							/>
						</Link>
					</Flex>
				</Container>
			</Flex>

			<Container
				maxW={CONTAINER_WIDTH}
				h={{ lg: parseInt(HEADER_HEIGHT) + 10 + 'px', base: 'auto' }}
			>
				<Box
					display={{ lg: 'none', base: 'block' }}
					mt='72px'
					pb={inDetailPage ? '30px' : '40px'}
				>
					{inDetailPage ? <HeaderButtons /> : <FilterHead />}
				</Box>
			</Container>
		</Box>
	)
}

export default Header
