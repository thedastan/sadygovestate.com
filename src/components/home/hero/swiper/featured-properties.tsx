import { Flex, Skeleton } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import SliderPropertyCard from '@/components/ui/cards/slider-property-card'

import BgImage from '@/assets/img/slider-recomended.webp'

import { useRecommendProperties } from '@/hooks/useProperties'

import SlideProvider from './slide-provider'
import { IProperty } from '@/models/property.model'

interface Props {
	video?: string
	recommended: IProperty[] | undefined
}
const FeaturedProperties = ({ video, recommended }: Props) => {
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
						lg: !!recommended
							? recommended?.length < 4
								? 'end'
								: 'start'
							: 'end',
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
						{recommended?.map(el => (
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
