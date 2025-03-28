'use client';
import Image from 'next/image';

const experience = [
  {
    from: '2021',
    to: 'Present',
    role: 'Web Developer',
    company: 'Scorpion',
    logo: '/logos/scorpion.jpg',
  },
];

export default function Experience() {
  return (
    <section className='mb-12'>
      <h2 className='text-2xl font-semibold text-white mb-1'>
        Work Experience
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {experience.map((exp, i) => (
          <div key={i} className='space-y-3'>
            <p className='text-base uppercase tracking-widest text-neutral-500'>
              {exp.from} - {exp.to}
            </p>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 relative'>
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className='object-contain rounded-md bg-neutral-800 p-1'
                />
              </div>
              <div>
                <h3 className='text-sm font-medium text-white'>{exp.role}</h3>
                <p className='text-sm text-neutral-400'>{exp.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
