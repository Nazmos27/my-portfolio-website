import React from 'react'
import './cardAnimate.css'
import jsImg from '/icons/js-official-svgrepo-com.svg'
import htmlImg from '/icons/html-5-svgrepo-com (1).svg'
import cssImg from '/icons/css-3-svgrepo-com (1).svg'
import reactImg from '/icons/react-javascript-js-framework-facebook-svgrepo-com.svg'
import tailwindImg from '/icons/tailwind-svgrepo-com.svg'
import bootstrapImg from '/icons/bootstrap-svgrepo-com.svg'
import firebaseImg from '/icons/firebase-svgrepo-com.svg'
import jwtImg from '/icons/icons8-json-web-token.svg'
import expressImg from '/icons/express-svgrepo-com.svg'
import mongoImg from '/icons/mongo-svgrepo-com.svg'
import routerImg from '/icons/react-router-svgrepo-com.svg'
import nextImg from '/icons/nextjs-svgrepo-com.svg'
import nodeImg from '/icons/nodejs-svgrepo-com.svg'
import vsImg from '/icons/vscode-svgrepo-com.svg'
import vercelImg from '/icons/vercel-icon-svgrepo-com.svg'
import netlifyImg from '/icons/netlify-svgrepo-com.svg'
import gitImg from '/icons/git-svgrepo-com.svg'
import npmImg from '/icons/npm-svgrepo-com.svg'
import figmaImg from '/icons/figma-svgrepo-com.svg'
import reactNative from '/icons/react-native.png'
import sqlite from '/icons/sq-lite.svg'
import Marquee from 'react-fast-marquee'

import { Typewriter } from 'react-simple-typewriter'





const Skills = () => {
  return (
    <div className='min-h-screen w-full' id='Skills'>
      <div className='text-center'><h1 className='md:text-5xl text-3xl'><span>
            <Typewriter
              words={['My Skills']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            /></span></h1></div>
      {/* Expertise section */}
      <div>
        <div className='text-center my-10'>
          <hr className='w-2/3 mx-auto border-[1px] ' />
          <h1 className='text-3xl my-2'>|  Expertise  |</h1>
          <hr className='w-2/3 mx-auto border-[1px] ' />
        </div>
        <Marquee>
          <div className='flex justify-center items-center gap-4 mx-4'>
            <div className="container1 ">
              <div className='card'>
                <img src={htmlImg} alt="JavaScript" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>html</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={cssImg} alt="JavaScript" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>CSS</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={jsImg} alt="JavaScript" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>JavaScript</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={reactImg} alt="JavaScript" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>React</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={tailwindImg} alt="JavaScript" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>Tailwind</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={bootstrapImg} alt="JavaScript" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>Bootstrap</h1>
              </div>
            </div>

          </div>
        </Marquee>
      </div>
      {/* Comfortable Section */}
      <div>
        <div className='text-center my-10'>
          <hr className='w-2/3 mx-auto border-[1px] ' />
          <h1 className='text-3xl my-2'>|  Comfortable  |</h1>
          <hr className='w-2/3 mx-auto border-[1px] ' />
        </div>
        <Marquee direction='right'>
          <div className='flex justify-center items-center gap-4 mx-4'>
            <div className="container1 ">
              <div className='card'>
                <img src={firebaseImg} alt="Firebase" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>Firebase</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={expressImg} alt="Express.js" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>Express.js</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={jwtImg} alt="JsonWebtoken" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>jwt</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={mongoImg} alt="MongoDB" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>MongoDB</h1>
              </div>
            </div>
            <div className="container1 ">
              <div className='card'>
                <img src={routerImg} alt="ReactRouter" className='h-8 w-8 mx-auto' />
                <h1 className='text-xl font-belanosima'>Router</h1>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      {/* Familiar Section */}
      <div>
        <div className='text-center my-10'>
          <hr className='w-2/3 mx-auto border-[1px] ' />
          <h1 className='text-3xl my-2'>|  Familiar  |</h1>
          <hr className='w-2/3 mx-auto border-[1px] ' />
        </div>
        <Marquee direction='left'>
        <div className='flex justify-center gap-4 mx-4'>
          <div className="container1 ">
            <div className='card'>
              <img src={nextImg} alt="Next.js" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>Next.js</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={nodeImg} alt="Node.js" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>Node.js</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={reactNative} alt="React-Native" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>React Native</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={sqlite} alt="SQLite" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>SQLite</h1>
            </div>
          </div>
        </div>
        </Marquee>
      </div>
      {/* Tools Section */}
      <div>
        <div className='text-center my-10'>
          <hr className='w-2/3 mx-auto border-[1px] ' />
          <h1 className='text-3xl my-2'>|  Tools  |</h1>
          <hr className='w-2/3 mx-auto border-[1px] ' />
        </div>
        <Marquee>
        <div className='flex justify-center items-center gap-4 mx-4'>
          <div className="container1 ">
            <div className='card'>
              <img src={vsImg} alt="VisualStudio" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>vsCode</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={netlifyImg} alt="Netlify" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>Netlify</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={figmaImg} alt="Figma" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>Figma</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={vercelImg} alt="Vercel" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>Vercel</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={gitImg} alt="GitHub" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>GitHub</h1>
            </div>
          </div>
          <div className="container1 ">
            <div className='card'>
              <img src={npmImg} alt="npm" className='h-8 w-8 mx-auto' />
              <h1 className='text-xl font-belanosima'>npm</h1>
            </div>
          </div>
        </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Skills