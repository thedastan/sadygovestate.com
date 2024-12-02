import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { playerActions } from '@/store/slices/player.slice'

import { useAppSelector } from '@/hooks/useAppSelector'

const PlayOnScroll = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const { isPlaying } = useAppSelector(s => s.player)
	const dispatch = useDispatch()
	const setIsPlaying = (value: boolean) => {
		dispatch(playerActions.setIsPlaying(value))
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsPlaying(true)
			// if (!isPlaying && audioRef.current) {
			// 	audioRef.current
			// 		.play()
			// 		.then(() => setIsPlaying(true))
			// 		.catch(err => console.error('Audio playback failed:', err))
			// }
		}

		// Обработчик изменения видимости страницы
		const handleVisibilityChange = () => {
			if (document.hidden) {
				audioRef.current?.pause()
				setIsPlaying(false)
			} else {
				audioRef.current
					?.play()
					.then(() => setIsPlaying(true))
					.catch(() => {})
			}
		}

		if (isPlaying) {
			audioRef.current?.play().catch(() => {})
		} else {
			audioRef.current?.pause()
		}

		// Загружаем API и устанавливаем обработчики
		window.addEventListener('scroll', handleScroll)
		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [isPlaying])

	return (
		<div>
			<audio
				ref={audioRef}
				src='/music/main-music.mp3'
				preload='auto'
				loop
			/>
		</div>
	)
}

export default PlayOnScroll
