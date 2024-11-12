import {
	PhoneInput,
	defaultCountries,
	parseCountry
} from 'react-international-phone'
import 'react-international-phone/style.css'

export interface IInputComponentProps {
	name?: string
	placeholder?: string
	value?: string
	handleChange?: (value: string) => void
	required?: boolean
}

const PhoneInputComponent = ({
	name = 'phone',
	placeholder = 'Номер',
	value,
	handleChange,
	required = true
}: IInputComponentProps) => {
	const countries = defaultCountries.filter(country => {
		const { iso2 } = parseCountry(country)
		return ['kg'].includes(iso2)
	})
	return (
		<PhoneInput
			defaultCountry='ae'
			name={name}
			value={value}
			required={required}
			onChange={handleChange}
			className={'phone-input'}
			placeholder={placeholder}
			autoFocus={false}
		/>
	)
}

export default PhoneInputComponent
