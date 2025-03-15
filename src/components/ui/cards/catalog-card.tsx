import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import NoPhoto from '@/assets/img/no-photo.png'
import CatalogArtboardIcon from '@/assets/svg/CatalogArtboardIcon'
import CatalogBathroomIcon from '@/assets/svg/CatalogBathroomIcon'
import CatalogBedIcon from '@/assets/svg/CatalogBedIcon'

import { attribute_From } from '@/config/intl-variables'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { formatToDE } from '@/hooks/useCreatorPriceObject'
import useTypedLocale from '@/hooks/useLocale'

import Description from '../texts/Description'
import Title from '../texts/Title'

import CharacteristicsCard from './characteristic-card'
import { IProperty } from '@/models/property.model'

interface CatalogCardProps {
	el: IProperty
}
const CatalogCard = ({ el }: CatalogCardProps) => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	return (
		<Box
			padding='6px'
			w='100%'
			rounded='22px'
			_hover={{ bg: '#EFEFEF' }}
			transition='.2s'
			sx={{
				'&:hover': {
					'.card-flag': { opacity: '1' }
				}
			}}
		>
			<Link href={DASHBOARD_PAGES.DETAIL(locale, el.slug_en)}>
				<Box
					w='100%'
					h='240px'
					rounded='20px'
					overflow='hidden'
					position='relative'
				>
					<Image
						src={el.main_image || el.main_image_s3 || NoPhoto}
						width={345}
						height={240}
						alt='Image'
						className='full-image'
					/>

					<Flex
						position='absolute'
						left='3'
						top='3'
						gap='10px'
					>
						{!!el?.installment && <TypeCard>{t('installments')}</TypeCard>}
						{!!el?.mortgage && <TypeCard>{t('mortgage')}</TypeCard>}
					</Flex>
					{!!el.country_flag && (
						<Box
							position='absolute'
							className='card-flag'
							top='16.57px'
							opacity='0'
							transition='.4s'
							right='14px'
							w='46px'
							h='32.86px'
							rounded='6px'
							overflow='hidden'
						>
							<Image
								src={el.country_flag || ''}
								width={46}
								height={33}
								alt='Flag'
								className='full-image'
							/>
						</Box>
					)}
				</Box>

				<Box
					px='9px'
					mt='5'
					pb='10px'
				>
					<Flex
						justifyContent='space-between'
						alignItems='start'
					>
						<Box>
							{!!el.price_usd && (
								<Title
									fontSize={{ md: '24px', base: '20px' }}
								>{`${attribute_From[locale]} $${formatToDE(el.price_usd)}`}</Title>
							)}
							{!!el.price_aed && (
								<Title
									fontSize={{ md: '24px', base: '20px' }}
								>{`${attribute_From[locale]} ${formatToDE(el.price_aed)} AED`}</Title>
							)}
						</Box>
						<Flex
							gap='6px'
							color='#333139'
							alignItems='center'
						>
							<HiOutlineLocationMarker />
							<Text
								fontWeight='400'
								fontSize='14px'
								lineHeight='16.1px'
							>
								{el[`city_${locale}`]}
							</Text>
						</Flex>
					</Flex>
					<Description
						noOfLines={1}
						mt='18px'
						fontSize='18px'
						lineHeight='21.78px'
					>
						{el[`name_${locale}`]}
					</Description>

					<Flex
						mt='18px'
						gap='1'
						flexWrap={{ md: 'nowrap', base: 'wrap' }}
					>
						{!!el.bed_room && (
							<CharacteristicsCard
								icon={CatalogBedIcon}
								text={el.bed_room}
								isMini={true}
							/>
						)}
						{!!el.bath && (
							<CharacteristicsCard
								icon={CatalogBathroomIcon}
								text={el.bath}
								isMini={true}
							/>
						)}

						{!!(el?.sqft || el?.sqmt) && (
							<CharacteristicsCard
								icon={CatalogArtboardIcon}
								text={[
									el?.sqft ? `${el.sqft} sqft` : '',
									el?.sqmt ? `${el.sqmt} sqmt` : ''
								]
									.filter(Boolean)
									.join(' / ')}
								isMini={true}
							/>
						)}
					</Flex>
				</Box>
			</Link>
		</Box>
	)
}

function TypeCard(props: PropsWithChildren) {
	return (
		<Box
			px='3'
			py='1'
			color='#333139'
			fontSize='14px'
			lineHeight='16.1px'
			letterSpacing='1px'
			fontWeight='400'
			bg='#FFFFFF'
			rounded='100px'
			h='24px'
		>
			{props.children}
		</Box>
	)
}

export default CatalogCard
