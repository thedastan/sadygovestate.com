import { ChakraProps, Text } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title = ({
	children,
	fontWeight = '700',
	fontSize = '24px',
	lineHeight = '27.6px',
	color = '#333139',
	letterSpacing = '1px',
	...props
}: Props) => {
	return (
		<Text
			as='h1'
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			letterSpacing={letterSpacing}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Title
