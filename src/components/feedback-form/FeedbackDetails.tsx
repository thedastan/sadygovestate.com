'use client'

import { Box,  Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import {  useState } from 'react'

import { WHATSAPP_LINK } from '@/constants/admin'

import { useCountries } from '@/hooks/useCountries'
import useTypedLocale from '@/hooks/useLocale'

import AnimateButton from '../ui/buttons/AnimateButton'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'

import { IFormSelect, IFormState } from '@/models/other.model'
import InputTextArea from '../ui/inputs/InputTextArea'

const FeedbackDetails = () => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles')

	const { data } = useCountries()
	const pathname = usePathname()
	const baseURL = 'https://sadygovestate.com'
	const slug = pathname.split('/').pop()
	const propertyURL = `${baseURL}/${locale}/property/${slug}`

	const [value, setValue] = useState<IFormState>({
		full_name: '',
		phone: '',
		message: t('description_message'),
		country: {} as Partial<IFormSelect>,
		tipo: {} as Partial<IFormSelect>,
		link: propertyURL
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
		const message = `${value.message}\n${t('form_submit.phone')}: ${value.phone}\n${t('form_submit.link')}:${value.link}`
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
				message:  t('description_message'),
				country: {} as Partial<IFormSelect>,
				tipo: {} as Partial<IFormSelect>,
				link: propertyURL
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


// console.log(value,"asim aism aism");


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
						{/* <FormSelect
							icon={BsHouseDoor}
							onChange={tipo => setValue({ ...value, tipo })}
							placeholder={t('form_type.placeholder')}
							value={value.tipo}
							data={type_list}
						/>
						<FormSelect
							icon={GrLocation}
							onChange={country => setValue({ ...value, country })}
							placeholder={t('country')}
							value={value.country}
							data={countries_list}
						/> */}
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
						<InputTextArea
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

export default FeedbackDetails

 