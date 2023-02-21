import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux'

import { loginSuccess, loginFalse } from '../app/reducer/reducer'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const cookies = new Cookies();

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const isLogin = useSelector((state) => state.counter.isLogin)

    const [navbar, setNavbar] = useState(false);

    const Logout = () => {
        setShow(false)

        localStorage.removeItem('fmstoken');
        dispatch(loginFalse())
    }
    return (
        //     <div>



        //  <div className="text-gray-600 body-font hidden sm:block">
        //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        //     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //       <img src="/freemesikho.png" alt="" width={50}/>
        //       <span className="ml-3 text-xl">FreeMeSeekho</span>
        //     </a>
        //     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        //       <a className="mr-5 hover:text-gray-900">Team</a>
        //       <a className="mr-5 hover:text-gray-900">Courses</a>
        //       <a className="mr-5 hover:text-gray-900">Pricing</a>

        //       <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  ">Sign up
        //       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        //         <path d="M5 12h14M12 5l7 7-7 7"></path>
        //       </svg>
        //     </button>
        //     </nav>

        //   </div>
        // </div>

        //       <div className='sm:hidden'>
        //         <AiOutlineMenu onClick={navbar} className='m-2 text-xl'/>
        //       </div>


        //     </div >
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={"/"}>
                            <img src="https://ik.imagekit.io/hsxxzalwq/public/freemesikho.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676991822873" alt="" width={50} />

                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600  hover:text-blue-600">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="text-gray-600  hover:text-blue-600">
                                <Link to={"/team"} >Team</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to={"/courses"}>Courses</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to={"/pricing"}>Pricing</Link>
                            </li>
                            {!isLogin && <li >
                                <Link to={"/signup"}> <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  ">Sign up
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button></Link>
                            </li>}
                            {isLogin && <li >
                                <Link onClick={() => { setShow(true) }} > <CgProfile className='text-2xl' /></Link>
                            </li>}


                            {show && <div className='text-white p-4 bg-indigo-500 rounded-md shadow-lg absolute top-14 right-12 z-10 ' >
                                <ul className='space-y-4'>
                                    <Link to={"/student/studentdashboard"} className="">   <li onClick={() => { setShow(false) }} className={`border-b-2`}>Dashboard</li></Link>
                                    <Link to={"/student/editdetails"}>  <li onClick={() => { setShow(false) }}>Edit details</li></Link>
                                    <Link to={"/"}><li onClick={Logout}>Log out</li></Link>
                                    <button className='bg-red-600 text-white px-4 rounded-md border border-black' onClick={() => { setShow(false) }}>Close</button>
                                </ul>
                            </div>}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
