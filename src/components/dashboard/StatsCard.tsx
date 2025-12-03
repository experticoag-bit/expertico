'use client';

import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
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
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-orange-500/0 to-cyan-500/0 group-hover:from-fuchsia-500/5 group-hover:via-orange-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="relative flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              {title}
            </p>
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-3xl font-black text-gray-900 tabular-nums">
                {value}
              </h3>
              {change !== undefined && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.2, type: 'spring' }}
                  className={cn(
                    'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold',
                    trend === 'up' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  )}
                >
                  {trend === 'up' ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {Math.abs(change)}%
                </motion.span>
              )}
            </div>
            {description && (
              <p className="text-xs font-medium text-gray-500 mt-1">
                {description}
              </p>
            )}
          </div>
          
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={cn(
              'relative w-14 h-14 rounded-2xl bg-gradient-to-br p-[2px] shadow-lg',
              iconColor
            )}
          >
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 transition-all">
              <Icon className="w-7 h-7 text-gray-700 group-hover:text-fuchsia-600 transition-colors" />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
          </motion.div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-orange-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default StatsCard;
