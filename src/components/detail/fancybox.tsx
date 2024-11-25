import '@fancyapps/ui/dist/fancybox.css'
// @ts-ignore
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm.js'
import React, { useEffect } from 'react'

function Fancybox(props: any) {
	const delegate = props.delegate || '[data-fancybox]'

	useEffect(() => {
		const opts = props.options || {}

		NativeFancybox.bind(delegate, opts)

		return () => {
			NativeFancybox.destroy()
		}
	}, [])

	return <>{props.children}</>
}

export default Fancybox
