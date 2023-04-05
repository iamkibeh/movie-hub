import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginUser } from '../features/auth/authActions'
import Spinner from './reusable/Spinner'
import { clearErrors } from '../features/auth/authSlice'

const Login = () => {
  const { userInfo, error, status } = useSelector((state) => state.auth)

  // console.log(userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onFormSubmit = (data) => {
    // console.log(data)
    dispatch(loginUser(data))
  }

  const onErrors = (err) => console.log(err)

  useEffect(() => {
    if (userInfo && userInfo.user) {
      navigate('/')
    }
  }, [navigate, userInfo])

  return (
    <>
      <div className='flex justify-center items-center h-[100vh]  bg-slate-100'>
        <div className='max-w-lg bg-gray-800 text-[#fff] p-4 rounded-xl'>
          <h2 className='text-3xl mb-4'>Log In</h2>
          <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <div className=' p-2'>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
                {...register('email', { required: 'Email is required' })}
              />
              <p className='text-red-500'>
                {errors?.email && errors.email.message}
              </p>
            </div>
            <div className=' p-2 w-full'>
              <input
                type='password'
                placeholder='Password'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
                {...register('password', { required: 'Password is required' })}
                onChange={() => dispatch(clearErrors())}
              />
              <p className='text-red-500'>
                {errors?.password && errors.password.message}
              </p>
            </div>
            <p className='p-2 w-full'>
              {error && <span className='text-red-500'>{error}</span>}
            </p>
            <div className=' p-2 w-full space-x-2'>
              <input
                type='checkbox'
                name='forget-password'
                id='forget-password'
              />
              <label htmlFor='terms'>
                Remember me &nbsp;{' '}
                <span className='text-red-400 cursor-pointer hover:underline'>
                  Forgot Password
                </span>
              </label>
            </div>
            <div className=' p-2 w-full mt-2'>
              <button
                type='submit'
                className='bg-red-400 py-1 px-4 rounded-2xl text-white w-full hover:bg-blue-500 transition-all duration-300 ease-in-out flex justify-center items-center'
                disabled={status === 'loading'}
              >
                {status === 'loading' ? <Spinner /> : 'Log in'}
              </button>
            </div>
          </form>
          <div className='text-center mt-4'>
            <p>
              Don't have an account? &nbsp;{' '}
              <NavLink to='/signup' className='text-red-400'>
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
