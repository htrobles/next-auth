import { emailLogin, socialLogin } from '@/app/actions';
import React from 'react';

export default function LoginForm() {
  return (
    <div className='border border-gray-300 p-4'>
      <form className='flex flex-col gap-2' action={emailLogin}>
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
      <form action={socialLogin}>
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
