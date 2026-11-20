import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ian Schwartz | Web Developer',
  description:
    'Full stack web developer portfolio showcasing modern projects, skills, and experience.',
  metadataBase: new URL('https://ianschwartz.dev'),
  openGraph: {
    title: 'Ian Schwartz | Web Developer',
    description: 'Explore recent projects, skills, and experience.',
    type: 'website',
    url: 'https://ianschwartz.dev',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ian Schwartz Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Schwartz | Web Developer',
    description:
      'Web developer portfolio built with React, Next.js, and Tailwind.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
