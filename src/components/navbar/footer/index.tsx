import { Box, Container, Flex, Text } from '@chakra-ui/react'

import LogoSvg from '@/assets/svg/LogoSvg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Footer = () => {
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			py={{ md: '46px', base: '30px' }}
		>
			<Flex>
				<Box>
					<LogoSvg />
					<Box
						fontSize='32px'
						lineHeight='36.8px'
						color='#3F3F3F'
					>
						<Text
							mt='8'
							fontWeight='700'
						>
							+971 54 204 4777
						</Text>
						<Text
							mt='14px'
							fontWeight='400'
						>
							info@vs-realestate.com
						</Text>
						<Text
							mt='32px'
							fontWeight='400'
							fontSize='13px'
							lineHeight='14.95px'
						>
							Свяжитесь с нами для получения дополнительной информации и
							поддержки.
						</Text>
					</Box>
				</Box>
			</Flex>
		</Container>
	)
}

export default Footer
