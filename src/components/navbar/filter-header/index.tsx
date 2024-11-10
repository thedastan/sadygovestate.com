import { Flex } from '@chakra-ui/react'

import DollarIconSvg from '@/assets/svg/DollarIconSvg'
import HouseIconSvg from '@/assets/svg/HouseIconSvg'
import LocationIconSvg from '@/assets/svg/LocationIconSvg'

import FilterCard from './FilterCard'

const FilterHead = () => {
	return (
		<Flex
			bg='#4A4A4A'
			border='1px solid #FFFFFF33'
			py='11px'
			px='40px'
			maxW='768px'
			w='100%'
			gap='3'
			justifyContent='space-between'
			rounded='100px'
		>
			<FilterCard
				icon={LocationIconSvg}
				list={[]}
				placeholder='Выберите страну'
				title='Страна'
			/>
			<FilterCard
				icon={DollarIconSvg}
				list={[]}
				placeholder='Ценовой диапазон'
				title='Цена'
			/>
			<FilterCard
				icon={HouseIconSvg}
				list={[]}
				placeholder='Выберите тип'
				title='Тип объекта'
			/>
		</Flex>
	)
}

export default FilterHead
