'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='text-base text-neutral-500 px-4'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-center md:text-left'>
        <div>
          <p className='text-base font-medium text-white'>Ian Schwartz</p>
          <p>Web Developer</p>
        </div>
        <p className='text-base self-center'>© {year}</p>
      </div>
    </footer>
  );
}
