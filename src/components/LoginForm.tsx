import { emailLogin, socialLogin } from '@/actions';
import React from 'react';

export default function LoginForm() {
  return (
    <div className='border border-gray-200 p-6 rounded-xl shadow-md max-w-[300px] mx-auto'>
      <h2 className='font-bold text-xl mb-8 text-center'>Login</h2>
      <form
        className='flex flex-col gap-4 mb-8 pb-8 border-b'
        action={emailLogin}
      >
        <div className='flex flex-col'>
          <label htmlFor='email' className='mb-1'>
            Email
          </label>
          <input type='text' name='email' placeholder='Email Address' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='mb-1'>
            Password
          </label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <button
          className='cursor-pointer border bg-blue-700 text-white py-2 px-4 rounded'
          type='submit'
        >
          Submit
        </button>
      </form>
      <form className='flex flex-col' action={socialLogin}>
        <button
          className='cursor-pointer border border-gray-400 py-2 px-4 rounded'
          type='submit'
          name='action'
          value='google'
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
