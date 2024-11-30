import { Box, Flex, Skeleton, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { PropsWithChildren, useEffect } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import TitlePages from '@/components/ui/texts/TitlePages'

import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'

interface SlideProviderProps extends PropsWithChildren {
	bgImage: StaticImageData | string
	title: string
	path: string | undefined
	isLoading?: boolean
}
const SlideProvider = ({
	bgImage,
	title,
	path,
	children,
	isLoading
}: SlideProviderProps) => {
	const t = useTranslations('Titles')
	const locale = useTypedLocale()
	const isInvestPath = path?.includes(
		DASHBOARD_PAGES.CATALOG_INVESTMENT(locale)
	)

	return (
		<>
			<Flex
				justifyContent='space-between'
				flexDirection={{ md: 'row', base: 'column' }}
			>
				<TitlePages maxW='901px'>{title}</TitlePages>
				<Flex justifyContent={{ md: 'initial', base: 'end' }}>
					{!!path && (
						<Link
							href={path}
							target={isInvestPath ? '_self' : '_blank'}
						>
							<Flex
								flexDirection={{ md: 'column', base: 'row-reverse' }}
								alignItems='center'
								justifyContent='center'
								w={{ md: '172px', base: 'auto' }}
								h={{ md: '172px', base: 'auto' }}
								rounded={{ md: '50%', base: '0' }}
								border={{ md: '1px solid #000000', base: 'none' }}
								color='#000000'
								gap={{ md: '1', base: '2px' }}
								fontSize={{ md: '32px', base: '22px' }}
							>
								<GoArrowUpRight />
								<Text
									textTransform='uppercase'
									fontSize={{ md: '20px', base: '14px' }}
									lineHeight={{ md: '23px', base: '16.1px' }}
									letterSpacing='1px'
									fontWeight='400'
								>
									{t('read_more')}
								</Text>
							</Flex>
						</Link>
					)}
				</Flex>
			</Flex>

			<Box
				mt={{ md: '23px', base: '5' }}
				h={{ md: '450px', base: '480px' }}
				overflow='hidden'
				w='100%'
				position='relative'
				rounded='20px'
			>
				{isLoading ? (
					<Skeleton
						w='100%'
						h='100%'
					/>
				) : (
					<Image
						src={bgImage}
						alt='Image'
						width={1501}
						height={450}
						className='detail-image'
					/>
				)}
				<Flex
					position='absolute'
					right='5'
					top='3'
					zIndex='2'
					className='music-player'
					alignItems='center'
					gap='1'
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 10].map(item => (
						<Box
							key={item}
							w='2px'
							bg='#FFFFFF'
							className={`music-player-item${item}`}
						/>
					))}
				</Flex>

				{!isLoading && (
					<Box
						position='absolute'
						left='0'
						bottom='0'
						right='0'
						top='0'
						h='100%'
						zIndex='3'
						bg='#00000042'
					>
						{children}
					</Box>
				)}
			</Box>
		</>
	)
}

export default SlideProvider
