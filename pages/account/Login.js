import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import React, { useState } from 'react'
import UserOperations from "../../graphql/operations/user"

export default function Login() {
  

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });
    }
  })

  return (
    <div>
      <Head>
        <title>Account</title>
      </Head>
      <div className='flex flex-col md:flex-row'>
          <div className='bg-[#f8f4f0] w-full md:w-1/3 px-6 py-20 md:p-16'>
              <div>
                  <h3 className=''>Sign In</h3>
              </div>
          </div>
          <div className='px-6 md:px-24 py-20 w-full'>
            <div className='mx-auto max-w-sm md:mx-0'>
              <div className='mb-7'>
                <span className='text-2xl text-[#c6a992] font-light'>Please Enter Your Details</span>
              </div>
              <div>

                {/*Login Form */}
                <form className='w-full' onSubmit={formik.handleSubmit}>
                  <div className='flex flex-col'>
                    <label className='text-xs text-[#989ea3]' htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder='name@email.com' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.email}/>
                  </div>
                  <div className='flex flex-col mt-10'>
                    <label className='text-xs text-[#989ea3]' htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder='••••••••••' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.password}/>
                  </div>
                  <div className='text-[#989ea3] underline'>
                    <span className='text-xs'>Forgot your password?</span>
                  </div>
                  <div className='mt-14'>
                    <button type="submit" className='py-2.5 px-7 border w-full md:max-w-[13rem]'>Sign In</button>
                  </div>
                </form>
                {/* End Login Form */}
                <div className='mt-6 mb-8 text-[#989ea3]'>
                  <p className=' text-xs'>Don't have an account? <span className='underline'>Create one.</span></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
