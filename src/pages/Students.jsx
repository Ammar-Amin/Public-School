import React from 'react'
import { Link } from 'react-router-dom'

export default function Students() {
    return (
        <div className='w-full min-h-screen pt-16 md:pt-20 lg:pt-24 bg-purple-900 text-slate-200'>
            <img className='w-full max-h-[580px] object-cover' src='https://production-tcf.imgix.net/app/uploads/2018/05/18144925/GettyImages-862689938.jpg?auto=format%2Ccompress&q=80&fit=crop&w=1200&h=600' alt='Students' />
            <div className='px-4 w-full max-w-7xl mx-auto'>
                <div className='py-5 lg:py-10 text-center'>
                    <h1 className='mb-4 lg:mb-8 text-3xl lg:text-5xl xl:text-7xl font-semibold'>
                        Student Life at Our School
                    </h1>
                    <span className='lg:text-xl'> We have a vibrant and engaging student community at our school where students have the opportunity to participate in a variety of extracurricular activities, clubs, and societies. Explore the achievements and accolades of our students and learn about the leadership opportunities available through the student council.</span>
                </div>
                <div className='py-5 lg:py-10 xl:py-20 flex flex-col md:flex-row-reverse md:justify-center md:items-center'>
                    {/* img  */}
                    <div className='md:w-1/2 md:flex md:items-center'>
                        <img src='https://images.squarespace-cdn.com/content/v1/6088d661fa79b552557f992f/c7eecb8e-2d2a-4852-913c-ec495776288e/CER-Ltd-Education-teaching-6.jpg' alt='academics' className='w-full max-h-[700px] p-4 object-cover' />
                    </div>
                    {/* academics  */}
                    <div className='my-10 px-4 md:w-1/2 md:px-[4%] md:my-auto'>
                        <div className='flex flex-col gap-10 lg:text-lg'>
                            <div>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Extracurricular Activities</h6>
                                <p>Our school offers a wide range of extracurricular activities for students to explore their interests and talents outside of the classroom.</p>
                            </div>
                            <div>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Clubs and Societies</h6>
                                <p>Students can join various clubs and societies to connect with like-minded peers, engage in shared interests, and foster a sense of community.</p>
                            </div>
                            <div>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Achievements and Accolades</h6>
                                <p>Our students have achieved remarkable success in academics, sports, arts, and community service, earning recognition and accolades both locally and nationally.</p>
                            </div>
                        </div>
                        <button className='mt-6 lg:mt-7 lg:text-xl px-8 py-2 font-semibold bg-slate-300 hover:bg-white text-black'>
                            <Link to='/about'>
                                About Us
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
