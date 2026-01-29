import { motion } from 'framer-motion';

interface ShapeProps {
  className?: string;
  delay?: number;
}

export function FloatingCircle({ className = '', delay = 0 }: ShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute rounded-full bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 animate-float ${className}`}
    />
  );
}

export function FloatingSquare({ className = '', delay = 0 }: ShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 animate-float-slow ${className}`}
    />
  );
}

export function FloatingRing({ className = '', delay = 0 }: ShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute rounded-full border-4 border-primary/10 dark:border-primary/20 animate-float-slower ${className}`}
    />
  );
}

export function DottedPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="grid grid-cols-6 gap-3">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: i * 0.02 }}
            className="w-1.5 h-1.5 rounded-full bg-primary/30 dark:bg-primary/40"
          />
        ))}
      </div>
    </div>
  );
}

export function GradientBlob({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-30 dark:opacity-40 ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
        opacity: 0.15,
      }}
    />
  );
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingCircle className="w-64 h-64 -top-20 -right-20" delay={0.2} />
      <FloatingSquare className="w-32 h-32 top-1/4 left-10 rotate-12" delay={0.4} />
      <FloatingRing className="w-48 h-48 bottom-20 right-1/4" delay={0.6} />
      <DottedPattern className="top-40 right-20 opacity-50" />
      <GradientBlob className="w-96 h-96 -bottom-48 -left-48" />
    </div>
  );
}
