import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { RefObject, useState } from 'react'
import { toast } from 'sonner'

export function useCreatePDF() {
	const [isLoadingPDF, setLoading] = useState(false)

	const createPDF = async (
		ref: RefObject<HTMLDivElement>,
		name: string | undefined = 'Detail-property'
	) => {
		setLoading(true) // Устанавливаем загрузку в true
		try {
			if (ref.current) {
				const canvas = await html2canvas(ref.current, {
					scale: 2 // Высокое качество PDF
				})

				const imgData = canvas.toDataURL('image/jpeg')
				const pdf = new jsPDF('p', 'mm', 'a4')
				const pdfWidth = pdf.internal.pageSize.getWidth()
				const pdfHeight = pdf.internal.pageSize.getHeight()

				pdf.addImage(imgData, 'JPEG', 0, 10, pdfWidth, pdfHeight)
				pdf.setFontSize(30)
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
