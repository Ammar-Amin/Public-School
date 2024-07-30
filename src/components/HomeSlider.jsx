import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider({ data }) {

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
                    <div key={item.id} className='bg-red-700'>
                        <img src={item.img} alt="banner image"
                            className='w-full h-[200px] md:h-[580px] object-cover'
                        />
                    </div>
                )
            }
        </Slider>
    )
}
