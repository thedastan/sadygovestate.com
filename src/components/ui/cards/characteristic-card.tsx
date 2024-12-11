import { Flex, Text } from '@chakra-ui/react'

interface CharacteristicsCardProps {
	icon: () => JSX.Element
	text: string | number
	isMini?: boolean
}
const CharacteristicsCard = (props: CharacteristicsCardProps) => {
	return (
		<Flex
			alignItems='center'
			px={props.isMini ? '3' : '14px'}
			py={props.isMini ? '1' : '2'}
			rounded='100px'
			h={props.isMini ? '28px' : '40px'}
			gap={props.isMini ? '6px' : '2'}
			bg='#F2F2F2'
		>
			<props.icon />
			<Text
				fontWeight='400'
				fontSize='14px'
				lineHeight='16.1px'
				letterSpacing='1px'
				color='#333139'
				whiteSpace='nowrap'
			>
				{props.text}
			</Text>
		</Flex>
	)
}

export default CharacteristicsCard
