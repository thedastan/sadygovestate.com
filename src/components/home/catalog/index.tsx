'use client'

import { Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

import CatalogGridComponent from '@/components/catalog/catalog-grid'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard-url.config'

import useTypedLocale from '@/hooks/useLocale'
import { useProperties } from '@/hooks/useProperties'

const CatalogHome = () => {
	const { data_main_page, isLoading } = useProperties()
	const t = useTranslations('Titles')
	const locale = useTypedLocale()
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '170px', base: '60px' }}
			id='catalog'
		>
			<Flex
				gap='14px'
				alignItems='center'
				justifyContent={{ sm: 'start', base: 'center' }}
			>
				<TitleComponent query={t('catalog').split(' ')[1]}>
					{t('catalog')}
				</TitleComponent>
				<Link href={DASHBOARD_PAGES.CATALOG(locale)}>
					<Flex
						alignItems='center'
						justifyContent='center'
						w='44px'
						h='44px'
						rounded='50%'
						border='1px solid #DFDFDF'
						color='#000000'
					>
						<GoArrowUpRight fontSize='34px' />
					</Flex>
				</Link>
			</Flex>

			<CatalogGridComponent
				data={data_main_page}
				isLoading={isLoading}
			/>

			<Flex
				display={{ md: 'none', base: 'flex' }}
				mt='30px'
				justifyContent='center'
			>
				<Link href={DASHBOARD_PAGES.CATALOG(locale)}>
					<Flex
						color='#000000'
						alignItems='center'
						gap='1'
					>
						<Text
							fontSize='14px'
							textTransform='uppercase'
							lineHeight='16.1px'
							letterSpacing='0.7px'
							fontWeight='400'
						>
							{t('all_properties')}
						</Text>
						<GoArrowUpRight fontSize='20px' />
					</Flex>
				</Link>
			</Flex>
		</Container>
	)
}

export default CatalogHome
