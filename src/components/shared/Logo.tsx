'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  href?: string;
}

const sizes = {
  sm: { icon: 32, text: 'text-lg' },
  md: { icon: 40, text: 'text-xl' },
  lg: { icon: 48, text: 'text-2xl' },
};

export function Logo({ size = 'md', showText = true, href = '/' }: LogoProps) {
  const { icon, text } = sizes[size];

  const content = (
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Logo Icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#E91E8C] via-[#FF6B35] to-[#00D4FF]"
        style={{ width: icon, height: icon }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
        
        {/* E Letter */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-2/3 h-2/3"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h12M4 12h10M4 18h12" />
          <circle cx="18" cy="12" r="3" fill="white" stroke="none" />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-tight ${text}`}>
          <span className="text-gray-900">Exper</span>
          <span className="bg-gradient-to-r from-[#E91E8C] to-[#FF6B35] bg-clip-text text-transparent">tico</span>
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export default Logo;

