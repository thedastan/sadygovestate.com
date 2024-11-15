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

import CharacteristicsCard from './characteristic-card'

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
						<CharacteristicsCard
							icon={CatalogBedIcon}
							text='2'
							isMini={true}
						/>
						<CharacteristicsCard
							icon={CatalogBathroomIcon}
							text='1'
							isMini={true}
						/>
						<CharacteristicsCard
							icon={CatalogArtboardIcon}
							text='2,800 sqft / 3,000 sqmt'
							isMini={true}
						/>
					</Flex>
				</Box>
			</Link>
		</Box>
	)
}

export default CatalogCard
