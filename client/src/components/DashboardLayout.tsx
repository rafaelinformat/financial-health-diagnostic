
import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className={cn('flex-1 overflow-auto p-8 animate-fade-in', className)}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
