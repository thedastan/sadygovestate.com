import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { playerActions } from '@/store/slices/player.slice'

import { useAppSelector } from '@/hooks/useAppSelector'

const PlayOnScroll = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const { isPlaying, isPlayButton } = useAppSelector(s => s.player)
	const dispatch = useDispatch()
	const setIsPlaying = (value: boolean) => {
		dispatch(playerActions.setIsPlaying(value))
	}

	useEffect(() => {
		if (isPlayButton) {
			if (isPlaying) {
				audioRef.current?.play()
			} else {
				audioRef.current?.pause()
			}
		}
	}, [isPlaying])
	useEffect(() => {
		const handleScroll = () => {
			if (!isPlayButton && audioRef.current) {
				audioRef.current
					.play()
					.then(() => setIsPlaying(true))
					.catch(err => console.error('Audio playback failed (scroll):', err))
					.finally(() => window.removeEventListener('scroll', handleScroll))
			}
		}

		const handleClick = () => {
			if (audioRef.current) {
				audioRef.current
					.play()
					.then(() => setIsPlaying(true))
					.catch(err => console.error('Audio playback failed (click):', err))
					.finally(() => window.removeEventListener('click', handleClick))
			}
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

		// Загружаем API и устанавливаем обработчики
		window.addEventListener('scroll', handleScroll)
		window.addEventListener('click', handleClick)
		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('click', handleClick)
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [])

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
