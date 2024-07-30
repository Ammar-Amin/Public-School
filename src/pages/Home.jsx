import React from 'react'
import { HomeSlider } from '../components'

export default function Home() {
    return (
        <div className='mt-16 md:mt-20 xl:mt-24 pt-2 w-full min-h-screen bg-purple-900 text-slate-200'>
            <HomeSlider />
            <div className='max-w-7xl mx-auto p-3 md:p-10 lg:text-lg flex flex-col gap-4 lg:gap-8'>
                <h1 className='text-3xl lg:text-5xl xl:text-7xl font-semibold'>Springdale Public School</h1>
                <div>
                    <p>We nurture young minds for a brighter future. Our dedicated staff, innovative curriculum, and vibrant community come together to create a supportive and enriching learning environment for all students.</p>
                    <p className='mt-4'>At Springdale Public School, we believe that every child has the potential to achieve greatness. Our mission is to provide a comprehensive education that fosters intellectual growth, creativity, and character development. We are committed to creating a safe and inclusive space where students can thrive academically, socially, and emotionally.</p>
                </div>
                <div>
                    <h6 className='text-xl lg:text-3xl mb-1 font-semibold'>Our Values : </h6>
                    <ul>
                        <li>
                            <span className='font-semibold'>Excellence</span> : Striving for the highest standards in teaching and learning.
                        </li>
                        <li>
                            <span className='font-semibold'> Integrity</span> : Promoting honesty, respect, and responsibility.
                        </li>
                        <li>
                            <span className='font-semibold'>Innovation</span> : Encouraging curiosity, creativity, and critical thinking.
                        </li>
                        <li>
                            <span className='font-semibold'> Community</span> : Building strong partnerships with families and the local community.
                        </li>
                        <li>
                            <span className='font-semibold'> Diversity</span> : Embracing and celebrating differences to enrich our school culture.
                        </li>
                    </ul>
                </div>
                <p className='pb-10'>Join us at Springdale Public School, where education meets inspiration. Together, we can create a brighter future for our children.</p>
            </div>

        </div>
    )
}
