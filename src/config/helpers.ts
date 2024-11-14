import moment from 'moment'
import { toast } from 'sonner'

import { SITE_NAME } from '@/constants/seo/seo.constants'

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
	// Проверяем, если ссылка уже в формате embed, то возвращаем сразу
	if (googleMapsUrl.includes('/maps/embed')) {
		return googleMapsUrl
	}
	if (googleMapsUrl.includes('goo.gl')) {
		// Проверяем, если это короткая ссылка (goo.gl) или обычная ссылка Google Maps
		console.warn(
			'Короткая ссылка (goo.gl) не поддерживается. Разверните её перед использованием.'
		)
		return null
	}

	try {
		// Преобразуем URL в объект для работы с параметрами
		const url = new URL(googleMapsUrl)

		// Определяем, содержит ли ссылка параметры координат
		const hasCoordinates =
			url.pathname.includes('/place/') || url.searchParams.has('q')

		// Строим новый embed URL
		if (hasCoordinates) {
			// Пример: преобразуем обычную ссылку в формат embed с теми же параметрами
			const embedUrl = `https://www.google.com/maps/embed?pb=${url.pathname}${url.search}`
			return embedUrl
		} else {
			console.warn('URL не содержит данных о местоположении.')
			return null
		}
	} catch (error) {
		console.error('Ошибка при обработке URL:', error)
		return null
	}
}
