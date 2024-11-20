import { useEffect, useState } from 'react'

import { getEmbedUrl } from '@/config/helpers'

const GoogleMap = (props: { map_link: string | undefined }) => {
	const [link, setLink] = useState('')

	useEffect(() => {
		if (props.map_link) {
			// getEmbedUrl(props.map_link).then(result => {
			// 	if (typeof result === 'string') setLink(result)
			// })
			setLink(props.map_link)
		}
	}, [props.map_link])
	return (
		<iframe
			src={link}
			className='full-image'
			allowFullScreen={true}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
			tabIndex={0}
		></iframe>
	)
}

export default GoogleMap
