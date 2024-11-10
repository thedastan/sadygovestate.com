import { ChakraProps, Text } from '@chakra-ui/react'
import React from 'react'

import { inter } from '@/constants/fonts/fonts'

interface Props extends ChakraProps {
	children: string
}
const Description = ({
	children,
	fontWeight = '400',
	fontSize = '16px',
	lineHeight = '19.36px',
	color = '#333139',
	...props
}: Props) => {
	return (
		<Text
			className={inter.className}
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

export default Description
