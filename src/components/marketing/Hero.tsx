'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, BarChart3, Bot, Calculator, Users, Sparkles } from 'lucide-react';
import { GradientButton } from '@/components/shared';
import Link from 'next/link';

const agents = [
  { icon: Phone, label: 'Rezeption', color: 'from-fuchsia-500 to-pink-500' },
  { icon: Mail, label: 'E-Mail', color: 'from-orange-500 to-amber-500' },
  { icon: BarChart3, label: 'Marketing', color: 'from-cyan-500 to-blue-500' },
  { icon: Calculator, label: 'Buchhaltung', color: 'from-green-500 to-emerald-500' },
  { icon: Users, label: 'Leads', color: 'from-purple-500 to-violet-500' },
  { icon: Bot, label: '+25 mehr', color: 'from-gray-500 to-gray-600' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-300/10 to-cyan-300/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-orange-500/10 text-fuchsia-600 text-sm font-medium mb-8 border border-fuchsia-200/50">
              <Sparkles className="w-4 h-4" />
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              30+ KI-Agenten für Schweizer KMU
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gray-900">Ihr digitales Team.</span>
            <br />
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#FF6B35] to-[#00D4FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Sofort einsatzbereit.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Expertico automatisiert{' '}
            <span className="text-[#E91E8C] font-semibold">Rezeption</span>,{' '}
            <span className="text-[#FF6B35] font-semibold">E-Mails</span>,{' '}
            <span className="text-[#00D4FF] font-semibold">Marketing</span>,{' '}
            <span className="text-green-500 font-semibold">Buchhaltung</span> und{' '}
            <span className="text-purple-500 font-semibold">Lead-Management</span> – 
            mit spezialisierten KI-Agenten, die rund um die Uhr für Sie arbeiten.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/register">
              <GradientButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Kostenlos starten
              </GradientButton>
            </Link>
            <Link href="/pricing">
              <GradientButton variant="secondary" size="lg">
                Preise ansehen
              </GradientButton>
            </Link>
          </motion.div>

          {/* Agent Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {agents.map((agent, i) => (
              <motion.div
                key={agent.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${agent.color} p-[2px] shadow-lg group-hover:shadow-xl transition-all`}>
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <agent.icon className="w-7 h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {agent.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 pt-12 border-t border-gray-100"
          >
            <p className="text-sm text-gray-400 mb-6">Vertraut von Schweizer KMU</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              {['Swiss Made', 'DSGVO konform', 'ISO 27001', 'SOC 2'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-500" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

