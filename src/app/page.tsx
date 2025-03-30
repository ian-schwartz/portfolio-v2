'use client';
import Intro from '@/components/ui/sections/Intro';
import Projects from '@/components/ui/sections/Projects';
import Divider from '@/components/ui/Divider';
import Experience from '@/components/ui/sections/Experience';
import Skills from '@/components/ui/sections/Skills';
import Footer from '@/components/ui/sections/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16'>
      <section className='max-w-6xl mx-auto px-4'>
        <Intro />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Footer />
      </section>
    </main>
  );
}
