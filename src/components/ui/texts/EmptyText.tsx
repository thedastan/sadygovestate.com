import { Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

const EmptyText = () => {
	const t = useTranslations('Titles')
	return (
		<Text
			textAlign='center'
			mt='4'
			opacity='.7'
			color='#232D37'
		>
			{t('empty')}
		</Text>
	)
}

export default EmptyText
