import React from 'react'
import summerImg from '/Projects/summerCamp.png'
import heroImg from '/Projects/herotoys.png'
import chefImg from '/Projects/chef_studio.png'
import { FaGitAlt, FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'


const MyProjects = () => {
    return (
        <div className='min-h-screen w-full md:my-32 my-16' id='Projects'>
            <div className='text-center md:my-8'><h1 className='md:text-5xl text-3xl'><span>
                <Typewriter
                    words={['My Projects']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                /></span></h1></div>
            <div className='md:flex flex justify-center items-center md:flex-row gap-6 flex-col'>
                <div data-aos='fade-right' data-aos-duration='2000' className='h-[600px] shadow-lg bg-base-200 w-72 px-2 overflow-hidden'>
                    <div className='h-[300px] my-4 w-full bg-cover bg-no-repeat overflow-hidden hover:bg-bottom duration-[2000ms]' style={{ backgroundImage: `url(${summerImg})` }}>
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='text-2xl font-bold font-belanosima'>Summer Spark Academy</h1>
                        <hr className='text-center border-[1px]' />
                        <p className='text-sm px-2'>In western country most of the academic institution become closed for summer vacation...In that time most utilise their time learning different and interesting things.Summer Spark Academy provide courses various playful enjoyable topic.This is a website for them to maintain and manage all of their activity</p>
                    </div>
                    <footer className='flex items-center justify-between mx-4 mt-6'>
                        <div className='flex gap-2'>
                            <div className='tooltip' data-tip="Client Side Code"><a href="https://github.com/Nazmos27/Summer-Spark-Clientside"><FaGithub className='text-xl md:text-2xl'></FaGithub></a></div>
                            <div className='tooltip' data-tip="Server Side Code"><a href="https://github.com/Nazmos27/Summer-Spark-Serverside"><FaGitAlt className='text-xl md:text-2xl'></FaGitAlt></a></div>
                            <div className='tooltip' data-tip="live Site"><a href="https://assignmnet-12-e6430.web.app/"><BsBoxArrowUpRight className='text-xl md:text-2xl'></BsBoxArrowUpRight></a></div>
                        </div>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn btn-primary md:btn-sm btn-xs px-4 rounded-none" onClick={() => window.my_modal_5.showModal()}>Features</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">This is basically a react website where I implemented - <br />
                                    •	Admin, Instructor, and Student dashboards separately and verify each of them individually. <br />
                                    •	Instructors can add classes as he pleases and admin can remove classes and make anyone instructor as well as JWT added in this project. <br />
                                    •	Stripe Payment method is implemented where students can select classes and make payments for the classes through the stipe payment method on this website. <br />
                                    Technologies: React, Tailwind, React Router, Javascript, and Vite.
                                </p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </footer>
                </div>
                <div className='h-[600px] shadow-lg bg-base-200 w-72 px-2 overflow-hidden'>
                    <div className='h-[300px] my-4 w-full bg-cover bg-no-repeat overflow-hidden hover:bg-bottom duration-[2000ms]' style={{ backgroundImage: `url(${heroImg})` }}>
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='text-2xl font-bold font-belanosima'>Hero Toys</h1>
                        <hr className='text-center border-[1px]' />
                        <p className='text-sm px-2'>Who were not fond of superhero action figure in childhood?!Rare to find one...Girls love to play with barbie,Boys love to play with superheros.Hero Toys is an E-commerce website for selling action figure from action movies.There are different types of action figure provided from our reliable supplier.</p>
                    </div>
                    <footer className='flex items-center justify-between mx-4 mt-6'>
                        <div className='flex gap-2'>
                            <div className='tooltip' data-tip="Client Side Code"><a href="https://github.com/Nazmos27/Hero-Toys-Clientside"><FaGithub className='text-xl md:text-2xl'></FaGithub></a></div>
                            <div className='tooltip' data-tip="Server Side Code"><a href="https://github.com/Nazmos27/Hero-Toys-Serverside"><FaGitAlt className='text-xl md:text-2xl'></FaGitAlt></a></div>
                            <div className='tooltip' data-tip="live Site"><a href="https://assignment-11-b8db9.web.app/"><BsBoxArrowUpRight className='text-xl md:text-2xl'></BsBoxArrowUpRight></a></div>
                        </div>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn btn-primary md:btn-sm btn-xs px-4 rounded-none" onClick={() => window.my_modal_6.showModal()}>Features</button>
                        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">This is a react website where I implemented - <br />
                                    •	Firebase Google Authentication and authorization like admin role and Mongodb for database. <br />
                                    •	User can add, delete and update any toys he/she wants and see these added toys with login. <br />
                                    •	Colored user experience with the help of Tailwind (daisy-Ui plugin) and raw CSS. <br />
                                    Technologies: React, Tailwind, Node.js, Express Js, React Router, Javascript and Vite.
                                </p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </footer>
                </div>
                <div data-aos='fade-left' data-aos-duration='2000' className='h-[600px] shadow-lg bg-base-200 w-72 px-2 overflow-hidden'>
                    <div className='h-[300px] my-4 w-full bg-cover bg-no-repeat overflow-hidden hover:bg-bottom duration-[2000ms]' style={{ backgroundImage: `url(${chefImg})` }}>
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='text-2xl font-bold font-belanosima'>Chef's Studio</h1>
                        <hr className='text-center border-[1px]' />
                        <p className='text-sm px-2'>Want to eat special,traditional italian food? Welcome to Chef's Studio...Here you can taste awesome food from famous italian chef...Coocking is like a art.A good taste surely will amuse you.So this is not a reataurant,rather it's a studio where we make food by artist,they know art of coocking.So don't miss this</p>
                    </div>
                    <footer className='flex items-center justify-between mx-4 mt-6'>
                        <div className='flex gap-2'>
                            <div className='tooltip' data-tip="Client Side Code"><a href="https://github.com/Nazmos27/Chefs-studio-Clientside"><FaGithub className='text-xl md:text-2xl'></FaGithub></a></div>
                            <div className='tooltip' data-tip="Server Side Code"><a href="https://github.com/Nazmos27/Chefs-Studio-Serverside"><FaGitAlt className='text-xl md:text-2xl'></FaGitAlt></a></div>
                            <div className='tooltip' data-tip="live Site"><a href="https://assignment-10-14836.web.app/"><BsBoxArrowUpRight className='text-xl md:text-2xl'></BsBoxArrowUpRight></a></div>
                        </div>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn btn-primary md:btn-sm btn-xs px-4 rounded-none" onClick={() => window.my_modal_7.showModal()}>Features</button>
                        <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">  This is a react website where I implemented - <br />
                                    •	Github, Firebase and Google Authentication and authorization like admin role and Mongodb for the database. <br />
                                    •	Without logging in, user can't see the chef's view details section and it is implemented with the private route in react. <br />
                                    •	To color user experience with the help of tailwind (daisyUI plugin) and raw CSS. <br />
                                    Technologies: React, Tailwind, Node.js, Express Js, React Router, Javascript, and Vite
                                </p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </footer>
                </div>

            </div>
        </div>
    )
}

export default MyProjects