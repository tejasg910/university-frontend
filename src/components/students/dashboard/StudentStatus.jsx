import React, { useState, useEffect } from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { BsFiles } from 'react-icons/bs';
import { CiNoWaitingSign } from 'react-icons/ci';
import { BsCalendarDate } from 'react-icons/bs';


import { useSelector, useDispatch } from 'react-redux'


const StudentStatus = () => {
    const email = useSelector((state) => state.counter.userEmail)

    const PORT = import.meta.env.VITE_PORT
    const HOST = import.meta.env.VITE_HOST

    const [courseStatus, setcourseStatus] = useState([]);
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        if (localStorage.getItem('fmstoken')) {

            getData()
            getCourses()
        }
    }, [email]);


    const getCourses = async () => {
        const a = await fetch(`${HOST}/api/getenrolledcourses`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        const res = await a.json();
        // console.log(res)

        if (res.success) {
            setCourses(res.courses);
        }

    }
    const getData = async () => {

        const a = await fetch(`${HOST}/api/getallcourses?email=${email}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })





        const res = await a.json();
        // console.log(res, "this is response")
        if (res.data) {
            setcourseStatus(res.data)



        } else {
            // console.log("something went wrong")
        }
    }



    // console.log(courses)
    return (
        <div className='p-4'>
            <h2 className='text-4xl'>Summery</h2>

            <h3 className='text-2xl'>Courses Enrolled</h3>
            <div className='flex justify-center  flex-wrap'>

                {
                    courses.map((value) => {


                        return <div className="block max-w-sm p-6 m-4   bg-white border border-gray-200  rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">{value.title}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{value.description}</p>


                            <div className="flex items-center mt-2.5 mb-5">
                                Rating:

                                {[...Array(+value.rating)].map((value) => {

                                    return <svg aria-hidden="true" className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                })}

                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{value.rating}</span>
                            </div>
                        </div>
                    })}
            </div>

            <h3 className='text-2xl'>Courses Progress</h3>

            <section className='flex flex-col justify-center p-8 space-y-4'>






                {
                    courseStatus.map((value) => {


                        return <div className='flex w-full relative flex-col lg:flex-row bg-slate-50 shadow-lg '>
                            <div className='p-4 lg:w-1/2'>
                                <p className='sm text-gray-400'>{value.category}</p>
                                <h3 className='text-2xl text-sky-500'>{value.title}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora ex, ullam corrupti natus numquam aperiam repudiandae fugit. Laboriosam, eveniet?</p>

                            </div>
                            <div className='lg:w-1/2'>
                                <div>
                                    <ul className='hidden text-vsm space-x-4   sm:flex   p-4'>
                                        <li className='flex items-center '>
                                            <BiTimeFive /> : {value.duration}
                                        </li>
                                        <li className='flex items-center '>
                                            <BsFiles />: {value.chapters} chapters
                                        </li>
                                        <li className='flex items-center '>
                                            <BsCalendarDate /> : {value.start}

                                        </li>
                                        <li className='flex items-center '>
                                            <CiNoWaitingSign /> : {value.end}
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full bg-gray-200  dark:bg-gray-700">
                                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none " style={{ width: value.status }}> {value.status}</div>
                                </div>
                                <div>
                                    <span className='absolute right-2 sm:right-8 top-4 lg:top-16  p-2 text-green-500'>{value.status} completed</span>
                                </div>
                            </div>

                        </div>
                    })}






            </section>
        </div>
    )
}

export default StudentStatus