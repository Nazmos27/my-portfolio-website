import React from 'react'
import img from '/IMG20230515122216-removebg-preview.png'
import img2 from '/IMG20230515122216.jpg'
import img3 from '/IMG_20230519_201130.jpg'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <div data-aos='flip-up' className='min-h-screen w-full py-10 ' id='About'>
        <div className='flex justify-center items-center mx-40 gap-10'>
        <div>
            <h1 className='text-5xl'><span>
            <Typewriter
            words={['About Me']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam nihil id animi. Porro atque laboriosam alias voluptas repudiandae quibusdam dolor amet perspiciatis earum distinctio expedita accusamus soluta enim deleniti libero dolores temporibus, non, esse obcaecati architecto mollitia, animi quas. Recusandae ipsa repellendus aliquid perferendis maiores autem suscipit blanditiis sapiente?</p>
        </div>
        <img src={img3} className='h-1/5 w-1/3 rounded-lg shadow-2xl' alt="" />
        </div>
    </div>
  )
}

export default About