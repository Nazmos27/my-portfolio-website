import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './acquisition.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Acquisition = () => {
    return (
        <div className='h-[500px] w-full p-10' id='Acquisition'>
            <div className='text-center'><h1 className='md:text-5xl text-3xl'><span>
                <Typewriter
                    words={['My Hobbies And Acquisition']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                /></span></h1>
                </div>
                <div className='text-center md:mt-10 mt-6'>
                    <h1 className='md:text-2xl text-xl font-semibold font-belanosima'>Some Of My Artworks</h1>
                </div>
            <div>
                <>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://i.ibb.co/h73pQRB/IMG20230703174912.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/55DQKD1/IMG20230703174822.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/wpcBqVz/IMG20230703174749.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/k2LL5CR/IMG20230703174844.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/3vKGvtZ/IMG20230703174933.jpg" />
                        </SwiperSlide>
                        
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default Acquisition

