import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {

    let data = [
        {
            id: "1",
            title: "Annual Sports Day",
            img: "https://pimsr.ac.in/wp-content/uploads/2022/03/annual-sports-festival-1.jpg"
        },
        {
            id: "2",
            title: "Science Exhibition",
            img: "https://sarvodayavidyalaya.edu.in/wp-content/uploads/2022/09/science-exhibition-1200x600.jpg",
        },
        {
            id: "3",
            title: "Cultural Fest",
            img: "https://assets.simpleviewinc.com/simpleview/image/upload/q_75/v1/crm/harrisburg/logo-cultural-fest_3E2054D3-5056-A36A-0886EC80F1C8BFDB_3e34535c-5056-a36a-082de53011ca67c2.jpg",
        },
        {
            id: "4",
            title: "New Year Celebration",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCI83RjjYwIojWlwSrkEyfjB5RTx0X6TCQYw&s",
        },
    ]

    var settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // console.log(data)

    return (
        <Slider {...settings}>
            {
                data.map(item =>
                    <div key={item.id}
                        className='w-full'>
                        <img src={item.img} alt="banner image"
                            className='w-full h-full object-cover'
                        />
                        {/* <h2 className='text-center text-lg p-4'>{item.title}</h2> */}
                    </div>
                )
            }
        </Slider>
    )
}
