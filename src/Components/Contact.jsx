import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Player } from '@lottiefiles/react-lottie-player';
import {SlLocationPin} from 'react-icons/sl'
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'



const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ygpmhux', 'template_n3hbywo', form.current, 'B35Tr2nY1gJ4A4BZs')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className='min-h-screen w-full p-10 mb-10' id='Contact'>
      <h1 className='text-3xl md:text-5xl text-center md:mb-14 mb-8'>Contact</h1>
      <div className='flex flex-col-reverse md:flex md:justify-center md:items-center md:flex-row md:gap-8'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col bg-base-200 p-10'>
          <label className='my-2'>Name</label>
          <input type="text" name="user_name" className='input input-bordered' />
          <label className='my-2'>Email</label>
          <input type="email" name="user_email" className='input input-bordered' />
          <label className='my-2'>Message</label>
          <textarea name="message" className='input input-bordered h-32 md:h-32 md:w-52' />
          <input type="submit" value="Send" className='input input-bordered my-4' />

        </form>
      <div className='divider md:hidden'>Or</div>

        <div>
          <Player
            // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
            style={{ height: '300px', width: '300px' }}
          ></Player>
          <div>
            <p className='flex items-center justify-center gap-2'><SlLocationPin></SlLocationPin> <span className='font-semibold'>Location :</span> Dhaka,Bangladesh</p>
            <p className='flex items-center justify-center gap-2'><FaWhatsapp></FaWhatsapp><span className='font-semibold'>Whatsapp : </span>+8801789512433</p>
            <p className='flex items-center justify-center gap-2'><AiOutlineMail></AiOutlineMail><span className='font-semibold'>Email : </span>nazmos789@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact