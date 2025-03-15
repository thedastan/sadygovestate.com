'use client'

import { Box, Container, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import useTypedLocale from '@/hooks/useLocale'

const BlockDetails = () => {
	const locale = useTypedLocale()
	const [des, setDes] = useState<any | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`https://api.admin-sadygovestate.com/property/blog/the-real-estate-in-dubai`
			)

			console.log(data)
			setDes(data)
		} catch (e) {
			console.error('Ошибка', e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Container maxW={CONTAINER_WIDTH}>
			<Box>
				{isLoading ? (
					<Box>
						<Skeleton
							rounded={10}
							height='30px'
							width='50%'
							mb={4}
						/>
						<Skeleton
							height={{ md: '500px', base: '300px' }}
							borderRadius={20}
						/>
						<Skeleton
							rounded={10}
							height='20px'
							width='80%'
							mt={4}
						/>
						<Skeleton
							rounded={10}
							height='20px'
							width='60%'
							mt={2}
						/>
					</Box>
				) : des ? (
					<Box>
						<Text
							fontSize='2xl'
							fontWeight='bold'
						>
							{des.title_ru}
						</Text>

						<Box
							mt={6}
							position='relative'
							w='100%'
							overflow='hidden'
							borderRadius={20}
							h={{ md: 500, base: 300 }}
						>
							<Image
								src={des.image}
								fill
								objectFit='cover'
								alt='img'
							/>
						</Box>

						<Box
							mt={10}
							fontSize={18}
							dangerouslySetInnerHTML={{
								__html: des[`description_${locale}`]
							}}
						/>

						<Text
							fontSize={18}
							color='gray.600'
							mt={10}
						>
							{new Date(des.created_at).toLocaleDateString(locale, {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</Text>
					</Box>
				) : (
					<Text>Ошибка загрузки данных</Text>
				)}
			</Box>
		</Container>
	)
}

export default BlockDetails
