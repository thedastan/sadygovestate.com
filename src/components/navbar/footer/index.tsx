import { Box, Container, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Title from '@/components/ui/texts/Title'
import Title32 from '@/components/ui/texts/Title32'

import {
	EMAIL_ADDRESS,
	EMAIL_ADDRESS_LINK,
	PHONE_NUMBER
} from '@/constants/admin'

import LogoSvg from '@/assets/svg/LogoSvg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { social_contacts, useNavbar } from '../data'

const Footer = () => {
	const navbar = useNavbar()
	const t = useTranslations('Titles')

	return (
		<Container
			maxW={CONTAINER_WIDTH}
			py={{ md: '46px', base: '30px' }}
		>
			<Flex
				justifyContent='space-between'
				flexDirection={{ md: 'row', base: 'column' }}
				pr={{ xl: '250px', lg: '100px', base: '0' }}
				gap='92px'
			>
				<Box>
					<LogoSvg />
					<Flex
						mt='8'
						flexDirection='column'
						alignItems='start'
					>
						<Link href={`tel:${PHONE_NUMBER}`}>
							<Title32 fontWeight='700'>{PHONE_NUMBER}</Title32>
						</Link>
						<Link href={EMAIL_ADDRESS_LINK}>
							<Title32 mt='14px'>{EMAIL_ADDRESS}</Title32>
						</Link>
						<Text
							mt='32px'
							fontWeight='400'
							fontSize={{ md: '13px', base: '16px' }}
							lineHeight={{ md: '14.95px', base: '18.4px' }}
						>
							{t('contact_us')}
						</Text>
					</Flex>
				</Box>

				<Flex gap={{ lg: '143px', base: '50px' }}>
					<Stack
						spacing='3'
						alignItems='start'
					>
						{navbar.map((el, idx) => (
							<Link
								href={el.path}
								key={idx}
							>
								<Title
									fontWeight='400'
									color='#000000'
									letterSpacing='0'
								>
									{el.name}
								</Title>
							</Link>
						))}
					</Stack>

					<Stack
						spacing='3'
						alignItems='start'
					>
						{social_contacts.map((el, idx) => (
							<Link
								href={el.href}
								target='_blank'
								key={idx}
							>
								<Title
									fontWeight='400'
									color='#000000'
									letterSpacing='0'
								>
									{el.name}
								</Title>
							</Link>
						))}
					</Stack>
				</Flex>
			</Flex>

			<Divider
				h='1px'
				bg='#D9D9D9'
				mt={{ md: '19px', base: '4' }}
				mb={{ md: '33px', base: '15px' }}
			/>

			<Flex
				justifyContent='center'
				fontWeight='400'
				fontSize={{ md: '18px', base: '14px' }}
				lineHeight={{ md: '20.7px', base: '16px' }}
			>
				<Text color='#8A8989'>© 2024 Viktor Sadygov</Text>
			</Flex>
		</Container>
	)
}

export default Footer
