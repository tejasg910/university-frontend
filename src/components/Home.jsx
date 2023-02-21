import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='relative bg-black'>
        <div>
          <img className='opacity-60' src="https://ik.imagekit.io/hsxxzalwq/public/university.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991835566" alt="" />
        </div>
        <div className='lg:w-1/2 p-4 absolute right-0 top-1 lg:top-32'>
          <h2 className='text-xl sm:text-2xl md:text-3xl  font-bold text-pink-500'>INSPIRATION, INNOVATION and DISCOVERY</h2>
          <p className='text-white hidden sm:block'>Any successful career starts with good education. Together with us you will have deeper knowledge of the subjects that will be especially useful for you when climbing the career ladder.</p>

          <Link to={'/team'}> <button className='bg-pink-500 mt-2 mx-1 sm:mx-4 sm:font-bold border text-white border-black px-2 sm:px-4 py-1 transition-all duration-200 hover:bg-transparent hover:text-pink-500'>Team</button></Link>
          <Link to={'/courses'}> <button className='bg-blue-500 mt-2 mx-1 sm:mx-4 sm:font-bold border text-white border-black px-2 sm:px-4 py-1 transition-all duration-200 hover:bg-transparent hover:text-pink-500'>Courses</button></Link>
          <Link to={'/admission'}>  <button className='bg-teal-500 mt-2 mx-1 sm:mx-4 sm:font-bold border text-white border-black px-2 sm:px-4 py-1 transition-all duration-200 hover:bg-transparent hover:text-pink-500'>Admission</button></Link>
        </div>


      </div>

      <div className='flex justify-center items-center '>
        <div className='sm:w-1/2 px-1'>
          <h2 className='text-3xl uppercase '>About the university</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, in! Suscipit iusto quasi repudiandae perspiciatis corporis rerum laboriosam fugiat accusamus quod eius nam exercitationem non deleniti dolorum aliquam totam adipisci sint, cum iure quam facere aut. Magni odio ut harum, et ratione facere quod magnam ad voluptate. Velit, ipsa dolore.</p>
          <button className='bg-pink-500 mt-2 mx-1 sm:mx-4 sm:font-bold border text-white border-black px-2 sm:px-4 py-1 transition-all duration-200 hover:bg-transparent hover:text-pink-500'>Learn More</button>
        </div>
        <div className=''>
          <img className='h-[50vh] hidden sm:block' src="https://ik.imagekit.io/hsxxzalwq/public/freemesikho.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676991822873" alt="" height={1} />
        </div>
      </div>


      <div className='flex justify-center items-center'>
        <div className='hidden sm:w-1/2 sm:block mt-4'>
          <img src="https://ik.imagekit.io/hsxxzalwq/public/features.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991833088" alt="" />
        </div>
        <div className='sm:w-1/2 flex flex-col items-center'>
          <h2>Our courses </h2>
          {/* <ul className='ml-4'>
  <li>WEB DEVELOPMENT</li>
  <li>MACHINE LEARNING</li>
  <li>DATA SCIENCE</li>
  <li>SOFTWARE BUILDING</li>
  <li>ANDROID DEVELOPMENT</li>
  <li>AI DEVELOPMENT</li>
</ul> */}
          <a
            href="#"
            className="my-2 shadow-md w-[100%] relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Learn Web development with some cool applications
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
              </div>

              <div className="ml-3 hidden flex-shrink-0 sm:block">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500">
                Web technology is evolving day by day. It will be one of the most fantastic decision if you choose web development.
              </p>
            </div>

            <dl className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">31st June, 2021</dd>
              </div>

              <div className="ml-3 flex flex-col-reverse sm:ml-6">
                <dt className="text-sm font-medium text-gray-600">Learning time</dt>
                <dd className="text-xs text-gray-500">1 Year</dd>
              </div>
            </dl>
          </a>

          <a
            href="#"
            className="my-2 shadow-md w-[100%] relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Learn Android Development
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">By Alexa Mattue</p>
              </div>

              <div className="ml-3 hidden flex-shrink-0 sm:block">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYWNoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500">
                As the population increasing the android users are getting rapidly. And this industry will have unique place after some years.
              </p>
            </div>

            <dl className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">31st June, 2021</dd>
              </div>

              <div className="ml-3 flex flex-col-reverse sm:ml-6">
                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                <dd className="text-xs text-gray-500">1 Year</dd>
              </div>
            </dl>
          </a>

          <a
            href="#"
            className="my-2 shadow-md w-[100%] relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Learning data science with real world project.
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">By Jimmy Walter</p>
              </div>

              <div className="ml-3 hidden flex-shrink-0 sm:block">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500">
                Literally every company needs the well skilled data scientist to analyze the data of the users. We are here to teach you the data science course with our expert team.
              </p>
            </div>

            <dl className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">31st June, 2021</dd>
              </div>

              <div className="ml-3 flex flex-col-reverse sm:ml-6">
                <dt className="text-sm font-medium text-gray-600">Learning time</dt>
                <dd className="text-xs text-gray-500">1 Year</dd>
              </div>
            </dl>
          </a>

          <a
            href="#"
            className="my-2 shadow-md w-[100%] relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Learn machine learning and create complex algorithms
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">By Kimmy Patt</p>
              </div>

              <div className="ml-3 hidden flex-shrink-0 sm:block">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYWNoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500">
                As the way involved in the technology you would like to enter more deep into a technology by learning the techniques like machine learning.
              </p>
            </div>

            <dl className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">31st June, 2021</dd>
              </div>

              <div className="ml-3 flex flex-col-reverse sm:ml-6">
                <dt className="text-sm font-medium text-gray-600">Learning time</dt>
                <dd className="text-xs text-gray-500">1 Year</dd>
              </div>
            </dl>
          </a>
          <div>
            <Link to={'/details'}
              className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"

            >
              <span
                className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
              ></span>

              <span
                className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
              >
                See Full Procedure
              </span>
            </Link>
          </div>
        </div>


      </div>



    </div>
  )
}

export default Home
