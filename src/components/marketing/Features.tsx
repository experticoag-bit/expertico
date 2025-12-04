'use client';

import { Phone, Shield, TrendingUp as TrendUp, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

type Feature = {
  title: string;
  description: string;
  icon: typeof Phone;
  color: string;
  bg: string;
};

const features = [
  {
    title: '24/7 Empfang',
    description: 'Kein Anruf geht verloren. Ihre KI-Rezeption begrüßt Kund:innen rund um die Uhr.',
    icon: Phone,
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
  },
  {
    title: 'Schweizer Präzision',
    description: 'Trainiert auf Schweizerdeutsch, regionale Gepflogenheiten und DSGVO-konforme Prozesse.',
    icon: Shield,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    title: 'Skalierbar in Minuten',
    description: 'Von 10 auf 10.000 Interaktionen pro Tag ohne zusätzliches Personal.',
    icon: TrendUp,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    title: '30+ Spezialisten',
    description: 'Marketing, Buchhaltung, Support und mehr – zentral gesteuert in einer Plattform.',
    icon: Bot,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-fuchsia-100 text-fuchsia-700 text-xs font-bold tracking-wide uppercase mb-4">
            Warum Expertico?
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Modernste Technologie für Ihr Business
          </h2>
          <p className="text-lg text-gray-600">
            Schlanke Oberflächen, klare Patterns und Fokus auf Produktivität – ideal für Teams, die eine ruhige, zuverlässige UI suchen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={cn("inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 transition-colors", feature.bg, feature.color)}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-fuchsia-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
