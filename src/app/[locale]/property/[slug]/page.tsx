import { Metadata, ResolvingMetadata } from 'next'
import Head from 'next/head'

import PropertyDetail from '@/components/detail'

import { SEO_KEY_WORDS } from '@/constants/seo/seo.constants'

import { IDetailPropertyPayload } from '@/models/other.model'
import { propertyService } from '@/service/property.service'

type Props = {
	params: IDetailPropertyPayload
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const property = await propertyService.getDetail(params)

	const previousImages = (await parent).openGraph?.images || []

	return {
		title: `${property?.name_en} | ${property?.name_ar} | ${property?.name_ru}`,
		description: `${property?.description_en} | ${property?.description_ar} | ${property?.description_ru}`,
		openGraph: {
			images: [`${property?.main_image}`, ...previousImages]
		}
	}
}

export default async function DetailPropertyPage({ params }: Props) {
	const property = await propertyService.getDetail(params)
	return (
		<>
			<Head>
				<title>
					{`${property?.name_en} | ${property?.name_ar} | ${property?.name_ru}`}
				</title>
				<meta
					property='og:title'
					name='title'
					content={SEO_KEY_WORDS}
					key='title'
				/>
				<meta
					property='og:description'
					name='description'
					content={`${property?.description_en} | ${property?.description_ar} | ${property?.description_ru}`}
					key='description'
				/>
			</Head>
			<PropertyDetail {...params} />
		</>
	)
}
