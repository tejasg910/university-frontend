import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux'
import { BiHide, BiShowAlt } from 'react-icons/bi';

import { loginSuccess, loginFalse } from '../../app/reducer/reducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const HOST = import.meta.env.VITE_HOST
    const PORT = import.meta.env.VITE_PORT
    const cookies = new Cookies();
    const [showPass, setShowPass] = useState(false)
    // const [passType, setPassType] = useState(false)

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {

        if (localStorage.getItem("fmstoken")) {
            navigate("/")
        }

    }, []);

    const onHandleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }
    const onHandleSubmit = async () => {


        const response = await fetch(`${HOST}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",


            },

            body: JSON.stringify({ name: userDetails.name, email: userDetails.email, password: userDetails.password })



        });
        const json = await response.json();


        if (json.success) {
            dispatch(loginSuccess())

            localStorage.setItem("fmstoken", json.token)

            toast.success('Login successfully!', {
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
                navigate('/')

            }, 500);
        } else {
            dispatch(loginFalse())

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
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Log in</h1>


                        <input
                            onChange={onHandleChange}
                            value={userDetails.email}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
                        <div className='relative '>

                            <input
                                onChange={onHandleChange}
                                value={userDetails.password}
                                type={showPass ? "text" : "password"}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            {showPass && <span className='absolute right-3 top-4' onClick={onHandleShowPass}><BiShowAlt /></span>}
                            {!showPass && <span className='absolute right-3 top-4' onClick={onHandleShowPass}><BiHide /></span>}

                        </div>

                        <button
                            onClick={onHandleSubmit}
                            className="w-full text-center py-3 bg-green-600 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Sign in</button>


                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have registered?
                        <Link to={"/signup"}> <a className="no-underline text-green-600 border-b border-blue text-blue" href="../login/">
                            Sign up
                        </a>.</Link>
                    </div>
                </div>
            </div></div>
    )
}

export default Signin