'use client';

import { Sidebar, Header } from '@/components/dashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-fuchsia-50/20">
      <div className="pointer-events-none fixed top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-400/10 to-orange-400/10 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 blur-[120px]" />

      <Header />
      <Sidebar />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
