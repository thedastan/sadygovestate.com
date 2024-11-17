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
import Title32 from '../ui/texts/Title32'

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
				padding={{ md: '30px', base: '60px 16px' }}
			>
				<Flex
					rounded='12px'
					overflow='hidden'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Box
						minW='417px'
						bg='#FFFFFF'
						padding={{ md: '32px 30px 27px 32px', base: '30px 21px' }}
					>
						<Title32>Абу-Даби</Title32>

						<Description
							mt='10px'
							fontSize={{ md: '18px', base: '16px' }}
							lineHeight={{ md: '21.78px', base: '19.36px' }}
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

					<Box
						maxW='100%'
						w='100%'
						minH={{ md: '340px', base: '343px' }}
						h={{ md: 'auto', base: '343px' }}
					>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.3424470099835!2d55.274348040869334!3d25.197447618821002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2z0JTRg9Cx0LDQuSDQnNC-0LvQuw!5e0!3m2!1sru!2skg!4v1731564482716!5m2!1sru!2skg&z=20'
							className='full-image'
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							tabIndex={0}
						></iframe>
					</Box>
				</Flex>

				<SimpleGrid
					mt='30px'
					spacing={{ md: '20px 8px', base: '8px 0' }}
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
