import { Flex, Skeleton } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import SliderPropertyCard from '@/components/ui/cards/slider-property-card'

import BgImage from '@/assets/img/slider-recomended.jpeg'

import { useRecommendProperties } from '@/hooks/useProperties'

import SlideProvider from './slide-provider'

const FeaturedProperties = ({ video }: { video?: string }) => {
	const { data, isLoading } = useRecommendProperties()
	const t = useTranslations('Titles')
	return (
		<SlideProvider
			bgImage={BgImage}
			path={video}
			title={t('recommended_properties')}
		>
			<Flex
				h='100%'
				pb='5'
				alignItems='end'
			>
				<Flex
					w='100%'
					justifyContent={{
						lg: !!data ? (data?.length < 4 ? 'end' : 'start') : 'end',
						base: 'start'
					}}
					overflowX='auto'
					className='unscroll'
				>
					<Flex
						gap='4'
						px={{ sm: '5', base: '4' }}
						alignItems='start'
					>
						{isLoading
							? [1, 2, 3].map(el => (
									<Skeleton
										key={el}
										w={{ md: '284px', base: '260px' }}
										h={{ md: '250px', base: '234px' }}
										rounded='20px'
									/>
								))
							: data?.map(el => (
									<SliderPropertyCard
										el={el}
										key={el.id}
									/>
								))}
					</Flex>
				</Flex>
			</Flex>
		</SlideProvider>
	)
}

export default FeaturedProperties
