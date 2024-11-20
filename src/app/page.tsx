import { redirect } from 'next/navigation'

import { EnumIntl } from '@/models/types/intl-types'

export default function RootPage() {
	redirect(`/${EnumIntl.ENGLISH}`)
}
