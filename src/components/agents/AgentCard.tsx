'use client';

import { motion } from 'framer-motion';
import { 
  Phone, Mail, TrendingUp, Calculator, Users, Calendar,
  MessageSquare, FileText, Bot, Power, MoreVertical, Activity
} from 'lucide-react';
import { Agent, AgentStatus, AgentType } from '@prisma/client';
import { agentTypeLabels, agentStatusLabels, agentStatusColors, cn } from '@/lib/utils';
import { GlassCard, Badge } from '@/components/shared';

const agentIcons: Record<AgentType, typeof Phone> = {
  REZEPTION: Phone,
  EMAIL: Mail,
  MARKETING: TrendingUp,
  BUCHHALTUNG: Calculator,
  BACKOFFICE: FileText,
  LEAD_QUALIFIER: Users,
  TERMINIERUNG: Calendar,
  SUPPORT: MessageSquare,
  FOLLOW_UP: Mail,
  KUNDENZUFRIEDENHEIT: Users,
  WEBSITE: FileText,
  LOCAL_MARKETING: TrendingUp,
  WERBE: TrendingUp,
  SALES_SUPPORT: Users,
  TALENTSCOUT: Users,
  DATENBROKER: FileText,
  SEGMENT_PERSONA: Users,
  SCORING: TrendingUp,
  LEAD_AKTIVIERUNG: Users,
  STARTUP: Bot,
  BUSINESSPLAN: FileText,
  TECHNOLOGIE: Bot,
  AGENT_OF_AGENTS: Bot,
};

const statusColors: Record<AgentStatus, string> = {
  ACTIVE: 'bg-green-500',
  INACTIVE: 'bg-gray-400',
  PAUSED: 'bg-yellow-500',
  ERROR: 'bg-red-500',
  LEARNING: 'bg-blue-500',
};

const statusBadgeVariants: Record<AgentStatus, 'success' | 'warning' | 'error' | 'info' | 'default'> = {
  ACTIVE: 'success',
  INACTIVE: 'default',
  PAUSED: 'warning',
  ERROR: 'error',
  LEARNING: 'info',
};

interface AgentCardProps {
  agent: Agent;
  onToggle?: (id: string) => void;
  onSettings?: (id: string) => void;
}

export function AgentCard({ agent, onToggle, onSettings }: AgentCardProps) {
  const Icon = agentIcons[agent.type] || Bot;
  const statusColor = statusColors[agent.status];
  const badgeVariant = statusBadgeVariants[agent.status];

  return (
    <GlassCard variant="default" padding="md" hover={true}>
      <div className="flex items-start justify-between mb-4">
        {/* Icon & Status */}
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-fuchsia-600" />
          </div>
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${statusColor} border-2 border-white`} />
        </div>

        {/* Menu */}
        <button
          onClick={() => onSettings?.(agent.id)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{agent.name}</h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{agent.description || agentTypeLabels[agent.type]}</p>

      {/* Stats */}
      <div className="flex flex-wrap gap-3 mb-4">
        {agent.totalCalls > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Phone className="w-3.5 h-3.5" />
            <span>{agent.totalCalls} Anrufe</span>
          </div>
        )}
        {agent.totalEmails > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Mail className="w-3.5 h-3.5" />
            <span>{agent.totalEmails} E-Mails</span>
          </div>
        )}
        {agent.successRate !== null && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Activity className="w-3.5 h-3.5" />
            <span>{Math.round(agent.successRate * 100)}% Erfolg</span>
          </div>
        )}
      </div>

      {/* Status Badge & Toggle */}
      <div className="flex items-center justify-between gap-3">
        <Badge variant={badgeVariant} size="sm" dot>
          {agentStatusLabels[agent.status]}
        </Badge>

        <button
          onClick={() => onToggle?.(agent.id)}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
            agent.status === 'ACTIVE'
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          <Power className={cn(
            'w-4 h-4',
            agent.status === 'ACTIVE' && 'text-green-600'
          )} />
          {agent.status === 'ACTIVE' ? 'Aktiv' : 'Aktivieren'}
        </button>
      </div>
    </GlassCard>
  );
}

export default AgentCard;

