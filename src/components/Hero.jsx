import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/bundle'


import { hero1, hero2, hero3, hero4, hero5,hero6 } from '../assets/hero';





const Hero = () => {
  return (
    <div className='my-8' >
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
            effect='fade'
            
        >
            <SwiperSlide >
                <img src={hero1} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero2} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero3} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero4} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero5} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero6} alt="hero" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero