import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const PORT = import.meta.env.VITE_PORT
const HOST = import.meta.env.VITE_HOST
import Cookies from 'universal-cookie';
import { BiHide, BiShowAlt } from 'react-icons/bi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {


    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false)

    const [userDetails, setuserDetails] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const onHandleChange = (e) => {
        e.preventDefault();
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }


    const onHandleSubmit = async (e) => {
        e.preventDefault();




        const response = await fetch(`${HOST}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",

            },
            body: JSON.stringify({ name: userDetails.name, email: userDetails.email, password: userDetails.password })



        });
        const json = await response.json();

        if (json.success) {

            toast.success(json.message, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/signin')

            }, 700);
        }
        else {
            toast.error(json.message, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }


    const onHandleShowPass = () => {
        if (showPass === true) {
            setShowPass(false)
        } else {
            setShowPass(true)
        }
    }

    return (
        <div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="bg-grey-lighter min-h-screen mt-4 flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            onChange={onHandleChange}
                            value={userDetails.name}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name" />

                        <input
                            onChange={onHandleChange}
                            value={userDetails.email}
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            onChange={onHandleChange}
                            value={userDetails.password}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <div className='relative'>

                            <input
                                onChange={onHandleChange}
                                value={userDetails.cpassword}
                                type={showPass ? "text" : "password"}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="cpassword"
                                placeholder="Confirm Password" />
                            {showPass && <span className='absolute right-3 top-4' onClick={onHandleShowPass}><BiShowAlt /></span>}
                            {!showPass && <span className='absolute right-3 top-4' onClick={onHandleShowPass}><BiHide /></span>}

                        </div>
                        <button
                            onClick={onHandleSubmit}
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" >
                                Terms of Service
                            </Link>
                            <Link className="no-underline border-b border-grey-dark text-grey-dark">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link to={"/signin"}>
                            <span className="no-underline text-green-600 border-b border-blue text-blue" >Log in</span></Link>
                    </div>
                </div>
            </div></div>
    )
}

export default Signup