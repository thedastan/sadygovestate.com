import { Container, SimpleGrid } from '@chakra-ui/react'

import ManagementCard, {
	IManagementCard
} from '@/components/ui/cards/management-card'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import ViktorSadygov from '@/assets/img/Виктор Садыгов.png'
import IrinaIlina from '@/assets/img/Ирина Ильина.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Management = () => {
	const management: IManagementCard[] = [
		{
			image: ViktorSadygov,
			full_name: 'Виктор Садыгов',
			post: 'Основатель и генеральный директор NÍKA ESTATE International',
			duty: 'Реализует недвижимость в 13 странах с офисами в 11 городах. Член Российской ассоциации AREA.'
		},
		{
			image: IrinaIlina,
			full_name: 'Анастасия Тян',
			post: 'Директор филиала ОАЭ',
			duty: 'Руководитель филиалов Дубай и Абу-Даби'
		},
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
				Руководство
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
