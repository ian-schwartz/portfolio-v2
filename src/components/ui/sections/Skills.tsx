'use client';

import {
  Code2,
  Braces,
  FileCode,
  Atom,
  RefreshCw,
  Server,
  Layers,
  Wind,
  Paintbrush,
  Codepen,
  TerminalSquare,
  Share2,
  Database,
  Github,
  Globe,
  FileText,
  GitBranch,
  ChevronRightCircle,
  BadgeCheck,
} from 'lucide-react';

const skills = [
  { name: 'HTML', category: 'Frontend', color: 'bg-pink-500', icon: FileCode },
  { name: 'CSS', category: 'Styling', color: 'bg-teal-500', icon: Paintbrush },
  {
    name: 'JavaScript',
    category: 'Language',
    color: 'bg-yellow-400 text-black',
    icon: Code2,
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: 'bg-blue-500',
    icon: Braces,
  },
  { name: 'React', category: 'Frontend', color: 'bg-sky-500', icon: Atom },
  {
    name: 'Redux',
    category: 'State Management',
    color: 'bg-red-500',
    icon: RefreshCw,
  },
  {
    name: 'Next.js',
    category: 'Framework',
    color: 'bg-neutral-200 text-black',
    icon: Layers,
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: 'bg-cyan-400',
    icon: Wind,
  },
  { name: 'SASS', category: 'Styling', color: 'bg-pink-400', icon: Codepen },
  { name: 'LESS', category: 'Styling', color: 'bg-cyan-600', icon: Codepen },
  { name: 'Node.js', category: 'Backend', color: 'bg-blue-600', icon: Server },
  {
    name: 'Express',
    category: 'Backend',
    color: 'bg-blue-700',
    icon: TerminalSquare,
  },
  {
    name: 'REST',
    category: 'API Design',
    color: 'bg-purple-500',
    icon: ChevronRightCircle,
  },
  {
    name: 'GraphQL',
    category: 'API Design',
    color: 'bg-purple-600',
    icon: Share2,
  },
  {
    name: 'SQL',
    category: 'Database',
    color: 'bg-emerald-600',
    icon: Database,
  },
  { name: 'Python', category: 'Language', color: 'bg-indigo-600', icon: Code2 },
  {
    name: 'Git',
    category: 'Version Control',
    color: 'bg-orange-500',
    icon: GitBranch,
  },
  { name: 'WordPress', category: 'CMS', color: 'bg-slate-600', icon: Globe },
  {
    name: 'PHP',
    category: 'Backend',
    color: 'bg-blue-700',
    icon: TerminalSquare,
  },
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
              <skill.icon size={16} className='stroke-current' />
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
