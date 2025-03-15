'use client'

import { Box, Container, Flex, Skeleton, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useFullWindowSize } from '@/hooks/useFullHeight'
import useTypedLocale from '@/hooks/useLocale'
import { useBlog } from '@/hooks/useProperties'

const Block = () => {
	const { data, isLoading } = useBlog()
	const locale = useTypedLocale()
	const router = useRouter()

	const t = useTranslations('Titles')

	const { clientWidth } = useFullWindowSize()

	return (
		<Box py={10}>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent textAlign='start'>{t('TitleBlog')}</TitleComponent>
				<Flex
					overflow='auto'
					className='unscroll'
					mt={6}
				>
					<Flex
						gap={{ md: '14px', base: '8.74px' }}
						px={{
							xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
							base: '0'
						}}
					>
						{isLoading
							? // Скелетон для загрузки
								Array.from({ length: 4 }).map((_, index) => (
									<Box
										key={index}
										bg='white'
										borderRadius={20}
										p={{ md: 4, base: 2 }}
										overflow='hidden'
										cursor='pointer'
										transition='0.2s'
									>
										<Skeleton
											w={{ md: '370px', base: '350px' }}
											h={{ md: '230px', base: '250px' }}
											borderRadius={10}
										/>
										<Box
											py={2}
											px={2}
										>
											<Skeleton
												rounded={4}
												h='20px'
												w='80%'
												my={2}
											/>
										</Box>
									</Box>
								))
							: data?.map((el, index) => (
									<Link
										key={index}
										href={`/${locale}/block/${el.slug_en}`}
									>
										<Box
											bg='white'
											borderRadius={20}
											p={{ md: 2, base: 2 }}
											overflow='hidden'
											cursor='pointer'
											_hover={{ bg: '#EFEFEF' }}
											transition='0.2s'
											w={{ md: '370px', base: '350px' }}
										>
											<Box
												w='100%'
												h={{ md: '230px', base: '250px' }}
												position='relative'
												borderRadius={10}
												overflow='hidden'
											>
												<Image
													objectFit='cover'
													fill
													src={el.image}
													alt={el.slug_en}
												/>
											</Box>
											<Box
												py={2}
												px={2}
											>
												<Text
													fontSize={22}
													fontWeight={700}
													w='100%'
												>
													{el[`title_${locale}`]}
												</Text>

												<Text
													fontSize={14}
													color='gray.600'
													mt={2}
												>
													{new Date(el.created_at).toLocaleDateString(locale, {
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													})}
												</Text>
											</Box>
										</Box>
									</Link>
								))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Block
