'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Building } from 'lucide-react';
import { GradientButton } from '@/components/shared';

const plans = [
  {
    name: 'Starter',
    price: '299',
    description: 'Perfekt für Einzelunternehmer und kleine Teams',
    icon: Zap,
    features: [
      '5 KI-Agenten aktiv',
      '500 Anrufminuten/Monat',
      '1.000 E-Mails/Monat',
      'Basis-Integrationen',
      'E-Mail Support',
      '1 Benutzer',
    ],
    cta: 'Jetzt starten',
    popular: false,
  },
  {
    name: 'Professional',
    price: '699',
    description: 'Für wachsende KMU mit höheren Anforderungen',
    icon: Sparkles,
    features: [
      '15 KI-Agenten aktiv',
      '2.000 Anrufminuten/Monat',
      '5.000 E-Mails/Monat',
      'Alle Integrationen',
      'Priority Support',
      '5 Benutzer',
      'Custom Voice Training',
      'API-Zugang',
    ],
    cta: 'Kostenlos testen',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Individuell',
    description: 'Massgeschneiderte Lösung für grosse Unternehmen',
    icon: Building,
    features: [
      'Alle 30+ KI-Agenten',
      'Unbegrenzte Anrufe',
      'Unbegrenzte E-Mails',
      'Dedicated Account Manager',
      'SLA-Garantie 99.9%',
      'Unbegrenzte Benutzer',
      'On-Premise Option',
      'Custom Development',
    ],
    cta: 'Kontakt aufnehmen',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-fuchsia-100/30 to-cyan-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-50 to-orange-50 text-fuchsia-600 text-sm font-medium mb-4">
            💰 Transparente Preise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ein Plan für <span className="gradient-text">jeden Bedarf</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Starten Sie klein und skalieren Sie mit Ihrem Unternehmen. Alle Preise in CHF, monatlich kündbar.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.popular
                  ? 'border-2 border-fuchsia-500 shadow-2xl shadow-fuchsia-500/10 scale-105 z-10'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              {/* Plan Icon */}
              <div className={`w-12 h-12 rounded-xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-fuchsia-500 to-orange-500' 
                  : 'bg-gray-100'
              } flex items-center justify-center mb-6`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
              </div>

              {/* Plan Name & Price */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                {plan.price !== 'Individuell' && <span className="text-gray-500">CHF</span>}
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.price !== 'Individuell' && <span className="text-gray-500">/Monat</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
                      plan.popular ? 'bg-fuchsia-100 text-fuchsia-600' : 'bg-green-100 text-green-600'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <GradientButton 
                variant={plan.popular ? 'primary' : 'secondary'} 
                className="w-full"
              >
                {plan.cta}
              </GradientButton>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          ✓ 14 Tage kostenlos testen &nbsp;•&nbsp; ✓ Keine Kreditkarte erforderlich &nbsp;•&nbsp; ✓ Jederzeit kündbar
        </motion.p>
      </div>
    </section>
  );
}

export default Pricing;

