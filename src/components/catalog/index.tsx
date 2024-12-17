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

import PaginationButton from '../ui/buttons/PaginationButton'
import TitlePages from '../ui/texts/TitlePages'

import CatalogGridComponent from './catalog-grid'
import FilterCatalogHeader from './filter-catalog-header'

const Catalog = ({ isInvestment }: { isInvestment?: boolean }) => {
	const dispatch = useDispatch()
	const locale = useTypedLocale()
	const t = useTranslations('Titles')

	const storage = useAppSelector(s => s.storage)
	const { data, isLoading, count_pages } = useProperties(storage, isInvestment)
	const { data: types, isLoading: isLoading2 } = useTypes()
	const { data: stages } = useStages()
	const { clientWidth } = useFullWindowSize()

	const setPage = (page: number) => {
		dispatch(filterActions.setPage(page))
	}
	const fist_part_pages =
		storage.page > count_pages.length - 5
			? count_pages.slice(0, 2)
			: count_pages.slice(storage.page - 1, storage.page + 2)

	const second_part_pages =
		storage.page > count_pages.length - 5
			? count_pages.slice(storage.page - 1)
			: count_pages.slice(-2)

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

				{count_pages.length > 1 && (
					<Flex
						mt='42px'
						justifyContent='center'
						gap='5'
					>
						<PaginationButton
							isNext={false}
							onClick={() => setPage(storage.page - 1)}
							disabled={storage.page === 1}
						/>
						{count_pages.length < 10 ? (
							<Flex gap='2'>
								{count_pages.map(page => (
									<PaginationItem
										isActive={storage.page === page}
										onClick={() => setPage(page)}
										value={page}
									/>
								))}
							</Flex>
						) : (
							<Flex
								gap='2'
								alignItems='center'
							>
								{fist_part_pages.map(page => (
									<PaginationItem
										isActive={storage.page === page}
										onClick={() => setPage(page)}
										value={page}
									/>
								))}
								<p>...</p>
								{second_part_pages.map(page => (
									<PaginationItem
										isActive={storage.page === page}
										onClick={() => setPage(page)}
										value={page}
									/>
								))}
							</Flex>
						)}
						<PaginationButton
							isNext={true}
							onClick={() => setPage(storage.page + 1)}
							disabled={storage.page === count_pages.length}
						/>
					</Flex>
				)}
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

interface PaginationItemProps {
	onClick: () => void
	isActive: boolean
	value: number
}
function PaginationItem(props: PaginationItemProps) {
	return (
		<Box
			onClick={props.onClick}
			bg={props.isActive ? '#2C2C2C' : 'transparent'}
			color={props.isActive ? '#F5F5F5' : '#1E1E1E'}
			px='3'
			py='2'
			rounded='6px'
			lineHeight='16px'
			fontSize='18px'
			cursor='pointer'
		>
			{props.value}
		</Box>
	)
}
export default Catalog
