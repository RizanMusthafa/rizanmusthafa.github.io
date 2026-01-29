import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile, Project, Experience as ExperienceType } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  delay: number;
}

function ProjectCard({ project, isExpanded, onToggle, delay }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-background rounded-xl p-4 border border-border/50 hover:border-primary/20 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-semibold text-text-primary">{project.name}</h4>
            <p className="text-sm text-text-secondary">{project.description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 space-y-3">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface TimelineItemProps {
  experience: ExperienceType;
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 md:left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-primary/10 transform md:-translate-x-1/2" />
      )}

      <div className={`flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Timeline dot */}
        <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-4 h-4 rounded-full bg-primary shadow-glow-primary"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
        >
          <div className="bg-surface rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-soft-lg transition-shadow duration-300">
            {/* Company Header */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-sm">
                  {experience.company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{experience.company}</h3>
                  <p className="text-sm text-primary font-medium">{experience.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Projects
              </h4>
              {experience.projects.map((project, projectIndex) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  isExpanded={expandedProject === projectIndex}
                  onToggle={() => setExpandedProject(expandedProject === projectIndex ? null : projectIndex)}
                  delay={0.2 + projectIndex * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spacer for alternating layout */}
        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-wide section-padding relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and the projects I've worked on"
        />

        {/* Timeline */}
        <div className="relative space-y-12 md:space-y-16">
          {profile.experience.map((exp, index) => (
            <TimelineItem
              key={exp.company}
              experience={exp}
              index={index}
              isLast={index === profile.experience.length - 1}
            />
          ))}
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 rounded-full text-primary font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>Continuously growing and learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
