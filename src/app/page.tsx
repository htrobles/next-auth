import { auth, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import { logout } from '../actions';
import LoginForm from '@/components/LoginForm';

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <main className='flex min-h-screen flex-col justify-center p-24'>
      <div className='mb-4'>
        {!!session ? (
          <form action={logout} className='text-center'>
            <button
              type='submit'
              className='bg-gray-500 px-4 py-1 rounded-sm cursor-pointer hover:bg-blue-600 text-white'
            >
              Logout
            </button>
          </form>
        ) : (
          <LoginForm />
        )}
      </div>
      <p className='text-center'>{JSON.stringify(session)}</p>
    </main>
  );
}
