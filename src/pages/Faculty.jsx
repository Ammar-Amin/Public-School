import React from 'react'
import Gallery from './Gallery'

export default function Faculty() {
    return (
        <div className='w-full min-h-screen bg-purple-900 text-white'>
            <Gallery />
            <div className='h-[600px] flex items-center justify-center'>
                <span className='text-5xl'>Faculty</span>
            </div>
        </div>
    )
}
