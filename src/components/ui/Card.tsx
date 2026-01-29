import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`bg-surface rounded-2xl shadow-soft border border-border/50 transition-shadow duration-300 ${
        hover ? 'hover:shadow-soft-lg' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`glass rounded-2xl shadow-soft border border-white/20 transition-shadow duration-300 ${
        hover ? 'hover:shadow-soft-lg' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
