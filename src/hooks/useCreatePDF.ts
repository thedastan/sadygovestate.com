import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { RefObject, useState } from 'react'

export function useCreatePDF() {
	const [isLoadingPDF, setLoading] = useState(false)
	const createPDF = async (
		ref: RefObject<HTMLDivElement>,
		name: string | undefined = 'Detail'
	) => {
		setLoading(true) // Устанавливаем загрузку в true
		try {
			if (ref.current) {
				const canvas = await html2canvas(ref.current, {
					scale: 2 // Высокое качество PDF
				})
				const imgData = canvas.toDataURL('image/png')
				const pdf = new jsPDF('p', 'mm', 'a4')
				const pdfWidth = pdf.internal.pageSize.getWidth()
				const pdfHeight = (canvas.height * pdfWidth) / canvas.width

				pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
				pdf.save(`${name}.pdf`)
			}
		} catch (error) {
			console.error('Ошибка при генерации PDF:', error)
		} finally {
			setLoading(false) // Сбрасываем загрузку в false
		}
	}

	return { createPDF, isLoadingPDF }
}
