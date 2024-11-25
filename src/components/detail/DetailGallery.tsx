import { Box, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'

import NoPhoto from '@/assets/img/no-photo.png'

import Fancybox from './fancybox'
import { PropImage } from '@/models/property.model'

interface DetailGalleryProps {
	images: PropImage[]
	main_image: string | undefined
}
function DetailGallery({ images, main_image }: DetailGalleryProps) {
	return (
		<Fancybox>
			<Box
				h={{ lg: '500px', base: '464px' }}
				w='100%'
				rounded='16px'
				overflow='hidden'
			>
				<Link
					href={main_image || ''}
					data-fancybox='gallery'
					h='100%'
					w='100%'
				>
					<Image
						src={main_image || NoPhoto}
						alt='Image'
						className='full-image'
						width={800}
						height={500}
					/>
				</Link>
			</Box>
			<Flex
				mt='14px'
				overflow='auto'
				className='unscroll'
				w='100%'
			>
				<Flex
					gap='14px'
					className='gallery'
				>
					{images.map(el => (
						<Link
							key={el.id}
							className='gallery-image'
							href={el.image}
							data-fancybox='gallery'
							h={{ lg: '260px', sm: '180px', base: '113.75px' }}
							minW={{ xl: '250px', sm: '170px', base: '112.5px' }}
							rounded='16px'
							overflow='hidden'
						>
							<Image
								src={el.image || ''}
								alt='Image'
								className='full-image'
								width={257}
								height={260}
							/>
						</Link>
					))}
				</Flex>
			</Flex>
		</Fancybox>
	)
}

export default DetailGallery
