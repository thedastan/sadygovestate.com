import { ChakraProps, Heading } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title = ({
	children,
	fontWeight = '700',
	fontSize = '24px',
	lineHeight = '27.6px',
	color = '#333139',
	textAlign = 'center',
	letterSpacing = '1px',
	...props
}: Props) => {
	return (
		<Heading
			as='h1'
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			textAlign={textAlign}
			letterSpacing={letterSpacing}
			{...props}
		>
			{children}
		</Heading>
	)
}

export default Title
