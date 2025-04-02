'use client'

import { Box } from '@chakra-ui/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import CountriesSwiper from './countries-swiper'
import FeaturedProperties from './featured-properties'
import ObjectsForInvestment from './objects-for-investment'
import { MainPageProps } from './types'

const HeroSwiper = (props: MainPageProps) => {
	const link = props.video ? props.video[0].link : undefined
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
					<CountriesSwiper
						video={link}
						countries={props.countries}
						properties={props.all_properties}
					/>
				</SwiperSlide>
				<SwiperSlide style={{ height: '100%' }}>
					<FeaturedProperties
						video={link}
						recommended={props.recommended}
					/>
				</SwiperSlide>
				<SwiperSlide style={{ height: '100%' }}>
					<ObjectsForInvestment investment={props.investment} />
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}

export default HeroSwiper
