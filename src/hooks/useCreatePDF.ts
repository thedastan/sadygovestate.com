import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { RefObject, useState } from 'react'
import { toast } from 'sonner'

import dancingScript from '@/constants/fonts/dancing-script/dancing-font-base64'

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


				const pdfWidth = elementWidth * 0.26458 // Перевод пикселей в мм
				const pdfHeight = pdfWidth * 1.414 // Пропорции A4

				const canvas = await html2canvas(ref.current, {
					scale: 2, // Высокое качество PDF
					scrollY: -window.scrollY
				})

				const imgWidth = canvas.width
				const imgHeight = canvas.height

				const pdf = new jsPDF({
					orientation: 'portrait',
					unit: 'mm',
					format: [pdfWidth, pdfHeight]
				})

				pdf.addFileToVFS('DancingScript.ttf', dancingScript)

				// Регистрируем шрифт
				pdf.addFont('DancingScript.ttf', 'Dancing Script', 'normal')
				pdf.setFont('Dancing Script')
				let yOffset = 0 // Смещение по вертикали в пикселях
				const topOffset = 8 // Верхний отступ в мм
				const pageContentHeightInMM = pdfHeight - topOffset * 2 // Доступная высота для контента
				const pageHeightInPixels = pageContentHeightInMM * (imgWidth / pdfWidth) // Доступная высота страницы в пикселях

				while (yOffset < imgHeight) {
					const currentPageHeight = Math.min(
						pageHeightInPixels,
						imgHeight - yOffset
					)

					const pageCanvas = document.createElement('canvas')
					pageCanvas.width = imgWidth
					pageCanvas.height = currentPageHeight

					const pageContext = pageCanvas.getContext('2d')
					if (pageContext) {
						pageContext.drawImage(
							canvas,
							0,
							yOffset,
							imgWidth,
							currentPageHeight,
							0,
							0,
							imgWidth,
							currentPageHeight
						)

						const pageImageData = pageCanvas.toDataURL('image/jpeg')
						pdf.addImage(
							pageImageData,
							'JPEG',
							0,
							topOffset,
							pdfWidth,
							(currentPageHeight / imgWidth) * pdfWidth
						)

						pdf.saveGraphicsState()
						// @ts-ignore
						pdf.setGState(new pdf.GState({ opacity: 0.4 }))
						// Добавляем водяной знак на текущую страницу
						pdf.setFontSize(110)
						pdf.setTextColor(150, 150, 150)
						pdf.text(
							'Victor Sadygov Real Estate',
							pdfWidth / 2 + 35,
							pdfHeight / 2,
							{
								angle: 45,
								align: 'center'
							}
						)

						// Возвращаем стандартный уровень прозрачности
						// pdf.setGState(new pdf.GState({ opacity: 1 }))

						yOffset += currentPageHeight
						if (yOffset < imgHeight) {
							pdf.addPage([pdfWidth, pdfHeight], 'portrait')
						}
					}
				}

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

