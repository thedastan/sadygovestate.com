import {
	Box,
	Button,
	Flex,
	ResponsiveValue,
	Stack,
	Text,
	useDisclosure
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import AnimateButton from '@/components/ui/buttons/AnimateButton'

import { WHATSAPP_LINK } from '@/constants/admin'

import { DETAIL_PATH_KEY_WORD } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'

import { social_contacts, useNavbar } from '../data'

import { locales_data } from '@/i18n'
import { IntlType } from '@/models/types/intl-types'

const BurgerMenu = () => {
	const navbar = useNavbar()

	const { isOpen, onClose, onOpen } = useDisclosure()
	const localeActive = useTypedLocale()
	const pathname = usePathname()

	const router = useRouter()
	const t = useTranslations('Titles')
	const changeIntl = (locale: IntlType) => {
		if (pathname.includes(DETAIL_PATH_KEY_WORD)) {
			const path =
				pathname.replace(localeActive, locale) + `?language=${locale}`
			router.replace(path)
		} else {
			router.replace(pathname.replace(localeActive, locale))
		}
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

	const ContactButton = (
		<Link
			href={WHATSAPP_LINK}
			target='_blank'
		>
			<AnimateButton
				maxW='218px'
				isLight={true}
			>
				{t('contact_us_short')}
			</AnimateButton>
		</Link>
	)

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
									mt={{ md: '0', base: '20px' }}
									justifyContent='space-between'
									flexDirection={{ md: 'row', base: 'column-reverse' }}
									alignItems={{ md: 'center', base: 'start' }}
									gap={{ md: '4', base: '41px' }}
								>
									<Box display={{ md: 'block', base: 'none' }}>
										{ContactButton}
									</Box>
									<Flex
										border='1px solid #F2F2F2'
										rounded='51px'
										h='30px'
										padding='2px'
										ml={{ md: '0', base: '86px' }}
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
								<Box
									display={{ md: 'none', base: 'block' }}
									mt='40px'
								>
									{ContactButton}
								</Box>
							</Box>

							<Flex
								gap={{ md: '25.2px', base: '5' }}
								mb='40px'
							>
								{social_contacts.map((el, idx) => (
									<Link
										key={idx}
										href={el.href}
										target='_blank'
									>
										<Flex
											bg='#333139'
											w={{ sm: '63px', base: '45px' }}
											h={{ sm: '63px', base: '45px' }}
											fontSize={{ sm: '30px', base: '22px' }}
											rounded='50%'
											justifyContent='center'
											alignItems='center'
										>
											<el.icon color='#FFFFFF' />
										</Flex>
									</Link>
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
