'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Building, ArrowRight, Shield } from 'lucide-react';
import { GradientButton } from '@/components/shared';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    price: '299',
    description: 'Der perfekte Einstieg.',
    features: [
      '5 KI-Agenten',
      '500 Anrufminuten',
      '1.000 E-Mails',
      'Basis-Support',
    ],
    cta: 'Jetzt starten',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '699',
    description: 'Für Wachstum gebaut.',
    features: [
      '15 KI-Agenten',
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
    price: 'Custom',
    description: 'Maximale Power.',
    features: [
      'Alle 30+ Agenten',
      'Unbegrenzte Limits',
      'SLA 99.9%',
      'Dedizierter Manager',
      'Custom Training',
    ],
    cta: 'Kontaktieren',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-fuchsia-50/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-50/50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header - ACTION */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Bereit für die <span className="gradient-text">Zukunft?</span>
          </motion.h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Wählen Sie den Plan, der zu Ihnen passt. Keine versteckten Kosten.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "relative rounded-3xl p-8 transition-all duration-300",
                plan.highlight 
                  ? "bg-white shadow-2xl shadow-fuchsia-500/10 border-2 border-fuchsia-500 scale-105 z-10" 
                  : "bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gray-200"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white text-sm font-bold shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-500 font-medium">CHF / Mt.</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                      plan.highlight ? "bg-fuchsia-100 text-fuchsia-600" : "bg-gray-100 text-gray-500"
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <GradientButton 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </GradientButton>
            </motion.div>
          ))}
        </div>

        {/* Trust / Guarantee */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-gray-100 text-center"
        >
          <p className="text-gray-400 font-medium flex flex-wrap justify-center gap-8">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-fuchsia-500" />
              14 Tage kostenlos testen
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-500" />
              In 5 Minuten eingerichtet
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-500" />
              Jederzeit kündbar
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
