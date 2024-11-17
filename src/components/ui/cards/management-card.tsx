import { Box, Divider, Flex } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import { RiInstagramFill } from 'react-icons/ri'

import Description from '../texts/Description'
import Title from '../texts/Title'

export interface IManagementCard {
	image: StaticImageData
	post: string
	duty: string
	full_name: string
}
const ManagementCard = (props: IManagementCard) => {
	return (
		<Box
			px={{ md: '6', base: '4' }}
			pt={{ md: '29px', base: '5' }}
			pb={{ md: '54px', base: '30px' }}
			bg='#F2F2F2'
			rounded='20px'
		>
			<Box
				w='100%'
				h={{ md: '289px', base: '263px' }}
				rounded='12px'
				overflow='hidden'
			>
				<Image
					src={props.image}
					alt='avatar'
					className='full-image'
				/>
			</Box>
			<Title mt={{ md: '7', base: '26px' }}>{props.full_name}</Title>
			<Description
				mt='3'
				opacity='.7'
				maxW='291px'
			>
				{props.post}
			</Description>

			<Flex
				gap='4'
				mt='34px'
			>
				<Flex
					w='40px'
					h='40px'
					rounded='50%'
					bg='#333139'
					justifyContent='center'
					alignItems='center'
					fontSize='22px'
				>
					<RiInstagramFill color='#FFFFFF' />
				</Flex>
			</Flex>
			<Divider
				mt='29px'
				h='1px'
				bg='#333139'
				opacity='.1'
			/>
			<Description
				mt='19px'
				opacity='.7'
			>
				{props.duty}
			</Description>
		</Box>
	)
}

export default ManagementCard
