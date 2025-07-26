import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'PassengerOS - Driver-first in-car operating system',
  description: 'The driver-first in-car operating system designed to streamline your gig work, optimize routes, and automate daily workflows.',
  icons: {
    icon: '/favicon-16x16.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0a0f] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
