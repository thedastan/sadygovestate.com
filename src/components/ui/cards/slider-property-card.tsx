import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { attribute_From } from '@/config/intl-variables'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { formatToDE } from '@/hooks/useCreatorPriceObject'
import useTypedLocale from '@/hooks/useLocale'

import Title from '../texts/Title'

import { IProperty } from '@/models/property.model'

interface SliderPropertyCardProps {
	el: IProperty
}

const SliderPropertyCard = ({ el }: SliderPropertyCardProps) => {
	const locale = useTypedLocale()
	return (
		<Box
			padding='6px'
			rounded='20px'
			bg='#FFFFFF'
			transition='.2s'
		>
			<Link href={DASHBOARD_PAGES.DETAIL(locale, el[`slug_${locale}`])}>
				<Box
					w={{ md: '272px', base: '250px' }}
					h='140px'
					rounded='15px'
					overflow='hidden'
				>
					<Image
						src={el.main_image}
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
					<Flex
						justifyContent='space-between'
						alignItems='center'
						gap='1'
					>
						<Title whiteSpace='nowrap'>{`${attribute_From[locale]} $${formatToDE(el.price)}`}</Title>
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
					<Text
						noOfLines={1}
						fontWeight='400'
						mt={{ md: '18px', base: '3' }}
						fontSize='14px'
						lineHeight='16.1px'
						color='#000000'
					>
						{`${attribute_From[locale]} ${el.sqmt} m²`}
					</Text>
				</Box>
			</Link>
		</Box>
	)
}

export default SliderPropertyCard
