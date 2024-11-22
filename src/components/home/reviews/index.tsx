'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import FeedbackForm from '@/components/feedback-form'
import ReviewCard from '@/components/ui/cards/review-card'

import ReviewsBg from '@/assets/img/reviews-bg.jpeg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useReviews } from '@/hooks/usePersons'

const Reviews = () => {
	const { data, isLoading } = useReviews()
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '140px', base: '60px' }}
			px={{ sm: '4', base: '0' }}
			id='reviews'
		>
			<Flex
				gap={{ md: '5', base: '37px' }}
				h={{ lg: '700px', base: 'auto' }}
				flexDirection={{ lg: 'row', base: 'column' }}
				alignItems={{ lg: 'start', base: 'center' }}
			>
				<Box
					maxW='650px'
					w='100%'
					h='100%'
				>
					<FeedbackForm />
				</Box>
				<Box
					h='700px'
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
						overflow='auto'
						className='unscroll'
					>
						<Flex
							gap='5'
							px={{ md: '20px 0', base: '4' }}
						>
							{data?.map(el => (
								<ReviewCard
									key={el.id}
									el={el}
								/>
							))}
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Container>
	)
}

export default Reviews
