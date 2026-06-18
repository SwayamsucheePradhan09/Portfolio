'use client'
import { motion, Variants } from 'framer-motion'
import ScrambleText from './ScrambleText'
import TiltCard from './TiltCard'
import certificationsData from '../data/certifications'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 }
  }
}

export default function Certifications() {
  return (
    <motion.section 
      id="certifications" 
      className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/80"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] breathe-glow">
          <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
          <ScrambleText text="CERTIFICATIONS" className="text-blue-500 mr-4" />
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4 mt-2 hidden sm:block"></div>
      </motion.div>

      {/* Grid of Certifications */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certificationsData.map((cert, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="bg-[#0a0a0a]/50 border border-slate-800/50 rounded-xl p-6 hover:border-blue-500/30 hover:bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-700 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">
                      {cert.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full border border-slate-800/80 bg-slate-900/30 text-[10px] font-mono text-slate-500 tracking-wider text-right max-w-[150px] truncate" title={cert.issuer}>
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wide mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-400 font-sans text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 bg-blue-900/10 text-blue-300 text-[10px] font-mono rounded border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 hover:text-blue-400 transition-colors group/link w-fit"
                  >
                    VIEW CERTIFICATE PDF
                    <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
