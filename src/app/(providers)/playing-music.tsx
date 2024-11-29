import { useEffect, useRef, useState } from 'react'

const PlayOnScroll = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			audioRef.current
				?.play()
				.then(() => setIsPlaying(true)) // Если звук начал играть
				.catch(err => console.error('Audio playback failed:', err))

			window.removeEventListener('scroll', handleScroll)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div>
			<audio
				ref={audioRef}
				src='/music/main-music.mp3'
				preload='auto'
				loop
				autoPlay
			/>
			{isPlaying && <p>Звук включён 🎵</p>}
		</div>
	)
}

export default PlayOnScroll
