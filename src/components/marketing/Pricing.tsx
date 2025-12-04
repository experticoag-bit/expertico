'use client';

import { CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 'CHF 299',
    period: '/ Monat',
    description: 'Für lokale Teams, die ihre ersten Agenten aktivieren.',
    features: ['5 Agenten', '500 Anrufminuten', '1.000 E-Mails', 'E-Mail Support'],
    cta: 'Jetzt starten',
    highlight: false,
  },
  {
    name: 'Professional',
    price: 'CHF 699',
    period: '/ Monat',
    description: 'Skaliert mit Marketing, Sales und Backoffice.',
    features: [
      '15 Agenten',
      '2.000 Anrufminuten',
      '5.000 E-Mails',
      'Priority Support',
      'API-Zugang',
    ],
    cta: 'Kostenlos testen',
    highlight: true,
    badge: 'Beliebt',
  },
  {
    name: 'Enterprise',
    price: 'Auf Anfrage',
    period: '',
    description: 'Individuelle SLAs, Custom Training und Integrationen.',
    features: ['Alle 30+ Agenten', 'Unbegrenzte Limits', 'SLA 99.9%', 'Dedicated Success Team'],
    cta: 'Beratung buchen',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fuchsia-600 font-bold tracking-wide uppercase text-sm">Preise</span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transparente Pakete ohne Zusatzkosten
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Wählen Sie den Umfang, der zu Ihren Prozessen passt. Upgrades sind jederzeit möglich.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8 shadow-sm transition-all duration-300",
                plan.highlight
                  ? "border-fuchsia-500 bg-white ring-4 ring-fuchsia-500/10 scale-105 z-10"
                  : "border-gray-200 bg-white hover:border-fuchsia-200 hover:shadow-lg"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                    <Zap className="mr-1 h-3 w-3" fill="currentColor" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn("text-lg font-bold", plan.highlight ? "text-fuchsia-600" : "text-gray-900")}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-sm font-medium text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className={cn("h-5 w-5 flex-shrink-0", plan.highlight ? "text-fuchsia-500" : "text-gray-400")} />
                    <span className="ml-3 text-sm font-medium text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.highlight ? '/register' : '/contact'}
                className={cn(
                  "block w-full rounded-xl py-3 text-center text-sm font-bold transition-all",
                  plan.highlight
                    ? "bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white hover:brightness-110 shadow-lg hover:shadow-xl"
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-fuchsia-500" />
            <span>14 Tage kostenlos testen</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            <span>In 5 Minuten live</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-500" />
            <span>Jederzeit kündbar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
