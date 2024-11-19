import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'

const PropertySkeleton = () => {
	return (
		<Box padding='1'>
			<Skeleton
				h='240px'
				rounded='20px'
			/>

			<SkeletonText
				noOfLines={2}
				mt='5'
				skeletonHeight='2'
				px='1'
			/>

			<SkeletonText
				maxW='90%'
				noOfLines={1}
				mt='3'
				skeletonHeight='2'
				px='1'
			/>
		</Box>
	)
}

export default PropertySkeleton
