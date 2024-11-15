import { Box } from '@chakra-ui/react'
import { Metadata, ResolvingMetadata } from 'next'
import Head from 'next/head'

import Countries from '@/components/countries'
import PropertyDetail from '@/components/detail'

import { SEO_KEY_WORDS } from '@/constants/seo/seo.constants'

import { propertyService } from '@/service/property.service'

type Props = {
	params: { id: string }
}

// export async function generateMetadata(
// 	{ params }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	const id = params.id
// 	const property = await propertyService.getDetail(id)

// 	const previousImages = (await parent).openGraph?.images || []

// 	return {
// 		title: property?.name,
// 		description: SEO_KEY_WORDS,
// 		openGraph: {
// 			images: [`${property?.image}`, ...previousImages]
// 		}
// 	}
// }

export default async function DetailPropertyPage({ params }: Props) {
	// const product = await propertyService.getDetail(params.id)

	return (
		<>
			{/* <Head>
				<title>{product.name}</title>
				<meta
					property='og:title'
					name='title'
					content={product.seo}
					key='title'
				/>
				<meta
					property='og:description'
					name='description'
					content={product.description}
					key='description'
				/>
			</Head> */}
			<PropertyDetail />
			<Countries mt={{ md: '158px', base: '60px' }} />
		</>
	)
}
