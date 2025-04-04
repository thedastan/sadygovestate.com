import {
	Box,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { GoChevronLeft } from 'react-icons/go'


import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'
import FeedbackDetails from '@/components/feedback-form/FeedbackDetails'

const HeaderButtons = () => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles')

	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Flex
			gap='3'
			ml={{ md: '22px', base: '0' }}
		>
			<Link href={DASHBOARD_PAGES.CATALOG(locale)}>
				<Flex
					maxW='203px'
					w='100%'
					h='46px'
					border='1px solid #333139'
					rounded='100px'
					justifyContent='center'
					px={{ md: '22px', base: '4' }}
					py='14px'
					alignItems='center'
					whiteSpace='nowrap'
					gap='10px'
					color='#333139'
					lineHeight='18.4px'
					fontSize='16px'
					fontWeight='400'
				>
					<Box
						w={{ sm: '18px', base: '10px' }}
						fontSize={{ sm: '20px', base: '18px' }}
					>
						<GoChevronLeft />
					</Box>
					{t('catalog')}
				</Flex>
			</Link>

			{/* <Link href={WHATSAPP_LINK}> */}
				<Flex
					maxW={{ sm: '128px', base: '182px' }}
					w='100%'
					justifyContent='center'
					h='46px'
					rounded='100px'
					px={{ md: '22px', base: '4' }}
					py='14px'
					bg='#4A4A4A'
					alignItems='center'
					whiteSpace='nowrap'
					color='#FFFFFF'
					lineHeight='18.4px'
					fontSize='16px'
					fontWeight='700'
					onClick={onOpen}
					cursor="pointer"
				>
					{t('contact')}
				</Flex>
			{/* </Link> */}

			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent borderRadius={10}	bg='#F2F2F2' h="600px" display="flex" justifyContent="center" alignItems="center"  overflow="hidden" >
					<ModalCloseButton />
					<ModalBody  >
						<FeedbackDetails/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Flex>
	)
}

export default HeaderButtons
