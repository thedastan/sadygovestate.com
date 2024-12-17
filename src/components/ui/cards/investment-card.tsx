import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import NoPhoto from '@/assets/img/no-photo.png'

import { attribute_From } from '@/config/intl-variables'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { formatToDE } from '@/hooks/useCreatorPriceObject'
import useTypedLocale from '@/hooks/useLocale'

import Title from '../texts/Title'

import { IProperty } from '@/models/property.model'
import { EnumIntl } from '@/models/types/intl-types'

interface SliderPropertyCardProps {
	el: IProperty
}

const InvestmentCard = ({ el }: SliderPropertyCardProps) => {
	const locale = useTypedLocale()

	const obj = {
		[EnumIntl.ARABIC]: `العائد يصل إلى ${el.profitability} ٪ سنويا`,
		[EnumIntl.ENGLISH]: `Income up to ${el.profitability}% per year`,
		[EnumIntl.RUSSIAN]: `Доходность до ${el.profitability}% в год`
	}
	const profitability = el.profitability ? obj[locale] : ''
	return (
		<Box
			bg='#FFFFFF'
			padding={{ md: '0', base: '6px' }}
		>
			<Link href={DASHBOARD_PAGES.DETAIL(locale, el.slug_en)}>
				<Box
					w='100%'
					h={{ md: '378px', base: '240px' }}
					rounded='20px'
					overflow='hidden'
				>
					<Image
						src={el.main_image || NoPhoto}
						width={378}
						height={240}
						alt='Image'
						className='full-image'
					/>
				</Box>

				<Box
					px='2'
					mt={{ md: '6', base: '4' }}
					pb={{ md: '0', base: '4' }}
				>
					<Title>{el[`name_${locale}`]}</Title>
					<Box mt={{ md: '19px', base: '3' }}>
						{!!el.price_usd && (
							<Title fontWeight='700'>{`${attribute_From[locale]} $${formatToDE(el.price_usd)}`}</Title>
						)}
						{!!el.price_aed && (
							<Title fontWeight='700'>{`${attribute_From[locale]} ${formatToDE(el.price_aed)} AED`}</Title>
						)}
					</Box>
					<Flex
						justifyContent='space-between'
						alignItems='center'
						flexWrap='wrap'
						gap='1'
						mt={{ md: '19px', base: '3' }}
					>
						<Text
							opacity='.7'
							fontWeight='400'
							fontSize='18px'
							lineHeight='20.7px'
							color='#000000'
						>
							{profitability}
						</Text>
						<Flex
							color='#333139'
							alignItems='center'
							fontWeight='400'
							fontSize='14px'
							lineHeight='16.1px'
							bg='#F2F2F2'
							rounded='100px'
							px={{ md: '14px', base: '2' }}
							py={{ md: '2', base: '6px' }}
						>
							{el[`city_${locale}`]}
						</Flex>
					</Flex>
				</Box>
			</Link>
		</Box>
	)
}

export default InvestmentCard
