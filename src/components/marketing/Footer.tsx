'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared';
import { Linkedin, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const footerLinks = {
  produkt: [
    { label: 'Alle Agenten', href: '/dashboard/agents' },
    { label: 'Rezeption', href: '/dashboard/agents' },
    { label: 'E-Mail', href: '/dashboard/agents' },
    { label: 'Marketing', href: '/dashboard/agents' },
    { label: 'Preise', href: '/#pricing' },
  ],
  unternehmen: [
    { label: 'Über uns', href: '/about' },
    { label: 'Karriere', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Presse', href: '/press' },
    { label: 'Partner', href: '/partners' },
  ],
  ressourcen: [
    { label: 'Dokumentation', href: '/docs' },
    { label: 'API', href: '/api-docs' },
    { label: 'Status', href: '/status' },
    { label: 'Hilfe-Center', href: '/help' },
    { label: 'Community', href: '/community' },
  ],
  rechtliches: [
    { label: 'Datenschutz', href: '/privacy' },
    { label: 'AGB', href: '/terms' },
    { label: 'Impressum', href: '/imprint' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo size="lg" showText={true} />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Die führende KI-Plattform für Schweizer KMU – entwickelt mit Fokus auf Datenschutz, Präzision und einfache Integration.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gray-700 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="w-full md:w-auto">
              <p className="text-sm font-medium text-white mb-2">Newsletter abonnieren</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ihre@email.ch"
                  className="w-full md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all placeholder-gray-500"
                />
                <button className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-500 transition-colors flex items-center justify-center">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-500">
              <span>© {new Date().getFullYear()} Expertico AG. Alle Rechte vorbehalten.</span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Systeme operativ
              </span>
              <span>🇨🇭 Made in Zurich</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
