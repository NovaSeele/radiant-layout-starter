
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { cn } from '@/lib/utils';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header className="ml-64" />
        <main className="flex-1 overflow-y-auto mt-16 pt-6 pb-12 px-8">
          {children}
        </main>
      </div>
    </div>
  );
};
