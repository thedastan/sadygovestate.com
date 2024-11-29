import {
	Box,
	Flex,
	Image,
	Modal,
	ModalContent,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'

import { getYouTubeVideoKey } from '@/config/helpers'

export default function DetailVideo({
	youtube_link
}: {
	youtube_link: string
}) {
	const { onOpen, onClose, isOpen } = useDisclosure()
	const videoKey = youtube_link ? getYouTubeVideoKey(youtube_link) : ''
	return (
		<>
			<Box
				onClick={onOpen}
				h={{ lg: '260px', sm: '180px', base: '113.75px' }}
				minW={{ xl: '250px', sm: '170px', base: '112.5px' }}
				rounded='16px'
				overflow='hidden'
				position='relative'
			>
				<Image
					src={`//img.youtube.com/vi/${videoKey}/sddefault.jpg`}
					alt='Image'
					className='full-image'
					width={257}
					height={260}
				/>
				<Flex
					position='absolute'
					left='0'
					top='0'
					bottom='0'
					right='0'
					justifyContent='center'
					alignItems='center'
					bg='rgba(51, 49, 57, .5)'
				>
					<FaPlay
						// color='#c4302b'
						color='#FFFFFF'
						fontSize='32px'
					/>
				</Flex>
			</Box>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='3xl'
			>
				<ModalOverlay />
				<ModalContent
					bg='transparent'
					h={{ md: '450px', base: '400px' }}
					px={{ sm: '0', base: '1' }}
					rounded={{sm:'0', base:'10px'}}
					overflow='hidden'
				>
					<iframe
						className='full-image'
						src={
							youtube_link?.includes('embed')
								? youtube_link
								: `https://www.youtube.com/embed/${getYouTubeVideoKey(videoKey)}`
						}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</ModalContent>
			</Modal>
		</>
	)
}
