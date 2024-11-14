import Catalog from '@/components/catalog'
import Countries from '@/components/countries'

export default function CatalogPage() {
	return (
		<>
			<Catalog />
			<Countries mt={{ md: '160px', base: '37px' }} />
		</>
	)
}
