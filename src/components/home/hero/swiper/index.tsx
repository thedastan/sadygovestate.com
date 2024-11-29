'use client'

import { Box } from '@chakra-ui/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { useVideo } from '@/hooks/usePersons'

import CountriesSwiper from './countries-swiper'
import FeaturedProperties from './featured-properties'
import ObjectsForInvestment from './objects-for-investment'

const HeroSwiper = () => {
	const { link, isLoading } = useVideo()
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="` + className + `"></span>`
		}
	}

	return (
		<Box
			h={{ md: '709px', base: '620px' }}
			position='relative'
		>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				allowTouchMove={false}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				}}
				modules={[Pagination, Autoplay]}
				pagination={pagination}
				// effect='fade'
				loop={true}
				className='swiper-detail'
				style={{ height: '100%' }}
			>
				<SwiperSlide style={{ height: '100%' }}>
					<CountriesSwiper video={link} />
				</SwiperSlide>
				<SwiperSlide style={{ height: '100%' }}>
					<FeaturedProperties video={link} />
				</SwiperSlide>
				<SwiperSlide style={{ height: '100%' }}>
					<ObjectsForInvestment />
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}

export default HeroSwiper
