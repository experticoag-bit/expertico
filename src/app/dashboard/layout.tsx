'use client';

import { useState } from 'react';
import { Sidebar, Header } from '@/components/dashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-fuchsia-50/20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-400/10 to-orange-400/10 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-[120px] -z-10" />
      
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={`transition-all duration-500 ease-out ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header sidebarOpen={sidebarOpen} />
        <main className="p-6 md:p-8 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
