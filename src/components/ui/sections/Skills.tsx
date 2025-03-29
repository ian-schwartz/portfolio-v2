'use client';

import { Wrench, Code, Monitor, Cpu } from 'lucide-react';

const skills = [
  { name: 'HTML', category: 'Frontend', color: 'bg-pink-500' },
  { name: 'CSS', category: 'Styling', color: 'bg-teal-500' },
  {
    name: 'JavaScript',
    category: 'Language',
    color: 'bg-yellow-400 text-black',
  },
  { name: 'TypeScript', category: 'Language', color: 'bg-blue-500' },
  { name: 'React', category: 'Frontend', color: 'bg-sky-500' },
  { name: 'Redux', category: 'State Management', color: 'bg-red-500' },
  {
    name: 'Next.js',
    category: 'Framework',
    color: 'bg-neutral-200 text-black',
  },
  { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-400' },
  { name: 'SASS', category: 'Styling', color: 'bg-pink-400' },
  { name: 'LESS', category: 'Styling', color: 'bg-cyan-600' },
  { name: 'Node.js', category: 'Backend', color: 'bg-blue-600' },
  { name: 'Express', category: 'Backend', color: 'bg-blue-700' },
  { name: 'REST', category: 'API Design', color: 'bg-purple-500' },
  { name: 'GraphQL', category: 'API Design', color: 'bg-purple-600' },
  { name: 'SQL', category: 'Database', color: 'bg-emerald-600' },
  { name: 'Python', category: 'Language', color: 'bg-indigo-600' },
  { name: 'Git', category: 'Version Control', color: 'bg-orange-500' },
  { name: 'WordPress', category: 'CMS', color: 'bg-slate-600' },
  { name: 'PHP', category: 'Backend', color: 'bg-blue-700' },
];

export default function Skills() {
  return (
    <section className='mb-12'>
      <h2 className='text-2xl font-semibold text-white mb-4'>My Skills</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        {skills.map((skill, i) => (
          <div key={i} className='flex items-center gap-4'>
            <div
              className={`w-10 h-10 rounded-md flex items-center justify-center ${skill.color}`}
            >
              <Wrench size={16} className='text-white' />
            </div>
            <div>
              <h3 className='text-sm font-medium text-white'>{skill.name}</h3>
              <p className='text-sm text-neutral-400'>{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
