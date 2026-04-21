'use client'
import { motion } from 'framer-motion'
import ScrambleText from './ScrambleText'
import TiltCard from './TiltCard'
import projectsData from '../data/projects'

const statusColors: Record<string, { bg: string; text: string; glow: string; dot: string }> = {
  'Completed': { bg: 'bg-emerald-900/20', text: 'text-emerald-400', glow: 'shadow-[0_0_8px_rgba(52,211,153,0.3)]', dot: 'bg-emerald-400' },
  'In Development': { bg: 'bg-amber-900/20', text: 'text-amber-400', glow: 'shadow-[0_0_8px_rgba(251,191,36,0.3)]', dot: 'bg-amber-400 animate-pulse' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.98 },
  show: { 
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 }
  }
}

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/80"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] breathe-glow">
          <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
          <ScrambleText text="FEATURED" /> <ScrambleText text="PROJECTS" className="text-blue-500" />
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4 mt-2 hidden sm:block"></div>
      </motion.div>

      {/* Project count indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-3 mb-16 ml-4 md:ml-8"
      >
        <span className="font-mono text-xs tracking-widest text-slate-500 uppercase">
          {projectsData.length} Projects
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
        <span className="font-mono text-xs tracking-widest text-slate-500 uppercase">
          Building the future
        </span>
      </motion.div>

      <motion.div 
        className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-24 glow-line"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project, idx) => {
          const status = project.status ? statusColors[project.status] : null

          return (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot with pulse ring */}
              <div className="absolute -left-[37.5px] md:-left-[53.5px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] pulse-ring">
              </div>
              
              {/* Highlight badge */}
              {project.highlight && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-[11px] font-mono tracking-widest uppercase mb-4 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
                >
                  <svg className="w-3 h-3 animate-[spin_8s_linear_infinite]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.highlight}
                </motion.div>
              )}

              {/* Title row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                  {project.title.split('-')[0]} 
                  <span className="text-slate-400 font-normal">({project.title.split('-')[1]?.trim() || ''})</span>
                </h3>
                <div className="flex items-center gap-3 self-start lg:self-auto flex-shrink-0">
                  {status && project.status && (
                    <div className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border border-transparent ${status.bg} ${status.text} ${status.glow}`}>
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
                        {project.status}
                      </span>
                    </div>
                  )}
                  <div className="px-4 py-1.5 rounded-full border border-slate-700 text-xs font-mono text-slate-400 uppercase tracking-wider bg-slate-800/30">
                    {project.date}
                  </div>
                </div>
              </div>
              
              {/* Role + Team info */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="text-blue-500 font-mono text-sm md:text-base tracking-widest uppercase">
                  {project.role}
                </div>
                {project.teamSize && (
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono tracking-wider">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Team of {project.teamSize}
                  </div>
                )}
              </div>

              {/* Description items with stagger */}
              <ul className="space-y-4 text-slate-300 font-sans leading-relaxed mb-8">
                {project.description.map((desc, i) => (
                  <motion.li 
                    key={i} 
                    className="relative pl-6 hover:text-slate-100 transition-colors duration-300"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <motion.span 
                      className="absolute left-0 top-2.5 border-l-2 border-b-2 border-blue-500 w-2 h-2 -rotate-45"
                      whileHover={{ scale: 1.5, borderColor: '#60a5fa' }}
                    />
                    {desc}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom cards with TiltCard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TiltCard>
                  <div className="bg-[#0a0a0a] border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 h-full">
                    <div className="flex items-center gap-3 mb-4 text-white font-mono text-sm tracking-widest uppercase">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <motion.span 
                          key={i}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.03 * i }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-blue-900/10 text-blue-100 text-xs font-mono rounded border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                <TiltCard>
                  <div className="bg-[#0a0a0a] border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col justify-center h-full">
                     <div className="flex items-center gap-3 mb-4 text-white font-mono text-sm tracking-widest uppercase">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      Integration
                    </div>
                    {project.link ? (
                      <a href={project.link} target="_blank" className="animated-underline text-sm font-sans font-medium text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 w-fit pb-1">
                        View on GitHub Repo
                        <motion.svg 
                          className="w-4 h-4 ml-1"
                          whileHover={{ x: 3, y: -3 }}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </a>
                    ) : (
                      <div className="space-y-2">
                        <span className="text-sm font-sans text-slate-400 flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                          Private Repository
                        </span>
                        <span className="text-xs font-mono text-slate-600">Team project • Code under NDA</span>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}