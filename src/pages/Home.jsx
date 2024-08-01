import React, { useEffect } from 'react'
import { HomeSlider } from '../components'
import { Link } from 'react-router-dom'

export default function Home() {
    let data = [
        {
            id: "1",
            img: "https://pimsr.ac.in/wp-content/uploads/2022/03/annual-sports-festival-1.jpg"
        },
        {
            id: "2",
            img: "https://sarvodayavidyalaya.edu.in/wp-content/uploads/2022/09/science-exhibition-1200x600.jpg",
        },
        {
            id: "3",
            img: "https://assets.simpleviewinc.com/simpleview/image/upload/q_75/v1/crm/harrisburg/logo-cultural-fest_3E2054D3-5056-A36A-0886EC80F1C8BFDB_3e34535c-5056-a36a-082de53011ca67c2.jpg",
        },
        {
            id: "4",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCI83RjjYwIojWlwSrkEyfjB5RTx0X6TCQYw&s",
        },
    ]

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className='pt-16 md:pt-20 xl:pt-24 w-full min-h-screen bg-purple-900 text-slate-200'>
            <HomeSlider data={data} />
            <div className='max-w-7xl mx-auto p-3 md:p-10 lg:text-lg flex flex-col gap-4 lg:gap-8'>
                <h1 className='text-4xl lg:text-5xl xl:text-7xl font-semibold'>Springdale Public School</h1>
                <div>
                    <p>We nurture young minds for a brighter future. Our dedicated staff, innovative curriculum, and vibrant community come together to create a supportive and enriching learning environment for all students.</p>
                    <p className='mt-4'>At Springdale Public School, we believe that every child has the potential to achieve greatness. Our mission is to provide a comprehensive education that fosters intellectual growth, creativity, and character development. We are committed to creating a safe and inclusive space where students can thrive academically, socially, and emotionally.</p>
                </div>
                <div>
                    <h6 className='mt-10 text-3xl lg:text-5xl mb-5 font-semibold'>Our Values : </h6>
                    <ul className='flex flex-col gap-3'>
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
                <p className='py-10 md:text-xl'>Join us at Springdale Public School, where education meets inspiration. Together, we can create a brighter future for our children. <br />
                    <button className='mt-5 md:mt-10 px-6 py-2 bg-slate-200 hover:bg-white text-black font-medium'>
                        <Link to='/academics' >
                            Academics
                        </Link>
                    </button>
                </p>
            </div>

        </div>
    )
}
