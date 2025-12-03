'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Power, Loader2 } from 'lucide-react';
import { AgentStatus } from '@prisma/client';
import { cn } from '@/lib/utils';

interface AgentToggleProps {
  status: AgentStatus;
  onToggle: () => Promise<void> | void;
  disabled?: boolean;
}

export function AgentToggle({ status, onToggle, disabled }: AgentToggleProps) {
  const [loading, setLoading] = useState(false);
  const isActive = status === 'ACTIVE';

  const handleToggle = async () => {
    if (disabled || loading) return;
    
    setLoading(true);
    try {
      await onToggle();
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      onClick={handleToggle}
      disabled={disabled || loading}
      className={cn(
        'relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
        isActive
          ? 'bg-green-100 text-green-700 hover:bg-green-200'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
        (disabled || loading) && 'opacity-50 cursor-not-allowed'
      )}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Wird verarbeitet...</span>
        </>
      ) : (
        <>
          <Power className={cn(
            'w-4 h-4 transition-transform',
            isActive && 'text-green-600'
          )} />
          <span>{isActive ? 'Aktiv' : 'Aktivieren'}</span>
        </>
      )}
    </motion.button>
  );
}

export default AgentToggle;

