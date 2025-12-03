'use client';

import { useState } from 'react';
import { Search, Filter, Mail, MailOpen, Reply, Archive } from 'lucide-react';
import { GlassCard, Badge } from '@/components/shared';
import { StatsCard } from '@/components/dashboard';
import { Email, EmailStatus, EmailCategory } from '@prisma/client';
import { formatDateTime, truncate } from '@/lib/utils';

// Mock data
const mockEmails: Email[] = [
  {
    id: '1',
    externalId: null,
    direction: 'INBOUND' as const,
    status: 'READ' as EmailStatus,
    from: 'kunde@example.com',
    to: ['info@expertico.ch'],
    cc: [],
    subject: 'Anfrage zu Ihrem Produkt',
    bodyText: 'Guten Tag, ich interessiere mich für...',
    bodyHtml: null,
    attachments: null,
    summary: 'Kunde fragt nach Produktinformationen',
    category: 'INQUIRY' as EmailCategory,
    priority: 'NORMAL' as const,
    sentiment: 'NEUTRAL' as const,
    suggestedReply: null,
    draftReply: null,
    draftApproved: false,
    replySentAt: null,
    receivedAt: new Date(Date.now() - 2 * 3600000),
    organizationId: 'org1',
    agentId: null,
    leadId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const categoryLabels: Record<EmailCategory, string> = {
  INQUIRY: 'Anfrage',
  SUPPORT: 'Support',
  SALES: 'Verkauf',
  INVOICE: 'Rechnung',
  NEWSLETTER: 'Newsletter',
  PERSONAL: 'Persönlich',
  OTHER: 'Sonstiges',
};

export default function EmailsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'E-Mails heute',
      value: '234',
      change: 12,
      trend: 'up' as const,
      icon: Mail,
      iconColor: 'from-fuchsia-500 to-pink-500',
    },
    {
      title: 'Gelesen',
      value: '189',
      change: 8,
      trend: 'up' as const,
      icon: MailOpen,
      iconColor: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Beantwortet',
      value: '156',
      change: 15,
      trend: 'up' as const,
      icon: Reply,
      iconColor: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Archiviert',
      value: '45',
      change: 5,
      trend: 'up' as const,
      icon: Archive,
      iconColor: 'from-gray-500 to-gray-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">E-Mails</h1>
        <p className="text-gray-600">
          Verwalten Sie alle eingehenden und ausgehenden E-Mails
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
              placeholder="E-Mails durchsuchen..."
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

      {/* Email List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">E-Mail-Übersicht</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {mockEmails.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              <p className="text-sm">Keine E-Mails vorhanden</p>
            </div>
          ) : (
            mockEmails.map((email) => (
              <div
                key={email.id}
                className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-fuchsia-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-gray-900">{email.from}</p>
                      {email.category && (
                        <Badge variant="info" size="sm">
                          {categoryLabels[email.category]}
                        </Badge>
                      )}
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">{email.subject}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {truncate(email.bodyText || '', 100)}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {formatDateTime(email.receivedAt)}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {email.suggestedReply && (
                      <button className="px-3 py-1.5 bg-fuchsia-100 text-fuchsia-700 rounded-lg text-sm font-medium hover:bg-fuchsia-200 transition-colors">
                        Antwort vorbereitet
                      </button>
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

