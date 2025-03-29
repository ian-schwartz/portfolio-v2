'use client';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Experience from '@/components/ui/sections/Experience';
import Skills from '@/components/ui/sections/Skills';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16'>
      <section className='max-w-6xl mx-auto px-4'>
        <div className='flex items-start gap-6 mb-8'>
          <Image
            src='/avatar.jpg'
            alt='Avatar'
            width={64}
            height={64}
            className='rounded-md'
          />
          <div>
            <h1 className='text-4xl font-semibold'>Ian Schwartz</h1>
            <p className='text-2xl text-neutral-400'>
              Full Stack Web Developer
            </p>
          </div>
        </div>

        <p className='text-xl text-neutral-400 max-w-xl mb-6'>
          Focused on building responsive, user-friendly sites that look great
          and work even better.
        </p>

        <div className='flex gap-4 mb-12'>
          <a
            href='mailto:ian.schwartz23@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              variant='outline'
              className='text-neutral-900 hover:text-white border-neutral-700 hover:bg-neutral-900 cursor-pointer gap-2'
            >
              <Mail size={16} className='stroke-current"' />
              Email
            </Button>
          </a>

          <a
            href='https://www.linkedin.com/in/ian-schwartz-277bb857'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              variant='outline'
              className='text-neutral-900 hover:text-white border-neutral-700 hover:bg-neutral-900 cursor-pointer gap-2'
            >
              <Linkedin size={16} className='stroke-current' />
              LinkedIn
            </Button>
          </a>

          <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            <Button
              variant='outline'
              className='text-neutral-900 hover:text-white border-neutral-700 hover:bg-neutral-900 cursor-pointer gap-2'
            >
              <FileText size={16} className='stroke-current' />
              Resume
            </Button>
          </a>
        </div>

        <h2 className='text-2xl font-semibold mb-4'>Recent Projects</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-neutral-900 rounded-lg p-4 h-64 flex items-center justify-center text-neutral-500'>
            Project 1
          </div>
          <div className='bg-neutral-900 rounded-lg p-4 h-64 flex items-center justify-center text-neutral-500'>
            Project 2
          </div>
          <div className='bg-neutral-900 rounded-lg p-4 h-64 flex items-center justify-center text-neutral-500'>
            Project 3
          </div>
        </div>

        <Experience />

        <div className='border-t border-neutral-800 my-12' />

        <Skills />
        
      </section>
    </main>
  );
}
