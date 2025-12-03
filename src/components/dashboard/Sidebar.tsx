'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Bot,
  Phone,
  Mail,
  Users,
  TrendingUp,
  Calculator,
  CheckSquare,
  Settings,
  Menu,
  X,
  ChevronLeft,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Logo } from '@/components/shared';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', color: 'from-fuchsia-500 to-pink-500' },
  { icon: Bot, label: 'Agenten', href: '/dashboard/agents', color: 'from-orange-500 to-amber-500' },
  { icon: Phone, label: 'Anrufe', href: '/dashboard/calls', color: 'from-cyan-500 to-blue-500' },
  { icon: Mail, label: 'E-Mails', href: '/dashboard/emails', color: 'from-green-500 to-emerald-500' },
  { icon: Users, label: 'Leads', href: '/dashboard/leads', color: 'from-purple-500 to-violet-500' },
  { icon: TrendingUp, label: 'Marketing', href: '/dashboard/marketing', color: 'from-rose-500 to-red-500' },
  { icon: Calculator, label: 'Buchhaltung', href: '/dashboard/buchhaltung', color: 'from-indigo-500 to-blue-500' },
  { icon: CheckSquare, label: 'Aufgaben', href: '/dashboard/tasks', color: 'from-teal-500 to-cyan-500' },
];

const bottomItems = [
  { icon: Settings, label: 'Einstellungen', href: '/dashboard/settings' },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay - Premium */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Premium Glassmorphism */}
      <motion.aside
        initial={false}
        animate={{
          width: open ? 256 : 80,
        }}
        className="fixed left-0 top-0 h-screen bg-white/90 backdrop-blur-xl border-r border-gray-200/50 z-50 transition-all duration-500 ease-out overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Header - Premium */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200/50 bg-gradient-to-r from-white to-fuchsia-50/30">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="logo-full"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Logo size="sm" showText={true} href="/dashboard" />
              </motion.div>
            ) : (
              <motion.div
                key="logo-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Logo size="sm" showText={false} href="/dashboard" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1, rotate: open ? -90 : 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggle}
            className="p-2.5 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-fuchsia-100 hover:to-orange-100 text-gray-600 hover:text-fuchsia-600 transition-all duration-300"
          >
            {open ? (
              <ChevronLeft className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Navigation - Premium */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 scrollbar-thin scrollbar-thumb-fuchsia-500 scrollbar-track-transparent">
          <div className="space-y-1.5">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'group relative flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-300',
                      isActive
                        ? 'bg-gradient-to-r from-fuchsia-500/10 via-orange-500/10 to-cyan-500/10 text-fuchsia-700 shadow-lg shadow-fuchsia-500/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                    )}
                  >
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-fuchsia-500 via-orange-500 to-cyan-500 rounded-r-full shadow-lg shadow-fuchsia-500/50"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/5 to-orange-500/5"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      </>
                    )}
                    <div className={cn(
                      'relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                      isActive 
                        ? `bg-gradient-to-br ${item.color} p-[2px]`
                        : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-fuchsia-100 group-hover:to-orange-100'
                    )}>
                      <div className={cn(
                        'w-full h-full rounded-xl flex items-center justify-center',
                        isActive ? 'bg-white' : 'bg-transparent'
                      )}>
                        <item.icon className={cn(
                          'w-5 h-5 transition-all duration-300',
                          isActive 
                            ? 'text-fuchsia-600' 
                            : 'text-gray-500 group-hover:text-fuchsia-600 group-hover:scale-110'
                        )} />
                      </div>
                    </div>
                    <AnimatePresence>
                      {open && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Badge - Enhanced */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ delay: 0.3 }}
                className="mt-8 mx-3 p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200/50 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-black text-amber-700 uppercase tracking-wide">Premium</span>
                    <p className="text-xs text-amber-600 font-medium">Mehr Power</p>
                  </div>
                </div>
                <p className="text-xs text-amber-700 mb-3 font-medium leading-relaxed">
                  Upgrade für mehr Agenten, erweiterte Features & Priority Support
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2.5 text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Jetzt upgraden
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Bottom Items - Premium */}
        <div className="border-t border-gray-200/50 p-4 bg-gradient-to-t from-white to-fuchsia-50/20">
          <div className="space-y-1.5">
            {bottomItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-300',
                    isActive
                      ? 'bg-gray-100 text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                    isActive 
                      ? 'bg-gradient-to-br from-gray-200 to-gray-300' 
                      : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-gray-200 group-hover:to-gray-300'
                  )}>
                    <item.icon className={cn(
                      'w-5 h-5 transition-colors',
                      isActive ? 'text-gray-700' : 'text-gray-500 group-hover:text-gray-700'
                    )} />
                  </div>
                  <AnimatePresence>
                    {open && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;
