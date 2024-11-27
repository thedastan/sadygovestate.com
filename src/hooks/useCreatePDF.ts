import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { RefObject, useState } from 'react'
import { toast } from 'sonner'

import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import { EnumIntl } from '@/models/types/intl-types'

export function useCreatePDF() {
	const [isLoadingPDF, setLoading] = useState(false)

	const createPDF = async (
		ref: RefObject<HTMLDivElement>,
		name: string | undefined = 'Detail-property'
	) => {
		setLoading(true) // Устанавливаем загрузку в true
		try {
			if (ref.current) {
				const element = ref.current
				const elementWidth = element.offsetWidth
				const elementHeight = element.offsetHeight

				// const pdf = new jsPDF('p', 'mm', 'a4')

				const pdfWidth = elementWidth * 0.26458 // Перевод пикселей в мм
				const pdfHeight = pdfWidth * 1.414 // Пропорции A4

				const canvas = await html2canvas(ref.current, {
					scale: 2, // Высокое качество PDF
					scrollY: -window.scrollY
				})

				const imgData = canvas.toDataURL('image/jpeg')
				const imgWidth = canvas.width
				const imgHeight = canvas.height

				const pdf = new jsPDF({
					orientation: 'portrait',
					unit: 'mm',
					format: [pdfWidth, pdfHeight]
				})

				// Разбиение на страницы
				let yOffset = 0 // Смещение по вертикали
				while (yOffset < imgHeight) {
					// Высота фрагмента для текущей страницы
					const visibleHeight = Math.min(
						imgHeight - yOffset,
						pdfHeight * (imgWidth / pdfWidth) // Высота страницы в пикселях
					)

					// Добавляем текущий фрагмент
					pdf.addImage(
						imgData,
						'JPEG',
						0,
						15,
						pdfWidth,
						visibleHeight * (pdfWidth / imgWidth), // Масштабирование высоты
						undefined,
						'FAST',
						yOffset // Смещение для текущего фрагмента
					)

					yOffset += visibleHeight // Увеличиваем смещение

					// Добавляем новую страницу, если ещё остался контент
					if (yOffset < imgHeight) {
						pdf.addPage([pdfWidth, pdfHeight], 'portrait')
					}
				}
				pdf.addImage(imgData, 'JPEG', 0, 10, pdfWidth, pdfHeight)
				pdf.setFontSize(80)
				pdf.setTextColor(150, 150, 150) // Серый цвет для водяного знака
				pdf.setFillColor(150, 150, 150, 0.3)

				pdf.text(
					'Victor Sadygov Real Estate',
					pdfWidth / 2 + 15,
					pdfHeight / 2,
					{
						angle: 45, // Поворот текста
						align: 'center'
					}
				)
				const fileName = name + '.pdf'
				pdf.save(fileName)
			}
		} catch (error) {
			toast.error(`Ошибка при генерации PDF: ${error}`)
			console.error('Ошибка при генерации PDF:', error)
		} finally {
			setLoading(false) // Сбрасываем загрузку в false
		}
	}

	return { createPDF, isLoadingPDF }
}

export function useCreatePDFTest() {
	const [isLoadingPDF, setLoading] = useState(false)

	const createPDF = async (slug: string) => {
		setLoading(true) // Показываем загрузчик
		try {
			const url = `${window.location.origin}/api/generate-pdf?url=${window.location.href}`

			const response = await fetch(url, { method: 'GET' })

			if (!response.ok) {
				throw new Error('Ошибка при генерации PDF')
			}

			const blob = await response.blob()
			const link = document.createElement('a')
			link.href = URL.createObjectURL(blob)
			link.download = `${slug}.pdf`
			link.click()

			URL.revokeObjectURL(link.href) // Освобождаем память
		} catch (error) {
			console.error('Ошибка:', error)
			alert('Не удалось скачать PDF.')
		} finally {
			setLoading(false) // Скрываем загрузчик
		}
	}
	return { createPDF, isLoadingPDF }
}
