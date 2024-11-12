import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import FeedbackForm from '@/components/feedback-form'
import ReviewCard from '@/components/ui/cards/review-card'

import ReviewsBg from '@/assets/img/reviews-bg.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Reviews = () => {
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '140px', base: '60px' }}
		>
			<Flex
				gap='5'
				h='700px'
			>
				<Box
					maxW='650px'
					w='100%'
					h='100%'
				>
					<FeedbackForm />
				</Box>
				<Box
					h='100%'
					maxW='829px'
					w='100%'
					rounded='20px'
					overflow='hidden'
					position='relative'
				>
					<Image
						src={ReviewsBg}
						alt='Image'
						className='full-image'
					/>

					<Flex
						position='absolute'
						bottom='5'
						left='0'
						w='100%'
						overflow='hidden'
						pl='5'
					>
						<ReviewCard />
					</Flex>
				</Box>
			</Flex>
		</Container>
	)
}

export default Reviews
