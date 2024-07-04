import { getSession } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const session = await getSession();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/login'>
        <button className='bg-blue-500 px-4 py-1 rounded-sm cursor-pointer hover:bg-blue-600 text-white'>
          Login
        </button>
      </Link>
    </main>
  );
}
