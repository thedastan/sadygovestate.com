import { Flex, Skeleton } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import SliderPropertyCard from '@/components/ui/cards/slider-property-card'

import BgImage from '@/assets/img/slider-investment.webp'

import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'
import { useInvestmentProperties } from '@/hooks/useProperties'

import SlideProvider from './slide-provider'
import { IProperty } from '@/models/property.model'

interface Props {
	investment: IProperty[] | undefined
}
const ObjectsForInvestment = ({ investment }: Props) => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	return (
		<SlideProvider
			bgImage={BgImage}
			path={DASHBOARD_PAGES.CATALOG_INVESTMENT(locale)}
			title={t('investment_properties')}
		>
			<Flex
				h='100%'
				pb='5'
				alignItems='end'
			>
				<Flex
					w='100%'
					justifyContent={{
						lg: !!investment
							? investment?.length < 4
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
						{investment?.map(el => (
							<SliderPropertyCard
								el={el}
								isInvest={true}
								key={el.id}
							/>
						))}
					</Flex>
				</Flex>
			</Flex>
		</SlideProvider>
	)
}

export default ObjectsForInvestment
