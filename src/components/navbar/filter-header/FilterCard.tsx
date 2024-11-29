import {
	Box,
	Flex,
	Popover,
	PopoverContent,
	PopoverTrigger,
	SkeletonText,
	Stack,
	Text,
	useDisclosure,
	useMediaQuery,
	useOutsideClick
} from '@chakra-ui/react'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

import { dm_sans } from '@/constants/fonts/fonts'

import { IFilterValue } from '@/models/other.model'

interface FilterCardProps extends PropsWithChildren {
	icon: () => JSX.Element
	title: string
	placeholder: string
	isLoading?: boolean
	value: number | string | undefined
}
const FilterCard = (props: FilterCardProps) => {
	const ref = useRef<any>(null)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLargerThanMiniMobile] = useMediaQuery('(min-width: 370px)')
	useOutsideClick({
		ref: ref,
		handler: () => onClose()
	})

	const isActive = !!props.value

	const baseValue =
		String(props.value).length > 6
			? String(props.value).slice(0, 6) + '..'
			: props.value
	useEffect(() => {
		if (isActive) onClose()
	}, [props.value])
	return (
		<Flex
			gap='3'
			h='44px'
			ref={ref}
			alignItems='center'
			w={{ lg: '210px', md: 'auto', base: '100%' }}
		>
			<Flex
				bg='#FFFFFF1F'
				rounded='8px'
				minW='44px'
				h='100%'
				justifyContent='center'
				alignItems='center'
				className={isActive ? 'filter-active' : ''}
			>
				<props.icon />
			</Flex>
			{!!props.isLoading && (
				<Box>
					<SkeletonText
						noOfLines={1}
						w='45px'
						skeletonHeight='2'
					/>

					<SkeletonText
						mt='2'
						noOfLines={1}
						w={{ sm: '140px', base: '100px' }}
						skeletonHeight='2'
					/>
				</Box>
			)}
			{!props.isLoading && (
				<Flex
					flexDirection='column'
					justifyContent='space-between'
					py='3px'
					color='#FFFFFF'
					fontSize='14px'
					lineHeight='16.1px'
					fontWeight='400'
				>
					<Text
						display={{ md: 'block', base: 'none' }}
						opacity={isActive ? '.5' : '1'}
					>
						{props.title}
					</Text>

					<Popover
						isOpen={isOpen}
						onOpen={() => {}}
						onClose={onClose}
						placement='bottom'
						closeOnBlur={false}
					>
						<PopoverTrigger>
							<Flex
								onClick={onOpen}
								gap={{ sm: '4', base: '2' }}
								cursor='pointer'
								_active={{ opacity: '.4' }}
								mt='6px'
								whiteSpace={isLargerThanMiniMobile ? 'nowrap' : 'none'}
							>
								<Text
									display={{ md: 'block', base: 'none' }}
									opacity={isActive ? '1' : '.5'}
								>
									{isActive ? props.value : props.placeholder}
								</Text>
								<Text display={{ md: 'none', sm: 'block', base: 'none' }}>
									{isActive ? props.value : props.title}
								</Text>
								<Text display={{ sm: 'none', base: 'block' }}>
									{isActive ? baseValue : props.title}
								</Text>
								<FaAngleDown opacity='.5' />
							</Flex>
						</PopoverTrigger>
						<PopoverContent
							w={`248px`}
							mt='19px'
							border='none'
							left='0'
							maxH='267px'
							rounded='13px'
							bg='#FFFFFF'
							boxShadow={'0px 8px 24px -6px #00000029'}
							_focus={{ boxShadow: '0px 8px 24px -6px #00000029' }}
							px='1'
							py='2'
							overflowY='auto'
							className='unscroll'
						>
							<Stack
								spacing='0'
								className={dm_sans.className}
							>
								{props.children}
							</Stack>
						</PopoverContent>
					</Popover>
				</Flex>
			)}
		</Flex>
	)
}

export default FilterCard
