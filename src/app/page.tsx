'use client';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Experience from '@/components/ui/sections/Experience';
import Skills from '@/components/ui/sections/Skills';
import Projects from '@/components/ui/sections/Projects';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16'>
      <section className='max-w-6xl mx-auto px-4'>
        <div className='flex items-start gap-6 mb-8'>
          <Image
            src='/images/ian-avatar.jpeg'
            alt='Avatar'
            width={64}
            height={64}
            className='rounded-md'
          />
          <div>
            <h1 className='text-4xl font-semibold'>Ian Schwartz</h1>
            <p className='text-xl md:text-2xl text-neutral-400'>
              Full Stack Web Developer
            </p>
          </div>
        </div>

        <p className='text-xl text-neutral-400 max-w-xl mb-6'>
          Focused on building responsive, user-friendly sites that look great
          and work even better. This portfolio was built with React, Next.js, and Tailwind. Feel free to reach out if you'd like to chat or collaborate.
        </p>

        <div className='flex gap-4 mb-12'>
          <a
            href='mailto:ian.schwartz23@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              variant='ghost'
              className='text-neutral-300 hover:text-white border border-neutral-700 bg-transparent hover:bg-neutral-900 rounded-full px-5 py-2.5 transition gap-2 cursor-pointer'
            >
              <Mail size={16} className='stroke-current' />
              Email
            </Button>
          </a>

          <a
            href='https://www.linkedin.com/in/ian-schwartz-277bb857'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              variant='ghost'
              className='text-neutral-300 hover:text-white border border-neutral-700 bg-transparent hover:bg-neutral-900 rounded-full px-5 py-2.5 transition gap-2 cursor-pointer'
            >
              <Linkedin size={16} className='stroke-current' />
              LinkedIn
            </Button>
          </a>

          <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            <Button
              variant='ghost'
              className='text-neutral-300 hover:text-white border border-neutral-700 bg-transparent hover:bg-neutral-900 rounded-full px-5 py-2.5 transition gap-2 cursor-pointer'
            >
              <FileText size={16} className='stroke-current' />
              Resume
            </Button>
          </a>
        </div>

        <Projects />

        <div className='border-t border-neutral-800 my-12' />

        <Experience />

        <div className='border-t border-neutral-800 my-12' />

        <Skills />
      </section>
    </main>
  );
}
