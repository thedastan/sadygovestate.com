import { Box, Container, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useFullWindowSize } from '@/hooks/useFullHeight'
import { useProperties } from '@/hooks/useProperties'

import CatalogCard from '../ui/cards/catalog-card'
import TitleComponent from '../ui/texts/TitleComponent'

const SimilarProducts = ({ type }: { type: number }) => {
	const storage = useAppSelector(s => s.storage)
	const { data } = useProperties({ ...storage, type: { id: type } }, false)
	const t = useTranslations('Titles.detail')
	const { clientWidth } = useFullWindowSize()
	if (!data) return null
	return (
		<>
			<Container
				maxW={CONTAINER_WIDTH}
				mt={{ md: '154px', base: '60px' }}
			>
				<TitleComponent query='объекты'>{t('similar_objects')}</TitleComponent>
			</Container>

			<Flex
				mt={{ md: '10', base: '5' }}
				overflowX='auto'
				className='unscroll'
			>
				<Flex
					gap={{ md: '6', base: '3' }}
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: '4'
					}}
				>
					{data?.map(el => (
						<Box
							key={el.id}
							minW='357px'
							maxW='397px'
						>
							<CatalogCard el={el} />
						</Box>
					))}
				</Flex>
			</Flex>
		</>
	)
}

export default SimilarProducts
