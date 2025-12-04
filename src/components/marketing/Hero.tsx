'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, BarChart3, Bot, Calculator, Users, Sparkles, Zap, Shield } from 'lucide-react';
import { GradientButton } from '@/components/shared';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const agents = [
  { icon: Phone, label: 'Rezeption', color: 'from-fuchsia-500 to-pink-500', glow: 'shadow-glow-fuchsia' },
  { icon: Mail, label: 'E-Mail', color: 'from-orange-500 to-amber-500', glow: 'shadow-orange-500/30' },
  { icon: BarChart3, label: 'Marketing', color: 'from-cyan-500 to-blue-500', glow: 'shadow-glow-cyan' },
  { icon: Calculator, label: 'Buchhaltung', color: 'from-green-500 to-emerald-500', glow: 'shadow-green-500/30' },
  { icon: Users, label: 'Leads', color: 'from-purple-500 to-violet-500', glow: 'shadow-purple-500/30' },
  { icon: Bot, label: '+25 mehr', color: 'from-gray-500 to-gray-600', glow: 'shadow-gray-500/20' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/30 to-white">
      {/* Animated Gradient Orbs - Premium */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-400/30 via-pink-400/20 to-orange-400/20 rounded-full blur-[120px] animate-float gradient-orb-fuchsia" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 via-blue-400/20 to-indigo-400/20 rounded-full blur-[120px] animate-float gradient-orb-cyan" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-fuchsia-300/15 via-orange-300/10 to-cyan-300/15 rounded-full blur-[140px] animate-pulse-slow" />

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Particles - Client Only */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-fuchsia-400/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-strong text-fuchsia-700 text-sm font-semibold mb-10 border border-fuchsia-200/50 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-fuchsia-600" />
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              <span className="bg-gradient-to-r from-fuchsia-600 to-orange-600 bg-clip-text text-transparent font-bold">
                30+ KI-Agenten für Schweizer KMU
              </span>
            </motion.span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            <span className="block text-gray-900 mb-2">Ihr digitales Team.</span>
            <span className="block gradient-text text-balance">
              Sofort einsatzbereit.
            </span>
          </motion.h1>

          {/* Premium Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-14 leading-relaxed text-balance"
          >
            Expertico automatisiert{' '}
            <span className="text-fuchsia-600 font-bold">Rezeption</span>,{' '}
            <span className="text-orange-600 font-bold">E-Mails</span>,{' '}
            <span className="text-cyan-600 font-bold">Marketing</span>,{' '}
            <span className="text-green-600 font-bold">Buchhaltung</span> und{' '}
            <span className="text-purple-600 font-bold">Lead-Management</span> – 
            mit spezialisierten KI-Agenten, die rund um die Uhr für Sie arbeiten.
          </motion.p>

          {/* Premium CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link href="/dashboard">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton 
                  size="lg" 
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="shadow-glow-fuchsia text-base px-8 py-4"
                >
                  Kostenlos starten
                </GradientButton>
              </motion.div>
            </Link>
            <Link href="/pricing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton 
                  variant="secondary" 
                  size="lg"
                  className="text-base px-8 py-4 border-2 hover:border-fuchsia-300"
                >
                  Preise ansehen
                </GradientButton>
              </motion.div>
            </Link>
          </motion.div>

          {/* Premium Agent Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-20"
          >
            {agents.map((agent, i) => (
              <motion.div
                key={agent.label}
                initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.8 + i * 0.1, 
                  type: 'spring', 
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  rotate: [0, -5, 5, -5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${agent.color} p-[3px] shadow-2xl group-hover:shadow-glow-fuchsia transition-all duration-500`}>
                  <div className="w-full h-full rounded-3xl bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-colors">
                    <agent.icon className={`w-8 h-8 md:w-10 md:h-10 text-gray-700 group-hover:text-fuchsia-600 transition-all duration-300 group-hover:scale-110`} />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-fuchsia-600 transition-colors">
                  {agent.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="mt-24 pt-12 border-t border-gray-200/50"
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-8 font-semibold">
              Vertraut von Schweizer KMU
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { label: 'Swiss Made', icon: Shield },
                { label: 'DSGVO konform', icon: Shield },
                { label: 'ISO 27001', icon: Zap },
                { label: 'SOC 2', icon: Shield },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.1, y: -2 }}
                  className="flex items-center gap-2.5 text-gray-500 hover:text-gray-700 transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-500 shadow-lg shadow-fuchsia-500/50 group-hover:scale-150 transition-transform" />
                  <badge.icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
