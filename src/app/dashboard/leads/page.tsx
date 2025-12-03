'use client';

import { useState } from 'react';
import { Search, Filter, Users, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { GlassCard, Badge } from '@/components/shared';
import { StatsCard } from '@/components/dashboard';
import { Lead, LeadStatus } from '@prisma/client';
import { formatDateTime } from '@/lib/utils';

// Mock data
const mockLeads: Lead[] = [
  {
    id: '1',
    status: 'NEW' as LeadStatus,
    email: 'max@example.com',
    phone: '+41 79 123 45 67',
    firstName: 'Max',
    lastName: 'Mustermann',
    company: 'Mustermann AG',
    position: null,
    source: null,
    score: 85,
    scoreDetails: null,
    persona: null,
    segment: null,
    budget: null,
    timeline: null,
    needs: null,
    qualified: false,
    qualifiedAt: null,
    linkedinUrl: null,
    socialInsights: null,
    lastContactAt: null,
    nextFollowUpAt: null,
    organizationId: 'org1',
    createdAt: new Date(Date.now() - 2 * 3600000),
    updatedAt: new Date(),
  },
];

const statusLabels: Record<LeadStatus, string> = {
  NEW: 'Neu',
  CONTACTED: 'Kontaktiert',
  QUALIFIED: 'Qualifiziert',
  PROPOSAL: 'Angebot',
  NEGOTIATION: 'Verhandlung',
  WON: 'Gewonnen',
  LOST: 'Verloren',
  INACTIVE: 'Inaktiv',
};

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'Neue Leads',
      value: '18',
      change: 23,
      trend: 'up' as const,
      icon: Users,
      iconColor: 'from-fuchsia-500 to-pink-500',
    },
    {
      title: 'Qualifiziert',
      value: '12',
      change: 8,
      trend: 'up' as const,
      icon: CheckCircle,
      iconColor: 'from-green-500 to-emerald-500',
    },
    {
      title: 'In Verhandlung',
      value: '5',
      change: 2,
      trend: 'up' as const,
      icon: TrendingUp,
      iconColor: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Gewonnen',
      value: '3',
      change: 1,
      trend: 'up' as const,
      icon: CheckCircle,
      iconColor: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Leads</h1>
        <p className="text-gray-600">
          Verwalten Sie Ihre Leads und verfolgen Sie den Verkaufsprozess
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Filters */}
      <GlassCard variant="default" padding="md">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Leads durchsuchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-300 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </GlassCard>

      {/* Leads List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Lead-Übersicht</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {mockLeads.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              <p className="text-sm">Keine Leads vorhanden</p>
            </div>
          ) : (
            mockLeads.map((lead) => (
              <div
                key={lead.id}
                className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-fuchsia-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900">
                        {lead.firstName} {lead.lastName}
                      </p>
                      <Badge variant="info" size="sm">
                        {statusLabels[lead.status]}
                      </Badge>
                      {lead.score && (
                        <Badge variant="fuchsia" size="sm">
                          Score: {lead.score}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{lead.company}</p>
                    <p className="text-sm text-gray-500">{lead.email}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDateTime(lead.createdAt)}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {lead.qualified && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

