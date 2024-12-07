'use client'

import { Box, Button, Container, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { filterActions } from '@/store/slices/storage-slice'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useFullWindowSize } from '@/hooks/useFullHeight'
import useTypedLocale from '@/hooks/useLocale'
import { useProperties, useStages, useTypes } from '@/hooks/useProperties'

import TitlePages from '../ui/texts/TitlePages'

import CatalogGridComponent from './catalog-grid'
import FilterCatalogHeader from './filter-catalog-header'

const Catalog = ({ isInvestment }: { isInvestment?: boolean }) => {
	const dispatch = useDispatch()
	const locale = useTypedLocale()
	const t = useTranslations('Titles')

	const storage = useAppSelector(s => s.storage)
	const { data, isLoading } = useProperties(storage, isInvestment)
	const { data: types, isLoading: isLoading2 } = useTypes()
	const { data: stages } = useStages()
	const { clientWidth } = useFullWindowSize()

	const necessary_types =
		storage.stage?.id === 2 ? types?.filter(el => el.id !== 4) : types
	const StagesButtons = !stages?.length ? null : (
		<Flex
			bg='#F2F2F2'
			rounded='100px'
			justifyContent='space-around'
			px={{ sm: '10px', base: '1' }}
			alignItems='center'
			py={{ md: '2', base: '2.5' }}
			gap={{ md: '1', sm: '7px', base: '3px' }}
			h={{ md: '46px', base: '51px' }}
		>
			{stages?.map(el => (
				<Button
					key={el.id}
					onClick={() => dispatch(filterActions.setStage(el))}
					variant='none'
					rounded='200px'
					w={{ md: 'auto', base: 'auto' }}
					maxH={{ md: '30px', base: '39px' }}
					px='3'
					lineHeight={{ md: '13.8px', sm: '18px', base: '14px' }}
					fontSize={{ md: '12px', sm: '16px', base: '13px' }}
					fontWeight='400'
					bg={storage.stage?.id === el.id ? '#FFFFFF' : 'transparent'}
					color='#000000'
					opacity={storage.stage?.id === el.id ? '1' : '.7'}
				>
					{el[`name_${locale}`]}
				</Button>
			))}
		</Flex>
	)

	return (
		<Box>
			<TitlePages
				mb={{ md: '50px', base: '17px' }}
				px='4'
				textAlign='center'
				mx='auto'
			>
				{isInvestment ? t('investment_objects') : t('catalog')}
			</TitlePages>

			<FilterCatalogHeader text={t('reset_filters')} />
			<Box
				display={{ md: 'none', base: 'block' }}
				mb='17px'
				px='4'
			>
				{StagesButtons}
			</Box>
			<Flex
				overflowX='auto'
				className='unscroll'
				justifyContent={{ xl: 'center', base: 'start' }}
			>
				<Flex
					gap={{ md: '17px', sm: '3', base: '5px' }}
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					<Box display={{ md: 'block', base: 'none' }}>{StagesButtons}</Box>
					<FIlterButton
						onClick={() => dispatch(filterActions.setType({}))}
						isActive={!storage.type?.id}
					>
						{t('all')}
					</FIlterButton>
					{necessary_types?.map(el => (
						<FIlterButton
							key={el.id}
							onClick={() => dispatch(filterActions.setType(el))}
							isActive={storage.type?.id === el.id}
						>
							{el[`name_${locale}`]}
						</FIlterButton>
					))}
				</Flex>
			</Flex>
			<Container maxW={CONTAINER_WIDTH}>
				<CatalogGridComponent
					data={data}
					isLoading={isLoading}
					isInvestment={isInvestment}
				/>
			</Container>
		</Box>
	)
}

interface FIlterButtonProps extends PropsWithChildren {
	onClick: () => void
	isActive: boolean
}
function FIlterButton(props: FIlterButtonProps) {
	return (
		<Button
			onClick={props.onClick}
			variant='none'
			rounded='100px'
			h={{ sm: '46px', base: '38px' }}
			px={{ md: '22px', base: '18.36px' }}
			lineHeight={{ sm: '18.4px', base: '14px' }}
			fontWeight='700'
			bg={props.isActive ? '#333139' : '#F2F2F2'}
			color={props.isActive ? '#FFFFFF' : '#333139'}
			fontSize={{
				sm: props.isActive ? '16px' : '14px',
				base: props.isActive ? '13.35px' : '11.7px'
			}}
		>
			{props.children}
		</Button>
	)
}

export default Catalog
