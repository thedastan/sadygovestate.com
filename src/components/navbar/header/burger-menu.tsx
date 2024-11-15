import {
	Box,
	Button,
	Flex,
	ResponsiveValue,
	Stack,
	Text,
	useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import AnimateButton from '@/components/ui/buttons/AnimateButton'

import { PHONE_NUMBER, WHATSAPP_LINK } from '@/constants/admin'

import { IntlType } from '@/types/intl.types'

import useTypedLocale from '@/hooks/useLocale'

import { navbar, social_contacts } from '../data'

import { locales_data } from '@/i18n'

const BurgerMenu = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const localeActive = useTypedLocale()
	const pathname = usePathname()
	const router = useRouter()
	const changeIntl = (locale: IntlType) => {
		router.replace(pathname.replace(localeActive, locale))
	}
	const BurgerSticks = (
		<Stack
			w='29.17px'
			spacing='10px'
			className={isOpen ? 'burger-active' : ''}
		>
			<Box
				w='100%'
				border='1px solid #000000'
				transition='.4s'
			/>
			<Box
				w='100%'
				border='1px solid #000000'
				transition='.4s'
			/>
			<Box
				w='100%'
				border='1px solid #000000'
				transition='.4s'
			/>
		</Stack>
	)

	const drawerWidth: ResponsiveValue<string> = {
		md: '505px',
		sm: '360px',
		base: '85vw'
	}

	return (
		<>
			<Flex
				onClick={onOpen}
				cursor='pointer'
				minW='60px'
				opacity={isOpen ? '0' : '1'}
				minH='60px'
				maxH='60px'
				rounded='50%'
				justifyContent='center'
				alignItems='center'
				bg='#FFFFFF'
			>
				{BurgerSticks}
			</Flex>

			<Box
				onClick={onClose}
				bg='#00000066'
				position={isOpen ? 'fixed' : 'absolute'}
				opacity={isOpen ? '1' : '0'}
				transition='.6s'
				left='0'
				top='0'
				bottom='0'
				right={isOpen ? '0' : 'auto'}
				zIndex={isOpen ? '45' : '-1'}
			/>
			<Box
				position='fixed'
				left='0'
				top='0'
				bottom='0'
				w={isOpen ? drawerWidth : '0'}
				overflow='hidden'
				transition={isOpen ? '0' : '.8s'}
				zIndex='50'
			>
				<Box
					w='100%'
					h='100%'
					position='relative'
				>
					<Box
						w='800px'
						ml={isOpen ? '0' : '-800px'}
						transition='.6s'
						h='100%'
						borderRightRadius='300px'
						bg='#FFFFFF'
					>
						<Flex
							w={drawerWidth}
							h='100%'
							pt='47px'
							px='4'
							flexDirection='column'
							justifyContent='space-between'
						>
							<Box>
								<Flex
									onClick={onClose}
									cursor='pointer'
									position='absolute'
									left={isOpen ? '4' : '8'}
									top={isOpen ? '47px' : '23px'}
									zIndex='5'
									transition='.6s'
									justifyContent='center'
									alignItems='center'
									w='66px'
									h='66px'
									rounded='50%'
									bg='#F2F2F2'
								>
									{BurgerSticks}
								</Flex>

								<Flex
									ml={{ md: '80px', base: '0' }}
									justifyContent='space-between'
									alignItems='center'
									gap='4'
								>
									<Link
										href={WHATSAPP_LINK}
										target='_blank'
									>
										<AnimateButton
											maxW='218px'
											isLight={true}
										>
											Связаться с нами
										</AnimateButton>
									</Link>
									<Flex
										border='1px solid #F2F2F2'
										rounded='51px'
										h='30px'
										padding='2px'
									>
										{locales_data.map((el, idx) => (
											<Button
												key={idx}
												onClick={() => changeIntl(el.locale)}
												variant='none'
												bg={
													el.locale === localeActive ? '#F2F2F2' : 'transparent'
												}
												color='#121212'
												lineHeight='16.1px'
												fontWeight='400'
												rounded='39px'
												h='100%'
												px={el.locale === localeActive ? '3' : '11.5px'}
											>
												{el.short_name}
											</Button>
										))}
									</Flex>
								</Flex>

								<Stack
									spacing='5'
									mt={{ md: '68px', base: '48px' }}
									alignItems='start'
								>
									{navbar.map((el, idx) => (
										<Link
											key={idx}
											href={el.path}
											onClick={onClose}
										>
											<Text
												fontSize='32px'
												lineHeight='32px'
												fontWeight='400'
												color='#000000'
											>
												{el.name}
											</Text>
										</Link>
									))}
								</Stack>
							</Box>

							<Flex
								gap='25.2px'
								mb='40px'
							>
								{social_contacts.map((el, idx) => (
									<Flex
										key={idx}
										bg='#333139'
										w='63px'
										h='63px'
										rounded='50%'
										justifyContent='center'
										alignItems='center'
									>
										<el.icon
											color='#FFFFFF'
											fontSize='30px'
										/>
									</Flex>
								))}
							</Flex>
						</Flex>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default BurgerMenu
