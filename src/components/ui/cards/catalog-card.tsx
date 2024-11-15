import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import DefImage from '@/assets/img/slider-image.jpeg'
import CatalogArtboardIcon from '@/assets/svg/CatalogArtboardIcon'
import CatalogBathroomIcon from '@/assets/svg/CatalogBathroomIcon'
import CatalogBedIcon from '@/assets/svg/CatalogBedIcon'

import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'

import Description from '../texts/Description'
import Title from '../texts/Title'

const CatalogCard = () => {
	const locale = useTypedLocale()
	return (
		<Box padding='6px'>
			<Link href={DASHBOARD_PAGES.DETAIL(locale, 1)}>
				<Box
					w='100%'
					h='240px'
					rounded='20px'
					overflow='hidden'
				>
					<Image
						src={DefImage}
						alt='Image'
						className='full-image'
					/>
				</Box>

				<Box
					px='9px'
					mt='5'
					pb='10px'
				>
					<Flex
						justifyContent='space-between'
						alignItems='center'
					>
						<Title>от $200,000</Title>
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
								Дубаи
							</Text>
						</Flex>
					</Flex>

					<Description
						mt='18px'
						fontSize='18px'
						lineHeight='21.78px'
					>
						Palm Jumeirah или Downtown Dubai
					</Description>

					<Flex
						mt='18px'
						gap='1'
						justifyContent='space-between'
					>
						<GrayCatalogCard
							icon={CatalogBedIcon}
							text='2'
						/>
						<GrayCatalogCard
							icon={CatalogBathroomIcon}
							text='1'
						/>
						<GrayCatalogCard
							icon={CatalogArtboardIcon}
							text='2,800 sqft / 3,000 sqmt'
						/>
					</Flex>
				</Box>
			</Link>
		</Box>
	)
}

interface GrayCatalogCardProps {
	icon: () => JSX.Element
	text: string
}
function GrayCatalogCard(props: GrayCatalogCardProps) {
	return (
		<Flex
			alignItems='center'
			px='3'
			py='1'
			rounded='100px'
			h='28px'
			gap='6px'
			bg='#F2F2F2'
		>
			<props.icon />
			<Text
				fontWeight='400'
				fontSize='14px'
				lineHeight='16.1px'
				letterSpacing='1px'
				color='#333139'
				whiteSpace='nowrap'
			>
				{props.text}
			</Text>
		</Flex>
	)
}

export default CatalogCard
