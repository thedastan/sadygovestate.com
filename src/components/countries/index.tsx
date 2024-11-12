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
import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import { IconType } from 'react-icons/lib'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { SocialMediaIcons } from '../navbar/data'
import Description from '../ui/texts/Description'

const Countries = (props: { mt: ResponsiveValue<string> }) => {
	const [activeCity, setActiveCity] = useState(0)
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={props.mt}
			px={{ md: '4', base: '0' }}
		>
			<Box
				bg='#F2F2F2'
				rounded={{ md: '20px', base: '0' }}
				padding='30px'
			>
				<Flex
					rounded='12px'
					overflow='hidden'
				>
					<Box
						minW='417px'
						bg='#FFFFFF'
						padding={'32px 30px 27px 32px'}
					>
						<Text
							fontSize='32px'
							lineHeight='36.8px'
							color='#333139'
						>
							Абу-Даби
						</Text>
						<Description
							mt='10px'
							fontSize='18px'
							lineHeight='21.78px'
							opacity='.65'
						>
							The Opus by OMNIYAT, Office 201, Al Amal St - Business Bay - Dubai
						</Description>
						<Stack
							spacing='3px'
							mt='3'
						>
							<SocialMediaCard
								icon={SocialMediaIcons.INSTAGRAM}
								path=''
								text='@nikaestate.moscow'
								withoutBorder={true}
							/>
							<SocialMediaCard
								icon={SocialMediaIcons.TELEGRAM}
								path=''
								text='@moskvadorogaya'
							/>
							<SocialMediaCard
								icon={SocialMediaIcons.WHATSAPP}
								path=''
								text='+971 54 204 4777'
							/>
							<SocialMediaCard
								icon={SocialMediaIcons.PHONE}
								path=''
								text='+971 54 204 4777'
								notBlank={true}
							/>
						</Stack>
					</Box>
				</Flex>

				<SimpleGrid
					mt='30px'
					spacing='20px 8px'
					columns={{ xl: 5, md: 4, sm: 3, base: 2 }}
				>
					{Array(15)
						.fill(0)
						.map((el, idx) => (
							<CityButtonCard
								key={idx}
								onClick={() => setActiveCity(idx)}
								title='ОАЭ (АБУ-ДАБИ, ДУБАЙ)'
								subtitle='The Opus by OMNIYAT, Office 201, Al Amal St - Business Bay - Dubai'
								active={activeCity === idx}
							/>
						))}
				</SimpleGrid>
			</Box>
		</Container>
	)
}

interface CityButtonCardProps {
	title: string
	subtitle: string
	active: boolean
	onClick: () => void
}
function CityButtonCard(props: CityButtonCardProps) {
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
					{props.title}
				</Text>
				{props.active && (
					<FaAngleRight
						color='#333139'
						opacity='.7'
					/>
				)}
			</Flex>
			<Description
				mt='2'
				fontSize='14px'
				lineHeight='16.94px'
				opacity='.65'
			>
				{props.subtitle}
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
