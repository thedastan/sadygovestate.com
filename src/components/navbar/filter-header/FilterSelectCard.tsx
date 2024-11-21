import { Box, Flex, Radio, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'

interface FilterSelectCardProps extends PropsWithChildren {
	onChange: () => void
	isActive: boolean
	flag?: string
}
const FilterSelectCard = (props: FilterSelectCardProps) => {
	const pathname = usePathname()
	const { push } = useRouter()
	const locale = useTypedLocale()
	const onChange = () => {
		if (pathname !== DASHBOARD_PAGES.CATALOG(locale)) {
			push(DASHBOARD_PAGES.CATALOG(locale))
		}

		props.onChange()
	}
	return (
		<Flex
			onClick={onChange}
			cursor='pointer'
			alignItems='center'
			justifyContent='space-between'
			w='100%'
			h='40px'
			pr='10px'
			rounded='10px'
			pl='4'
			bg={props.isActive ? '#0000000A' : '#FFFFFF'}
		>
			<Flex
				gap='2'
				alignItems='center'
			>
				{!!props?.flag && (
					<Box
						w='24px'
						h='17.14px'
						rounded='3.43px'
						overflow='hidden'
					>
						<Image
							src={props.flag}
							alt='Flag'
							className='full-image'
							width={24}
							height={4}
						/>
					</Box>
				)}
				<Text
					color='#000000'
					fontSize='14px'
					lineHeight='24px'
				>
					{props.children}
				</Text>
			</Flex>
			<Radio
				colorScheme='green'
				isChecked={props.isActive}
			/>
		</Flex>
	)
}

export default FilterSelectCard
