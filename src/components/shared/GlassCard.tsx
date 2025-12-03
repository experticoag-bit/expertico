'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: 'default' | 'glass' | 'gradient' | 'bordered';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants = {
  default: 'bg-white border border-gray-100 shadow-sm',
  glass: 'bg-white/85 backdrop-blur-xl border border-white/20 shadow-lg',
  gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm',
  bordered: 'bg-white border-2 border-gray-200 shadow-none',
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ 
    className, 
    variant = 'default', 
    hover = true,
    padding = 'md',
    children, 
    ...props 
  }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={hover ? { 
          y: -4, 
          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
          borderColor: 'rgba(233, 30, 140, 0.1)'
        } : undefined}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'rounded-2xl transition-all duration-300',
          variants[variant],
          paddings[padding],
          hover && 'cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;

