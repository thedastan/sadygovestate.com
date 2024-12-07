'use client'

import { Box, Flex, MenuItem, Radio, Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { BsHouseDoor } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useCountries } from '@/hooks/useCountries'
import useTypedLocale from '@/hooks/useLocale'

import { useTypeList } from '../navbar/data'
import AnimateButton from '../ui/buttons/AnimateButton'
import FormSelect from '../ui/inputs/FormSelect'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'

import { useForm } from './actions'
import { IFormSelect, IFormState } from '@/models/other.model'

const FeedbackForm = () => {
	const [value, setValue] = useState<IFormState>({
		full_name: '',
		phone: '',
		description: '',
		country: {} as Partial<IFormSelect>,
		type: {} as Partial<IFormSelect>
	})
	const { country, type_service } = useAppSelector(s => s.storage)
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	const { data } = useCountries()
	const type_list = useTypeList()
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

	const { onSend } = useForm(() =>
		setValue({ ...value, full_name: '', phone: '' })
	)
	const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSend(value)
	}

	const countries_list: IFormSelect[] | undefined = data?.map(el => {
		return {
			id: el.id,
			name: el[`name_${locale}`]
		}
	})

	useEffect(() => {
		if (country?.id) {
			setValue({ ...value, country })
		}

		if (type_service.id) {
			setValue({ ...value, type: type_service })
		}
	}, [country, type_service])
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
							onChange={type => setValue({ ...value, type })}
							placeholder={t('form_type.placeholder')}
							value={value.type}
							data={type_list}
						/>
						<FormSelect
							icon={GrLocation}
							onChange={country => setValue({ ...value, country })}
							placeholder={t('country')}
							value={value.country}
							data={countries_list}
						/>

						<InputComponent
							handleChange={handleChange}
							name='full_name'
							value={value.full_name}
							placeholder={t('placeholder.name')}
						/>
						<PhoneInputComponent
							handleChange={phone => setValue({ ...value, phone })}
							value={value.phone}
						/>
						<InputComponent
							handleChange={handleChange}
							name='description'
							value={value.description}
							placeholder={t('placeholder.message')}
							as='textArea'
							required={false}
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

export default FeedbackForm
