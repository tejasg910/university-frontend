import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Notfound from './sign/Notfound'
import SigninAdmin from './sign/SigninAdmin'

const Admin = () => {
    const email = useSelector((state) => state.counter.userEmail)
    const [admin, SetAdmin] = useState(false)

    const PORT = import.meta.env.VITE_PORT
    const HOST = import.meta.env.VITE_HOST
    useEffect(() => {
        checkAdmin()
    }, [email]);

    const checkAdmin = async () => {
        const a = await fetch(`${HOST}/api/checkteacher`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })





        const res = await a.json();
        console.log(res)
        if (res.success) {
            SetAdmin(true)
        } else {
            SetAdmin(false)
        }
    }

    return (
        <>

            {admin && <SigninAdmin email={email} />}
            {!admin && <Notfound />}

        </>
    )
}

export default Admin