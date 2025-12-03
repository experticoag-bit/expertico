'use client';

import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlassCard } from '@/components/shared';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down';
  description?: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'from-fuchsia-500 to-orange-500',
  trend,
  description,
}: StatsCardProps) {
  return (
    <GlassCard variant="default" padding="md" hover={false}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            {change !== undefined && (
              <span
                className={cn(
                  'text-sm font-medium flex items-center gap-1',
                  trend === 'up' ? 'text-green-600' : 'text-red-600'
                )}
              >
                {trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {Math.abs(change)}%
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColor} p-[2px]`}>
          <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export default StatsCard;

