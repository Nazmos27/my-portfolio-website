import React from "react";
import summerImg from "/Projects/summerCamp.png";
import mechaImg from "/Projects/screencapture-mecha-freak-vercel-app-2024-11-24-21_35_33.png";
import reserveItImg from "/Projects/screencapture-reserve-it-ten-vercel-app-2024-11-24-21_33_49.png";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const MyProjects = () => {
  return (
    <div className="min-h-screen w-full md:my-32 my-16" id="Projects">
      <div className="text-center md:my-8">
        <h1 className="md:text-5xl text-3xl">
          <span>
            <Typewriter
              words={["My Projects"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <div className="md:flex flex justify-center items-center md:flex-row gap-6 flex-col">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="h-[600px] shadow-lg bg-base-200 w-72 px-2 overflow-hidden"
        >
          <div
            className="h-[300px] my-4 w-full bg-cover bg-no-repeat overflow-hidden hover:bg-bottom duration-[5000ms]"
            style={{ backgroundImage: `url(${reserveItImg})` }}
          ></div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold font-belanosima">Reserve it</h1>
            <hr className="text-center border-[1px]" />
            <p className="text-sm px-2">
              Need a space for your next meeting or event? ReserveIt is here for
              you! This platform allows you to book rooms with ease, manage
              schedules, and secure your slots effortlessly. Perfect for
              professionals, teams, or anyone needing a reliable booking system.
              Reserve your space today!
            </p>
          </div>
          <footer className="flex items-center justify-between mx-4 mt-6">
            <div className="flex gap-2">
              <div className="tooltip tooltip-right" data-tip="Client Side Code">
                <a href="https://github.com/Nazmos27/meeting-room-booking-system-frontend">
                  <FaGithub className="text-xl md:text-2xl"></FaGithub>
                </a>
              </div>
              <div className="tooltip" data-tip="Server Side Code">
                <a href="https://github.com/Nazmos27/meeting-room-booking-system-backend">
                  <FaGitAlt className="text-xl md:text-2xl"></FaGitAlt>
                </a>
              </div>
              <div className="tooltip" data-tip="live Site">
                <a href="https://reserve-it-ten.vercel.app/">
                  <BsBoxArrowUpRight className="text-xl md:text-2xl"></BsBoxArrowUpRight>
                </a>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn btn-primary md:btn-sm btn-xs px-4 rounded-none"
              onClick={() => window.my_modal_6.showModal()}
            >
              Features
            </button>
            <dialog
              id="my_modal_6"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  This is a room booking website where I implemented - <br />
                  • Separate dynamic dashboards for users and admins to manage
                  bookings, slots, and rooms efficiently. <br />
                  • Admins can create, update, and delete room details, manage
                  available time slots, and oversee user bookings. <br />
                  • Users can browse available rooms, select time slots, and
                  make payments via the Amar Pay payment gateway. <br />
                  • Integration of JWT for secure user authentication and
                  role-based access. <br />
                  <b>Technologies: </b> React, TypeScript, Ant Design, Redux, RTK Query,
                  Zod, Node.js, Express, MongoDB, and TypeScript.
                </p>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </footer>
        </div>
        <div className="h-[600px] shadow-lg bg-base-200 w-72 px-2 overflow-hidden">
          <div
            className="h-[300px] my-4 w-full bg-cover bg-no-repeat overflow-hidden hover:bg-bottom duration-[5000ms]"
            style={{ backgroundImage: `url(${mechaImg})` }}
          ></div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold font-belanosima">Mecha Freak</h1>
            <hr className="text-center border-[1px]" />
            <p className="text-sm px-2">
              Love premium mechanical keyboards? Welcome to Mecha Freak! A dummy
              e-commerce website for machanical keyboard enthusiats. Discover
              top-quality keyboards designed for performance and style. It’s a
              hub for enthusiasts who value precision and aesthetics.
            </p>
          </div>
          <footer className="flex items-center justify-between mx-4 mt-6">
            <div className="flex gap-2">
              <div className="tooltip-right tooltip" data-tip="Client Side Code">
                <a href="https://github.com/Nazmos27/mecha-freak-frontend">
                  <FaGithub className="text-xl md:text-2xl"></FaGithub>
                </a>
              </div>
              <div className="tooltip" data-tip="Server Side Code">
                <a href="https://github.com/Nazmos27/mecha-freak-server">
                  <FaGitAlt className="text-xl md:text-2xl"></FaGitAlt>
                </a>
              </div>
              <div className="tooltip" data-tip="live Site">
                <a href="https://mecha-freak.vercel.app/">
                  <BsBoxArrowUpRight className="text-xl md:text-2xl"></BsBoxArrowUpRight>
                </a>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn btn-primary md:btn-sm btn-xs px-4 rounded-none"
              onClick={() => window.my_modal_7.showModal()}
            >
              Features
            </button>
            <dialog
              id="my_modal_7"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  This is an e-commerce website for selling high-quality
                  mechanical keyboards where I implemented - <br />
                  • A fully functional admin dashboard to manage products,
                  orders, and user roles. <br />
                  • Product filtering and search functionalities for a seamless
                  user experience. <br />
                  • An optimized checkout process with payment integration using
                  Stripe. <br />
                  • Redux for state management, ensuring efficient handling of
                  global states like user authentication, cart, and order
                  details. <br />
                  • Responsive design ensuring usability across devices. <br />
                  <b>Technologies: </b> React, Tailwind, React Router, Redux, Node.js,
                  Express, MongoDB, JWT, and Vite.
                </p>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </footer>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="h-[600px] shadow-lg bg-base-200 w-72 px-2 overflow-hidden"
        >
          <div
            className="h-[300px] my-4 w-full bg-cover bg-no-repeat overflow-hidden hover:bg-bottom duration-[5000ms]"
            style={{ backgroundImage: `url(${summerImg})` }}
          ></div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold font-belanosima">
              Summer Spark Academy
            </h1>
            <hr className="text-center border-[1px]" />
            <p className="text-sm px-2">
              In western country most of the academic institution become closed
              for summer vacation...In that time most utilise their time
              learning different and interesting things.Summer Spark Academy
              provide courses various playful enjoyable topic.This is a website
              for them to maintain and manage all of their activity
            </p>
          </div>
          <footer className="flex items-center justify-between mx-4 mt-6">
            <div className="flex gap-2">
              <div className="tooltip tooltip-right" data-tip="Client Side Code">
                <a href="https://github.com/Nazmos27/Summer-Spark-Clientside">
                  <FaGithub className="text-xl md:text-2xl"></FaGithub>
                </a>
              </div>
              <div className="tooltip" data-tip="Server Side Code">
                <a href="https://github.com/Nazmos27/Summer-Spark-Serverside">
                  <FaGitAlt className="text-xl md:text-2xl"></FaGitAlt>
                </a>
              </div>
              <div className="tooltip" data-tip="live Site">
                <a href="https://assignmnet-12-e6430.web.app/">
                  <BsBoxArrowUpRight className="text-xl md:text-2xl"></BsBoxArrowUpRight>
                </a>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn btn-primary md:btn-sm btn-xs px-4 rounded-none"
              onClick={() => window.my_modal_5.showModal()}
            >
              Features
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  This is basically a react website where I implemented - <br />
                  • Admin, Instructor, and Student dashboards separately and
                  verify each of them individually. <br />
                  • Instructors can add classes as he pleases and admin can
                  remove classes and make anyone instructor as well as JWT added
                  in this project. <br />
                  • Stripe Payment method is implemented where students can
                  select classes and make payments for the classes through the
                  stipe payment method on this website. <br />
                  <b>Technologies: </b> React, Tailwind, React Router, Javascript, and
                  Vite.
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
  );
};

export default MyProjects;
