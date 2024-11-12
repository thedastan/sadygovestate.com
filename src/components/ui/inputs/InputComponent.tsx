'use client'

import { Input, Textarea } from '@chakra-ui/react'

export interface IInputComponentProps {
	name?: string
	placeholder?: string
	value?: string
	handleChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void
	required?: boolean
	as?: 'input' | 'textArea'
}

const InputComponent = ({
	name,
	placeholder,
	value,
	handleChange,
	as = 'input',
	required = true
}: IInputComponentProps) => {
	return as === 'input' ? (
		<Input
			onChange={handleChange}
			variant='none'
			value={value}
			name={name}
			rounded='32px'
			placeholder={placeholder}
			h='50px'
			w='100%'
			border='1px solid #3331394D'
			bg='#FFFFFF'
			fontSize='16px'
			px='14px'
			fontWeight='400'
			lineHeight='16.94px'
			color='#333139'
			_placeholder={{
				opacity: '.7',
				fontSize: '14px'
			}}
			isRequired={required}
		/>
	) : (
		<Textarea
			onChange={handleChange}
			variant='none'
			value={value}
			name={name}
			rounded='20px'
			placeholder={placeholder}
			pt='4'
			h='72px'
			maxH='150px'
			w='100%'
			border='1px solid #3331394D'
			bg='#FFFFFF'
			fontSize='16px'
			px='5'
			fontWeight='400'
			lineHeight='16.94px'
			color='#333139'
			_placeholder={{
				opacity: '.7',
				fontSize: '14px'
			}}
			isRequired={required}
		/>
	)
}

export default InputComponent
