import { Avatar, Box, Flex } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

import Description from '../texts/Description'

const ReviewCard = () => {
	return (
		<Box
			bg='#FFFFFF'
			rounded='20px'
			border='1px solid var(--Gray, #F2F2F2)'
			px='5'
			py='18.5px'
			maxW='742px'
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
						Liam Hyder
					</Description>
					<Description
						color='#12141D'
						opacity='.7'
						fontSize='12px'
						lineHeight='14.52px'
					>
						1 отзыв
					</Description>
				</Flex>
			</Flex>
			<Flex
				alignItems={'center'}
				mt='14px'
				gap='19px'
			>
				<Flex gap='2'>
					{[1, 2, 3, 4, 5].map(star => (
						<FaStar
							color='#FFBF18'
							key={star}
							fontSize='15px'
						/>
					))}
				</Flex>
				<Description
					color='#12141D'
					opacity='.7'
					fontSize='14px'
					lineHeight='16.94px'
				>
					11 месяцев назад
				</Description>
			</Flex>
			<Description
				mt='14px'
				color='#12141D'
				opacity='.8'
				lineHeight='26px'
			>
				Компания просто супер, приветливые, профессиональные менеджеры, особенно
				мне запомнился брокер Дмитрий, к сожалению не запомнил фамилию.
				ПРОФЕССИОНАЛ С БОЛЬШОЙ БУКВЫ, ВНИМАТЕЛЕН И ПРИВЕТЛИВ. ДА И ОСТАЛЬНЫЕ
				РЕБЯТА ПРОСТО СЛОВ НЕТ ДЛЯ НИХ БЛАГОДАРНОСТИ. БОЛЬШЕ БЫ ТАКИХ ЛЮДЕЙ.
				ДРУЗЬЯМ РЕКОМЕНДУЮ.
			</Description>
		</Box>
	)
}

export default ReviewCard
