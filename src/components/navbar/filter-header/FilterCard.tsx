import {
	Flex,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Radio,
	Stack,
	Text,
	useDisclosure,
	useOutsideClick
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

import { dm_sans } from '@/constants/fonts/fonts'

interface FilterCardProps {
	icon: () => JSX.Element
	title: string
	placeholder: string
	list: any[]
}
const FilterCard = (props: FilterCardProps) => {
	const ref = useRef<any>(null)
	const { isOpen, onOpen, onClose } = useDisclosure()

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
							opacity='.5'
							cursor='pointer'
							_active={{ opacity: '.4' }}
						>
							<Text>{props.placeholder}</Text>
							<FaAngleDown />
						</Flex>
					</PopoverTrigger>
					<PopoverContent
						// w={`${ref.current?.offsetWidth}px`}
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
							{props.list.map(el => (
								<Flex
									key={el}
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
										color='#000000'
										fontSize='14px'
										lineHeight='24px'
									>
										{el}
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
		</Flex>
	)
}

export default FilterCard
