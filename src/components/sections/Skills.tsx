import { motion } from 'framer-motion';
import { profile, SkillCategory } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

/* Main tech logos – React, React Native, Flutter */
const ReactLogo = ({ className = 'w-12 h-12' }: { className?: string }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="0.5" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const ReactNativeLogo = ({ className = 'w-12 h-12' }: { className?: string }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="0.5" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const FlutterLogo = ({ className = 'w-12 h-12' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="xMidYMid meet">
    <path
      fill="currentColor"
      d="M14.314 0L2.3 12 6 15.7 21.684 .012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z"
    />
  </svg>
);

const mainTechs = [
  { name: 'React Native', Logo: ReactNativeLogo, color: 'from-cyan-500/20 to-blue-500/20', borderColor: 'border-cyan-500/30' },
  { name: 'React', Logo: ReactLogo, color: 'from-sky-500/20 to-blue-500/20', borderColor: 'border-sky-500/30' },
  { name: 'Flutter', Logo: FlutterLogo, color: 'from-blue-500/20 to-indigo-500/20', borderColor: 'border-blue-500/30' },
];

const categoryInfo: Record<keyof SkillCategory, { title: string; icon: JSX.Element; color: string }> = {
  frontend: {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  backend: {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'from-green-500/20 to-emerald-500/20',
  },
  database: {
    title: 'Database',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: 'from-purple-500/20 to-violet-500/20',
  },
  devops: {
    title: 'DevOps & Cloud',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'from-orange-500/20 to-amber-500/20',
  },
  tools: {
    title: 'Tools',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-slate-500/20 to-gray-500/20',
  },
  testing: {
    title: 'Testing',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-teal-500/20 to-cyan-500/20',
  },
};

interface SkillBadgeProps {
  name: string;
  index: number;
}

function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative px-4 py-2.5 bg-surface rounded-xl shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300 cursor-default"
    >
      <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
        {name}
      </span>
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

interface SkillCategoryComponentProps {
  category: keyof SkillCategory;
  index: number;
}

function SkillCategoryComponent({ category, index }: SkillCategoryComponentProps) {
  const skills = profile.skills[category];
  const info = categoryInfo[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface rounded-2xl p-6 shadow-soft border border-border/50"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-primary`}>
          {info.icon}
        </div>
        <h3 className="font-semibold text-text-primary">{info.title}</h3>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <SkillBadge key={skill.name} name={skill.name} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const categories = Object.keys(profile.skills) as Array<keyof SkillCategory>;

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/[0.02] to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-wide section-padding relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        {/* Main techs – React Native, React, Flutter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
        >
          {mainTechs.map(({ name, Logo, color, borderColor }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`group flex items-center gap-4 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl bg-surface border ${borderColor} shadow-soft hover:shadow-glow-primary transition-all duration-300`}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-primary`}>
                <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <SkillCategoryComponent key={category} category={category} index={index} />
          ))}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary max-w-2xl mx-auto">
            With expertise spanning the full stack, I specialize in building{' '}
            <span className="text-primary font-medium">React</span> and{' '}
            <span className="text-primary font-medium">React Native</span> applications,
            backed by robust{' '}
            <span className="text-primary font-medium">Node.js</span> services and
            modern CI/CD pipelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
