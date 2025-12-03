'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { Logo } from '@/components/shared';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Bot, label: 'Agenten', href: '/dashboard/agents' },
  { icon: Phone, label: 'Anrufe', href: '/dashboard/calls' },
  { icon: Mail, label: 'E-Mails', href: '/dashboard/emails' },
  { icon: Users, label: 'Leads', href: '/dashboard/leads' },
  { icon: TrendingUp, label: 'Marketing', href: '/dashboard/marketing' },
  { icon: Calculator, label: 'Buchhaltung', href: '/dashboard/buchhaltung' },
  { icon: CheckSquare, label: 'Aufgaben', href: '/dashboard/tasks' },
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
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: open ? 256 : 80,
        }}
        className="fixed left-0 top-0 h-screen bg-white border-r border-gray-200 z-50 transition-all duration-300 overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200">
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Logo size="sm" showText={true} href="/dashboard" />
            </motion.div>
          )}
          {!open && (
            <Logo size="sm" showText={false} href="/dashboard" />
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {open ? (
              <ChevronLeft className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all relative group',
                    isActive
                      ? 'bg-gradient-to-r from-fuchsia-50 to-orange-50 text-fuchsia-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-fuchsia-500 to-orange-500 rounded-r-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <item.icon className={cn(
                    'w-5 h-5 flex-shrink-0',
                    isActive ? 'text-fuchsia-600' : 'text-gray-500 group-hover:text-gray-700'
                  )} />
                  {open && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Premium Badge */}
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 mx-3 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-semibold text-amber-700">Premium</span>
              </div>
              <p className="text-xs text-amber-600 mb-2">
                Upgrade für mehr Agenten & Features
              </p>
              <button className="w-full px-3 py-1.5 text-xs font-medium bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                Upgrade
              </button>
            </motion.div>
          )}
        </nav>

        {/* Bottom Items */}
        <div className="border-t border-gray-200 p-3 space-y-1">
          {bottomItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all',
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {open && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;

