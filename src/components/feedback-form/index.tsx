'use client'

import { Box, Stack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useState } from 'react'

import AnimateButton from '../ui/buttons/AnimateButton'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'

const FeedbackForm = () => {
	const [value, setValue] = useState({
		full_name: '',
		phone: '',
		description: '',
		country: ''
	})
	const t = useTranslations('Titles')
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
				<Title32 textAlign='center'>{t('online_consultation')}</Title32>
				<Description
					fontSize='18px'
					lineHeight='26px'
					textAlign='center'
					mt='6px'
				>
					{t('contact_form')}
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

					<AnimateButton
						type='submit'
						mt='30px'
					>
						{t('book_consultation')}
					</AnimateButton>
				</form>
			</Box>
		</Box>
	)
}

export default FeedbackForm
