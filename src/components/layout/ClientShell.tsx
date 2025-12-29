'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageBlurred, setIsPageBlurred] = useState(false);

  return (
    <>
      <Header setPageBlur={setIsPageBlurred} />

      <main
        style={{
          filter: isPageBlurred ? 'blur(6px)' : 'none',
          transition: 'filter 350ms ease',
        }}
      >
        {children}
        <Footer />
      </main>
    </>
  );
}
