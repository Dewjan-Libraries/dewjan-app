import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-gray-100">
      <div className="imgs p-8 rounded-lg shadow-lg max-w-md w-full">
        
        <h2 className="text-3xl font-bold mb-6 text-center text-lime-100">Login</h2>
        
        
        <form>
          
          <div className="mb-4">
            <label className="block text-lime-100 text-sm font-bold mb-2" htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-red-600'/>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" required 
            />
          </div>

          
          <div className="mb-6">
            <label className="block text-lime-100 text-sm font-bold mb-2" htmlFor="password">
            <FontAwesomeIcon icon={faLock} className='text-red-600 mr-2'/>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" required
            />
          </div>

          
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-200">Remember me</span>
            </label>

            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-red-600 font-bold text-white py-2 px-4 rounded-lg hover:bg-black-600 focus:outline-none focus:bg-black-600"
            >
              Login
            </button>
          </div>
        </form>

        <div className="my-6 flex items-center justify-between">
          <span className="border-b border-gray-300 w-full"></span>
          <span className="text-sm text-gray-300 px-4">OR</span>
          <span className="border-b border-gray-300 w-full"></span>
        </div>

        <div>
          <button
            type="button"
            className="w-full bg-gray-400 font-bold text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-900 mb-4"
          >
            Sign in with Google
          </button>

          
        </div>

        {/* Sign-up Link */}
        <p className="mt-6 text-center text-lime-100 text-sm">
          Don't have an account?{" "}

<Link  className="text-red-600 hover:underline" to = '/reg'>Sign Up / Register!</Link>
          
          
        </p>
      </div>
    </div>
  




    </div>
  )
}

export default login