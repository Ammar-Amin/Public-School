import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-blue-800 text-slate-200'>
            <div className='w-full px-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly items-center py-10 lg:py-16'>
                <div className='md:w-2/3 lg:w-3/5'>
                    <h1 className='mb-3 text-2xl md:text-3xl'>Support Our Scholars - Donate Today!</h1>
                    <span className=''>Springdale is working harder than ever to ensure that our scholars receive intensive academic interventions and extended learning opportunities.</span>
                </div>
                <button className='mt-6 px-6 py-2 font-bold text-black bg-slate-200 hover:bg-white'>Donate</button>
            </div>
            <div className='py-10 lg:py-16 text-center bg-blue-700 flex justify-center'>
                <div className='text-xl'>
                    <div className='flex justify-center gap-2 cursor-pointer'>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-twitter-x-line"></i>
                        <i class="ri-linkedin-box-fill"></i>
                    </div>
                    <div>Follow us on Social Media</div>
                    <div className='mt-4 text-base'>Website by <Link to='https://github.com/Ammar-Amin' target="_blank" className='underline text-slate-200'>Ammar-Amin</Link></div>
                </div>
            </div>
        </div>
    )
}
