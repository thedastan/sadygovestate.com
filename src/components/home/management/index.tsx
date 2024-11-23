'use client'

import { Container, SimpleGrid } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import ManagementCard, {
	IManagementCard
} from '@/components/ui/cards/management-card'
import TitleComponent from '@/components/ui/texts/TitleComponent'

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
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '140px', base: '60px' }}
			px={{ sm: '4', base: '0' }}
		>
			<TitleComponent
				textAlign={{ md: 'start', base: 'center' }}
				px={{ sm: '0', base: '4' }}
			>
				{t('management')}
			</TitleComponent>
			<SimpleGrid
				mt={{ md: '40px', base: '30px' }}
				columns={{ md: 3, base: 1 }}
				spacing='30px 20px'
				maxW={{ md: '100%', base: '440px' }}
				mx='auto'
			>
				{management.map((el, idx) => (
					<ManagementCard
						key={idx}
						{...el}
					/>
				))}
			</SimpleGrid>
		</Container>
	)
}

export default Management
