'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { SocialMediaIcons } from '@/components/navbar/data'
import Description from '@/components/ui/texts/Description'

import { INSTAGRAM_LINK, WHATSAPP_LINK, YOUTUBE_LINK } from '@/constants/admin'

import ViktorSadygov from '@/assets/img/Виктор Садыгов.webp'

const Management = () => {
	const t = useTranslations('Titles')

	const contacts = [
		{
			icon: SocialMediaIcons.INSTAGRAM,
			link: INSTAGRAM_LINK
		},

		{
			icon: SocialMediaIcons.YOUTUBE,
			link: YOUTUBE_LINK
		},
		{
			icon: SocialMediaIcons.WHATSAPP,
			link: WHATSAPP_LINK
		}
	]
	return (
		<Flex
			mt={{ md: '100px', base: '60px' }}
			flexDirection={{ md: 'row', base: 'column' }}
		>
			<Box
				maxW={{ md: '44%', base: '100%' }}
				w='100%'
				h={{ md: '767px', base: '560px' }}
			>
				<Image
					src={ViktorSadygov}
					alt='Image'
					className='full-image'
				/>
			</Box>

			<Flex
				minH={{ md: '767px', sm: '500px', base: '440px' }}
				bg='rgba(74, 74, 74, 1)'
				maxW={{ md: '56%', base: '100%' }}
				w='100%'
				px='4'
				justifyContent='center'
				alignItems='center'
				py='8'
			>
				<Flex
					flexDirection='column'
					alignItems='center'
					color='#FFFFFF'
					maxW='562px'
					gap={{ md: '43px', sm: '32px', base: '28px' }}
				>
					<Flex
						rounded='100px'
						px='5'
						py='10px'
						border='1px solid #FFFFFF'
						fontWeight='400'
						fontSize={{ sm: '24px', base: '20px' }}
						lineHeight={{ sm: '27.6px', base: '24px' }}
						textTransform='uppercase'
						letterSpacing='3px'
					>
						{t('Viktor.full_name')}
					</Flex>

					<Text
						fontSize={{ md: '40px', sm: '34px', base: '28px' }}
						lineHeight={{ md: '60px', base: '40px' }}
						fontWeight='400'
						textAlign='center'
					>
						{t('Viktor.post')}
					</Text>

					<Flex gap='4'>
						{contacts.map((el, idx) => (
							<Link
								href={el.link}
								key={idx}
							>
								<Flex
									rounded='50%'
									border='1px solid #FFFFFF40'
									w='40px'
									h='40px'
									justifyContent='center'
									alignItems='center'
								>
									<el.icon
										color='#FFFFFF'
										fontSize='22px'
									/>
								</Flex>
							</Link>
						))}
					</Flex>
					<Description
						fontSize={{ md: '18px', base: '16px' }}
						lineHeight='21.8px'
						color='#FFFFFF'
						textAlign='center'
						opacity='.7'
					>
						{t('Viktor.duty')}
					</Description>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Management
