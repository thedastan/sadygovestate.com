import { Box, Flex, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import TitlePages from '@/components/ui/texts/TitlePages'

interface SlideProviderProps extends PropsWithChildren {
	bgImage: StaticImageData
	title: string
	path: string
}
const SlideProvider = ({
	bgImage,
	title,
	path,
	children
}: SlideProviderProps) => {
	return (
		<>
			<Flex
				justifyContent='space-between'
				flexDirection={{ md: 'row', base: 'column' }}
			>
				<TitlePages maxW='901px'>{title}</TitlePages>
				<Flex justifyContent={{ md: 'initial', base: 'end' }}>
					<Link href={path}>
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
								Подробнее
							</Text>
						</Flex>
					</Link>
				</Flex>
			</Flex>

			<Box
				mt={{ md: '23px', base: '5' }}
				h={{ md: '450px', base: '480px' }}
				overflow='hidden'
				w='100%'
				position='relative'
			>
				<Image
					src={bgImage}
					alt='Image'
					className='detail-image'
				/>

				<Box
					position='absolute'
					left='0'
					bottom='0'
					right='0'
					top='0'
					cursor='pointer'
				>
					{children}
				</Box>
			</Box>
		</>
	)
}

export default SlideProvider
