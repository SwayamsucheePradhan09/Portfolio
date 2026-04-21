'use client'
import { motion } from 'framer-motion'
import ScrambleText from './ScrambleText'

const stats = [
  { label: 'Projects', value: '4+' },
  { label: 'Tech Stack', value: '20+' },
  { label: 'Team Collabs', value: '3+' },
]

export default function About() {
  return (
    <motion.section 
      id="about" 
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
        className="flex items-center gap-4 mb-16"
      >
        <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] breathe-glow">
          <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
          <ScrambleText text="PROFILE" className="text-blue-500 mr-4" />
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4 mt-2 hidden sm:block"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed pl-4 md:pl-8 border-l border-blue-500/30 ml-4 md:ml-6 relative glow-line"
      >
        <p className="mb-6 hover:text-white transition-colors duration-500">
          Computer Science and Engineering student with strong foundations in programming and software development. Proficient in Python, Java, and web technologies, with hands-on experience building responsive applications and working with APIs, databases, and cloud platforms. 
        </p>
        <p className="hover:text-white transition-colors duration-500">
          <span className="text-white font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Strong analytical thinker, quick learner, and collaborative team player </span> 
          seeking a Software Engineering Internship to apply skills in real-world projects.
        </p>
      </motion.div>

      {/* Animated stats row */}
      <motion.div 
        className="grid grid-cols-3 gap-4 mt-12 ml-4 md:ml-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            className="bg-[#0a0a0a] border border-slate-800 rounded-xl p-4 md:p-6 text-center group hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500"
          >
            <motion.div 
              className="text-2xl md:text-4xl font-bold text-blue-500 font-mono mb-1 group-hover:scale-110 transition-transform duration-300"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.1 * idx }}
            >
              {stat.value}
            </motion.div>
            <div className="text-xs md:text-sm font-mono text-slate-500 tracking-widest uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}