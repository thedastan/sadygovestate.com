import { Box, ChakraProvider, Flex, Stack } from '@chakra-ui/react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

export default function NotFound() {
	return (
		<html>
			<body className={inter.className}>
				<ChakraProvider>
					<Box
						bg='#1F1F1F'
						w='100vw'
						h='100vh'
					>
						<Flex
							flexDirection='column'
							alignItems='center'
							justifyContent='space-between'
							px='4'
							pt='100px'
							h='100%'
							pb='30px'
						>
							<Stack
								spacing='10px'
								textAlign='center'
							>
								<TitleComponent color='#FFFFFF'>404</TitleComponent>
								<TitleComponent color='#FFFFFF'>
									Something went wrong!
								</TitleComponent>
							</Stack>
						</Flex>
					</Box>
				</ChakraProvider>
			</body>
		</html>
	)
}
