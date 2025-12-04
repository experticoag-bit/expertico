'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Calculator,
  CheckSquare,
  LayoutDashboard,
  Mail,
  Phone,
  Settings,
  TrendingDown as TrendDownIcon,
  TrendingUp as TrendUpIcon,
  TrendingUp,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Highlight = {
  label: string;
  value: string;
  trend?: 'up' | 'down';
  delta?: string;
};

type Shortcut = {
  label: string;
  description: string;
  href: string;
};

type NavItem = {
  icon: typeof LayoutDashboard;
  label: string;
  href: string;
  description: string;
  highlights: Highlight[];
  shortcuts: Shortcut[];
};

const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/dashboard',
    description: 'Alle KPIs, Agenten-Performance und Aktivitäten auf einen Blick.',
    highlights: [
      { label: 'Aktive Agenten', value: '12', trend: 'up', delta: '+15%' },
      { label: 'Antwortzeit', value: '1.8 Min', trend: 'down', delta: '-12%' },
    ],
    shortcuts: [
      { label: 'Live KPIs', description: 'Performance-Übersicht', href: '/dashboard' },
      { label: 'Reports', description: 'Wöchentliche Trends', href: '/dashboard' },
    ],
  },
  {
    icon: Bot,
    label: 'Agenten',
    href: '/dashboard/agents',
    description: 'Verwalten Sie Skills, Routing und Eskalationen Ihrer KI-Agenten.',
    highlights: [
      { label: 'Trainings offen', value: '4', trend: 'up', delta: '+2' },
      { label: 'SLA', value: '99.9%', trend: 'up', delta: '+0.4%' },
    ],
    shortcuts: [
      { label: 'Agentenliste', description: 'Status & Skills', href: '/dashboard/agents' },
      { label: 'Playbooks', description: 'Workflows & Regeln', href: '/dashboard/agents' },
    ],
  },
  {
    icon: Phone,
    label: 'Anrufe',
    href: '/dashboard/calls',
    description: 'Call Center Live-Monitoring, Transkripte und Qualitätssicherung.',
    highlights: [
      { label: 'Heute', value: '47 Anrufe', trend: 'up', delta: '+8%' },
      { label: 'CSAT', value: '4.8 / 5', trend: 'up', delta: '+0.2' },
    ],
    shortcuts: [
      { label: 'Call-Log', description: 'Transkripte & Tags', href: '/dashboard/calls' },
      { label: 'Warteschlangen', description: 'Routing & SLAs', href: '/dashboard/calls' },
    ],
  },
  {
    icon: Mail,
    label: 'E-Mails',
    href: '/dashboard/emails',
    description: 'Automatisierte Inbox mit Vorlagen, Stimmung und Audit Trail.',
    highlights: [
      { label: 'Automationen', value: '18 aktiv', trend: 'up', delta: '+3' },
      { label: 'Antwortquote', value: '92%', trend: 'up', delta: '+5%' },
    ],
    shortcuts: [
      { label: 'Inbox', description: 'Verarbeitete Threads', href: '/dashboard/emails' },
      { label: 'Vorlagen', description: 'Brand-Voice sichern', href: '/dashboard/emails' },
    ],
  },
  {
    icon: Users,
    label: 'Leads',
    href: '/dashboard/leads',
    description: 'Lead-Scoring, Übergaben und KI-Anreicherungen steuern.',
    highlights: [
      { label: 'Neue Leads', value: '18 / Woche', trend: 'up', delta: '+23%' },
      { label: 'Konversion', value: '34%', trend: 'down', delta: '-3%' },
    ],
    shortcuts: [
      { label: 'Pipeline', description: 'Phase & Owner', href: '/dashboard/leads' },
      { label: 'Scoring', description: 'KI-Insights', href: '/dashboard/leads' },
    ],
  },
  {
    icon: TrendingUp,
    label: 'Marketing',
    href: '/dashboard/marketing',
    description: 'Kampagnen, Social Media und Paid Ads orchestrieren.',
    highlights: [
      { label: 'Aktive Kampagnen', value: '6', trend: 'up', delta: '+1' },
      { label: 'RoAS', value: '4.3x', trend: 'up', delta: '+0.5' },
    ],
    shortcuts: [
      { label: 'Kampagnenboard', description: 'Paid & Organic', href: '/dashboard/marketing' },
      { label: 'Content Studio', description: 'Posts & Scripts', href: '/dashboard/marketing' },
    ],
  },
  {
    icon: Calculator,
    label: 'Buchhaltung',
    href: '/dashboard/buchhaltung',
    description: 'Belege, Zahlungen und automatische Freigaben koordinieren.',
    highlights: [
      { label: 'Rechnungen offen', value: '12', trend: 'down', delta: '-4' },
      { label: 'Durchlaufzeit', value: '36 Std', trend: 'down', delta: '-6%' },
    ],
    shortcuts: [
      { label: 'Dokumentenablage', description: 'Belege & OCR', href: '/dashboard/buchhaltung' },
      { label: 'Freigaben', description: 'Autom. Workflows', href: '/dashboard/buchhaltung' },
    ],
  },
  {
    icon: CheckSquare,
    label: 'Aufgaben',
    href: '/dashboard/tasks',
    description: 'Zuweisungen, Deadlines und Eskalationen koordinieren.',
    highlights: [
      { label: 'Offene Tasks', value: '23', trend: 'up', delta: '+5' },
      { label: 'Überfällig', value: '7', trend: 'down', delta: '-2' },
    ],
    shortcuts: [
      { label: 'Taskboard', description: 'Status & Owner', href: '/dashboard/tasks' },
      { label: 'Automationen', description: 'Trigger & Regeln', href: '/dashboard/tasks' },
    ],
  },
  {
    icon: Settings,
    label: 'Einstellungen',
    href: '/dashboard/settings',
    description: 'Team-Zugriffe, Integrationen und Security zentral verwalten.',
    highlights: [
      { label: 'Integrationen', value: '11 aktiv', trend: 'up', delta: '+1' },
      { label: 'Audit Logs', value: 'Up-to-date', trend: 'up', delta: '' },
    ],
    shortcuts: [
      { label: 'Team & Rollen', description: 'SSO & Rechte', href: '/dashboard/settings' },
      { label: 'Integrationen', description: 'Twilio, HubSpot, etc.', href: '/dashboard/settings' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<NavItem | null>(navItems[0]);

  return (
    <div className="sticky top-20 z-30 border-b border-gray-100 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isRouteActive = pathname.startsWith(item.href);
            return (
              <button
                key={item.label}
                onMouseEnter={() => setActiveItem(item)}
                className={cn(
                  'relative px-3 py-2 text-gray-500 transition-colors',
                  isRouteActive ? 'text-gray-900' : 'hover:text-fuchsia-600'
                )}
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5" />
                <span
                  className={cn(
                    'absolute left-1/2 -bottom-1 h-0.5 w-8 -translate-x-1/2 bg-transparent transition-colors',
                    isRouteActive && 'bg-gradient-to-r from-fuchsia-500 to-orange-400'
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeItem && (
          <motion.div
            key={activeItem.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 bg-white/95 absolute w-full left-0"
            onMouseLeave={() => setActiveItem(null)}
          >
            <div className="max-w-7xl mx-auto grid gap-6 px-4 py-6 sm:px-6 md:grid-cols-[2fr_3fr]">
              <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-fuchsia-50 via-orange-50 to-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-fuchsia-600 shadow-md">
                    <activeItem.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Bereich</p>
                    <h3 className="text-xl font-bold text-gray-900">{activeItem.label}</h3>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{activeItem.description}</p>
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700"
                >
                  Direkt öffnen
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <div className="mt-6 space-y-3">
                  {activeItem.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 p-3"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">{highlight.label}</p>
                        <p className="text-lg font-semibold text-gray-900">{highlight.value}</p>
                      </div>
                      {highlight.trend && (
                        <span
                          className={cn(
                            'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
                            highlight.trend === 'up'
                              ? 'bg-emerald-50 text-emerald-600'
                              : 'bg-red-50 text-red-600'
                          )}
                        >
                          {highlight.trend === 'up' ? (
                            <TrendUpIcon className="h-3 w-3" />
                          ) : (
                            <TrendDownIcon className="h-3 w-3" />
                          )}
                          {highlight.delta}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {activeItem.shortcuts.map((shortcut) => (
                  <Link
                    key={shortcut.label}
                    href={shortcut.href}
                    className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm transition-all hover:border-fuchsia-200 hover:shadow-lg"
                  >
                    <p className="text-sm font-semibold text-gray-900">{shortcut.label}</p>
                    <p className="text-sm text-gray-500">{shortcut.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
