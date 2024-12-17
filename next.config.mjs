/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['api.admin-sadygovestate.com', 's3-ap-southeast-1.amazonaws.com']
	},
	env: {
		NEXT_PUBLIC_TIMEZONE: 'Asia/Dubai' // Устанавливаем временную зону для Абу-Даби
	}
}

export default nextConfig
