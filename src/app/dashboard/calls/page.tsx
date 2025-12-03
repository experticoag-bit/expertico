'use client';

import { useState } from 'react';
import { Search, Filter, Phone, PhoneIncoming, PhoneOutgoing } from 'lucide-react';
import { CallLog } from '@/components/calls';
import { GlassCard } from '@/components/shared';
import { StatsCard } from '@/components/dashboard';
import { Call, CallDirection, CallStatus } from '@prisma/client';

// Mock data
const mockCalls: Call[] = [
  {
    id: '1',
    twilioSid: null,
    direction: 'INBOUND' as CallDirection,
    status: 'COMPLETED' as CallStatus,
    callerNumber: '+41 79 123 45 67',
    callerName: 'Max Mustermann',
    startedAt: new Date(Date.now() - 5 * 60000),
    endedAt: new Date(Date.now() - 2 * 60000),
    duration: 180,
    recordingUrl: null,
    transcript: 'Guten Tag, ich hätte gerne einen Termin...',
    summary: 'Kunde möchte einen Termin vereinbaren für nächste Woche',
    sentiment: 'POSITIVE' as const,
    intent: null,
    actionRequired: true,
    appointmentDate: null,
    notes: null,
    organizationId: 'org1',
    agentId: null,
    leadId: null,
    createdAt: new Date(Date.now() - 5 * 60000),
    updatedAt: new Date(),
  },
];

export default function CallsPage() {
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'Anrufe heute',
      value: '47',
      change: 8,
      trend: 'up' as const,
      icon: Phone,
      iconColor: 'from-fuchsia-500 to-pink-500',
    },
    {
      title: 'Eingehend',
      value: '32',
      change: 5,
      trend: 'up' as const,
      icon: PhoneIncoming,
      iconColor: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Ausgehend',
      value: '15',
      change: 3,
      trend: 'up' as const,
      icon: PhoneOutgoing,
      iconColor: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Durchschnitt',
      value: '2:34',
      change: -12,
      trend: 'down' as const,
      icon: Phone,
      iconColor: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Anrufe</h1>
        <p className="text-gray-600">
          Verwalten Sie alle eingehenden und ausgehenden Anrufe
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
              placeholder="Anrufe durchsuchen..."
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

      {/* Call Log */}
      <CallLog
        calls={mockCalls}
        onSelect={(call) => setSelectedCall(call)}
      />

      {/* Call Detail Modal (TODO) */}
      {selectedCall && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Anruf-Details</h2>
            <pre className="text-sm">{JSON.stringify(selectedCall, null, 2)}</pre>
            <button
              onClick={() => setSelectedCall(null)}
              className="mt-4 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Schliessen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

