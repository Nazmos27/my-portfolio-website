import React, { useEffect, useState } from 'react'
import nameImg from '/04c3b6622747417c8f5efe62cef5972f.png'
import nameImg2 from '/fontspace.png'
import profile from '/cutout_sakib.png'
import './borderAnimate.css'
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces } from 'react-icons/si'
import { Typewriter } from 'react-simple-typewriter'




const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")


    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])



    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className='min-h-screen w-full  my-10' id='Home'>
            <div className=' flex justify-between items-center m-10 '>
                <img src={theme === "light" ? nameImg2 : nameImg} className='md:h-20 md:w-36 h-14 w-24' alt="" />
                <div className='md:flex-row md:items-center flex flex-col justify-center md:gap-4'>

                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleTheme} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                    <button className='btn btn-primary btn-sm md:btn md:btn-primary text-xs'>My Resume</button>

                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col justify-center items-center md:flex-row md:gap-32 md:mx-20'>
                    <div className='md:h-96 md:w-1/3 my-10'>
                        <div className='box'>
                            <div className='content'>
                                <img src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 md:mx-10'>
                        <h1 className='text-3xl md:text-5xl font-bold font-belanosima'>Myself <span className='animate-text'>Md Nazmos Sakib</span></h1>
                        <div><h1 className='md:text-2xl text-xl'>I am a <span>
                            <Typewriter
                                words={['full-stack developer','MERN stack developer','learner']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            /></span></h1></div>
                        <p>Welcome! I am a student,studying Law at "Department Of Law" in Jagannath University,Dhaka,Bangladesh!I am 23 years old now.As a MERN stack developer I have a good control over mongoDB,Express.js,React and Node.js</p>
                        <p className='flex gap-2 mt-4 '>
                            <div className='tooltip' data-tip='LinkedIn'><a href="https://www.linkedin.com/in/nazmos-sakib-31ab58274/"><FaLinkedin className='h-8 w-8 text-blue-600'></FaLinkedin></a></div>
                            <div className='tooltip' data-tip='Github'> <a href="https://github.com/Nazmos27"><FaGithub className='h-8 w-8'></FaGithub></a></div>
                            <div className='tooltip' data-tip='CodeForces'><a href="https://codeforces.com/profile/nsakib_27"><SiCodeforces className='h-8 w-8 text-blue-600'></SiCodeforces></a></div>
                            <div className='tooltip' data-tip='Facebook'> <a href="https://www.facebook.com/profile.php?id=100008488000660&mibextid=ZbWKwL"><FaFacebookSquare className='h-8 w-8 text-blue-600'></FaFacebookSquare></a> </div>



                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home