'use client';

import { formatDateTime } from '@/lib/utils';
import { AgentLog, LogType } from '@prisma/client';
import { Info, AlertTriangle, XCircle, CheckCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const logIcons = {
  INFO: Info,
  WARNING: AlertTriangle,
  ERROR: XCircle,
  SUCCESS: CheckCircle,
  ACTION: Zap,
};

const logColors = {
  INFO: 'text-blue-600 bg-blue-50',
  WARNING: 'text-amber-600 bg-amber-50',
  ERROR: 'text-red-600 bg-red-50',
  SUCCESS: 'text-green-600 bg-green-50',
  ACTION: 'text-fuchsia-600 bg-fuchsia-50',
};

interface AgentActivityFeedProps {
  logs: AgentLog[];
  limit?: number;
}

export function AgentActivityFeed({ logs, limit = 10 }: AgentActivityFeedProps) {
  const displayLogs = logs.slice(0, limit);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Aktivitätsprotokoll</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {displayLogs.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <p className="text-sm">Keine Aktivitäten vorhanden</p>
          </div>
        ) : (
          displayLogs.map((log) => {
            const Icon = logIcons[log.type];
            return (
              <div
                key={log.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                    logColors[log.type]
                  )}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{log.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDateTime(log.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default AgentActivityFeed;

