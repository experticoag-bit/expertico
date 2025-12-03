'use client';

import { formatDateTime, formatDuration } from '@/lib/utils';
import { Call, CallDirection, CallStatus, Sentiment } from '@prisma/client';
import { PhoneIncoming, PhoneOutgoing, Play, FileText, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/shared';

interface CallLogProps {
  calls: Call[];
  onSelect: (call: Call) => void;
}

const statusLabels: Record<CallStatus, string> = {
  PENDING: 'Wartend',
  RINGING: 'Klingelt',
  IN_PROGRESS: 'Läuft',
  COMPLETED: 'Abgeschlossen',
  MISSED: 'Verpasst',
  FAILED: 'Fehlgeschlagen',
  VOICEMAIL: 'Voicemail',
};

const sentimentLabels: Record<Sentiment, string> = {
  POSITIVE: 'Positiv',
  NEUTRAL: 'Neutral',
  NEGATIVE: 'Negativ',
  URGENT: 'Dringend',
};

export function CallLog({ calls, onSelect }: CallLogProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Anrufprotokoll</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {calls.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <p className="text-sm">Keine Anrufe vorhanden</p>
          </div>
        ) : (
          calls.map((call) => (
            <div
              key={call.id}
              onClick={() => onSelect(call)}
              className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Direction Icon */}
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                  call.direction === 'INBOUND'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-blue-100 text-blue-600'
                )}>
                  {call.direction === 'INBOUND' ? (
                    <PhoneIncoming className="w-5 h-5" />
                  ) : (
                    <PhoneOutgoing className="w-5 h-5" />
                  )}
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 truncate">
                      {call.callerName || call.callerNumber}
                    </p>
                    {call.actionRequired && (
                      <Badge variant="error" size="sm" dot>
                        Aktion erforderlich
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {formatDateTime(call.createdAt)}
                    </span>
                    {call.duration && (
                      <span>{formatDuration(call.duration)}</span>
                    )}
                    {call.sentiment && (
                      <Badge variant="info" size="sm">
                        {sentimentLabels[call.sentiment]}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2">
                  {call.recordingUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Play recording
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                  {call.transcript && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Show transcript
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              
              {/* Summary */}
              {call.summary && (
                <p className="mt-2 text-sm text-gray-600 line-clamp-2 pl-14">
                  {call.summary}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CallLog;

