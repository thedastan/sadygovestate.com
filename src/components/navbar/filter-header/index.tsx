import { Divider, Flex } from '@chakra-ui/react'

import DollarIconSvg from '@/assets/svg/DollarIconSvg'
import HouseIconSvg from '@/assets/svg/HouseIconSvg'
import LocationIconSvg from '@/assets/svg/LocationIconSvg'

import { useCountries } from '@/hooks/useCountries'
import { useTypes } from '@/hooks/useProperties'

import FilterCard from './FilterCard'

const FilterHead = () => {
	const { data: countries, isLoading } = useCountries()

	const { data: types, isLoading: isLoading2 } = useTypes()
	return (
		<Flex
			bg='#4A4A4A'
			border='1px solid #FFFFFF33'
			py={{ md: '11px', base: '14px' }}
			px={{ md: '10', sm: '5', base: '4' }}
			maxW='768px'
			w='100%'
			gap='3'
			justifyContent='space-between'
			flexDirection={{ md: 'row', base: 'column' }}
			rounded={{ md: '100px', base: '20px' }}
		>
			<Flex
				gap='3'
				alignItems='center'
			>
				<FilterCard
					icon={LocationIconSvg}
					list={countries}
					isLoading={isLoading}
					placeholder='Выберите страну'
					title='Страна'
				/>
				<Divider
					mx='1'
					orientation='vertical'
					display={{ md: 'none', base: 'block' }}
					bg='#FFFFFF'
					opacity='.2'
					w='1px'
					h='35.5px'
				/>
				<FilterCard
					icon={DollarIconSvg}
					list={[]}
					placeholder='Ценовой диапазон'
					title='Цена'
				/>
			</Flex>
			<Divider
				display={{ md: 'none', base: 'block' }}
				bg='#FFFFFF'
				opacity='.2'
				w='100%'
				h='1px'
			/>
			<FilterCard
				icon={HouseIconSvg}
				list={types}
				isLoading={isLoading2}
				placeholder='Выберите тип'
				title='Тип объекта'
			/>
		</Flex>
	)
}

export default FilterHead
