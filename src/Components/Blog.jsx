import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://portfolio-backend-umber-one.vercel.app/blogs'); 
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className='min-h-screen w-full md:my-32 my-16' id='Projects'>
            <div className='text-center md:my-8'>
                <h1 className='md:text-5xl text-3xl'>
                    <span>
                        <Typewriter
                            words={['My Blogs']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            <div className='md:flex flex justify-center items-center md:flex-row gap-6 flex-col'>
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        data-aos='fade-right'
                        data-aos-duration='2000'
                        className='py-10 shadow-lg bg-base-200 w-72 px-2 overflow-hidden'
                    >
                        <div className='text-center mt-4'>
                            <h1 className='text-2xl font-bold font-belanosima'>{blog.title}</h1>
                            <hr className='text-center border-[1px]' />
                            <p className='text-sm px-2'>{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
