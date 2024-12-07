import { useTranslations } from 'next-intl'
import { FaTelegramPlane } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'
import { RiPhoneFill } from 'react-icons/ri'
import { RiYoutubeFill } from 'react-icons/ri'

import {
	INSTAGRAM_LINK,
	TELEGRAM_LINK,
	WHATSAPP_LINK,
	YOUTUBE_LINK
} from '@/constants/admin'

import { IFormSelect } from '@/models/other.model'

export function useNavbar() {
	const t = useTranslations('Titles')

	return [
		{
			name: t('home'),
			path: '/'
		},
		{
			name: t('about_company'),
			path: '#about'
		},
		{
			name: t('properties'),
			path: '#catalog'
		}
	]
}

export function useTypeList(): IFormSelect[] {
	const t = useTranslations('Titles.form_type')
	return [
		{ id: 1, name: t('buy_an') },
		{ id: 2, name: t('rent_out') },
		{ id: 3, name: t('rent_an') },
		{ id: 4, name: t('sell') }
	]
}

export const SocialMediaIcons = {
	INSTAGRAM: RiInstagramFill,
	TELEGRAM: FaTelegramPlane,
	WHATSAPP: RiWhatsappFill,
	PHONE: RiPhoneFill,
	YOUTUBE: RiYoutubeFill
}

export const social_contacts = [
	{
		name: 'Instagram',
		href: INSTAGRAM_LINK,
		icon: SocialMediaIcons.INSTAGRAM
	},
	{
		name: 'Telegram',
		href: TELEGRAM_LINK,
		icon: SocialMediaIcons.TELEGRAM
	},
	{
		name: 'Whatsapp',
		href: WHATSAPP_LINK,
		icon: SocialMediaIcons.WHATSAPP
	}
]
