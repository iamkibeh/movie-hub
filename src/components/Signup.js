import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='flex justify-center items-center h-[100vh]  bg-slate-100'>
        <div className='max-w-lg bg-gray-800 text-[#fff] p-4 rounded-xl'>
          <h2 className='text-3xl mb-4'>Sign Up</h2>
          <form>
            <div className='flex sm:space-x-2 sm:space-y-0 p-2 w-full sm:flex-row flex-col space-x-0 space-y-4'>
              <input
                type='text'
                placeholder='First Name'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white sm:w-[80%]'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white'
              />
            </div>
            <div className=' p-2'>
              <input
                type='email'
                placeholder='Email'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
              />
            </div>
            <div className=' p-2 w-full'>
              <input
                type='password'
                placeholder='Password'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
              />
            </div>
            <div className=' p-2 w-full'>
              <input
                type='password'
                placeholder='Confirm Password'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
              />
            </div>
            <div className=' p-2 w-full space-x-2'>
              <input type='checkbox' name='terms' id='terms' />
              <label htmlFor='terms'>
                I Agree with <span className='text-red-400'>privacy</span> and
                <span className='text-red-400'> policy</span>
              </label>
            </div>
            <div className=' p-2 w-full mt-2'>
              <button
                type='submit'
                className='bg-red-400 py-1 px-4 rounded-2xl text-white w-full hover:bg-blue-500 transition-all 
              '
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className='text-center mt-4'>
            <p>
              Already have an account? &nbsp;{' '}
              <Link to='/login' className='text-red-400'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
