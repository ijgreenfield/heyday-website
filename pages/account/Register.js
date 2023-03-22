import React from 'react'
import Head from 'next/head'
import { useFormik } from 'formik'
import UserOperations from '../../graphql/operations/user'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

export default function Register() {
  const [createCustomer, { data, loading, error}] = useMutation(UserOperations.Mutations.customerCreate)
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    },
    onSubmit: async values => {
      try {
        const res = await createCustomer({ variables: { input: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password
  
        }}})
        push('/account')

      } catch (error) {
        console.log(error)
      }
    }
  },
  )
  return (
    <div>
          <Head>
            <title>Account</title>
          </Head>
          <div className='flex flex-col md:flex-row'>
              <div className='bg-[#f8f4f0] w-full md:w-1/3 px-6 py-20 md:p-16'>
                  <div>
                      <h3 className=''>Sign Up</h3>
                  </div>
              </div>
              <div className='px-6 md:px-24 py-20 w-full'>
                <div className='mx-auto md:mx-0'>
                  <div className='mb-7'>
                    <span className='block my-7 text-2xl text-[#c6a992] font-light'>Please Enter Your Details</span>
                    <p className='text-lg'>Looks like you’re new! Let’s make you an account so you can book a facial and get hyper-personalized skincare guidance across our site.</p>
                  </div>
                  <div>
    
                    {/* Sign Up Form */}
                    <form className='w-full' onSubmit={formik.handleSubmit}>

                      <div className='flex flex-col'>
                        <label className='text-xs text-[#989ea3]' htmlFor='email'>Email</label>
                        <input type="email" name='email' placeholder='name@email.com' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.email}/>
                      </div>

                      <div className='flex flex-col'>
                        <div className='flex flex-col mt-10'>
                          <label className='text-xs text-[#989ea3]' htmlFor='password'>Password</label>
                          <input type="password" name='password' placeholder='••••••••••' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.password}/>
                        </div>
                        <div className='flex flex-col mt-10'>
                          <label className='text-xs text-[#989ea3]' htmlFor='confirmPassword'>Confirm Password</label>
                          <input type="password" name='confirmPassword' placeholder='••••••••••' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                        </div>
                      </div>

                      <div className='flex flex-col'>
                        <div className='flex flex-col mt-10'>
                          <label className='text-xs text-[#989ea3]' htmlFor='password'>First Name</label>
                          <input type="text" name='firstName' placeholder='First Name' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.firstName}/>
                        </div>
                        <div className='flex flex-col mt-10'>
                          <label className='text-xs text-[#989ea3]' htmlFor='lastName'>Last Name</label>
                          <input type="text" name='lastName' placeholder='Last Name' className='border-b border-[#c6a992] py-2.5' onChange={formik.handleChange} value={formik.values.lastName}/>
                        </div>
                      </div>

                      <div className='mt-14'>
                        <button type="submit" className='py-2.5 px-7 border w-full md:max-w-[13rem]'>Create an Account</button>
                      </div>
                    </form>
                    {/* End Sign Up Form */}

                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}
