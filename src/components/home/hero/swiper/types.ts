import { ICountry } from '@/models/country.model'
import { IVideo } from '@/models/other.model'
import { IProperty } from '@/models/property.model'

export interface MainPageProps {
	investment: IProperty[] | undefined
	recommended: IProperty[] | undefined
	countries: ICountry[] | undefined
	all_properties: IProperty[] | undefined
	video: IVideo[] | undefined
}
