import axios from 'axios'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { WHATSAPP_LINK } from '@/constants/admin'

import { IFormState } from '@/models/other.model'

export function useForm(onSuccess: () => void) {
	const t = useTranslations('Titles')
	const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN
	const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID

	function tgMessage(value: IFormState) {
		let message = `Имя: <b>${value.full_name}</b>\n`
		message += `номер: <b>${value.phone}</b>\n`
		message += `Тип: <b>${value.tipo.name}</b>\n`
		message += `Страна: <b>${value.country.name}</b>\n`
		message += value.message ? `Сообщение: ${value.message}\n` : ''
		return message
	}
	async function onSend(value: IFormState) {
		const link = document.createElement('a')
		link.setAttribute('target', '_blank')

		const message = `${t('form_submit.hello')}\n\n${t('form_submit.user_text')} ${value.country.name}\n${t('form_type.placeholder')}: ${value.tipo.name}\n${t('form_submit.phone')}: ${value.phone}\n${value.message}`

		const wa_link = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`
		link.href = wa_link
		if (!value.country?.id) {
			toast.error(t('form_submit.country_toast'))
			return
		} else if (!value.tipo?.id) {
			toast.error(t('form_submit.type_toast'))
		} else {
			try {
				await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
					chat_id: CHAT_ID,
					parse_mode: 'html',
					text: tgMessage(value)
				})
				link.click()
				onSuccess()
			} catch (e) {
				toast.error(`Error: ${e}`)
			}
		}
	}

	return { onSend }
}
