import React, { useEffect } from 'react'
import { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsFiles, BsNodeMinusFill } from 'react-icons/bs';
import { CiBaseball, CiNoWaitingSign } from 'react-icons/ci';
import { BsCalendarDate } from 'react-icons/bs';

import { json, useLocation, useNavigate } from 'react-router-dom';
const TeacherDashboard = () => {
    const navigate = useNavigate()

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
            const response = await fetch(`${HOST}/api/getallstudents?token=${token}`)
            const data = await response.json();
            console.log(data)
            if (data.success) {
                localStorage.setItem("fmsstudentdata", JSON.stringify(data.data))
                setStudents(data.data)
                setProgress(data.status)
            }
        } else {
            console.log('no admin found')
        }
    }

    const handleEdit = async (key) => {

        navigate(`/admin/teacherdashboard/editstudent?key=${key}`)

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

    return (

        <div className=''>
            {/* <section className="text-gray-600 body-font bg-[#F4F3FA] h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 className="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button className="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 className="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 className="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button className="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 className="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 className="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button className="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 className="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 className="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button className="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 className="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 className="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button className="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 className="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
                            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
                                    <h3 className="mt-2 text-xl font-bold text-green-500 text-left">+ 150.000 ₭</h3>
                                    <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
                                    <button className="text-sm mt-6 px-4 py-2 bg-[#304FFE]  text-white rounded-lg font-laonoto tracking-wider hover:bg-indigo-500 outline-none">ຊື້ແພັກເກດ</button>
                                </div>
                                <div
                                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                    <div>
                                        <h1 className="text-white text-2xl">Basic</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}


            {showList && <div>

                {students && <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {students.map((value) => {

                            return <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{value.firstName} {value.lastName}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>{value.firstName}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>{value.email}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>{value.mobile}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded" onClick={() => { handleEdit(value.email) }}>Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>}
            </div>
            }

        </div>
    )
}

export default TeacherDashboard