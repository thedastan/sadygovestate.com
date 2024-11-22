import { useState } from 'react'

export function useImageLoading(url?: string) {
	const [isLoading, setLoading] = useState(false)
	const image: HTMLImageElement = new Image()
	setLoading(true)
	image.src = url
	image.onload = function () {
		setLoading(false)
	}

	return { isLoading }
}
