import { Facebook, Google, Twitter } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../features/auth/authActions'
import Spinner from './reusable/Spinner'

const Signup = () => {
  const { userInfo, status, error } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  // console.log(status)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const registerOptions = {
    password: {
      required: 'Password is required',
      minLength: {
        value: 4,
        message: 'Password must be at least 4 characters',
      },
    },
  }
  const validatePasswordMatch = (value) => {
    console.log('here is value -==> ', value)
    // if (value === watch('password')) {
    //   return true
    // } else {
    //   return 'Passwords do not match'
    // }
    return value === watch('password') ? true : 'Passwords do not match'
  }

  useEffect(() => {
    // if (userInfo) navigate('/')
    if (status === 'success') navigate('/login')
  }, [userInfo, status, navigate])

  const onFormSubmit = (data) => {
    console.log(data)
    if (data.password !== data.confirmPassword) {
      return
    }
    dispatch(registerUser(data))
  }

  const onErrors = (err) => console.log(err)

  return (
    <>
      <div className='flex justify-center items-center h-[100vh]  bg-slate-100'>
        <div className='max-w-lg bg-gray-800 text-[#fff] p-4 rounded-xl'>
          <h2 className='text-3xl mb-4'>Sign Up</h2>
          <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <div className='flex sm:space-x-2 sm:space-y-0 p-2 w-full sm:flex-row flex-col space-x-0 space-y-4'>
              <div>
                <input
                  type='text'
                  placeholder='First Name'
                  name='first_name'
                  className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white sm:w-[94%] w-full'
                  {...register('first_name', {
                    required: 'First Name is required',
                  })}
                />
                <p className='text-red-500'>
                  {errors?.firstName && errors.firstName.message}
                </p>
              </div>
              <div className='flex flex-col sm:items-end '>
                {/* <div className=''> */}
                <input
                  type='text'
                  placeholder='Last Name'
                  name='last_name'
                  className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white sm:w-[94%]'
                  {...register('last_name', {
                    required: 'Last Name is required',
                  })}
                />
                <p className='text-red-500 w-[94%] items-start '>
                  {errors?.lastName && errors.lastName.message}
                </p>
                {/* </div> */}
              </div>
            </div>
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
                name='password'
                placeholder='Password'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
                {...register('password', { ...registerOptions.password })}
              />
              <p className='text-red-500'>
                {errors?.password && errors.password.message}
              </p>
            </div>
            <div className=' p-2 w-full'>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                className='rounded-2xl py-1 px-4 border-red-400 border bg-transparent placeholder-white w-full'
                {...register('confirmPassword', {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
              <p className='text-red-500'>
                {errors?.confirmPassword && errors.confirmPassword.message}
                {/* {passwordError && 'Passwords does not match'} */}
              </p>
            </div>
            <div className=' p-2 w-full space-x-2'>
              <input
                type='checkbox'
                name='terms'
                id='terms'
                {...register('terms', {
                  required: 'You must agree to the terms and conditions!',
                })}
                defaultValue={false}
              />
              <label htmlFor='terms'>
                I Agree with <span className='text-red-400'>privacy</span> and
                <span className='text-red-400'> policy</span>
              </label>
            </div>
            <p className='text-red-500'>
              {errors?.terms && errors.terms.message}
            </p>
            <div className=' p-2 w-full mt-2'>
              <button
                type='submit'
                className='bg-red-400 py-1 px-4 rounded-2xl text-white w-full hover:bg-blue-500 transition-all flex justify-center items-center'
                disabled={status === 'loading'}
              >
                {status === 'loading' ? <Spinner /> : 'Sign Up'}
              </button>
            </div>
          </form>
          <div className='text-center mt-4'>
            <p>Or Sign in with</p>
            <Facebook className=' fill-none mr-2' />
            <Twitter className='fill-none mr-2' />
            <Google className='mr-2' />
            <p>
              Already have an account? &nbsp;{' '}
              <Link to='/login' className='text-red-400'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
