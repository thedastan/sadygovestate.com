import { Avatar, Box, Flex } from '@chakra-ui/react'
import moment from 'moment'
import 'moment/locale/ar'
import 'moment/locale/ru'
import { useTranslations } from 'next-intl'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

import useTypedLocale from '@/hooks/useLocale'

import Description from '../texts/Description'

import { IReview } from '@/models/other.model'

const ReviewCard = ({ el }: { el: IReview }) => {
	const locale = useTypedLocale()
	const t = useTranslations('Titles')
	moment.locale(locale) // Устанавливаем локализацию

	/**
	 * Возвращает строку времени в формате "X времени назад".
	 * @param {Date | string | number} date - Дата в формате `Date`, ISO-строке, или временной метке.
	 * @returns {string} - Строка вида "X месяцев назад".
	 */
	function timeAgo(date: string) {
		return moment(date).fromNow()
	}
	return (
		<Box
			bg='#FFFFFF'
			rounded='20px'
			w={{ lg: '742px', sm: '600px', base: '450px' }}
			border='1px solid var(--Gray, #F2F2F2)'
			px={{ md: '5', base: '4' }}
			py={{ md: '18.5px', base: '5' }}
			maxW='742px'
			textAlign='start'
		>
			<Flex gap='3'>
				<Avatar
					w='46px'
					h='46px'
					bg='#292D32'
				/>
				<Flex
					flexDirection='column'
					justifyContent='space-between'
					py='2px'
				>
					<Description
						fontWeight='600'
						color='#12141D'
					>
						{el.full_name}
					</Description>
					<Description
						color='#12141D'
						opacity='.7'
						fontSize='12px'
						lineHeight='14.52px'
					>
						{`1 ${t('comment')}`}
					</Description>
				</Flex>
			</Flex>
			<Flex
				alignItems={'center'}
				mt='14px'
				gap='19px'
			>
				<Flex gap='2'>
					{[1, 2, 3, 4, 5].map(star =>
						star <= el.rating ? (
							<FaStar
								color='#FFBF18'
								key={star}
								fontSize='15px'
							/>
						) : (
							<FaRegStar
								key={star}
								fontSize='15px'
								opacity='.5'
							/>
						)
					)}
				</Flex>
				<Description
					color='#12141D'
					opacity='.7'
					fontSize='14px'
					lineHeight='16.94px'
				>
					{timeAgo(el.created_at)}
				</Description>
			</Flex>
			<Description
				mt='14px'
				color='#12141D'
				opacity='.8'
				lineHeight='26px'
			>
				{el.comment}
			</Description>
		</Box>
	)
}

export default ReviewCard
