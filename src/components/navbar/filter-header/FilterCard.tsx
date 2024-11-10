import { Flex, Text } from '@chakra-ui/react'
import { FaAngleDown } from 'react-icons/fa6'

interface FilterCardProps {
	icon: () => JSX.Element
	title: string
	placeholder: string
	list: any[]
}
const FilterCard = (props: FilterCardProps) => {
	return (
		<Flex
			gap='3'
			h='44px'
		>
			<Flex
				bg='#FFFFFF1F'
				rounded='8px'
				minW='44px'
				h='100%'
				justifyContent='center'
				alignItems='center'
			>
				<props.icon />
			</Flex>
			<Flex
				flexDirection='column'
				justifyContent='space-between'
				py='3px'
				color='#FFFFFF'
				fontSize='14px'
				lineHeight='16.1px'
				fontWeight='400'
			>
				<Text>{props.title}</Text>
				<Flex
					gap='4'
					opacity='.5'
				>
					<Text>{props.placeholder}</Text>
					<FaAngleDown />
				</Flex>
			</Flex>
		</Flex>
	)
}

export default FilterCard
