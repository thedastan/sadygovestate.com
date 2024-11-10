import { redirect } from 'next/navigation'

import { EnumIntl } from '@/types/intl.types'

export default function RootPage() {
	redirect(`/${EnumIntl.ENGLISH}`)
}
