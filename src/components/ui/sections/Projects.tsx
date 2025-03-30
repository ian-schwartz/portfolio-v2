'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Proshop',
    description:
      'A full-featured eCommerce platform with product catalog, shopping cart, user auth, and admin controls.',
    image: '/images/proshop.png',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'PayPal API'],
    live: 'https://proshop-ozxx.onrender.com',
    repo: 'https://github.com/ian-schwartz/proshop',
  },
  {
    title: 'CryptoTracker',
    description:
      'A real-time cryptocurrency tracker with CoinGecko API integration, dark mode, and exchange listings.',
    image: '/images/crypto-tracker.png',
    tech: ['React', 'Tailwind', 'Context API', 'CoinGecko API'],
    live: 'https://crypto-tracker-theta-ebon.vercel.app',
    repo: 'https://github.com/ian-schwartz/crypto-tracker',
  },
];

export default function Projects() {
  return (
    <section className='mb-12'>
      <h2 className='text-2xl font-semibold text-white mb-1'>Projects</h2>
      <p className='text-xl text-neutral-400 mb-8'>
        A couple of the apps I’ve built recently.
      </p>

      <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project, i) => (
          <div
            key={i}
            className='bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all'
          >
            <div className='relative w-full h-52'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover'
              />
            </div>

            <div className='p-5 space-y-3'>
              <h3 className='text-lg font-semibold text-white'>
                {project.title}
              </h3>
              <p className='text-base text-neutral-400'>{project.description}</p>

              <div className='flex flex-wrap gap-2 text-sm text-neutral-400'>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-neutral-800 px-2 py-1 rounded-md text-neutral-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex gap-4 pt-2'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base text-blue-400 hover:underline inline-flex items-center gap-1'
                >
                  <ExternalLink size={14} /> Live
                </a>
                <a
                  href={project.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base text-neutral-400 hover:text-white inline-flex items-center gap-1'
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
