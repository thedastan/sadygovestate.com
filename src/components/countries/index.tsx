'use client'

import {
	Box,
	Container,
	Flex,
	ResponsiveValue,
	SimpleGrid,
	Stack,
	Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import { IconType } from 'react-icons/lib'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useOffices } from '@/hooks/useCountries'
import useTypedLocale from '@/hooks/useLocale'

import { SocialMediaIcons } from '../navbar/data'
import Description from '../ui/texts/Description'
import Title32 from '../ui/texts/Title32'

import GoogleMap from './GoogleMap'
import { IOffice } from '@/models/office.model'

const Countries = (props: { mt: ResponsiveValue<string> }) => {
	const locale = useTypedLocale()
	const { country } = useAppSelector(s => s.storage)
	const [activeCity, setActiveCity] = useState<IOffice>()
	const { data, isLoading } = useOffices()

	useEffect(() => {
		if (country.id) {
			const active = data?.find(el => el.country_id === country.id)
			if (active) {
				setActiveCity(active)
			}
		} else {
			if (!!data?.length) {
				setActiveCity(data[0])
			}
		}
	}, [data, country])
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={props.mt}
			px={{ md: '4', base: '0' }}
			id='address'
		>
			<Box
				bg='#F2F2F2'
				rounded={{ md: '20px', base: '0' }}
				padding={{ md: '30px', base: '60px 16px' }}
			>
				<Flex
					rounded='12px'
					overflow='hidden'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Box
						minW={{ sm: '417px', base: '100%' }}
						bg='#FFFFFF'
						padding={{ md: '32px 30px 27px 32px', base: '30px 21px' }}
					>
						{activeCity && (
							<>
								<Title32>{activeCity[`city_${locale}`]}</Title32>

								<Description
									mt='10px'
									fontSize={{ md: '18px', base: '16px' }}
									lineHeight={{ md: '21.78px', base: '19.36px' }}
									opacity='.65'
								>
									{activeCity[`address_${locale}`]}
								</Description>
							</>
						)}
						<Stack
							spacing='3px'
							mt='3'
						>
							<SocialMediaCard
								icon={SocialMediaIcons.INSTAGRAM}
								path='https://www.instagram.com/victor_sadygov_estate/'
								text='@victor_sadygov_estate'
								withoutBorder={true}
							/>
							<SocialMediaCard
								icon={SocialMediaIcons.WHATSAPP}
								path='https://wa.me/971501095666'
								text='+971 50 109 5666'
							/>
							<SocialMediaCard
								icon={SocialMediaIcons.PHONE}
								path='tel:+971501095666'
								text='+971 50 109 5666'
								notBlank={true}
							/>
						</Stack>
					</Box>

					<Box
						maxW='100%'
						w='100%'
						minH={{ md: '340px', base: '343px' }}
						h={{ md: 'auto', base: '343px' }}
					>
						<GoogleMap map_link={activeCity?.map_link} />
					</Box>
				</Flex>

				<SimpleGrid
					mt='30px'
					spacing={{ md: '20px 8px', base: '8px 0' }}
					columns={{ xl: 5, md: 4, sm: 3, base: 2 }}
				>
					{data?.map(el => (
						<CityButtonCard
							key={el.id}
							el={el}
							onClick={() => setActiveCity(el)}
							active={el.id === activeCity?.id}
						/>
					))}
				</SimpleGrid>
			</Box>
		</Container>
	)
}

interface CityButtonCardProps {
	el: IOffice
	active: boolean
	onClick: () => void
}
function CityButtonCard(props: CityButtonCardProps) {
	const locale = useTypedLocale()
	return (
		<Box
			onClick={props.onClick}
			rounded='12px'
			px='4'
			py='3'
			border={props.active ? '1px solid #E6E6E6' : '1px solid #F2F2F2'}
			bg={props.active ? '#FFFFFF' : 'transparent'}
			cursor='pointer'
		>
			<Flex
				justifyContent='space-between'
				alignItems='center'
			>
				<Text
					textTransform='uppercase'
					fontWeight='700'
					fontSize='14px'
					lineHeight='16.1px'
					color='#333139'
				>
					{`${props.el[`country_${locale}`]} (${props.el[`city_${locale}`]})`}
				</Text>
				{props.active && (
					<FaAngleRight
						color='#333139'
						opacity='.7'
					/>
				)}
			</Flex>
			<Description
				noOfLines={2}
				mt='2'
				fontSize='14px'
				lineHeight='16.94px'
				opacity='.65'
			>
				{props.el[`address_${locale}`]}
			</Description>
		</Box>
	)
}

interface SocialMediaCardProps {
	icon: IconType
	path: string
	text: string
	withoutBorder?: boolean
	notBlank?: boolean
}

function SocialMediaCard(props: SocialMediaCardProps) {
	return (
		<Link
			href={props.path}
			target={props.notBlank ? '_self' : '_blank'}
		>
			<Flex
				pl='10px'
				h='43px'
				justifyContent='space-between'
				borderTop={!props.withoutBorder ? '1px solid #0000001a' : 'none'}
			>
				<Flex
					gap='4'
					alignItems='center'
				>
					<props.icon
						color='#333139'
						fontSize='20px'
					/>
					<Description
						fontSize='14px'
						lineHeight='16.94px'
					>
						{props.text}
					</Description>
				</Flex>

				<Box mt='2'>
					<GoArrowUpRight
						color='#000000'
						fontSize='22px'
						opacity='.5'
					/>
				</Box>
			</Flex>
		</Link>
	)
}

export default Countries
