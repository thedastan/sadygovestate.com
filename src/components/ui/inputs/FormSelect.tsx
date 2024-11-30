import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Radio,
	Text
} from '@chakra-ui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { IconType } from 'react-icons/lib'

import Description from '../texts/Description'

import { IFormSelect } from '@/models/other.model'

interface FormSelectProps {
	placeholder: string
	icon: IconType
	value: Partial<IFormSelect>
	data?: IFormSelect[]
	onChange: (item: IFormSelect) => void
}
const FormSelect = (props: FormSelectProps) => {
	return (
		<Menu closeOnSelect={true}>
			<MenuButton as={Box}>
				<Flex
					h='50px'
					rounded='32px'
					cursor='pointer'
					px='4'
					py='3'
					alignItems='center'
					justifyContent='space-between'
					color='#333139'
					border='1px solid #3331394D'
					bg='#FFFFFF'
				>
					<Flex
						gap='1'
						alignItems='center'
					>
						<props.icon fontSize='18px' />
						<Description
							fontSize='14px'
							lineHeight='17px'
						>
							{props.value?.id ? `${props.value.name}` : props.placeholder}
						</Description>
					</Flex>
					<Box pr='3'>
						<IoIosArrowDown fontSize='18px' />
					</Box>
				</Flex>
			</MenuButton>
			<MenuList>
				{props.data?.map(el => (
					<MenuCard
						onClick={() => props.onChange(el)}
						isActive={el.id === props.value?.id}
						text={el.name}
					/>
				))}
			</MenuList>
		</Menu>
	)
}

interface MenuCardProps {
	onClick: () => void
	isActive: boolean
	text: string
}
function MenuCard({ isActive, onClick, text }: MenuCardProps) {
	return (
		<MenuItem
			onClick={onClick}
			rounded='10px'
			pl='4'
			bg={isActive ? '#0000000A' : '#FFFFFF'}
		>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				w='100%'
			>
				<Text
					color='#000000'
					fontSize='14px'
					fontWeight='400'
					lineHeight='24px'
				>
					{text}
				</Text>
				<Radio
					colorScheme='green'
					isChecked={isActive}
				/>
			</Flex>
		</MenuItem>
	)
}

export default FormSelect
