import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Admissions() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }, [])
    return (
        <div className='pt-16 md:pt-20 lg:pt-24 w-full min-h-screen bg-purple-900 text-white'>
            <img className='w-full max-h-[580px] object-cover' src='https://internationaljournalofresearch.files.wordpress.com/2020/06/images-32.jpeg?w=774' alt='admissions' />
            <button className='block mx-auto my-10 px-6 py-2 lg:px-8 lg:py-3 lg:text-xl bg-blue-500 hover:bg-blue-400 font-medium'>
                <Link to='https://forms.gle/NXdyJAAxxaPWFDuF7'>
                    Apply Now
                </Link>
            </button>

            <div className='pb-10 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row-reverse justify-between md:gap-10 items-center xl:items-end'>
                    <div className='px-4'>
                        <div className='md:hidden'>
                            <span className='text-lg'>We are currently accepting applications to fill limited spaces for the current school year and for next school year (2024-2025).</span>
                            <img src='https://c.stocksy.com/a/u5DA00/z9/2433618.jpg' alt='image' className='mt-10 object-cover' />
                        </div>
                        <h1 className='mt-3 lg:mt-6 py-5 text-4xl md:text-5xl font-medium'>Apply Today!</h1>
                        <h6 className='mb-3 lg:mb-6 text-xl md:text-3xl font-medium'>Complete our FORM to apply for enrollment in Springdale</h6>
                        <span className='hidden md:block lg:text-lg'>We are currently accepting applications to fill limited spaces for the current school year and for next school year (2024-2025).</span>
                        <p className='my-3 lg:my-6 lg:text-lg'>You can also apply using the{' '}
                            <Link to='https://forms.gle/NXdyJAAxxaPWFDuF7' className='text-blue-500 underline'>
                                online springdale school application
                            </Link>
                            {' '}OR in person at 123 XYZ Address (corner of 144th Square). Our office is open Monday-Friday between 9:00 am - 2:00 pm.</p>
                    </div>
                    <div>
                        <img src='https://c.stocksy.com/a/u5DA00/z9/2433618.jpg' alt='image' className='hidden mx-4 md:block object-cover' />
                    </div>
                </div>
                <div className='px-4'>
                    <h6 className='mt-10 text-3xl lg:text-5xl mb-5 font-semibold'>Important Dates : </h6>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <span className='font-semibold'>Admission Form Availability</span> : 1st March.
                        </li>
                        <li>
                            <span className='font-semibold'>Last Date for Submission</span> : 31st March.
                        </li>
                        <li>
                            <span className='font-semibold'>Entrance Test</span> : 15th April.
                        </li>
                        <li>
                            <span className='font-semibold'>Announcement of Results</span> : 30th April.
                        </li>
                        <li>
                            <span className='font-semibold'> Diversity</span> : Embracing and celebrating differences to enrich our school culture.
                        </li>
                    </ul>
                </div>
                <button className='m-6 lg:my-7 lg:text-lg px-8 py-2 font-semibold bg-slate-300 hover:bg-white text-black'>
                    <Link to='/faculty'>
                        Faculty
                    </Link>
                </button>
            </div>
        </div>
    )
}
