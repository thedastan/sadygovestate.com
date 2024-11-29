import moment from 'moment';
import { toast } from 'sonner';



import { SITE_NAME } from '@/constants/seo/seo.constants';


export function ToastError(e: any) {
	const key = Object.keys(e.response?.data)[0]
	toast.error(
		e.response?.data?.email ||
			e.response?.data?.detail ||
			e.response?.data?.message ||
			JSON.stringify(e.response?.data[key]) ||
			'Произошла ошибка!'
	)
}

// non_field_errors
export const getPadTime = (time: number) => {
	return time.toString().padStart(2, '0')
}

export const sharePageLink = () => {
	if (typeof window !== 'undefined') {
		window.navigator.share({
			text: '',
			url: window.location.href,
			title: SITE_NAME
		})
	}
}

export function scrollToEnd() {
	window.scrollTo(0, document.body.scrollHeight)
}

export function getEmbedUrl(googleMapsUrl: string) {
	// Проверяем корректность ссылки
	const isShortUrl = googleMapsUrl.includes('maps.app.goo.gl')
	const isDirectUrl = googleMapsUrl.includes('google.com/maps')

	if (!isShortUrl && !isDirectUrl) {
		throw new Error('Неподдерживаемый формат ссылки')
	}

	// Если это короткая ссылка
	if (isShortUrl) {
		return new Promise((resolve, reject) => {
			fetch(googleMapsUrl, { redirect: 'follow' })
				.then(response => {
					if (response.url.includes('google.com/maps')) {
						resolve(convertToEmbedUrl(response.url))
					} else {
						reject('Не удалось преобразовать короткую ссылку')
					}
				})
				.catch(error => reject(error))
		})
	}

	// Если это прямая ссылка
	return Promise.resolve(convertToEmbedUrl(googleMapsUrl))
}

function convertToEmbedUrl(fullUrl: string) {
	const baseEmbedUrl = 'https://www.google.com/maps/embed'
	const url = new URL(fullUrl)

	// Если ссылка содержит параметры поиска (например, q)
	if (url.searchParams.has('q')) {
		return `${baseEmbedUrl}?q=${url.searchParams.get('q')}`
	}

	// Если это обычная ссылка на конкретное место (например, /place/)
	if (url.pathname.includes('/place/')) {
		return `${baseEmbedUrl}?pb=${url.pathname.split('/place/')[1]}`
	}

	return `${baseEmbedUrl}${url.search}`
}

export function LoadingImage(
	url: string | undefined,
	setLoading: (a: boolean) => void
) {
	if (!!url) {
		const image: HTMLImageElement = new Image()
		setLoading(true)
		image.src = url
		image.onload = function () {
			setLoading(false)
		}
	}
}

export function getYouTubeVideoKey(url: string) {
	let videoId = ''

	// Regular expression to match YouTube video URLs in various formats
	const patterns = [
		/youtu\.be\/([A-Za-z0-9_-]+)/, // Shortened URL
		/[?&]v=([A-Za-z0-9_-]+)/, // Regular URL with "v="
		/\/embed\/([A-Za-z0-9_-]+)/, // URL with "/embed/"
		/\/v\/([A-Za-z0-9_-]+)/, // URL with "/v/"
		/\/watch\?v=([A-Za-z0-9_-]+)/, // URL with "/watch?v="
		/\/watch\?.*?v=([A-Za-z0-9_-]+)/, // URL with "/watch?" and "v="
		/\/(?:embed|v)\/([A-Za-z0-9_-]+)(?:\?|&|$)/ // Embed or v parameter
	]

	// Iterate through patterns to find a match
	for (const pattern of patterns) {
		const match = url.match(pattern)
		if (match && match[1]) {
			videoId = match[1]
			break
		}
	}

	return videoId
}