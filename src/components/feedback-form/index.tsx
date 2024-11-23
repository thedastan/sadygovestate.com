'use client'

import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Radio,
	Stack,
	Text
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { toast } from 'sonner'

import { WHATSAPP_LINK } from '@/constants/admin'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useCountries } from '@/hooks/useCountries'
import useTypedLocale from '@/hooks/useLocale'

import AnimateButton from '../ui/buttons/AnimateButton'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'

import { ICountry } from '@/models/country.model'

const FeedbackForm = () => {
	const [value, setValue] = useState({
		full_name: '',
		phone: '',
		description: '',
		country: {} as Partial<ICountry>
	})
	const { country } = useAppSelector(s => s.storage)
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	const { data } = useCountries()
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

	const onsubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!value.country?.id) {
			toast.error(t('form_submit.country_toast'))
			return
		} else {
			const link = document.createElement('a')
			link.setAttribute('target', '_blank')
			const wh_href =
				WHATSAPP_LINK +
				`?text=${encodeURIComponent(`${t('form_submit.hello')}\n`)}\n
	${encodeURIComponent(`${t('form_submit.user_text')} ${value.country[`name_${locale}`]}\n`)}\n
		${encodeURIComponent(`${t('form_submit.phone')}: ${value.phone}\n`)}\n
		${encodeURIComponent(value.description)}`

			link.href = wh_href

			link.click()
		}
	}

	useEffect(() => {
		if (country?.id) {
			setValue({ ...value, country })
		}
	}, [country])
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

				<form onSubmit={onsubmit}>
					<Stack
						spacing='3'
						mt='30px'
					>
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
										<GrLocation fontSize='18px' />
										<Description
											fontSize='14px'
											lineHeight='17px'
										>
											{value.country?.id
												? `${value.country[`name_${locale}`]}`
												: t('country')}
										</Description>
									</Flex>
									<Box pr='3'>
										<IoIosArrowDown fontSize='18px' />
									</Box>
								</Flex>
							</MenuButton>
							<MenuList>
								{data?.map(el => (
									<MenuItem
										key={el.id}
										onClick={() => setValue({ ...value, country: el })}
										rounded='10px'
										pl='4'
										bg={el.id === value.country?.id ? '#0000000A' : '#FFFFFF'}
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
												{el[`name_${locale}`]}
											</Text>
											<Radio
												colorScheme='green'
												isChecked={el.id === value.country?.id}
											/>
										</Flex>
									</MenuItem>
								))}
							</MenuList>
						</Menu>
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

export default FeedbackForm
