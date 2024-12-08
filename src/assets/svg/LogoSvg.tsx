import { logoBase64 } from '@/config/logo-base64'

const LogoSvg = ({
	width = '182',
	height = '54'
}: {
	width?: string
	height?: string
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<rect
				width={width}
				height={height}
				fill='url(#pattern0_133_4897)'
			/>
			<defs>
				<pattern
					id='pattern0_133_4897'
					patternContentUnits='objectBoundingBox'
					width='1'
					height='1'
				>
					<use
						xlinkHref='#image0_133_4897'
						transform='matrix(0.000447819 0 0 0.00155763 0.0107477 0)'
					/>
				</pattern>

				<image
					xlinkHref={logoBase64}
					id='image0_133_4897'
					width='2199'
					height='642'
				/>
			</defs>
		</svg>
	)
}

export default LogoSvg
