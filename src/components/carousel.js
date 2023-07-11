import React from 'react'

import {
  mani1,
  mani2,
  mani4,
  pedi5,
  pedi7
} from '../assets/carousel/carousel1'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import 'swiper/css/bundle'

export default function Carousel1() {
  return (

    <div className='w-[300px]'>
      <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
           
            
        >
            <SwiperSlide >
                <img src={mani1} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mani2} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mani4} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pedi5} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pedi7} alt="hero" />
            </SwiperSlide>
         
        </Swiper>
    </div>

  )
}
