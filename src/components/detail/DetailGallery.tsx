import { Box, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'

import NoPhoto from '@/assets/img/no-photo.png'

import Fancybox from './fancybox'
import DetailVideo from './video-card'
import { IPropertyDetail } from '@/models/property.model'

interface DetailGalleryProps {
	data: IPropertyDetail
}
function DetailGallery({ data }: DetailGalleryProps) {
	const { main_image, main_image_s3, prop_video, prop_image, s3prop_image } =
		data
	return (
		<Fancybox>
			<Box
				h={{ lg: '500px', base: '464px' }}
				w='100%'
				rounded='16px'
				overflow='hidden'
			>
				<Link
					href={main_image || main_image_s3 || ''}
					data-fancybox='gallery'
					h='100%'
					w='100%'
				>
					<Image
						src={main_image || main_image_s3 || NoPhoto}
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
					{prop_image?.map(el => (
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

					{s3prop_image?.map(el => (
						<Link
							key={el.id}
							className='gallery-image'
							href={el.link}
							data-fancybox='gallery'
							h={{ lg: '260px', sm: '180px', base: '113.75px' }}
							minW={{ xl: '250px', sm: '170px', base: '112.5px' }}
							rounded='16px'
							overflow='hidden'
						>
							<Image
								src={el.link || ''}
								alt='Image'
								className='full-image'
								width={257}
								height={260}
							/>
						</Link>
					))}

					{prop_video.map(el => (
						<DetailVideo
							key={el.id}
							youtube_link={el.link}
						/>
					))}
				</Flex>
			</Flex>
		</Fancybox>
	)
}

export default DetailGallery
