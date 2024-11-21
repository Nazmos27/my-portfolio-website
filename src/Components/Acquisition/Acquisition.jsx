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
        <div className=' w-full p-10' id='Acquisition'>
            <div className='text-center'><h1 className='md:text-5xl text-3xl'><span>
                <Typewriter
                    words={['My Hobbies And Acquisition']}
                    loop={7}
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
            <div className='text-center md:mt-10 mt-6'>
                <h1 className='md:text-2xl text-xl font-semibold font-belanosima'>Acquisitions</h1>
            </div>
            <div className='my-10 md:flex justify-center items-center gap-12'>
                <img src="https://i.ibb.co/zZP155N/Coursera-YTVR2-GDHRCLC.png" alt="React Native Certificate" className='md:w-1/3 w-full' />
                <div className='md:w-1/3 '>
                    <h1 className='md:text-3xl text-2xl text-center md:text-left my-4 md:my-0 font-semibold'>React Native Course From Coursera</h1>
                    <p className='text-sm'>React Native is an open-source framework for building cross-platform applications (apps) using React and the platform's native capabilities. In this course, I have move from the basics of React to a more advanced implementation using React Native. I have review a wide range of different React components and ways of styling them. And I have get to practice using different mobile methods of interactivity with React Native.</p>
                    <p><span className='font-semibold'>Verify At : </span><a href="https://coursera.org/share/7bdd5ae2a94ef454ac91e6643cd799ae" className='link-primary underline md:text-xs text-[10px]'>https://coursera.org/share/7bdd5ae2a94ef454ac91e6643cd799ae</a></p>
                </div>

            </div>
        </div>
    )
}

export default Acquisition

