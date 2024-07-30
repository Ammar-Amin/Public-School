import React, { useState } from 'react'

export default function ContactUs() {

    let [input, setInput] = useState({
        name: '', phone: '', email: '', message: ''
    })

    function handleChange(e) {
        let { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert("message send")
        setInput({ name: '', phone: '', email: '', message: '' })
    }

    return (
        <div className='w-fu1l min-h-screen pt-[110px] p-7 text-white bg-purple-900 md:flex md:pt-40 md:pb-20 lg:px-16 lg:pt-[230px] lg:pb-32 xl:px-32'>
            {/* Section 1  */}
            <div className='my-10 md:w-1/2 md:px-[4%] md:my-auto lg:w-3/5'>
                <h1 className='mb-3 text-5xl font-semibold lg:text-7xl'>Contact Us</h1>
                {/* Contact details  */}
                <div className='flex flex-col justify-center md:gap-2'>
                    <p className='font-bold'>
                        <i class="ri-phone-fill text-xl mr-2"></i>
                        +91 123 456 7890
                    </p>
                    <p className='font-medium'>
                        <i class="ri-mail-line text-xl mr-2"></i>
                        info@springdale.edu
                    </p>
                </div>
                <div className='hidden mt-2 md:block'>
                    <p className='font-medium'>
                        <i className="ri-map-pin-2-line text-xl mr-2"></i>
                        Springdale Public School, 123 Education Lane, Cityville, State,<br /> ZIP Code 123456
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.12542878488!2d76.67304707540505!3d30.119224174886057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3187df80aa9f%3A0xeefd02239846f735!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722310196382!5m2!1sen!2sin" className='mt-2 py-3 w-full h-1/2 md:h-[250px] xl:w-3/4' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            {/* Section 2  */}
            <div className='md:w-1/2 lg:w-[450px] md:my-auto p-4 border-[1px] border-slate-300 shadow-2xl'>
                <form onSubmit={handleSubmit}
                    className='flex flex-col gap-4 md:p-4'>
                    <h3 className='text-center text-[21px] leading-6 font-medium text-slate-200 md:text-[24px]'>Get in Touch</h3>
                    <div>
                        <p className='text-slate-200 lg:text-lg'>
                            Name<span className='ml-2 text-red-500'>*</span>
                        </p>
                        <input type='text' name='name' required
                            value={input.name}
                            onChange={handleChange}
                            className='w-full mt-1 py-1 px-2 bg-transparent outline-none border-[1px] border-slate-300'
                        />
                    </div>

                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div>
                            <p className='text-slate-200 lg:text-lg'>
                                Phone
                            </p>
                            <input type='number' name='phone'
                                value={input.phone}
                                onChange={handleChange}
                                className='w-full mt-1 py-1 px-2 bg-transparent outline-none border-[1px] border-slate-300'
                            />
                        </div>
                        <div>
                            <p className='text-slate-200 lg:text-lg'>
                                Email<span className='ml-2 text-red-500'>*</span>
                            </p>
                            <input type='email' name='email' required
                                value={input.email}
                                onChange={handleChange}
                                className='w-full mt-1 py-1 px-2 bg-transparent outline-none border-[1px] border-slate-300'
                            />
                        </div>
                    </div>

                    <div>
                        <p className='text-slate-200 lg:text-lg'>
                            Message<span className='ml-2 text-red-500'>*</span>
                        </p>
                        <textarea rows={2} name='message' required
                            value={input.message}
                            onChange={handleChange}
                            className='w-full mt-1 py-1 px-2 bg-transparent outline-none border-[1px] border-slate-300'
                        />
                    </div>
                    <div className='md:flex md:justify-end'>
                        <input type='submit' value='Submit'
                            className='w-full py-1 font-medium text-black bg-slate-200 hover:bg-white cursor-pointer md:w-[120px] '
                        />
                    </div>
                </form>
            </div>
            {/* mobile map  */}
            <div className='mt-4 md:hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.12542878488!2d76.67304707540505!3d30.119224174886057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3187df80aa9f%3A0xeefd02239846f735!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722310196382!5m2!1sen!2sin" className='py-3 pr-3 w-[280px] h-[170px] mx-auto' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <p className='font-medium'>
                    <i className="ri-map-pin-2-line text-xl mr-2"></i>
                    Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code 123456
                </p>
            </div>
        </div>
    )
}
