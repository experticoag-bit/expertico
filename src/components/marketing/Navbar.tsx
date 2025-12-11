'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared';
import {
  Menu,
  X,
  ChevronDown,
  Grid,
  CreditCard,
  Info,
  FileText,
  Phone,
  Mail,
  Users,
  TrendingUp,
  Calculator,
  CheckSquare,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavSection = {
  title: string;
  links: { label: string; href: string; description?: string }[];
};

type NavItem = {
  label: string;
  icon: typeof Grid;
  sections: NavSection[];
};

const navItems: NavItem[] = [
  {
    label: 'Produkt',
    icon: Grid,
    sections: [
      {
        title: 'Agenten-Hub',
        links: [
          { label: 'Alle Agenten', href: '/dashboard/agents', description: '30+ KI-Spezialisten' },
          { label: 'Rezeption', href: '/dashboard/agents', description: 'Anrufannahme & Routing' },
          { label: 'E-Mail Desk', href: '/dashboard/emails', description: 'Antwort-Assistenz' },
        ],
      },
      {
        title: 'Workflows',
        links: [
          { label: 'Leads', href: '/dashboard/leads', description: 'Scoring & Übergabe' },
          { label: 'Marketing', href: '/dashboard', description: 'Kampagnensteuerung' },
          { label: 'Buchhaltung', href: '/dashboard', description: 'Dokumenten-Assistenz' },
        ],
      },
    ],
  },
  {
    label: 'Preise',
    icon: CreditCard,
    sections: [
      {
        title: 'Pakete',
        links: [
          { label: 'Starter', href: '/#pricing', description: 'Für kleine Teams' },
          { label: 'Professional', href: '/#pricing', description: 'Für wachsende KMU' },
          { label: 'Enterprise', href: '/#pricing', description: 'Custom & SLA' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'FAQ', href: '/help', description: 'Setup-Fragen' },
          { label: 'Kontakt', href: '/contact', description: 'Sales & Beratung' },
        ],
      },
    ],
  },
  {
    label: 'Über uns',
    icon: Info,
    sections: [
      {
        title: 'Unternehmen',
        links: [
          { label: 'Mission', href: '/about', description: 'Swiss Made KI' },
          { label: 'Karriere', href: '/careers', description: 'Jobs & Culture' },
          { label: 'Partner', href: '/partners', description: 'Ökosystem' },
        ],
      },
      {
        title: 'Vertrauen',
        links: [
          { label: 'Datenschutz', href: '/privacy', description: 'DSGVO & Hosting' },
          { label: 'Sicherheit', href: '/status', description: 'Status & SLA' },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    icon: FileText,
    sections: [
      {
        title: 'Ressourcen',
        links: [
          { label: 'Blog', href: '/blog', description: 'News & Cases' },
          { label: 'Docs', href: '/docs', description: 'Anleitungen' },
          { label: 'Community', href: '/community', description: 'Events & Forum' },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (item: NavItem) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/60 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-fuchsia-600 py-2",
                    hoveredItem?.label === item.label ? "text-fuchsia-600" : "text-gray-600"
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", hoveredItem?.label === item.label && "rotate-180")} />
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Anmelden
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            Kostenlos starten
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 text-gray-600 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fuchsia-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={cn(
          "absolute left-0 top-full w-full overflow-hidden bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out",
          hoveredItem ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {hoveredItem && (
            <div className="grid grid-cols-2 gap-8">
              {hoveredItem.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    {section.title}
                  </h3>
                  <div className="grid gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group flex flex-col rounded-lg p-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-fuchsia-600">
                          {link.label}
                        </span>
                        {link.description && (
                          <span className="text-xs text-gray-500 mt-0.5">
                            {link.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="font-semibold text-gray-900 px-2">{item.label}</div>
                <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                  {item.sections.flatMap(section => section.links).map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block py-3 px-3 text-base text-gray-700 hover:text-fuchsia-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href="/login"
                className="block w-full text-center py-3 text-base font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Anmelden
              </Link>
              <Link
                href="/register"
                className="block w-full text-center py-3 text-base font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-orange-500 rounded-lg hover:brightness-110 active:scale-95 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kostenlos starten
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
