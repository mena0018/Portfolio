'use client';

import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const { back } = useRouter();

  return (
    <div className='grid h-screen place-content-center px-4'>
      <div className='text-center pb-60'>
        <h1 className='text-9xl font-black text-primary'>404</h1>
        <p className='text-2xl font-bold tracking-tight sm:text-4xl'>Uh-oh!</p>
        <p className='mt-4'>We can't find that page.</p>
        <button
          onClick={back}
          className='mt-6 inline-block rounded bg-indigo-800 px-5 py-3 text-sm font-medium hover:bg-indigo-900 focus:outline-none focus:ring'
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
