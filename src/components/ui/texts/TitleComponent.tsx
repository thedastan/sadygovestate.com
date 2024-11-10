import { ChakraProps, Highlight, Text } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
	query?: string[] | string
}
const TitleComponent = ({
	children,
	fontWeight = '400',
	fontSize = '50px',
	lineHeight = '57.5px',
	color = '#333139',
	query = '',

	...props
}: Props) => {
	return (
		<Text
			as='h1'
			{...props}
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
		>
			<Highlight
				query={query}
				styles={{ fontWeight: '700' }}
			>
				{children}
			</Highlight>
		</Text>
	)
}

export default TitleComponent
