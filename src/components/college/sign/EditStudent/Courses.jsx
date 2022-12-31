import React, { useState, useEffect } from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { BsFiles, BsNodeMinusFill } from 'react-icons/bs';
import { CiBaseball, CiNoWaitingSign } from 'react-icons/ci';
import { BsCalendarDate } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
const Courses = () => {
    const search = useLocation().search;

    const key = new URLSearchParams(search).get('key');
    const HOST = import.meta.env.VITE_HOST

    const [courses, setCourses] = useState([])


    const getDetails = async () => {
        let students = localStorage.getItem('fmsstudentdata');
        students = JSON.parse(students)
        const a = await fetch(`${HOST}/api/getallcourses?email=${key}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key }),
        })

        const res = await a.json();
        console.log(res)
        setCourses(res.data)
    }


    useEffect(() => {
        getDetails()
    }, []);
    const onHandlePercent = (e) => {


    }
    return (
        <div>
            <div>
                <div>
                    <h2>Student Details</h2>
                </div>
                {courses.map((value, index) => {
                    return <div key={index} className='flex w-full relative flex-col lg:flex-row bg-slate-50 shadow-lg '>
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
            </div>
        </div>
    )
}

export default Courses
