import { Box, Flex, Stack, Textarea } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

export interface IInputComponentProps {
	name?: string
	placeholder?: string
	value?: string
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	required?: boolean
	title?: string
}

const limit = 100

const TextAreaComponent = ({
	name,
	placeholder,
	value = '',
	handleChange,
	required = true,
	title
}: IInputComponentProps) => {
	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.length <= limit) {
			handleChange(e)
		}
	}
	return (
		<Stack mb='4'>
			<Textarea
				onChange={onChange}
				variant='none'
				value={value}
				name={name}
				rounded='16px'
				placeholder={placeholder}
				pt='4'
				h='108px'
				w='100%'
				border='1px solid #1A1D201F'
				bg='transparent'
				fontSize='16px'
				px='5'
				fontWeight='400'
				lineHeight='22px'
				color='#232D37'
				_placeholder={{
					opacity: '.7'
				}}
				isRequired={required}
				autoFocus={false}
			/>

			<Flex justifyContent='start'>
				<Box
					px='3.5px'
					py='1.5px'
					bg='#F5F5F5'
					rounded='5px'
					lineHeight='21px'
					fontWeight='600'
					fontSize='12px'
					color={value.length > 95 ? '#F54135' : '#232D37'}
				>
					{value?.length}/{limit}
				</Box>
			</Flex>
		</Stack>
	)
}

export default TextAreaComponent
