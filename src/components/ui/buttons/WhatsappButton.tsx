'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri'

import { WHATSAPP_LINK } from '@/constants/admin'

const WhatsappButton = () => {
	return (
		<Box
			position='fixed'
			bottom={{ md: '40px', base: '5' }}
			right={{ md: '50px', base: '5' }}
			zIndex='20'
		>
			<Link
				href={WHATSAPP_LINK}
				target={'_blank'}
			>
				<Flex
					justifyContent='center'
					alignItems='center'
					zIndex={1}
					boxShadow='#3331390F 0px 7px 29px 0px'
					bg='#1FBF35'
					borderRadius='50%'
					w='56px'
					h='56px'
					color='#FFFFFF'
					fontSize='30px'
					animation='pulse 1.5s infinite'
					_before={{
						content: `""`,
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '100%',
						height: '100%',
						borderRadius: '50%',
						bg: 'rgba(31, 191, 53, .7)',
						zIndex: -1,
						animation: 'pulse-scale 1.5s infinite'
					}}
				>
					<RiWhatsappFill />
				</Flex>

				<style
					jsx
					global
				>{`
					@keyframes pulse-scale {
						0% {
							transform: translate(-50%, -50%) scale(1);
							opacity: 0.8;
						}
						100% {
							transform: translate(-50%, -50%) scale(1.2);
							opacity: 0.5;
						}
					}
					@keyframes pulse {
						0% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.1);
						}
						100% {
							transform: scale(1);
						}
					}
				`}</style>
			</Link>
		</Box>
	)
}

export default WhatsappButton
