'use client'

import { Box, Stack, Text } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'

import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'
import Description from '../ui/texts/Description'

const FeedbackForm = () => {
	const [value, setValue] = useState({
		full_name: '',
		phone: '',
		description: '',
		country: ''
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

	return (
		<Box
			bg='#F2F2F2'
			w='100%'
			rounded='20px'
			h='100%'
			px='5'
			py={{ md: '124px', base: '46px' }}
		>
			<Box
				maxW='383px'
				w='100%'
				mx='auto'
			>
				<Text
					fontWeight='400'
					lineHeight='36.8px'
					fontSize='32px'
					color='#333139'
					textAlign='center'
				>
					Онлайн-консультация
				</Text>
				<Description
					fontSize='18px'
					lineHeight='26px'
					textAlign='center'
					mt='6px'
				>
					Форма для связи с менеджером
				</Description>

				<form>
					<Stack
						spacing='3'
						mt='30px'
					>
						<InputComponent
							handleChange={handleChange}
							name='country'
							value={value.country}
							placeholder='Страна'
						/>
						<InputComponent
							handleChange={handleChange}
							name='full_name'
							value={value.full_name}
							placeholder='Имя'
						/>
						<PhoneInputComponent
							handleChange={phone => setValue({ ...value, phone })}
							value={value.phone}
						/>
						<InputComponent
							handleChange={handleChange}
							name='description'
							value={value.description}
							placeholder='Сообщение'
							as='textArea'
						/>
					</Stack>
				</form>
			</Box>
		</Box>
	)
}

export default FeedbackForm
