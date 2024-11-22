import Catalog from '@/components/catalog'
import Countries from '@/components/countries'
import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Catalog | Каталог | كتالوج ',
	...NO_INDEX_PAGE
}

export default function CatalogPage() {
	return (
		<>
			<Catalog />
			<Countries mt={{ md: '160px', base: '37px' }} />
		</>
	)
}
