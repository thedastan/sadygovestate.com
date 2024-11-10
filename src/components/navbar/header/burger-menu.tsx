import { Box, Flex, Stack } from '@chakra-ui/react'

const BurgerMenu = () => {
	return (
		<>
			<Flex
				cursor='pointer'
				minW='60px'
				h='60px'
				rounded='50%'
				justifyContent='center'
				alignItems='center'
				bg='#FFFFFF'
			>
				<Stack
					w='29.17px'
					spacing='10px'
				>
					<Box
						w='100%'
						border='1px solid #000000'
					/>
					<Box
						w='100%'
						border='1px solid #000000'
					/>
					<Box
						w='100%'
						border='1px solid #000000'
					/>
				</Stack>
			</Flex>
		</>
	)
}

export default BurgerMenu
