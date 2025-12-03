'use client';

import { Phone, Mail, Users, TrendingUp, Bot, CheckCircle } from 'lucide-react';
import { StatsCard, QuickActions } from '@/components/dashboard';

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
    },
    {
      title: 'Anrufe heute',
      value: '47',
      change: 8,
      trend: 'up' as const,
      icon: Phone,
      iconColor: 'from-orange-500 to-amber-500',
      description: '12 beantwortet',
    },
    {
      title: 'E-Mails verarbeitet',
      value: '234',
      change: -5,
      trend: 'down' as const,
      icon: Mail,
      iconColor: 'from-cyan-500 to-blue-500',
      description: 'diese Woche',
    },
    {
      title: 'Neue Leads',
      value: '18',
      change: 23,
      trend: 'up' as const,
      icon: Users,
      iconColor: 'from-green-500 to-emerald-500',
      description: 'diese Woche',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Willkommen zurück! 👋
        </h1>
        <p className="text-gray-600">
          Hier ist eine Übersicht über Ihre KI-Agenten und Aktivitäten.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Calls */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Letzte Anrufe</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Max Mustermann</p>
                  <p className="text-xs text-gray-500">vor 5 Minuten • 3:24 Min.</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Agent Status */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Agent-Status</h3>
          <div className="space-y-3">
            {[
              { name: 'Rezeption', status: 'Aktiv', calls: 47 },
              { name: 'E-Mail-Assistent', status: 'Aktiv', calls: 234 },
              { name: 'Lead-Qualifizierung', status: 'Aktiv', calls: 18 },
            ].map((agent, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                    <p className="text-xs text-gray-500">{agent.status}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700">{agent.calls}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

