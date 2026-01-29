import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] dark:via-primary/[0.05] to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 dark:from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />

      <div className="container-narrow section-padding relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you"
        />

        <div className="max-w-2xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-3xl p-8 md:p-10 shadow-soft-lg border border-border/50 text-center"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 dark:ring-primary/20"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                Ready to build something great?
              </h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-8"
            >
              <Button
                variant="secondary"
                size="lg"
                href={`mailto:${profile.email}`}
                className="shadow-glow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send me an Email
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-surface px-4 text-sm text-text-secondary">
                  or connect with me on
                </span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20 text-[#0A66C2] dark:text-[#5BA3E0] rounded-xl hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {/* Email Card */}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 bg-surface rounded-2xl shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">Email</p>
                <p className="text-text-primary font-medium">{profile.email}</p>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-4 p-5 bg-surface rounded-2xl shadow-soft border border-border/50"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">Location</p>
                <p className="text-text-primary font-medium">{profile.location} • {profile.availability}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
