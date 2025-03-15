// import { Metadata, ResolvingMetadata } from 'next'
// import Head from 'next/head'
// import PropertyDetail from '@/components/detail'
// import BlockDetails from '@/components/home/block/details/BlockDetails'
// import { SEO_KEY_WORDS } from '@/constants/seo/seo.constants'
// import { propertyService } from '@/service/property.service'
// type Props = {
// 	params: {
// 		slug: string
// 		locale: string
// 	}
// }
// export async function generateMetadata(
// 	{ params }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	const blog = await propertyService.getDetailSlug(params.slug)
// 	const previousImages = (await parent).openGraph?.images || []
// 	const title = [blog?.title_en, blog?.title_ar, blog?.title_ru]
// 		.filter(Boolean)
// 		.join(' | ')
// 	const description = [
// 		blog?.description_en,
// 		blog?.description_ar,
// 		blog?.description_ru
// 	]
// 		.filter(Boolean)
// 		.join(' | ')
// 	return {
// 		title,
// 		description,
// 		openGraph: {
// 			images: [`${blog?.image}`, ...previousImages]
// 		}
// 	}
// }
// export default async function DetailBlogPage({ params }: Props) {
// 	const blog = await propertyService.getDetailSlug(params.slug)
// 	console.log(blog, 'blog blog')
// 	return (
// 		<>
// 			<Head>
// 				<title>
// 					{`${blog?.title_en} | ${blog?.title_ar} | ${blog?.title_ru}`}
// 				</title>
// 				<meta
// 					property='og:title'
// 					name='title'
// 					content={SEO_KEY_WORDS}
// 					key='title'
// 				/>
// 				<meta
// 					property='og:description'
// 					name='description'
// 					content={`${blog?.description_en} | ${blog?.description_ar} | ${blog?.description_ru}`}
// 					key='description'
// 				/>
// 			</Head>
// 			<BlockDetails slug={params.slug} />
// 			{/* <BlockDetails /> */}
// 		</>
// 	)
// }
// import { Metadata, ResolvingMetadata } from 'next'
// import Head from 'next/head'
// import BlockDetails from '@/components/home/block/details/BlockDetails'
// import { propertyService } from '@/service/property.service'
// type Props = {
// 	params: { slug: string }
// }
// export async function generateMetadata(
// 	{ params }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	const slug = params.slug
// 	const product = await propertyService.getDetailSlug(slug)
// 	return {
// 		title: ``
// 	}
// }
// export default async function DetailBlogPage({ params }: Props) {
// 	const product = await propertyService.getDetailSlug(params.slug)
// 	return (
// 		<>
// 			<BlockDetails />
// 		</>
// 	)
// }
import React from 'react'

import BlockDetails from '@/components/home/block/details/BlockDetails'

const DetailBlogPage = () => {
	return (
		<div>
			<BlockDetails />
		</div>
	)
}

export default DetailBlogPage
