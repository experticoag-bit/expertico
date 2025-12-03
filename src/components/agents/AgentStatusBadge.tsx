'use client';

import { AgentStatus } from '@prisma/client';
import { Badge } from '@/components/shared';
import { agentStatusLabels } from '@/lib/utils';

interface AgentStatusBadgeProps {
  status: AgentStatus;
  size?: 'sm' | 'md';
  showDot?: boolean;
}

const statusVariants: Record<AgentStatus, 'success' | 'warning' | 'error' | 'info' | 'default'> = {
  ACTIVE: 'success',
  INACTIVE: 'default',
  PAUSED: 'warning',
  ERROR: 'error',
  LEARNING: 'info',
};

export function AgentStatusBadge({ status, size = 'md', showDot = true }: AgentStatusBadgeProps) {
  return (
    <Badge variant={statusVariants[status]} size={size} dot={showDot}>
      {agentStatusLabels[status]}
    </Badge>
  );
}

export default AgentStatusBadge;

