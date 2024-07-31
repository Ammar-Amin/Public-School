import React from 'react'
import Gallery from './Gallery'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Faculty() {

    let facultyData = [
        {
            "name": "Dr. Emily Johnson",
            "photo": "https://stoneridgesoftware.com/wp-content/uploads/2022/10/Emily-Johnson-Profile.jpg",
            "position": "Head of Science Department",
            "qualifications": "PhD in Physics, MSc in Astrophysics",
            "experience": "15 years of teaching experience in high school and university levels"
        },
        {
            "name": "Mr. David Smith",
            "photo": "https://th.bing.com/th/id/OIP.cHeY3iSk74JNiDjzE_TFwwAAAA?rs=1&pid=ImgDetMain",
            "position": "Mathematics Teacher",
            "qualifications": "MSc in Mathematics, BEd",
            "experience": "10 years of teaching experience in secondary education"
        },
        {
            "name": "Ms. Sarah Williams",
            "photo": "https://th.bing.com/th/id/OIP.vjVgeeFHG50jfBGOFmm_mQAAAA?rs=1&pid=ImgDetMain",
            "position": "English Teacher",
            "qualifications": "MA in English Literature, PGCE",
            "experience": "12 years of teaching experience in middle and high school"
        },
        {
            "name": "Mr. Michael Brown",
            "photo": "https://ohsobserver.com/wp-content/uploads/2017/09/DrHendrickson-800x1200.jpg",
            "position": "History Teacher",
            "qualifications": "MA in History, BEd",
            "experience": "8 years of teaching experience in secondary schools"
        },
        {
            "name": "Dr. Linda Davis",
            "photo": "https://th.bing.com/th/id/OIP.nDRapGf2CjMb3PPGlOZ8mwHaJQ?rs=1&pid=ImgDetMain",
            "position": "Biology Teacher",
            "qualifications": "PhD in Biology, MSc in Environmental Science",
            "experience": "13 years of teaching experience and research in biological sciences"
        },
        {
            "name": "Mr. James Wilson",
            "photo": "https://th.bing.com/th/id/OIP.ojC9EAuxw_7fvj3vOcg-oQHaFQ?rs=1&pid=ImgDetMain",
            "position": "Physical Education Teacher",
            "qualifications": "BSc in Physical Education, Certified Fitness Trainer",
            "experience": "9 years of teaching experience sports coaching"
        },
        {
            "name": "Ms. Jennifer Martinez",
            "photo": "https://th.bing.com/th/id/OIP.GYwlYdd55dRvQZfFX87wvgHaIS?rs=1&pid=ImgDetMain",
            "position": "Art Teacher",
            "qualifications": "MFA in Fine Arts, BEd",
            "experience": "11 years of teaching experience in art and design"
        },
        {
            "name": "Dr. Robert Clark",
            "photo": "https://th.bing.com/th/id/OIP.nj0oAQNpmXLam2Ec5_GWdQAAAA?w=400&h=400&rs=1&pid=ImgDetMain",
            "position": "Chemistry Teacher",
            "qualifications": "PhD in Chemical Engineering",
            "experience": "14 years of teaching experience in high school and college-level chemistry"
        }
    ]

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className='w-full min-h-screen bg-purple-900 text-white'>
            <div className='max-w-7xl mx-auto p-3 md:p-10 '>
                <div className='w-full min-h-screen lg:text-lg flex flex-col-reverse items-center justify-center md:flex-row gap-4 lg:gap-8'>
                    <div className='md:w-1/2'>
                        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-semibold mb-8'>Discover Our <div className='hidden md:block'></div> Expert Faculty
                        </h1>
                        <p>Meet the skilled professionals dedicated to advancing education in Pune. Explore their qualifications and experience.</p>
                    </div>
                    <div className='md:w-1/2'>
                        <img src='https://liberalarts.oregonstate.edu/sites/liberalarts.oregonstate.edu/files/sps_group_small.jpg' alt='faculty Image' />
                    </div>
                </div>
                <div className='mb-10 w-[90%] mx-auto md:w-full min-h-[600px]'>
                    <h1 className='text-4xl lg:text-5xl xl:text-7xl font-semibold mb-8'>Qualifications and experience.
                    </h1>
                    <Slider {...settings}>
                        {
                            facultyData.map((item, i) => <div key={i}>
                                <div key={i} className='m-3 xl:m-6 min-h-[350px] p-4 bg-blue-600 border-2 border-white rounded-3xl'>
                                    <div className='flex flex-col justify-evenly items-center'>
                                        <img src={item.photo} alt='img'
                                            className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] object-cover rounded-full'
                                        />
                                        <div className='my-5 text-[13px] lg:text-base xl:text-xl text-center'>
                                            <p className='font-semibold text-base md:text-lg lg:text-xl xl:text-2xl'>{item.name}</p>
                                            {item.position}
                                        </div>
                                    </div>
                                    <span className='text-base font-semibold my-4 xl:my-6 md:text-lg lg:text-xl'>
                                        {item.qualifications}
                                    </span>
                                    <p className='my-3 text-[13px] lg:text-base xl:text-xl'>
                                        {item.experience}
                                    </p>
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>

                <Gallery />

            </div>
        </div>
    )
}
