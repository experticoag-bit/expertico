'use client';

import { motion } from 'framer-motion';
import { 
  Phone, Mail, BarChart3, Calculator, Users, Calendar,
  MessageSquare, FileText, TrendingUp, Bot, Zap, Shield
} from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'KI-Rezeption',
    description: 'Automatische Anrufannahme 24/7 mit natürlicher Schweizerdeutsch-Sprachführung. Terminvereinbarung und Weiterleitung inklusive.',
    color: 'from-fuchsia-500 to-pink-500',
    stats: '95% Erreichbarkeit',
  },
  {
    icon: Mail,
    title: 'E-Mail-Assistent',
    description: 'Kategorisiert, priorisiert und beantwortet E-Mails automatisch. Erstellt Entwürfe zur Freigabe.',
    color: 'from-orange-500 to-amber-500',
    stats: '80% schneller',
  },
  {
    icon: BarChart3,
    title: 'Marketing-Agent',
    description: 'Erstellt Content für Social Media, Blog und Newsletter. Plant und veröffentlicht automatisch.',
    color: 'from-cyan-500 to-blue-500',
    stats: '30 Posts/Monat',
  },
  {
    icon: Calculator,
    title: 'Buchhaltungs-Agent',
    description: 'Scannt Belege, extrahiert Daten und bereitet Buchungen vor. Integriert mit Bexio, Abacus & Co.',
    color: 'from-green-500 to-emerald-500',
    stats: '90% Zeitersparnis',
  },
  {
    icon: Users,
    title: 'Lead-Qualifizierung',
    description: 'Bewertet und priorisiert Leads automatisch. Reichert Profile mit Social-Daten an.',
    color: 'from-purple-500 to-violet-500',
    stats: '3x mehr Conversions',
  },
  {
    icon: Calendar,
    title: 'Terminierung',
    description: 'Koordiniert Termine basierend auf Verfügbarkeit. Sendet Erinnerungen und Follow-ups.',
    color: 'from-rose-500 to-red-500',
    stats: '0 Doppelbuchungen',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-fuchsia-600 text-sm font-medium mb-4 shadow-sm border border-gray-100">
            <Zap className="w-4 h-4" />
            Ihre KI-Mitarbeiter
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            30+ spezialisierte <span className="gradient-text">KI-Agenten</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jeder Agent ist ein Experte in seinem Bereich – trainiert für Schweizer KMU und sofort einsatzbereit.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-fuchsia-100 transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-[2px] mb-4`}>
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                {/* Stats Badge */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-50 to-orange-50 text-fuchsia-700 text-sm font-medium">
                  {feature.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/agents" 
            className="inline-flex items-center gap-2 text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors"
          >
            Alle 30+ Agenten entdecken
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;

