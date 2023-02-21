import React from 'react'
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./editcourse.css"
const EditCourse = ({ percent, status, popup, id }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [progress, setProgress] = useState(percent)
    const [active, setActive] = useState('inactive')


    const onHandleSave = () => {



        setIsOpen(!isOpen)


        popup(false)


    }

    const onHandleChange = (e) => {
        setProgress(e.target.value)
        if (e.target.name === "status") {
            setActive(e.target.value)

        }
    }

    useEffect(() => {
        setIsOpen(true)
    }, []);
    return (
        <CSSTransition in={isOpen} onExiting={onHandleSave} timeout={300} className="my-element flex justify-center" >


            <section className='flex   justify-center items-center flex-col animation-fade-in duration-500 ease-linear'>
                <div className='space-y-4 ' style={{ border: "1px solid black", padding: "4px" }}>


                    <div>
                        <input type="number" className='p-2' placeholder='percent' name='progress' onChange={onHandleChange} value={progress} />

                    </div>
                    <div>
                        <select name="status" id="status" value={status} onChange={onHandleChange}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>

                        </select>

                    </div>
                    <div >
                        <button className='bg-green-400 px-4 rounded-md border border-black ' onClick={onHandleSave}>SAVE </button>
                    </div>
                </div>
            </section>
        </CSSTransition>
    )
}

export default EditCourse