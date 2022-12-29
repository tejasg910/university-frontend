import React from 'react'
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

const CoverDash = ({ user }) => {
    const email = useSelector((state) => state.counter.userEmail)

    const PORT = import.meta.env.VITE_PORT
    const HOST = import.meta.env.VITE_HOST

    const [userDetails, setUserDetails] = useState({})
    const [achieve, setAchiev] = useState([])
    const [pastEd, setPastEd] = useState([])

    const getData = async () => {

        const a = await fetch(`${HOST}:${PORT}/api/getstudentinfo`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })





        const res = await a.json();

        if (res.data) {
            setUserDetails(res.data)
            setAchiev(res.data.special_achievements)
            setPastEd(res.data.pastEducation)

        } else {
            console.log("something went wrong")
        }

    }
    useEffect(() => {
        if (localStorage.getItem('fmstoken')) {

            getData()
        }
    }, [email]);

    return (
        <div>
            <div class="bg-gray-100">



                <div class="container mx-auto my-5 p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">

                        <div class="w-full md:w-3/12 md:mx-2">

                            <div class="bg-white p-3 border-t-4 border-green-400">
                                <div class="image overflow-hidden">
                                    <img class="h-auto w-full mx-auto"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt="" />
                                </div>
                                <h1 h1 class="text-gray-900 font-bold text-xl leading-8 my-1"> {userDetails.firstName} {userDetails.lastName}</h1>


                                <h3 class="text-gray-600 font-lg text-semibold leading-6">{userDetails.biotitle}</h3>
                                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">{userDetails.bioinfo}</p>
                                <ul
                                    class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li class="flex items-center py-3">
                                        <span>Status</span>
                                        <span class="ml-auto">

                                            {userDetails.status == "active" && <span
                                                class="bg-green-500 py-1 px-2 rounded text-white text-sm">{userDetails.status}</span>}
                                            {userDetails.status == "inactive" && <span
                                                class="bg-red-500 py-1 px-2 rounded text-white text-sm">{userDetails.status}</span>}
                                        </span>

                                    </li>
                                    <li class="flex items-center py-3">
                                        <span>Member since</span>
                                        <span class="ml-auto">{userDetails.joined}</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="my-4"></div>

                            <div class="bg-white p-3 hover:shadow">
                                <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span class="text-green-500">
                                        <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </span>
                                    <span>Work flow</span>
                                </div>
                                <div>
                                    Updating soon
                                </div>
                                {/* <div class="grid grid-cols-3">
                                    <div class="text-center my-2">
                                        <img class="h-16 w-16 rounded-full mx-auto"
                                            src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                            alt="" />
                                        <a href="#" class="text-main-color">Kojstantin</a>
                                    </div>
                                    <div class="text-center my-2">
                                        <img class="h-16 w-16 rounded-full mx-auto"
                                            src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                            alt="" />
                                        <a href="#" class="text-main-color">James</a>
                                    </div>
                                    <div class="text-center my-2">
                                        <img class="h-16 w-16 rounded-full mx-auto"
                                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                            alt="" />
                                        <a href="#" class="text-main-color">Natie</a>
                                    </div>
                                    <div class="text-center my-2">
                                        <img class="h-16 w-16 rounded-full mx-auto"
                                            src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                            alt="" />
                                        <a href="#" class="text-main-color">Casey</a>
                                    </div>
                                </div> */}
                            </div>

                        </div>

                        <div class="w-full md:w-9/12 mx-2 h-64">

                            <div class="bg-white p-3 shadow-sm rounded-sm">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">About</span>
                                </div>
                                <div class="text-gray-700">
                                    <div class="grid md:grid-cols-2 text-sm">
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">First Name</div>
                                            <div class="px-4 py-2">{userDetails.firstName}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Last Name</div>
                                            <div class="px-4 py-2">{userDetails.lastName}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Gender</div>
                                            <div class="px-4 py-2">{userDetails.gender}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Contact No.</div>
                                            <div class="px-4 py-2">+91 {userDetails.mobile}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Current Address</div>
                                            <div class="px-4 py-2">{userDetails.address}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div class="px-4 py-2">{userDetails.address}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Email.</div>
                                            <div class="px-4 py-2">
                                                <a class="text-blue-800" href="mailto:jane@example.com">{email}</a>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Birthday</div>
                                            <div class="px-4 py-2">{userDetails.birthdate}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="my-4"></div>

                            <div class="bg-white p-3 shadow-sm rounded-sm">

                                <div class="grid grid-cols-1  md:grid-cols-2">
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Special Achievements</span>
                                        </div>
                                        <ul class="list-inside space-y-2">

                                            {
                                                achieve.map((value, i) => {

                                                    return <li key={i}>
                                                        <div class="text-teal-600">{value.title}</div>
                                                        <div class="text-gray-500 text-xs">{value.date}</div>
                                                    </li>
                                                })
                                            }




                                        </ul>
                                    </div>
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Education</span>
                                        </div>
                                        <ul class="list-inside space-y-2">
                                            {pastEd.map((value) => {
                                                return <li>
                                                    <div class="text-teal-600">{value.title}</div>
                                                    <div class="text-gray-500 text-xs">{value.year}</div>
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CoverDash