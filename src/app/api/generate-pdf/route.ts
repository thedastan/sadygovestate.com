import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb } from 'pdf-lib'
import puppeteer from 'puppeteer'

export async function GET(req: NextRequest) {
	const url = req.nextUrl.searchParams.get('url')

	if (!url) {
		return NextResponse.json({ error: 'URL is required' }, { status: 400 })
	}

	try {
		const browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		})
		const page = await browser.newPage()

		await page.setViewport({
			width: 1450, // Десктопная ширина
			height: 1080, // Высота
			deviceScaleFactor: 1
			// isMobile: false
		})

		await page.setUserAgent(
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
		)

		try {
			await page.goto(url, { waitUntil: 'networkidle0' })
		} catch (err) {
			console.error('Error loading the page:', err)
			throw new Error('Ошибка при загрузке страницы')
		}

		await page.reload({ waitUntil: 'networkidle0' })
		// await page.addStyleTag({
		// 	content: `
		//      body {
		//       position: relative;
		//     }
		//     .watermark {
		//       position: absolute;
		//       top: 50%;
		//       left: 50%;
		//       transform: translate(-50%, -50%) rotate(-45deg);
		//       font-size: 100px;
		//       color: rgba(0, 0, 0, 0.1); /* Полупрозрачный текст */
		//       pointer-events: none;
		//       z-index: 1000;
		//     }
		//     .watermark-container {
		//       position: absolute;
		//       width: 100%;
		//       height: 100%;
		//       top: 0;
		//       left: 0;
		//       display: flex;
		//       justify-content: center;
		//       align-items: center;
		//     }
		//   `
		// })
		// await page.waitForSelector('body')
		// await page.waitForT(1000) // Задержка на 1 секунду

		// await page.evaluate(() => {
		// 	const watermarkContainer = document.createElement('div')
		// 	watermarkContainer.classList.add('watermark-container')
		// 	const watermark = document.createElement('div')
		// 	watermark.classList.add('watermark')
		// 	watermark.textContent = 'Victor Sadygov Real Estate'
		// 	watermarkContainer.appendChild(watermark)
		// 	document.body.appendChild(watermarkContainer)
		// })
		// await page.waitForFunction('document.readyState === "complete"') // Проверяем, что страница полностью загрузилась

		// Ждём перерасчёта стилей
		// await page.waitForTimeout(1000)

		const pdf = await page.pdf({
			format: 'A4',
			printBackground: true
		})

		await browser.close()

		// const pdfDoc = await PDFDocument.load(pdf)
		// const pages = pdfDoc.getPages()

		// Создание водяного знака
		// const watermarkText = 'Victor Sadygov Real Estate'
		// const font = await pdfDoc.embedFont('Inter')
		// const fontSize = 50
		// const rotationInRadians = 45 * (Math.PI / 180)
		// pages.forEach(page => {
		// 	const { width, height } = page.getSize()
		// 	const textWidth = font.widthOfTextAtSize(watermarkText, fontSize)
		// 	const textHeight = font.heightAtSize(fontSize)

		// 	page.drawText(watermarkText, {
		// 		x: (width - textWidth) / 2, // Центр по горизонтали
		// 		y: (height - textHeight) / 2, // Центр по вертикали
		// 		size: fontSize,
		// 		font: font,
		// 		color: rgb(0.75, 0.75, 0.75), // Полупрозрачный серый
		// 		// @ts-ignore
		// 		rotate: rotationInRadians, // Поворот текста
		// 		opacity: 0.1 // Прозрачность
		// 	})
		// })

		// Сохранение изменённого PDF
		// const modifiedPdfBytes = await pdfDoc.save()

		return new NextResponse(pdf, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename="page.pdf"'
			}
		})
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: 'Ошибка при генерации PDF' },
			{ status: 500 }
		)
	}
}
