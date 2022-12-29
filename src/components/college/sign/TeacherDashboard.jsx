import React, { useEffect } from 'react'
import { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsFiles, BsNodeMinusFill } from 'react-icons/bs';
import { CiBaseball, CiNoWaitingSign } from 'react-icons/ci';
import { BsCalendarDate } from 'react-icons/bs';

import { json, useLocation } from 'react-router-dom';
const TeacherDashboard = () => {
    useEffect(() => {
        getData()
    }, []);
    const HOST = import.meta.env.VITE_HOST
    const PORT = import.meta.env.VITE_PORT
    const [students, setStudents] = useState(null);
    const [courses, setCourses] = useState([])
    const [showList, setShowList] = useState(true)
    const [progress, setProgress] = useState(null)
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');

    const getData = async () => {
        if (localStorage.getItem('fmstoken')) {
            const token = localStorage.getItem('fmstoken')
            const response = await fetch(`${HOST}/api/teacherdashboard?token=${token}`)
            const data = await response.json();
            console.log(data)
            if (data.success) {
                localStorage.setItem("fmsstudentdata", JSON.stringify(data.data))
                setStudents(data.data)
            }
        } else {
            console.log('no admin found')
        }
    }

    const handleEdit = async (key) => {
        setShowList(false)
        let students = localStorage.getItem('fmsstudentdata');
        students = JSON.parse(students)
        const a = await fetch(`${HOST}/api/getallcourses`, {
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
        getCourses()
    }, []);
    const getCourses = () => {

    }



    const saveProgress = async (index, email) => {
        const a = await fetch(`${HOST}/api/updatecoursestatus`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ index, progress, token }),
        })

        const res = await a.json();

    }
    const onHandlePercent = (e) => {
        setProgress(e.target.value)

    }
    return (

        <div className=''>
            {/* <section class="text-gray-600 body-font bg-[#F4F3FA] h-screen">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 class="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 class="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p class="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button class="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    class="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 class="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 class="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 class="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p class="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button class="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    class="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 class="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 class="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 class="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p class="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button class="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    class="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 class="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 class="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 class="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p class="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button class="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    class="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 class="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 class="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 class="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p class="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button class="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    class="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 class="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 class="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 class="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p class="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button class="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    class="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 class="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}


            {showList && <div>

                {students && <table class="min-w-full border-collapse block md:table">
                    <thead class="block md:table-header-group">
                        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="block md:table-row-group">
                        {students.map((value) => {

                            return <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{value.firstName} {value.lastName}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>{value.firstName}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>{value.email}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>{value.mobile}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                    <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded" onClick={() => { handleEdit(value.email) }}>Edit</button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>}
            </div>
            }
            {!showList && <div>
                <div>
                    <h2>Student Details</h2>
                </div>
                {courses.map((value, index) => {
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
                            <div class="w-full bg-gray-200  dark:bg-gray-700">
                                <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none " style={{ width: value.status }}> {value.status}</div>
                            </div>
                            <div>
                                <div>

                                    <span> completion percentage</span>
                                    <input value={progress} onChange={onHandlePercent} type="number" max="100" min={value.status} placeholder={`${value.status}`} className='border rounded border-black' />
                                    <button onClick={() => { saveProgress(index, value.email) }} className='p-1 mx-1 bg-green-500 text-white rounded'>Save</button>
                                </div>
                                <span className='absolute right-2 sm:right-8 top-4 lg:top-16  p-2 text-green-500'>{value.status} completed</span>
                            </div>
                        </div>

                    </div>
                })}
            </div>}
        </div>
    )
}

export default TeacherDashboard