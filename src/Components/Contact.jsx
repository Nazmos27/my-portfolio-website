import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Player } from '@lottiefiles/react-lottie-player';



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
    <div className='min-h-screen w-full p-10' id='Contact'>
      <div className='flex flex-col-reverse md:flex-row'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          
        </form>

        {/* <LottiePlayer
          src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop controls autoplay
        ></LottiePlayer> */}
        <Player
          // set the ref to your class instance
          autoplay={true}
          loop={true}
          controls={true}
          src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
          style={{ height: '300px', width: '300px' }}
        ></Player>
      </div>
    </div>
  )
}

export default Contact