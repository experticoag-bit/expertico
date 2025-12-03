'use client';

import { Phone, Mail, Users, TrendingUp, Bot, CheckCircle, ArrowRight, Activity, Zap } from 'lucide-react';
import { StatsCard, QuickActions } from '@/components/dashboard';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Aktive Agenten',
      value: '12',
      change: 15,
      trend: 'up' as const,
      icon: Bot,
      iconColor: 'from-fuchsia-500 to-pink-500',
      description: 'von 30 verfügbar',
      delay: 0.1,
    },
    {
      title: 'Anrufe heute',
      value: '47',
      change: 8,
      trend: 'up' as const,
      icon: Phone,
      iconColor: 'from-orange-500 to-amber-500',
      description: '12 beantwortet',
      delay: 0.2,
    },
    {
      title: 'E-Mails verarbeitet',
      value: '234',
      change: -5,
      trend: 'down' as const,
      icon: Mail,
      iconColor: 'from-cyan-500 to-blue-500',
      description: 'diese Woche',
      delay: 0.3,
    },
    {
      title: 'Neue Leads',
      value: '18',
      change: 23,
      trend: 'up' as const,
      icon: Users,
      iconColor: 'from-green-500 to-emerald-500',
      description: 'diese Woche',
      delay: 0.4,
    },
  ];

  const recentCalls = [
    { name: 'Max Mustermann', time: 'vor 5 Minuten', duration: '3:24 Min.', status: 'success' },
    { name: 'Anna Schmidt', time: 'vor 12 Minuten', duration: '2:15 Min.', status: 'success' },
    { name: 'Peter Müller', time: 'vor 18 Minuten', duration: '4:42 Min.', status: 'success' },
  ];

  const agentStatus = [
    { name: 'Rezeption', status: 'Aktiv', activity: 47, color: 'from-fuchsia-500 to-pink-500' },
    { name: 'E-Mail-Assistent', status: 'Aktiv', activity: 234, color: 'from-orange-500 to-amber-500' },
    { name: 'Lead-Qualifizierung', status: 'Aktiv', activity: 18, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section - Premium */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
              Willkommen zurück! <span className="gradient-text">👋</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Hier ist eine Übersicht über Ihre KI-Agenten und Aktivitäten. Alles läuft reibungslos.
            </p>
          </div>
          <Link href="/dashboard/agents">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-xl font-bold shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all"
            >
              <Zap className="w-5 h-5" />
              Neuen Agent aktivieren
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid - Premium */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Quick Actions - Premium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <QuickActions />
      </motion.div>

      {/* Recent Activity - Premium Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Calls - Premium */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 to-orange-500/0 group-hover:from-fuchsia-500/5 group-hover:to-orange-500/5 transition-all duration-500" />
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Phone className="w-5 h-5 text-fuchsia-600" />
                Letzte Anrufe
              </h3>
              <Link href="/dashboard/calls" className="text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700 flex items-center gap-1">
                Alle ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentCalls.map((call, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-transparent hover:from-fuchsia-50 hover:to-orange-50 border border-gray-100 hover:border-fuchsia-200 transition-all cursor-pointer group/item"
                >
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover/item:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate">{call.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{call.time}</span>
                      <span>•</span>
                      <span>{call.duration}</span>
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Agent Status - Premium */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-600" />
                Agent-Status
              </h3>
              <Link href="/dashboard/agents" className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1">
                Verwalten
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {agentStatus.map((agent, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ x: -4 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-transparent hover:from-cyan-50 hover:to-blue-50 border border-gray-100 hover:border-cyan-200 transition-all cursor-pointer group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className={`relative w-3 h-3 rounded-full bg-gradient-to-br ${agent.color} shadow-lg animate-pulse`}>
                      <div className="absolute inset-0 rounded-full bg-white/50 animate-ping" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{agent.name}</p>
                      <p className="text-sm text-gray-500">{agent.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-gray-700 tabular-nums">{agent.activity}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Aktivitäten</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
