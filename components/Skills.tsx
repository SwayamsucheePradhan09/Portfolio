'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrambleText from './ScrambleText'
import TiltCard from './TiltCard'

const skillCategories = [
  {
    title: "Languages",
    icon: "⟨/⟩",
    skills: ["Java", "JavaScript", "C++", "HTML", "CSS", "Python"]
  },
  {
    title: "Frameworks",
    icon: "⚡",
    skills: ["ReactJS", "NodeJS", "Next.js", "FastAPI", "Flask", "Tailwind CSS"]
  },
  {
    title: "AI & ML",
    icon: "🧠",
    skills: ["Scikit-learn", "NumPy", "Pandas", "RAG Pipelines", "Pydantic"]
  },
  {
    title: "Databases",
    icon: "⛁",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    title: "Cloud & Tools",
    icon: "☁",
    skills: ["AWS (EC2, S3)", "Agile", "Docker", "Postman", "Git", "GitHub"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1 }
}

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
          <ScrambleText text="AREAS OF" /> <ScrambleText text="EXPERTISE" className="text-blue-500" />
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4 mt-2 hidden sm:block"></div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 md:ml-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((cat, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <TiltCard className="h-full">
              <div className="animated-border h-full">
                <div className="bg-[#0a0a0a] border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 relative group h-full">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider font-sans border-b border-slate-800 pb-3 flex-1 group-hover:border-blue-500/30 transition-colors duration-500">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skill tags with stagger animation */}
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {cat.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        variants={tagVariants}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'rgba(59, 130, 246, 0.2)',
                          borderColor: 'rgba(59, 130, 246, 0.5)',
                          y: -2
                        }}
                        className="px-4 py-2 bg-blue-900/10 text-slate-300 text-sm font-mono rounded cursor-default border border-slate-800 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}