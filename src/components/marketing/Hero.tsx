'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Bot, Phone, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const heroStats = [
  { value: '30+', label: 'KI-Agenten' },
  { value: '5 Min.', label: 'Setup' },
  { value: '99,9%', label: 'Verfügbarkeit' },
];

const agentSnapshot = [
  {
    title: 'Rezeption',
    metric: '47 Anrufe heute',
    status: 'Live',
    icon: Phone,
    color: 'bg-fuchsia-500',
    lightColor: 'bg-fuchsia-100',
    textColor: 'text-fuchsia-600',
  },
  {
    title: 'E-Mail Desk',
    metric: '234 Antworten',
    status: 'Automatisiert',
    icon: Mail,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-100',
    textColor: 'text-orange-600',
  },
  {
    title: 'Lead Studio',
    metric: '18 neue Leads',
    status: 'Scoring aktiv',
    icon: Bot,
    color: 'bg-cyan-500',
    lightColor: 'bg-cyan-100',
    textColor: 'text-cyan-600',
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-100/60 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 border border-fuchsia-100 px-3 py-1 text-sm font-medium text-fuchsia-700 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Expertico · Swiss SaaS</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
              KI-Agentenplattform für <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-500">Schweizer KMU</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ein zentrales Cockpit für Rezeption, E-Mail, Marketing, Buchhaltung und Lead Management – 
              mit garantiertem Datenschutz nach Schweizer Standard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/register"
                className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-white rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
              >
                Kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Preise vergleichen
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Dashboard Preview */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-6">
              {/* Header of Card */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold text-gray-500">Live Cockpit</div>
                  <div className="text-xl font-bold text-gray-900">Expertico Suite</div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <Shield className="h-3.5 w-3.5" />
                  DSGVO
                </div>
              </div>

              {/* Agent List */}
              <div className="space-y-3">
                {agentSnapshot.map((agent) => (
                  <div
                    key={agent.title}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", agent.color)}>
                        <agent.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{agent.title}</div>
                        <div className="text-xs text-gray-500">{agent.metric}</div>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-500 uppercase bg-white px-2 py-1 rounded border border-gray-100">
                      {agent.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Automatisierung</div>
                  <div className="text-lg font-bold text-gray-900">85% aller Anfragen</div>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-fuchsia-600 bg-fuchsia-50 px-3 py-1.5 rounded-full">
                  <Zap className="h-4 w-4" />
                  Echtzeit
                </div>
              </div>
            </div>
            
            {/* Decorative Elements behind card */}
            <div className="absolute -z-10 top-10 -right-10 h-full w-full rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-orange-500/10 blur-2xl" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Vertraut von Teams in Zürich, Basel und Bern
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <span>📞 Rezeption</span>
            <span>✉️ E-Mail Desk</span>
            <span>📈 Marketing Hub</span>
            <span>📊 Buchhaltung</span>
            <span>🤝 Lead Management</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
