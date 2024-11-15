import { ChakraProps, Text } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title32 = ({
	children,
	fontWeight = '400',
	fontSize = '32px',
	lineHeight = '36.8px',
	color = '#333139',
	...props
}: Props) => {
	return (
		<Text
			as='h1'
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Title32
