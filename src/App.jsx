import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Teams from './components/Teams'
import Signup from './components/students/Signup'
import Signin from './components/students/Signin'
import Pricing from './components/courses/Pricing'
import Courses from './components/courses/Courses'
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux'

import { loginSuccess, loginFalse, setUserEmail } from './app/reducer/reducer'
import StudentDetails from './components/students/Studentdetails'
import Studentdashboard from './components/students/Studentdashboard'
import Admin from './components/college/Admin'
import TeacherDashboard from './components/college/sign/TeacherDashboard'
import Editstudent from './components/college/sign/Editstudent'
function App() {
  const isLogin = useSelector((state) => state.counter.isLogin)

  const dispatch = useDispatch()

  const HOST = import.meta.env.VITE_HOST
  const PORT = import.meta.env.VITE_PORT
  const cookies = new Cookies();
  const [isAdmin, setIsAdmin] = useState(false);
  const checkAdmin = async (cookie) => {

    const response = await fetch(`${HOST}/api/sendemail`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",


      },

      body: JSON.stringify({ cookie })

    });
    const json = await response.json();

    if (json.success) {
      dispatch(setUserEmail(json.email))
    }
  }
  useEffect(() => {

    let cookie = localStorage.getItem("fmstoken")

    if (cookie) {
      dispatch(loginSuccess())
      checkAdmin(cookie);
    } else {
      dispatch(loginFalse())
    }

  }, [isLogin]);
  const [count, setCount] = useState(0)

  return (
    <div >

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/privacy" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/api/admin" element={<Admin />} />
          <Route path="/dashboard/student/signin" element={<Home />} />
          <Route path="/admission" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/features" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/student/editdetails" element={<StudentDetails />} />
          <Route path="/student/studentdashboard" element={<Studentdashboard />} />
          <Route path="/admin/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/admin/teacherdashboard/editstudent" element={<Editstudent />} />











        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
