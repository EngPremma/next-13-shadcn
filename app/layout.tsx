import type { Metadata } from 'next';

import Nav from '@/components/nav';
import { robotoMono } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={robotoMono.className}>
        <Nav />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
