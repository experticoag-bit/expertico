'use client';

import { motion } from 'framer-motion';
import { Plus, Phone, Mail, UserPlus, FileText, Calendar } from 'lucide-react';
import { GlassCard } from '@/components/shared';

const actions = [
  { icon: Phone, label: 'Anruf starten', color: 'from-fuchsia-500 to-pink-500' },
  { icon: Mail, label: 'E-Mail schreiben', color: 'from-orange-500 to-amber-500' },
  { icon: UserPlus, label: 'Lead hinzufügen', color: 'from-cyan-500 to-blue-500' },
  { icon: FileText, label: 'Beleg hochladen', color: 'from-green-500 to-emerald-500' },
  { icon: Calendar, label: 'Termin planen', color: 'from-purple-500 to-violet-500' },
];

export function QuickActions() {
  return (
    <GlassCard variant="default" padding="md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Schnellaktionen</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {actions.map((action, i) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} p-[2px]`}>
              <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                <action.icon className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors text-center">
              {action.label}
            </span>
          </motion.button>
        ))}
      </div>
    </GlassCard>
  );
}

export default QuickActions;

