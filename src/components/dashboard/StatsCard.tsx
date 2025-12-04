'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down';
  description?: string;
  delay?: number;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'from-fuchsia-500 to-orange-500',
  trend,
  description,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 140, damping: 18 }}
      className="h-full"
    >
      <div className="relative flex h-full flex-col justify-between border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-md rounded-none">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {title}
            </p>
            <div className="mt-2 flex items-baseline gap-3">
              <h3 className="text-3xl font-bold text-gray-900 tabular-nums">{value}</h3>
              {typeof change === 'number' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                  className={cn(
                    'inline-flex items-center gap-1 border px-2 py-0.5 text-xs font-semibold',
                    trend === 'up'
                      ? 'border-emerald-100 bg-emerald-50 text-emerald-700'
                      : 'border-rose-100 bg-rose-50 text-rose-700'
                  )}
                >
                  {trend === 'up' ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {Math.abs(change)}%
                </motion.span>
              )}
            </div>
            {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
          </div>
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center border border-gray-200 text-gray-700 rounded-none bg-gray-50',
              iconColor && 'bg-gradient-to-br text-white',
              iconColor
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 h-1 w-full bg-gray-100" />
      </div>
    </motion.div>
  );
}

export default StatsCard;
