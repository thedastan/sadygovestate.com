import Countries from '@/components/countries'
import CatalogHome from '@/components/home/catalog'
import Employees from '@/components/home/employees'
import HomeHero from '@/components/home/hero'
import IdealCity from '@/components/home/ideal-city'
import Management from '@/components/home/management'
import PrimeRealEstate from '@/components/home/prime'
import Reviews from '@/components/home/reviews'

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<IdealCity />
			<CatalogHome />
			<PrimeRealEstate />
			<Management />
			<Employees />
			<Reviews />
			<Countries mt={{ md: '100px', base: '0' }} />
		</>
	)
}
