'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import Employee1 from '@/assets/persons/employee-1.png'
import Employee2 from '@/assets/persons/employee-2.png'
import Employee3 from '@/assets/persons/employee-3.png'
import Employee4 from '@/assets/persons/employee-4.png'
import Employee5 from '@/assets/persons/employee-5.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'

const Employees = () => {
	const list = [Employee1, Employee2, Employee3, Employee4, Employee5]
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
					{list.map((image, idx) => (
						<Flex
							h='100%'
							w={{ md: '289px', base: '180.46px' }}
							alignItems={idx % 2 === 0 ? 'end' : 'start'}
						>
							<Box
								key={idx}
								w='100%'
								h={{ md: '460px', base: '287px' }}
								rounded='20px'
								overflow='hidden'
							>
								<Image
									src={image}
									alt='image'
									className='full-image'
								/>
							</Box>
						</Flex>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}

export default Employees
