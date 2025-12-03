'use client';

import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { AgentCard } from '@/components/agents';
import { GlassCard } from '@/components/shared';

// Mock data - später durch API ersetzen
const mockAgents = [
  {
    id: '1',
    type: 'REZEPTION' as const,
    name: 'Rezeptions-Agent',
    description: 'Beantwortet Anrufe 24/7, vereinbart Termine und leitet weiter',
    status: 'ACTIVE' as const,
    config: {},
    voiceId: null,
    voiceConfig: null,
    totalCalls: 47,
    totalEmails: 0,
    totalTasks: 12,
    avgResponseTime: 2.5,
    successRate: 0.95,
    organizationId: 'org1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    type: 'EMAIL' as const,
    name: 'E-Mail-Assistent',
    description: 'Kategorisiert und beantwortet E-Mails automatisch',
    status: 'ACTIVE' as const,
    config: {},
    voiceId: null,
    voiceConfig: null,
    totalCalls: 0,
    totalEmails: 234,
    totalTasks: 45,
    avgResponseTime: 1.2,
    successRate: 0.88,
    organizationId: 'org1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    type: 'MARKETING' as const,
    name: 'Marketing-Agent',
    description: 'Erstellt Content für Social Media und Blog',
    status: 'INACTIVE' as const,
    config: {},
    voiceId: null,
    voiceConfig: null,
    totalCalls: 0,
    totalEmails: 0,
    totalTasks: 8,
    avgResponseTime: null,
    successRate: null,
    organizationId: 'org1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function AgentsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = async (agentId: string) => {
    // TODO: API call
    console.log('Toggle agent:', agentId);
  };

  const handleSettings = (agentId: string) => {
    // TODO: Navigate to settings
    console.log('Settings for agent:', agentId);
  };

  const filteredAgents = mockAgents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">KI-Agenten</h1>
          <p className="text-gray-600">
            Verwalten Sie Ihre KI-Agenten und aktivieren Sie neue Funktionen
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
          Neuer Agent
        </button>
      </div>

      {/* Filters & Search */}
      <GlassCard variant="default" padding="md">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Agenten durchsuchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-300 transition-all"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-fuchsia-100 text-fuchsia-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-fuchsia-100 text-fuchsia-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Gesamt</p>
          <p className="text-2xl font-bold text-gray-900">{mockAgents.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Aktiv</p>
          <p className="text-2xl font-bold text-green-600">
            {mockAgents.filter(a => a.status === 'ACTIVE').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Inaktiv</p>
          <p className="text-2xl font-bold text-gray-600">
            {mockAgents.filter(a => a.status === 'INACTIVE').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Verfügbar</p>
          <p className="text-2xl font-bold text-fuchsia-600">30+</p>
        </div>
      </div>

      {/* Agents Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onToggle={handleToggle}
              onSettings={handleSettings}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onToggle={handleToggle}
              onSettings={handleSettings}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredAgents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Keine Agenten gefunden</p>
          <button className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
            Ersten Agenten aktivieren
          </button>
        </div>
      )}
    </div>
  );
}

