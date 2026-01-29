import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { profile } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CounterProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function AnimatedCounter({ value, suffix, label, delay = 0 }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { ref, isInView } = useScrollAnimation(0.5);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, count, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="text-4xl md:text-5xl font-display font-bold text-primary">
          {rounded}
        </motion.span>
        <span className="text-2xl md:text-3xl font-display font-bold text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-text-secondary text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export function About() {
  const { ref: textRef, isInView: textInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/5 dark:from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container-wide section-padding relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="A glimpse into my journey and what drives me"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Summary Text */}
          <div ref={textRef} className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Accent line */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full hidden lg:block" />
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                {profile.summary}
              </p>
            </motion.div>

            {/* Domain tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                Industry Domains
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.domains.map((domain, index) => (
                  <motion.span
                    key={domain}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={textInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/5 dark:bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/10 dark:border-primary/20 hover:border-primary/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {domain}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Leadership qualities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                Leadership & Impact
              </h3>
              <ul className="space-y-3">
                {profile.leadership.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={textInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={0.2 + index * 0.1}
                  />
                </motion.div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 bg-gradient-to-br from-primary to-primary-light dark:from-primary-dark dark:to-primary rounded-2xl p-6 text-white shadow-soft-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{profile.education.degree}</h4>
                  <p className="text-white/70 text-sm">{profile.education.institution}</p>
                  <p className="text-white/50 text-sm mt-1">
                    {profile.education.location} • {profile.education.year}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
