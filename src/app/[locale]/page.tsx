import Countries from '@/components/countries'
import Block from '@/components/home/block/Block'
import CatalogHome from '@/components/home/catalog'
import Employees from '@/components/home/employees'
import HomeHero from '@/components/home/hero'
import IdealCity from '@/components/home/ideal-city'
import Management from '@/components/home/management'
import PrimeRealEstate from '@/components/home/prime'
import Reviews from '@/components/home/reviews'

import { countryService } from '@/service/country.service'
import { personsService } from '@/service/other.service'
import { propertyService } from '@/service/property.service'

export const dynamic = 'force-static'
export const revalidate = 90

export default async function HomePage() {
	const response = await (async function () {
		try {
			const countries = await countryService.getCountries()
			const recommended = await propertyService.getRecommended()
			const investment = await propertyService.getInvestment()
			const video = await personsService.getVideo()

			const all_properties = await propertyService.getAllPro()

			return { recommended, investment, countries, all_properties, video }
		} catch (e) {
			return {
				recommended: undefined,
				investment: undefined,
				countries: undefined,
				all_properties: undefined,
				video: undefined
			}
		}
	})()
	return (
		<>
			<HomeHero
				{...response}
				all_properties={response.all_properties}
			/>
			<IdealCity data={response.countries} />
			<CatalogHome />
			<PrimeRealEstate />
			<Management />
			<Employees />
			<Block />
			<Reviews />
			<Countries mt={{ md: '100px', base: '0' }} />
		</>
	)
}
