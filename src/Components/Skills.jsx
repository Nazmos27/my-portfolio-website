import React from 'react'
import js from '../../public/icons/js-official-svgrepo-com.svg'


const Skills = () => {
  return (
    <div className='min-h-screen w-full' id='Message'>Skills
    <div className='h-28 w-28 bg-gray-200 border-gray-400 border-2 shadow-2xl hover:scale-110 transition ease-in text-center py-6'>
        <img src={js} alt="JavaScript" className='h-10 w-10 mx-auto' />
        <h1 className='text-xl font-bold font-belanosima'>JavaScript</h1>
    </div>
    </div>
  )
}

export default Skills