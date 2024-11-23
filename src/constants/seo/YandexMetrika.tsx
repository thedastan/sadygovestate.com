'use client'

import { useEffect } from 'react'

declare global {
	interface Window {
		ym: (...args: any[]) => void
	}
}

const YandexMetrika: React.FC = () => {
	useEffect(() => {
		// Проверяем, не добавлен ли уже скрипт
		const scriptAlreadyAdded = Array.from(document.scripts).some(
			script => script.src === 'https://mc.yandex.ru/metrika/tag.js'
		)
		if (scriptAlreadyAdded) return // Добавляем скрипт
		;(function (m: any, e: Document, t: string, r: string, i: string) {
			m[i] =
				m[i] ||
				function (...args: any[]) {
					;(m[i].a = m[i].a || []).push(args)
				}
			// @ts-ignore
			m[i].l = 1 * new Date()
			const k: any = e.createElement(t),
				a = e.getElementsByTagName(t)[0]
			k.async = true
			k.src = r
			a?.parentNode?.insertBefore(k, a)
		})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

		// Инициализация метрики
		window.ym(99023592, 'init', {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
			webvisor: true
		})
	}, [])

	return (
		<>
			{/* <noscript> для случаев, когда JS отключен */}
			<noscript>
				<div>
					<img
						src='https://mc.yandex.ru/watch/99023592'
						style={{ position: 'absolute', left: '-9999px' }}
						alt=''
					/>
				</div>
			</noscript>
		</>
	)
}

export default YandexMetrika
