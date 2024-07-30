import React from 'react'
import { Link } from 'react-router-dom'
export default function AboutUs() {
    return (
        <div className='w-full min-h-screen bg-purple-900 text-slate-200'>
            <div className='pt-16 md:pt-20 lg:pt-24 w-full h-screen max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center md:items-center'>
                {/* img  */}
                <div className='md:w-1/2 md:flex md:items-center'>
                    <img src='https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=2048x2048&w=is&k=20&c=IuF5Cnl9dFZdrubE-t8UNOT9OLr52sX1ER_i6eEooiM=' alt='about us' className='w-full p-4 object-cover' />
                </div>
                {/* about  */}
                <div className='px-4 md:w-1/2 md:px-[4%] md:my-auto'>
                    <h1 className='my-3 text-5xl font-semibold lg:mb-6 lg:text-7xl'>About Us</h1>
                    <div className='flex flex-col gap-3 lg:gap-5 lg:text-xl'>
                        <p>Pune school was founded with a vision to inspire and educate young minds. Our mission is to nurture the potential in each student and help them grow academically and personally</p>
                        <p>We Believe in fostering a supportive and engaging learning environment. Join us, and together we will embark on a journey of development and growth </p>
                    </div>
                    <button className='mt-3 lg:mt-7 lg:text-xl px-8 py-2 font-semibold bg-yellow-500 hover:bg-yellow-400 text-black'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
