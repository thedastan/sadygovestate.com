'use client'

import { Box } from '@chakra-ui/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import CountriesSwiper from './countries-swiper'
import FeaturedProperties from './featured-properties'
import ObjectsForInvestment from './objects-for-investment'

const HeroSwiper = ({ images }: { images: any[] }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="` + className + `"></span>`
		}
	}

	return !images.length ? null : (
		<Box
			h='709px'
			position='relative'
		>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false
				}}
				modules={[Pagination, Autoplay]}
				pagination={pagination}
				// effect='fade'
				loop={true}
				className='swiper-detail'
				style={{ height: '100%' }}
			>
				<SwiperSlide style={{ height: '100%' }}>
					<CountriesSwiper />
				</SwiperSlide>
				<SwiperSlide style={{ height: '100%' }}>
					<FeaturedProperties />
				</SwiperSlide>
				<SwiperSlide style={{ height: '100%' }}>
					<ObjectsForInvestment />
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}

export default HeroSwiper
