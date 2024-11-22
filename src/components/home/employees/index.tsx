'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'
import useTypedLocale from '@/hooks/useLocale'
import { useEmployees } from '@/hooks/usePersons'

const Employees = () => {
	const { data, isLoading } = useEmployees()
	const locale = useTypedLocale()
	const { clientWidth } = useFullWindowSize()
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent
					my={{ md: '140px', base: '60px' }}
					maxW='991px'
					mx='auto'
					textAlign='center'
					query={['инвестировать', 'по всему миру', 'вашим целям']}
				>
					Мы помогаем выгодно инвестировать в недвижимость по всему миру —
					подбирая объекты, идеально отвечающие вашим целям и образу жизни.
				</TitleComponent>
			</Container>
			<Flex
				overflow='auto'
				className='unscroll'
			>
				<Flex
					h={{ md: '509px', base: '317px' }}
					gap={{ md: '14px', base: '8.74px' }}
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					{data?.map((el, idx) => (
						<Flex
							key={el.id}
							h='100%'
							w={{ md: '289px', base: '180.46px' }}
							alignItems={idx % 2 === 0 ? 'end' : 'start'}
						>
							<Box
								w='100%'
								h={{ md: '460px', base: '287px' }}
								position='relative'
								rounded={{ md: '20px', base: '12.5px' }}
								overflow='hidden'
								sx={{
									'&:hover': {
										'.employe-shadow': {
											transform: 'translateY(0)'
										},
										'.employe-img': {
											transform: 'scale(1.07)'
										}
									}
								}}
							>
								<Box
									w='100%'
									h='100%'
									className='employe-img'
									transition='.6s'
								>
									<Image
										src={el.image}
										width={289}
										height={460}
										alt='image'
										className='full-image'
									/>
								</Box>

								<Flex
									position='absolute'
									className='employe-shadow'
									transform='translateY(130%)'
									transition='.6s'
									bottom='0'
									left='0'
									right='0'
									w='100%'
									h={{ md: '175px', base: '110px' }}
									bg='linear-gradient(0deg,#000000 0%, rgba(0, 0, 0, 0) 100%)'
									alignItems='end'
									zIndex='2'
								>
									<Box padding={{ md: '5', base: '3' }}>
										<Title
											fontSize={{ md: '20px', base: '18px' }}
											lineHeight={{ md: '23px', base: '20px' }}
											color='#FFFFFF'
										>
											{el[`full_name_${locale}`]}
										</Title>
										<Description
											mt='6px'
											color='#FFFFFF'
											fontSize={{ md: '16px', base: '12px' }}
											lineHeight={{ md: '19.36px', base: '16px' }}
											opacity='.7'
										>
											{el[`job_${locale}`]}
										</Description>
									</Box>
								</Flex>
							</Box>
						</Flex>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}

export default Employees
