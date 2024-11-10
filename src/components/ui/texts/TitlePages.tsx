import { ChakraProps, Text } from '@chakra-ui/react'
import React from 'react'

interface Props extends ChakraProps {
	children: string
}
const TitlePages = ({
	children,
	fontWeight = '400',
	fontSize = { xl: '90px', md: '60px', base: '32px' },
	lineHeight = { xl: '103.49px', md: '70px', base: '36.8px' },
	color = '#333139',
	...props
}: Props) => {
	return (
		<Text
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			letterSpacing='1px'
			{...props}
		>
			{children}
		</Text>
	)
}

export default TitlePages
