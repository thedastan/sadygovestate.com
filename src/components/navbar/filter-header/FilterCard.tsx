import {
	Box,
	Flex,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Radio,
	SkeletonText,
	Stack,
	Text,
	useDisclosure,
	useOutsideClick
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

import { dm_sans } from '@/constants/fonts/fonts'

import useTypedLocale from '@/hooks/useLocale'

import { IFilterListProps } from '@/models/country.model'

interface FilterCardProps {
	icon: () => JSX.Element
	title: string
	placeholder: string
	list: IFilterListProps[] | undefined
	isLoading?: boolean
}
const FilterCard = (props: FilterCardProps) => {
	const ref = useRef<any>(null)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const locale = useTypedLocale()
	const onChange = (item: any) => {
		// props.onChange(item)
		onClose()
	}

	useOutsideClick({
		ref: ref,
		handler: () => onClose()
	})
	return (
		<Flex
			gap='3'
			h='44px'
			ref={ref}
			alignItems='center'
			w={{ md: 'auto', base: '100%' }}
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
						w='140px'
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
					<Text display={{ md: 'block', base: 'none' }}>{props.title}</Text>

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
								gap='4'
								opacity={{ md: '.5', base: '1' }}
								cursor='pointer'
								_active={{ opacity: '.4' }}
							>
								<Text display={{ md: 'block', base: 'none' }}>
									{props.placeholder}
								</Text>
								<Text display={{ md: 'none', base: 'block' }}>
									{props.title}
								</Text>
								<FaAngleDown opacity='.5' />
							</Flex>
						</PopoverTrigger>
						<PopoverContent
							w={`248px`}
							mt='19px'
							border='none'
							left='0'
							maxH='260px'
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
								{props.list?.map(el => (
									<Flex
										key={el.id}
										onClick={() => onChange(el)}
										cursor='pointer'
										alignItems='center'
										justifyContent='space-between'
										w='100%'
										h='40px'
										pr='10px'
										rounded='10px'
										pl='4'
										// bg={el.id === props.value?.id ? '#0000000A' : '#FFFFFF'}
									>
										<Flex
											gap='2'
											alignItems='center'
										>
											{!!el?.flag && (
												<Box
													w='24px'
													h='17.14px'
													rounded='3.43px'
													overflow='hidden'
												>
													<Image
														src={el?.flag}
														alt='Flag'
														className='full-image'
														width={24}
														height={4}
													/>
												</Box>
											)}
											<Text
												color='#000000'
												fontSize='14px'
												lineHeight='24px'
											>
												{/* {el[`name_${locale}`]} */}
												{el.name_ru}
											</Text>
										</Flex>
										<Radio
											colorScheme='green'
											// isChecked={el.id === props.value?.id}
										/>
									</Flex>
								))}
							</Stack>
						</PopoverContent>
					</Popover>
				</Flex>
			)}
		</Flex>
	)
}

export default FilterCard
