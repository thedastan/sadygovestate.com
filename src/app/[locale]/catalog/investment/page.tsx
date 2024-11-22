import { Metadata } from 'next'

import Catalog from '@/components/catalog'
import Countries from '@/components/countries'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Investment objects | Инвестиционные объекты | كائنات الاستثمار',
	...NO_INDEX_PAGE
}

export default function InvestmentCatalogPage() {
	return (
		<>
			<Catalog isInvestment={true} />
			<Countries mt={{ md: '160px', base: '37px' }} />
		</>
	)
}
