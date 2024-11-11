import { useEffect, useState } from 'react'

export function useFullWindowSize() {
	const [clientHeight, setHeight] = useState(832)
	const [clientWidth, setWidth] = useState(1536)
	useEffect(() => {
		setHeight(document.documentElement.clientHeight)
		setWidth(document.documentElement.clientWidth)
	}, [])

	return { clientHeight, clientWidth }
}
