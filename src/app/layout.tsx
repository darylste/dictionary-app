import './styles/globals.scss';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dictionary App',
  description:
    'Dictionary Web App | Frontend Mentor Solution by Daryl Stensland.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
