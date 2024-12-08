/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  domains: ['api.admin-sadygovestate.com'],
	},
	env: {
	  NEXT_PUBLIC_TIMEZONE: 'Asia/Dubai', // Устанавливаем временную зону для Абу-Даби
	}
  }
  
  export default nextConfig
  