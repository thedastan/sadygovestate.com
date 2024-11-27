import { Divider, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'

import DollarIconSvg from '@/assets/svg/DollarIconSvg'
import HouseIconSvg from '@/assets/svg/HouseIconSvg'
import LocationIconSvg from '@/assets/svg/LocationIconSvg'

import { filterActions } from '@/store/slices/storage-slice'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useCountries } from '@/hooks/useCountries'
import { useCreatorPriceObject } from '@/hooks/useCreatorPriceObject'
import useTypedLocale from '@/hooks/useLocale'
import { useTypes } from '@/hooks/useProperties'

import FilterCard from './FilterCard'
import FilterSelectCard from './FilterSelectCard'
import { ICountry } from '@/models/country.model'
import { IPropertyType } from '@/models/property.model'

const local_price = [
	200000, 400000, 600000, 800000, 1000000, 2000000, 3000000, 4000000, 5000000, 0
]

const FilterHead = () => {
	const locale = useTypedLocale()
	const dispatch = useDispatch()
	const t = useTranslations('Titles')

	const { country, price, type } = useAppSelector(s => s.storage)
	const { price_list } = useCreatorPriceObject(local_price)
	const { data: countries, isLoading } = useCountries()
	const { data: types, isLoading: isLoading2 } = useTypes()
	const country_key = `name_${locale}` as keyof ICountry
	const type_key = `name_${locale}` as keyof IPropertyType
	return (
		<Flex
			bg='#4A4A4A'
			border='1px solid #FFFFFF33'
			py={{ md: '11px', base: '14px' }}
			px={{ md: '10', sm: '5', base: '4' }}
			maxW='768px'
			mx='auto'
			w='100%'
			gap='3'
			justifyContent='space-between'
			flexDirection={{ md: 'row', base: 'column' }}
			rounded={{ md: '100px', base: '20px' }}
		>
			<Flex
				gap='3'
				alignItems='center'
				w={{ lg: 'auto', md: '66%', base: 'auto' }}
				justifyContent='space-between'
			>
				<FilterCard
					icon={LocationIconSvg}
					isLoading={isLoading}
					placeholder={t('select_country')}
					title={t('country')}
					value={country?.id ? (country[country_key] as string) : undefined}
				>
					{countries?.map(el => (
						<FilterSelectCard
							key={el.id}
							onChange={() => dispatch(filterActions.setCountry(el))}
							isActive={el.id === country.id}
							flag={el.flag}
						>
							{el[country_key] as string}
						</FilterSelectCard>
					))}
				</FilterCard>
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
					placeholder={t('price_range')}
					title={t('price')}
					value={price.text}
				>
					{price_list.map(el => (
						<FilterSelectCard
							key={el.value}
							onChange={() => dispatch(filterActions.setPrice(el))}
							isActive={el.value === price.value}
						>
							{el.text}
						</FilterSelectCard>
					))}
				</FilterCard>
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
				isLoading={isLoading2}
				placeholder={t('select_property_type')}
				title={t('property_type')}
				value={type?.id ? type[type_key] : undefined}
			>
				{types?.map(el => (
					<FilterSelectCard
						key={el.id}
						onChange={() => dispatch(filterActions.setType(el))}
						isActive={el.id === type.id}
					>
						{el[type_key]}
					</FilterSelectCard>
				))}
			</FilterCard>
		</Flex>
	)
}

export default FilterHead
