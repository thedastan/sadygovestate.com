/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'api.admin-sadygovestate.com'
		},
		{
		  protocol: 'https',
		  hostname: 's3-ap-southeast-1.amazonaws.com'
		}
	  ]
	},
	env: {
	  NEXT_PUBLIC_TIMEZONE: 'Asia/Dubai' // Устанавливаем временную зону для Абу-Даби
	}
  }
  
  export default nextConfig
  