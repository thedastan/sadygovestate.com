'use client'

import { Box, Container, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import useTypedLocale from '@/hooks/useLocale'

const BlockDetails = () => {
	const locale = useTypedLocale()
	const [des, setDes] = useState<any | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const { id } = useParams()

	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`https://api.admin-sadygovestate.com/property/blog/${id}`
			)
			console.log(data, 'slug data')
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

	console.log(des, 'nnnnnnnnn')
	console.log(id, 'asdf')

	// blog/abu-dhabi-real-estate-the-perfect-combination-of-comfort-and-inve-1
	// block/abu-dhabi-real-estate-the-perfect-combination-of-comfort-and-inve-1

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
							{des[`title_${locale}`]}
						</Text>

						{des.image && (
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
						)}

						<Box
							mt={10}
							fontSize={18}
							overflow='hidden'
							wordBreak='break-word'
							sx={{
								h2: {
									fontSize: '22px',
									fontWeight: 'bold',
									marginTop: '20px'
								},
								img: {
									display: 'block',
									maxWidth: '100%',
									margin: '10px 0',
									borderRadius: '20px',
									objectFit: 'cover' // Исправленный синтаксис
								}
							}}
							dangerouslySetInnerHTML={{
								__html:
									des?.[`description_${locale}`]
										?.replace(
											/src="\/media/g,
											'src="https://api.admin-sadygovestate.com/media'
										)
										?.replace(
											/style="[^"]*height:\d+px[^"]*"/g,
											'style="height:400px; width:100% ;"'
										) || ''
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

{
	/* <img alt=\"\" src=\"/media/uploads/2025/03/22/6626124071426c9609d38656_full-1.jpg\" style=\"height:1125px; width:2000px\" /> */
}
