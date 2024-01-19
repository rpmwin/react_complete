import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='h-full  gap-4'>
      this is welcome page....

      <div className="flex mt-8 items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 bg-green-300  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
            >
              Log in
            </Link>
            <Link
              to="signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
            >
              Get started
            </Link>
          </div>
    </div>
  )
}

export default Welcome
