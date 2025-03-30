'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-4xl font-bold mb-4'>404 – Page Not Found</h1>
      <p className='text-neutral-400 mb-6'>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href='/'
        className='text-blue-400 hover:underline text-base border border-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-900 transition'
      >
        Go back home
      </Link>
    </main>
  );
}
