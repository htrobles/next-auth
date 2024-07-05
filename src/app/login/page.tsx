import { signIn } from '@/auth';
import React from 'react';
import { socialLogin } from '../../actions';

export default function Login() {
  return (
    <div className='container mx-auto min-h-screen flex items-center'>
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
