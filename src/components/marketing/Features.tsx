'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Users, Zap, Shield, Clock, TrendingUp, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: '24/7 Erreichbarkeit',
    description: 'Kein Anruf geht verloren. Ihre KI-Rezeption ist immer wach.',
    icon: Clock,
    className: 'md:col-span-2 lg:col-span-2',
    gradient: 'from-fuchsia-500/10 to-pink-500/10',
    textGradient: 'from-fuchsia-600 to-pink-600',
  },
  {
    title: 'Schweizer Präzision',
    description: 'Trainiert auf Schweizerdeutsch und lokale Gepflogenheiten.',
    icon: Shield,
    className: 'md:col-span-1 lg:col-span-1',
    gradient: 'from-red-500/10 to-orange-500/10',
    textGradient: 'from-red-600 to-orange-600',
  },
  {
    title: 'Sofortige Skalierung',
    description: 'Von 10 auf 10.000 Anrufe pro Tag – ohne neues Personal.',
    icon: TrendingUp,
    className: 'md:col-span-1 lg:col-span-1',
    gradient: 'from-cyan-500/10 to-blue-500/10',
    textGradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: '30+ Spezialisten',
    description: 'Marketing, Buchhaltung, Support – alles unter einem Dach.',
    icon: Bot,
    className: 'md:col-span-2 lg:col-span-2',
    gradient: 'from-violet-500/10 to-purple-500/10',
    textGradient: 'from-violet-600 to-purple-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - INTEREST */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-50 to-orange-50 text-fuchsia-700 text-sm font-bold mb-6 border border-fuchsia-100"
          >
            <Zap className="w-4 h-4" />
            Warum Expertico?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Mehr als nur <span className="gradient-text">Automatisierung.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Entdecken Sie, wie unsere KI-Agenten Ihr Unternehmen transformieren – 
            effizienter, schneller und kostengünstiger als je zuvor.
          </motion.p>
        </div>

        {/* Bento Grid - INTEREST/DESIRE */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl",
                "bg-white border border-gray-100",
                feature.className
              )}
            >
              {/* Gradient Background on Hover */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                feature.gradient
              )} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                  "bg-gray-50 group-hover:bg-white shadow-sm"
                )}>
                  <feature.icon className={cn(
                    "w-6 h-6 transition-colors duration-300",
                    "text-gray-600"
                  )} />
                </div>
                
                <h3 className={cn(
                  "text-2xl font-bold mb-3 text-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300",
                  `group-hover:bg-gradient-to-r ${feature.textGradient}`
                )}>
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
