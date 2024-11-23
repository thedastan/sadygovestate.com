import { Divider, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { LiaTimesSolid } from 'react-icons/lia'
import { useDispatch } from 'react-redux'

import { filterActions } from '@/store/slices/storage-slice'

import { useAppSelector } from '@/hooks/useAppSelector'
import useTypedLocale from '@/hooks/useLocale'

import TitleComponent from '../ui/texts/TitleComponent'

const FilterCatalogHeader = (props: { text: string }) => {
	const dispatch = useDispatch()
	const { country, price, stage, type } = useAppSelector(s => s.storage)
	const locale = useTypedLocale()

	const onReset = () => {
		dispatch(filterActions.resetFrom())
	}

	const isFilter = country?.id || price?.value || stage?.id || type?.id
	return !isFilter ? null : (
		<Flex
			justifyContent='center'
			px='4'
			mb='37px'
		>
			<Flex
				gap='19px'
				alignItems='center'
			>
				{!!country?.id && (
					<TitleComponent>{`${country[`name_${locale}`]}`}</TitleComponent>
				)}

				<Divider
					orientation='vertical'
					w='2px'
					h='35px'
					bg='#D9D9D9'
				/>

				<Flex
					onClick={onReset}
					cursor='pointer'
					color='#333139'
					alignItems='center'
					gap='3'
					_active={{ opacity: '.7' }}
				>
					<Text
						fontWeight='400'
						fontSize='16px'
						lineHeight='18px'
					>
						{props.text}
					</Text>
					<LiaTimesSolid fontSize='14px' />
				</Flex>
			</Flex>
		</Flex>
	)
}

export default FilterCatalogHeader
