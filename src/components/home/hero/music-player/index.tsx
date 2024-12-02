import { Box, Flex } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import { playerActions } from '@/store/slices/player.slice'

import { useAppSelector } from '@/hooks/useAppSelector'

const MusicPlayer = () => {
	const dispatch = useDispatch()
	const audioRef = useRef<HTMLDivElement>(null)
	const { isPlaying } = useAppSelector(s => s.player)
	const onPlay = () => {
		dispatch(playerActions.setIsPlayButton(true))
		dispatch(playerActions.setIsPlaying(true))
	}
	const onPause = () => {
		dispatch(playerActions.setIsPlaying(false))
		dispatch(playerActions.setIsPlayButton(true))
	}

	return (
		<Flex
			position='absolute'
			right='5'
			top='4'
			zIndex='10'
			gap='3'
			alignItems='center'
		>
			<Flex
				hidden={!isPlaying}
				className='music-player'
				alignItems='center'
				gap='1'
			>
				{[1, 2, 3, 4, 5, 6, 7, 8, 10].map(item => (
					<Box
						key={item}
						w='2px'
						bg='#FFFFFF'
						className={`music-player-item${item}`}
					/>
				))}
			</Flex>

			<Box
				cursor='pointer'
				color='#FFFFFF'
				fontSize='20px'
			>
				{isPlaying ? (
					<Box
						onClick={onPause}
						ref={audioRef}
					>
						<FaPause />
					</Box>
				) : (
					<FaPlay onClick={onPlay} />
				)}
			</Box>
		</Flex>
	)
}

export default MusicPlayer
