import Countries from '@/components/countries'
import CatalogHome from '@/components/home/catalog'
import Employees from '@/components/home/employees'
import HomeHero from '@/components/home/hero'
import IdealCity from '@/components/home/ideal-city'
import Management from '@/components/home/management'
import PrimeRealEstate from '@/components/home/prime'
import Reviews from '@/components/home/reviews'
import WhatsappButton from '@/components/ui/buttons/WhatsappButton'

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
			<Countries mt={{ md: '160px', base: '0' }} />
			<WhatsappButton />
		</>
	)
}
