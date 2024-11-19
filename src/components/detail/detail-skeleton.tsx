import { Box, Container, Flex, Skeleton, SkeletonText } from '@chakra-ui/react'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const DetailSkeleton = () => {
	const Title = (
		<>
			<SkeletonText
				noOfLines={2}
				skeletonHeight={4}
			/>
			<SkeletonText
				noOfLines={1}
				w='40%'
				mt='4'
				skeletonHeight={2}
			/>
		</>
	)
	return (
		<Container maxW={CONTAINER_WIDTH}>
			<Flex
				gap={{ xl: '52px', md: '24px', base: '34px' }}
				flexDirection={{ lg: 'row', base: 'column-reverse' }}
			>
				<Box
					maxW='650px'
					w={{ xl: '650px', base: '100%' }}
				>
					<Box display={{ md: 'block', base: 'none' }}>{Title}</Box>

					<Flex
						gap='4'
						mt={{ md: '8', base: '0' }}
					>
						<SkeletonText
							noOfLines={2}
							maxW='25%'
							w='100%'
							skeletonHeight={2}
						/>
						<SkeletonText
							noOfLines={2}
							maxW='25%'
							w='100%'
							skeletonHeight={2}
						/>
						<SkeletonText
							noOfLines={2}
							maxW='25%'
							w='100%'
							skeletonHeight={2}
						/>
					</Flex>

					<Flex
						gap={{ md: '2', base: '6px' }}
						mt='40px'
						flexWrap='wrap'
					>
						<Skeleton
							w='140px'
							h='40px'
							rounded='100px'
						/>
						<Skeleton
							w='140px'
							h='40px'
							rounded='100px'
						/>
						<Skeleton
							w='140px'
							h='40px'
							rounded='100px'
						/>
						<Skeleton
							w='140px'
							h='40px'
							rounded='100px'
						/>
					</Flex>

					<SkeletonText
						mt='10'
						noOfLines={4}
						skeletonHeight={2}
						gap='4'
					/>

					<Box
						bg='rgba(242, 242, 242, .4)'
						rounded='14px'
						padding='6'
						mt='10'
					>
						<SkeletonText
							noOfLines={1}
							skeletonHeight={2}
							mb='4'
						/>
						<SkeletonText
							noOfLines={1}
							skeletonHeight={2}
							mb='4'
						/>
						<SkeletonText
							noOfLines={1}
							skeletonHeight={2}
							mb='4'
						/>
						<SkeletonText
							noOfLines={1}
							skeletonHeight={2}
						/>
					</Box>
				</Box>

				<Box
					maxW='800px'
					w='100%'
				>
					<Box
						display={{ md: 'none', base: 'block' }}
						mb='4'
					>
						{Title}
					</Box>
					<Skeleton
						h={{ lg: '500px', base: '464px' }}
						rounded='16px'
						w='100%'
					/>
				</Box>
			</Flex>
		</Container>
	)
}

export default DetailSkeleton
