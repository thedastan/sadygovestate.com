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
			full_name: 'Ирина Ильина',
			post: 'Генеральный деректор и совладелец Nika Estate Turkey',
			duty: 'Специалист в области инвестирования в зарубежную, турецкую и российскую недвижимость.'
		},
		{
			image: ViktorSadygov,
			full_name: 'Виктор Садыгов',
			post: 'Основатель и генеральный директор NÍKA ESTATE International',
			duty: 'Реализует недвижимость в 13 странах с офисами в 11 городах. Член Российской ассоциации AREA.'
		}
	]
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '140px', base: '60px' }}
		>
			<TitleComponent>Руководство</TitleComponent>
			<SimpleGrid
				mt={{ md: '40px', base: '30px' }}
				columns={3}
				spacing='5'
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
