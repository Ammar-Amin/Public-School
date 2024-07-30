import React from 'react'
import { Link } from 'react-router-dom'
import { HomeSlider } from '../components'

export default function Academics() {
    let data = [
        { id: 2, img: "https://th.bing.com/th/id/OIP.ASbgBlCZp70Gwo1buFQICgHaEL?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { id: 1, img: "https://tbcsc.org/files/galleries/IMG_8372.jpg" },
        { id: 3, img: "https://th.bing.com/th/id/OIP.d-Rkf_Vd--nkP5IKHSvspgAAAA?w=289&h=124&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { id: 4, img: "https://thumbs.dreamstime.com/z/education-learning-academics-concept-knowledge-77962418.jpg" },
    ]
    return (
        <div className='w-full min-h-screen pt-16 md:pt-20 lg:pt-24 bg-purple-900 text-slate-200'>
            <HomeSlider data={data} />
            <div className='px-4 w-full max-w-7xl mx-auto'>
                <div className='py-5 lg:py-10 text-center'>
                    <h1 className='mb-4 text-3xl lg:text-5xl xl:text-7xl font-semibold'>
                        Welcome to Our Academic Program
                    </h1>
                    <span className='lg:text-xl'>Discover our comprehensive curriculum designed to nurture young minds and prepare students for a successful future.</span>
                </div>
                <div className='my-5 flex flex-col md:flex-row md:justify-center md:items-center'>
                    {/* img  */}
                    <div className='md:w-1/2 md:flex md:items-center'>
                        <img src='https://th.bing.com/th/id/OIP.nmjyHPecad40Rqj-gbl4pQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='academics' className='w-full max-h-[700px] p-4 object-cover' />
                    </div>
                    {/* academics  */}
                    <div className='px-4 md:w-1/2 md:px-[4%] md:my-auto'>
                        <div className='flex flex-col gap-4 lg:gap-10 lg:text-lg'>
                            <div>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Comprehensive Curriculum</h6>
                                <p>Our school offers a comprehensive curriculum from primary to senior secondary levels, ensuring a well-rounded education for all students.</p>
                            </div>
                            <div>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Diverse Subjects</h6>
                                <p>Students have the opportunity to study a wide range of subjects at different levels, catering to their individual interests and academic needs.</p>
                            </div>
                            <div>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Innovative Teaching Methodologies</h6>
                                <p>We employ innovative teaching methodologies to engage students and enhance their learning experience, making education both effective and enjoyable.</p>
                            </div>
                        </div>
                        <button className='mt-6 lg:mt-7 lg:text-xl px-8 py-2 font-semibold bg-slate-300 hover:bg-white text-black'>
                            <Link to='/admissions'>
                                Admission
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='w-full py-10 md:px-8 flex flex-col md:flex-row gap-4 lg:gap-10 lg:text-lg'>
                    <div>
                        <div className="p-5 md:w-full lg:p-10 mb-5 bg-blue-600">
                            <div className='flex justify-between'>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Primary Curriculum</h6>
                                <span className='text-xl lg:text-3xl xl:text-4xl'>1</span>
                            </div>
                            <span>Our primary curriculum focuses on building a strong foundation in core subjects such as Mathematics, Science, English, and Social Studies. Students also engage in activities that promote creativity and critical thinking.</span>
                        </div>
                        <div className="p-5 md:w-full lg:p-10 bg-blue-600">
                            <div className='flex justify-between'>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Senior Secondary</h6>
                                <span className='text-xl lg:text-3xl xl:text-4xl'>3</span>
                            </div>
                            <span>Our senior secondary curriculum offers a wide range of subjects, including advanced Mathematics, Sciences, Humanities, and Languages. Students have the opportunity to specialize in their chosen fields and prepare for college or vocational paths.</span>
                        </div>
                    </div>
                    <div>
                        <div className="p-5 md:w-full lg:p-10 mb-5 bg-blue-600">
                            <div className='flex justify-between'>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Secondary Curriculum</h6>
                                <span className='text-xl lg:text-3xl xl:text-4xl'>2</span>
                            </div>
                            <span>In the secondary level, students delve deeper into subject areas and begin to explore elective courses based on their interests. The curriculum is designed to prepare students for higher education and real-world challenges.</span>
                        </div>
                        <div className="p-5 md:w-full lg:p-10 bg-blue-600">
                            <div className='flex justify-between'>
                                <h6 className='text-xl lg:text-3xl xl:text-4xl mb-1 lg:mb-3 font-semibold'>Teaching Methodologies and Resources</h6>
                                <span className='text-xl lg:text-3xl xl:text-4xl'>4</span>
                            </div>
                            <span>We employ a variety of teaching methodologies such as lectures, group discussions, hands-on experiments, and project-based learning to cater to diverse learning styles. Our educational resources include textbooks, digital tools, laboratories, and library facilities.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
