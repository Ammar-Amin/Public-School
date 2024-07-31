import React from 'react'
import video from '../assets/School_Infra.mp4'

export default function Gallery() {


    let photoData = [
        {
            url: 'https://www.kingschester.co.uk/wp-content/uploads/2019/07/IMG_1258.jpg',
            caption: 'Sports Day 2023',
            description: 'Students participating in the annual sports day event.'
        },
        {
            url: 'https://th.bing.com/th/id/R.53f95536e820cfa21f61f730da02f5b4?rik=grntTH9DTmadsQ&riu=http%3a%2f%2fwww.abington.k12.pa.us%2fmedia%2fposts%2f2017%2f03%2fDSC05494.jpg&ehk=KQkrWUPfwuKTks35nm0upxSBGoFYTtTI2dk335YGkPc%3d&risl=1&pid=ImgRaw&r=0',
            caption: 'Science Fair 2023',
            description: 'Innovative science projects presented by students.'
        },
        {
            url: 'https://education.jnto.go.jp/cms/wp-content/uploads/2022/02/culture-festival-01.jpg',
            caption: 'Cultural Fest 2023',
            description: 'A vibrant celebration of diverse cultures.'
        },
        {
            url: 'https://www.chicagogallerynews.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHNPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e3d5e28f02ed2d50be19a9075e2e005c791333bd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lPTVRJd01IZzNNREErQmpvR1JWUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--879673d8e0691dd8d0132388f11119abd2f4098e/high-school-show.jpg',
            caption: 'Art Exhibition 2023',
            description: 'A display of stunning artworks created by students.'
        },
        {
            url: 'https://th.bing.com/th/id/OIP.gNsxA3rGhXFQHvvlPBUgKwHaE8?rs=1&pid=ImgDetMain',
            caption: 'Field Trip 2023',
            description: 'An educational trip to the historical museum.'
        },
        {
            url: 'https://cdngeneral.rentcafe.com/dmslivecafe/UploadedImages/03479a27-938f-4d75-8635-f63025ef11b3.jpg',
            caption: 'Graduation Day 2023',
            description: 'Celebrating the achievements of our graduates.'
        },
        {
            url: 'https://www.millhill.org.uk/wp-content/uploads/0006.jpg',
            caption: 'Music Concert 2023',
            description: 'Students showcasing their musical talents.'
        },
        {
            url: 'https://th.bing.com/th/id/OIP.O_ByzRhO-BEMhk-W1edF5wHaFH?rs=1&pid=ImgDetMain',
            caption: 'Drama Performance 2023',
            description: 'An enthralling drama performance by the students.'
        },
    ]

    return (
        <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl xl:text-7xl font-semibold'>School Gallery</h1>
            <p className='lg:text-lg my-6'>Explore our school events, activities, and infrastructure through our photo and video gallery.</p>
            <div className='relative'>
                <video src={video} autoPlay loop muted className='w-full max-h-screen'></video>
                <h2 className='text-lg md:text-3xl lg:text-5xl font-semibold absolute top-[40%] md:top-[45%] right-[10%]'>School Infrastructure</h2>
            </div>
            <h1 className='mt-10 mb-6 text-left text-2xl lg:text-4xl xl:text-6xl font-semibold'>School Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {photoData.map((photo, index) => (
                    <div key={index} className="bg-blue-600 hover:opacity-90 overflow-hidden rounded-xl">
                        <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-auto rounded-t-xl hover:scale-105 duration-300 cursor-pointer"

                        />
                        <div className="p-2 sm:py-4">
                            <h3 className="font-semibold lg:text-lg">{photo.caption}</h3>
                            <p className="text-sm">{photo.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
