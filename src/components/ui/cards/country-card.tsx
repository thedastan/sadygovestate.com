import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { filterActions } from '@/store/slices/storage-slice'

import useTypedLocale from '@/hooks/useLocale'

import Title from '../texts/Title'

import { ICountry } from '@/models/country.model'

interface CountryCardProps {
	el: ICountry
}
const CountryCard = ({ el }: CountryCardProps) => {
	const locale = useTypedLocale()
	const dispatch = useDispatch()
	const cities_name = el.cities?.map(el => el[`name_${locale}`])

	const getCountry = () => {
		dispatch(filterActions.setCountry(el))
	}
	const total_properties = el.cities?.reduce(
		(acc, el) => (acc += el.total_properties),
		0
	)
	return (
		<Flex
			flexDirection='column'
			alignItems='center'
		>
			<Box
				rounded='50%'
				overflow='hidden'
				position='relative'
				sx={{
					'&:hover': {
						'.country-card': {
							opacity: '1'
						},
						'.country-img': {
							transform: 'scale(1.1)'
						}
					}
				}}
			>
				<Box
					w={{ md: '260px', base: '180px' }}
					h={{ md: '260px', base: '180px' }}
					className='country-img'
					transition='.5s'
				>
					<Image
						src={el.image}
						width={260}
						height={260}
						alt='Image'
						className='full-image'
					/>
				</Box>
				<Flex
					position='absolute'
					className='country-card'
					opacity='0'
					transition='.5s'
					left='0'
					top='0'
					bottom='0'
					right='0'
					justifyContent='center'
					alignItems='center'
					bg='#00000066'
				>
					<Link href={DASHBOARD_PAGES.CATALOG(locale)}>
						<Flex
							onClick={getCountry}
							flexDirection='column'
							alignItems='center'
							gap='14px'
							_hover={{ textDecoration: 'underline', color: '#FFFFFF' }}
						>
							<Box
								w='56px'
								h='40px'
								rounded='4px'
								overflow='hidden'
							>
								<Image
									src={el.flag}
									width={56}
									height={40}
									alt='Image'
									className='full-image'
								/>
							</Box>
							<Flex
								fontWeight='700'
								fontSize='18px'
								color='#FFFFFF'
								lineHeight='20.7px'
								gap='1'
								alignItems='center'
							>
								Смотреть
								<BsArrowRightShort fontSize='28px' />
							</Flex>
						</Flex>
					</Link>
				</Flex>
			</Box>
			<Title
				mt={{ md: '5', base: '3' }}
				fontSize={{ md: '24px', base: '18px' }}
				lineHeight={{ md: '27.6px', base: '20.7px' }}
				fontWeight='400'
				letterSpacing='auto'
				textAlign='center'
			>
				{`${el[`name_${locale}`]}, ${cities_name?.join('/')}`}
			</Title>
			<Text
				mt={{ md: '3', base: '2.5' }}
				fontSize={{ md: '18px', base: '14px' }}
				lineHeight={{ md: '20.7px', base: '16.1px' }}
				fontWeight='400'
				color='#333139'
				opacity='.7'
			>
				{total_properties} предложений
			</Text>
		</Flex>
	)
}

export default CountryCard
