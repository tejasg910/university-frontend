import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const SigninAdmin = ({ email }) => {

    const HOST = import.meta.env.VITE_HOST
    const PORT = import.meta.env.VITE_PORT

    const [userDetails, setUserDetails] = useState({
        email: email,
        password: ""
    });

    const navigate = useNavigate()

    useEffect(() => {


    }, []);

    const onHandleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }
    const onHandleSubmit = async () => {


        const response = await fetch(`${HOST}/api/teacherlogin`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",


            },

            body: JSON.stringify({ email: userDetails.email, password: userDetails.password })



        });
        const json = await response.json();

        console.log(json)


        if (json.success) {


            console.log('insed login')

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
                navigate(`/admin/teacherdashboard/?token=${json.token}`)
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
                            value={email}
                            type="text"
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


                        <button
                            onClick={onHandleSubmit}
                            className="w-full text-center py-3 bg-green-600 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Go to panel</button>


                    </div>


                </div>
            </div></div>
    )
}

export default SigninAdmin