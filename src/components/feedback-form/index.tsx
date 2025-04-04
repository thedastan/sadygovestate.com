import { Box, Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { BsHouseDoor } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { toast } from 'sonner'

import { WHATSAPP_LINK } from '@/constants/admin'

import { useCountries } from '@/hooks/useCountries'
import useTypedLocale from '@/hooks/useLocale'

import { useTypeList } from '../navbar/data'
import AnimateButton from '../ui/buttons/AnimateButton'
import FormSelect from '../ui/inputs/FormSelect'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'

import { IFormSelect, IFormState } from '@/models/other.model'

const FeedbackForm = () => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	const type_list = useTypeList()

	const { data } = useCountries()
	const [value, setValue] = useState<IFormState>({
		full_name: '',
		phone: '',
		message: '',
		country: {} as Partial<IFormSelect>,
		tipo: {} as Partial<IFormSelect>,
		link: ''
	})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const onsubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError(null)

		const formData = {
			full_name: value.full_name,
			phone: value.phone,
			message: value.message,
			country: value.country.id,
			tipo: value.tipo.id,
			link: value.link
		}

		const link = document.createElement('a')
		link.setAttribute('target', '_blank')
		const message = `${t('form_submit.hello')}\n\n${t('form_submit.user_text')} ${value.country.name}\n${t('form_type.placeholder')}: ${value.tipo.name}\n${t('form_submit.phone')}: ${value.phone}\n${value.message}`
		const wa_link = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`

		try {
			const response = await fetch(
				'https://api.admin-sadygovestate.com/property/consult/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				}
			)
			link.href = wa_link
			link.click()

			if (!response.ok) {
				const errorResponse = await response.json()
				console.error('Error response from server:', errorResponse)
				throw new Error(errorResponse.message || 'Failed to send the message')
			}

			const responseData = await response.json()
			console.log('Form submitted successfully', responseData)

			setValue({
				full_name: '',
				phone: '',
				message: '',
				country: {} as Partial<IFormSelect>,
				tipo: {} as Partial<IFormSelect>,
				link: ''
			})
		} catch (error: any) {
			console.error('Error during form submission:', error)
			setError(error.message || 'An error occurred while submitting the form')
		} finally {
			setLoading(false)
		}
	}

	const countries_list: IFormSelect[] | undefined = data?.map(el => {
		return {
			id: el.id,
			name: el[`name_${locale}`]
		}
	})


	

	return (
		<Box
			bg='#F2F2F2'
			w='100%'
			rounded='20px'
			h='100%'
			px='5'
			py={{ md: '124px', base: '46px' }}
			id='feedback-form'
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

				<form onSubmit={onsubmit}>
					<Stack
						spacing='3'
						mt='30px'
					>
						<FormSelect
							icon={BsHouseDoor}
							onChange={tipo => setValue({ ...value, tipo })}
							placeholder={t('form_type.placeholder')}
							value={value.tipo}
							data={type_list} // Ensure `type_list` is defined
						/>
						<FormSelect
							icon={GrLocation}
							onChange={country => setValue({ ...value, country })}
							placeholder={t('country')}
							value={value.country}
							data={countries_list}
						/>
						<InputComponent
							handleChange={e =>
								setValue({ ...value, full_name: e.target.value })
							}
							name='full_name'
							value={value.full_name}
							placeholder={t('placeholder.name')}
						/>
						<PhoneInputComponent
							handleChange={phone => setValue({ ...value, phone })}
							value={value.phone}
						/>
						<InputComponent
							handleChange={e =>
								setValue({ ...value, message: e.target.value })
							}
							name='message'
							value={value.message}
							placeholder={t('placeholder.message')}
							as='textArea'
						/>
					</Stack>

					{error && (
						<Text
							color='red.500'
							mt='4'
						>
							{error}
						</Text>
					)}

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
