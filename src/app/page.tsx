import { auth, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import { logout } from './actions';
import LoginForm from '@/components/LoginForm';

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p>{JSON.stringify(session)}</p>
      {!!session ? (
        <form action={logout}>
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
    </main>
  );
}
