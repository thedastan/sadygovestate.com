'use client'

import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { SocialMediaIcons } from '@/components/navbar/data'
import ManagementCard, {
	IManagementCard
} from '@/components/ui/cards/management-card'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { INSTAGRAM_LINK, WHATSAPP_LINK, YOUTUBE_LINK } from '@/constants/admin'

import ViktorSadygov from '@/assets/img/Виктор Садыгов.png'
import IrinaIlina from '@/assets/img/Ирина Ильина.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Management = () => {
	const t = useTranslations('Titles')

	const management: IManagementCard[] = [
		{
			image: ViktorSadygov,
			full_name: t('Viktor.full_name'),
			post: t('Viktor.post'),
			duty: t('Viktor.duty')
		},
		{
			image: IrinaIlina,
			full_name: t('Irina.full_name'),
			post: t('Irina.post'),
			duty: t('Irina.duty')
		}
	]

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
		<Flex mt={{ md: '140px', base: '60px' }}>
			<Box
				maxW='44%'
				w='100%'
				h='767px'
			>
				<Image
					src={ViktorSadygov}
					alt='Image'
					className='full-image'
				/>
			</Box>

			<Flex
				h='767px'
				bg='rgba(74, 74, 74, 1)'
				maxW='56%'
				w='100%'
				px='4'
				justifyContent='center'
				alignItems='center'
				py='4'
			>
				<Flex
					flexDirection='column'
					alignItems='center'
					color='#FFFFFF'
					maxW='562px'
				>
					<Flex
						rounded='100px'
						px='5'
						py='10px'
						border='1px solid #FFFFFF'
						fontWeight='400'
						fontSize='24px'
						lineHeight='27.6px'
						textTransform='uppercase'
						letterSpacing='3px'
					>
						{t('Viktor.full_name')}
					</Flex>

					<Text
						mt='43px'
						fontSize='50px'
						lineHeight='60px'
						fontWeight='400'
						textAlign='center'
					>
						{t('Viktor.post')}
					</Text>

					<Flex
						mt='43px'
						gap='4'
					>
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
						mt='43px'
						fontSize='18px'
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
