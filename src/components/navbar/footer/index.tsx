import { Box, Container, Divider, Flex, Stack, Text } from '@chakra-ui/react'
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

import { navbar, social_contacts } from '../data'

const Footer = () => {
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			py={{ md: '46px', base: '30px' }}
		>
			<Flex
				justifyContent='space-between'
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
							fontSize='13px'
							lineHeight='14.95px'
						>
							Свяжитесь с нами для получения дополнительной информации и
							поддержки.
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
				mt='19px'
				mb='33px'
			/>

			<Flex
				justifyContent='space-between'
				fontWeight='400'
				fontSize='18px'
				lineHeight='20.7px'
			>
				<Text color='#8A8989'>© 2024 Viktor Sadygov</Text>
				<Text color='#8B8B8B'>Политика конфиденциальности</Text>
			</Flex>
		</Container>
	)
}

export default Footer
