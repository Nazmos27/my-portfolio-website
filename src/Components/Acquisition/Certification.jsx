import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./certification.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Certification() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:my-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:gap-12 ">
            <img
              src="https://i.ibb.co/zZP155N/Coursera-YTVR2-GDHRCLC.png"
              alt="React Native Certificate"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/2">
              <h1 className="md:text-3xl text-sm text-center my-4 md:my-0 font-semibold">
                React Native Course From Coursera
              </h1>
              <p className="md:text-sm hidden md:block md:mt-3">
                React Native is an open-source framework for building
                cross-platform applications (apps) using React and the
                platform's native capabilities. In this course, I have moved from
                the basics of React to a more advanced implementation using
                React Native. I have reviewed a wide range of different React
                components and ways of styling them. And I have gotten to practice
                using different mobile methods of interactivity with React
                Native.
              </p>
              <p>
                <span className="font-semibold text-xs md:text-xl">Verify At : </span>
                <a
                  href="https://coursera.org/share/7bdd5ae2a94ef454ac91e6643cd799ae"
                  className="link-primary underline md:text-xs text-[10px]"
                >
                  https://coursera.org/share/7bdd5ae2a94ef454ac91e6643cd799ae
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:my-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:gap-12">
            <img
              src="https://i.ibb.co.com/N6zSF5n/p-Hero-Certificate.png"
              alt="Programming Hero Certificate"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/2 ">
              <h1 className="md:text-3xl text-sm text-center my-4 md:my-0 font-semibold">
                Complete Web Development Course From Programming Hero
              </h1>
              <p className="md:text-sm hidden md:block md:mt-3">
              This is a comprehensive MERN stack web development course from the renowned platform "Programming Hero." The course covered full-stack development, where I learned to build dynamic web applications using MongoDB, Express, React, and Node.js. It enhanced my skills in both frontend and backend development, equipping me to create complete, responsive, and efficient web solutions.
              </p>
              
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:my-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:gap-12 ">
            <img
              src="https://i.ibb.co.com/gW7pg1n/ph-Level2-Certificate-page-0001.jpg"
              alt="Next level course Certificate"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/2">
              <h1 className="md:text-3xl text-sm text-center my-4 md:my-0 font-semibold">
                Next Level Web Development Course From Programming Hero
              </h1>
              <p className="md:text-sm hidden md:block md:mt-3">
                This course is a continuation of the previous MERN stack web
                development course from Programming Hero. It covers more advanced
                topics and practices in web development. I have learned to build
                more complex web applications, implement more advanced features,
                and optimize the performance of web solutions. I have also
                practiced working with more advanced tools and technologies in
                web development.This course has further enhanced my skills in both frontend and backend development, making me a more proficient full-stack developer.
              </p>
              <p>
                <span className="font-semibold text-xs md:text-sm">Verify At : </span>
                <a
                  href="https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch-3-mernWEB7-42831140"
                  className="link-primary underline md:text-xs text-[10px]"
                >
                  https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch-3-mernWEB7-42831140
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:my-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:gap-12">
            <img
              src="https://i.ibb.co.com/5vB6MJ1/Coursera-algorithmic-toolbox-1.png"
              alt="Algorithmic toolbox Certificate"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/2 ">
              <h1 className="md:text-3xl text-sm text-center my-4 md:my-0 font-semibold">
                Algorithmic Toolbox Course From Coursera
              </h1>
              <p className="md:text-sm hidden md:block md:mt-3">
                This online course covers basic algorithmic techniques and ideas
                for computational problems arising frequently in practical
                applications: sorting and searching, divide and conquer, greedy
                algorithms, dynamic programming. I've learned a lot of theory:
                how to sort data and how it helps for searching; how to break a
                large problem into pieces and solve them recursively; when it
                makes sense to proceed greedily; how dynamic programming is used
                in genomic studies. I've practiced solving computational
                problems, designing new algorithms, and implementing solutions
                efficiently (so that they run in less than a second).
              </p>
              <p>
                <span className="font-semibold text-xs md:text-sm">Verify At : </span>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/8FHJ73NPK89U"
                  className="link-primary underline md:text-xs text-[10px]"
                >
                  https://www.coursera.org/account/accomplishments/certificate/8FHJ73NPK89U
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:my-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:gap-12">
            <img
              src="https://i.ibb.co.com/gTXp7Ff/working-with-data-certificate.png"
              alt="Working with data Certificate"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/2 ">
              <h1 className="md:text-3xl text-sm text-center  my-4 md:my-0 font-semibold">
                Working With Data Course From Coursera
              </h1>
              <p className="md:text-sm hidden md:block md:mt-3">
                This course expands upon the knowledge I gained from the React
                Native course, it enables me to make more informed decisions
                about how I should access, store, retrieve and present data
                within my React Native applications. I've learned about <span className="">
                <br />• What REST APIs are and identified best practices for working with
                them <br />• Making network calls to retrieve online content and handle
                responses from the server <br />• Creating databases and tables and use
                SQL to store data in them in a structured, relational way <br />• Reading
                and writing data for a mobile application using AsyncStorage <br />•
                Reading and writing data for a mobile application using SQLite
                </span>
              </p>
              <p>
                <span className="font-semibold text-xs md:text-sm">Verify At : </span>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/69XRNBDKKPEK"
                  className="link-primary underline md:text-xs text-[10px]"
                >
                  https://www.coursera.org/account/accomplishments/certificate/69XRNBDKKPEK
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
