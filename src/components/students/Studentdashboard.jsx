
import { useState, useEffect } from 'react';
import CoverDash from './dashboard/CoverDash'
import { useSelector, useDispatch } from 'react-redux'
import Navcomp from './dashboard/Navcomp';
import { Link } from 'react-router-dom';
import StudentStatus from './dashboard/StudentStatus';

const Studentdashboard = () => {
    const [profile, setProfile] = useState(true);
    const [status, setStatus] = useState(false);
    return (
        <div>


            <section className='flex justify-between p-4'>

                <div>
                    <h3 className='text-xl mx-4 font-bold text-gray-400'>About</h3>
                </div>
                <div className='mr-[50%]'>
                    <Link className={`mx-4 font-bold text-gray-400 ${profile ? "border-b border-pink-500" : "border-none"}`} onClick={() => {
                        setProfile(true); setStatus(false)
                    }}>Profile</Link>
                    <Link className={`mx-4 font-bold text-gray-400 ${status ? "border-b border-pink-500" : "border-none"}`} onClick={() => {
                        setProfile(false); setStatus(true)
                    }}>Status</Link>

                </div>
            </section>

            {profile && <CoverDash />}
            {status && <StudentStatus />}

        </div >
    )
}

export default Studentdashboard