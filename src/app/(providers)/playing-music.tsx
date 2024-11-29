import { useEffect, useRef, useState } from 'react'

const PlayOnScroll = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		// Функция для загрузки YouTube IFrame Player API
		const loadYouTubeAPI = () => {
			if (
				!document.querySelector(
					'script[src="https://www.youtube.com/iframe_api"]'
				)
			) {
				const tag = document.createElement('script')
				tag.src = 'https://www.youtube.com/iframe_api'
				document.body.appendChild(tag)
			}
		}

		// Обработчик сообщений от YouTube
		const handleYouTubeMessage = (event: MessageEvent) => {
			if (
				typeof event.data === 'string' &&
				event.data.includes('PLAYER_STATE_CHANGE')
			) {
				const state = parseInt(event.data.split(':')[1], 10)
				if (state === 1) {
					// PLAYING
					audioRef.current?.pause()
					setIsPlaying(false)
				} else if (state === 0 || state === 2) {
					// ENDED or PAUSED
					audioRef.current?.play().catch(() => {})
					setIsPlaying(true)
				}
			}
		}

		// Обработчик прокрутки
		const handleScroll = () => {
			audioRef.current
				?.play()
				.then(() => setIsPlaying(true))
				.catch(err => console.error('Audio playback failed:', err))

			window.removeEventListener('scroll', handleScroll)
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
		loadYouTubeAPI()
		window.addEventListener('scroll', handleScroll)
		window.addEventListener('message', handleYouTubeMessage)
		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('message', handleYouTubeMessage)
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [])

	return (
		<audio
			ref={audioRef}
			src='/music/main-music.mp3'
			preload='auto'
			loop
			autoPlay
		/>
	)
}

export default PlayOnScroll
