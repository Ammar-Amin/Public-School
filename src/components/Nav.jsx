import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    let [menuToggle, setMenuToggle] = useState(false)

    let activeStyle = {
        color: "orange",
        textDecoration: "underline",
    }

    return (
        <div>
            <div className='w-full fixed top-0 z-50 py-4 md:py-6 px-6 lg:px-[100px] xl:px-[200px] bg-purple-900 flex justify-between items-center shadow-2xl'>
                <Link to='/' className='text-slate-300 italic text-xl md:text-3xl xl:text-5xl font-bold hover:text-white'>
                    Springdale
                </Link>
                <span onClick={() => setMenuToggle(!menuToggle)}>
                    {
                        menuToggle
                            ? <i class="ri-close-line md:hidden px-1 text-slate-300 text-2xl hover:text-white"
                            ></i>
                            : <i class="ri-menu-line md:hidden px-1 text-slate-300 text-2xl hover:text-white"
                            ></i>
                    }
                </span>
                <div className='hidden md:flex text-sm lg:text-base gap-5 text-slate-300'>
                    <NavLink to='/about'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='font-medium hover:text-white'>
                        About
                    </NavLink>
                    <NavLink to='/academics'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='font-medium hover:text-white'>
                        Academics
                    </NavLink>
                    <NavLink to='/faculty'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='font-medium hover:text-white'>
                        Faculty
                    </NavLink>
                    <NavLink to='/admissions'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='font-medium hover:text-white'>
                        Admissions
                    </NavLink>
                    <NavLink to='/students'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='font-medium hover:text-white'>
                        Students
                    </NavLink>
                    <NavLink to='/contact'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='font-medium hover:text-white'>
                        Contact
                    </NavLink>
                </div>
            </div>
            {/* burger toggle btns  */}
            {
                menuToggle ?
                    <div className='w-1/2 fixed right-0 z-50 mt-16 '>
                        <div className='h-screen flex flex-col text-slate-400 bg-purple-900'>
                            <Link to='/about'
                                className='px-5 py-3 hover:bg-purple-600 text-white text-[14px] font-medium border-b-[1px] border-slate-400'
                                onClick={() => setMenuToggle(!menuToggle)}>About</Link>
                            <Link to='/academics'
                                className='px-5 py-3 hover:bg-purple-600 text-white text-[14px] font-medium border-b-[1px] border-slate-400'
                                onClick={() => setMenuToggle(!menuToggle)}>Academics</Link>
                            <Link to='/faculty'
                                className='px-5 py-3 hover:bg-purple-600 text-white text-[14px] font-medium border-b-[1px] border-slate-400'
                                onClick={() => setMenuToggle(!menuToggle)}>Faculty</Link>
                            <Link to='/admissions'
                                className='px-5 py-3 hover:bg-purple-600 text-white text-[14px] font-medium border-b-[1px] border-slate-400'
                                onClick={() => setMenuToggle(!menuToggle)}>Admissions</Link>
                            <Link to='/students'
                                className='px-5 py-3 hover:bg-purple-600 text-white text-[14px] font-medium border-b-[1px] border-slate-400'
                                onClick={() => setMenuToggle(!menuToggle)}>Students</Link>
                            <Link to='/contact'
                                className='px-5 py-3 hover:bg-purple-600 text-white text-[14px] font-medium border-b-[1px] border-slate-400'
                                onClick={() => setMenuToggle(!menuToggle)}>Contact</Link>
                        </div>
                    </div> : null
            }
        </div>
    )
}
