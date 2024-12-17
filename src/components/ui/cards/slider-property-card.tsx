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
	isInvest?: boolean
}

const SliderPropertyCard = ({ el, isInvest }: SliderPropertyCardProps) => {
	const locale = useTypedLocale()
	const obj = {
		[EnumIntl.ARABIC]: `العائد يصل إلى ${el.profitability} ٪ سنويا`,
		[EnumIntl.ENGLISH]: `Income up to ${el.profitability}% per year`,
		[EnumIntl.RUSSIAN]: `Доходность до ${el.profitability}% в год`
	}
	const profitability = el.profitability ? obj[locale] : ''
	return (
		<Box
			padding='6px'
			rounded='20px'
			bg='#FFFFFF'
			transition='.2s'
		>
			<Link href={DASHBOARD_PAGES.DETAIL(locale, el.slug_en)}>
				<Box
					w={{ md: '272px', base: '250px' }}
					h='140px'
					rounded='15px'
					overflow='hidden'
				>
					<Image
						src={el.main_image || el.main_image_s3 || NoPhoto}
						width={272}
						height={140}
						alt='Image'
						className='full-image'
					/>
				</Box>

				<Box
					px='2'
					mt='10px'
					pb={{ md: '22px', base: '14px' }}
				>
					<Box>
						{!!el.price_usd && (
							<Title whiteSpace='nowrap'>{`${attribute_From[locale]} $${formatToDE(el.price_usd)}`}</Title>
						)}
						{!!el.price_aed && (
							<Title whiteSpace='nowrap'>{`${attribute_From[locale]} ${formatToDE(el.price_aed)} AED`}</Title>
						)}
					</Box>
					<Flex
						mt={{ md: '18px', base: '3' }}
						justifyContent='space-between'
						alignItems='center'
						gap='1'
					>
						<Text
							noOfLines={1}
							fontWeight='400'
							fontSize='14px'
							lineHeight='16.1px'
							color='#000000'
						>
							{`${attribute_From[locale]} ${el.sqmt} m²`}
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
					{isInvest && (
						<Text
							mt='2'
							opacity='.7'
							fontWeight='400'
							fontSize='14px'
							lineHeight='18.7px'
							color='#000000'
						>
							{profitability}
						</Text>
					)}
				</Box>
			</Link>
		</Box>
	)
}

export default SliderPropertyCard
