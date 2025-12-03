'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared';
import { Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  produkt: [
    { label: 'Alle Agenten', href: '/agents' },
    { label: 'Rezeption', href: '/agents/rezeption' },
    { label: 'E-Mail', href: '/agents/email' },
    { label: 'Marketing', href: '/agents/marketing' },
    { label: 'Preise', href: '/pricing' },
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
    { label: 'Cookie-Richtlinie', href: '/cookies' },
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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-6">
              <Logo showText={true} />
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Die führende KI-Plattform für Schweizer KMU. 30+ spezialisierte Agenten für Ihren Geschäftserfolg.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-2">Newsletter abonnieren</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ihre@email.ch"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-fuchsia-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ressourcen</h4>
            <ul className="space-y-3">
              {footerLinks.ressourcen.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Expertico AG. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Alle Systeme operativ
              </span>
              <span>🇨🇭 Made in Switzerland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

