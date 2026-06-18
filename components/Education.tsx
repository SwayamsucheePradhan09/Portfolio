'use client'
import { motion, Variants } from 'framer-motion'
import ScrambleText from './ScrambleText'
import TiltCard from './TiltCard'

const eduData = [
  {
    year: "2023 - 2027",
    degree: "Bachelor of Technology in Computer Science",
    school: "Siksha 'O' Anusandhan University (ITER), Bhubaneswar",
    score: "CGPA - 7.9",
    icon: "🎓"
  },
  {
    year: "2021",
    degree: "Class - XII (Senior Secondary)",
    school: "Tetrahedron Women's Higher Secondary School, Cuttack",
    score: "Percentage - 81.6%",
    icon: "🏫"
  },
  {
    year: "2019",
    degree: "Class - X (Secondary)",
    school: "Sri Aurobindo Integral Education and Research Centre Matrubhumi, Dera, Angul",
    score: "Percentage - 82.3%",
    icon: "📝"
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30, scale: 0.98 },
  show: { 
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 }
  }
}

export default function Education() {
  return (
    <motion.section 
      id="education" 
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
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10v7a7 7 0 0014 0v-7" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
          <ScrambleText text="EDUCATION" className="text-blue-500 mr-4" />
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4 mt-2 hidden sm:block"></div>
      </motion.div>

      <motion.div 
        className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 glow-line"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {eduData.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            className="relative group"
          >
            {/* Timeline dot with pulse ring */}
            <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] pulse-ring">
            </div>
            
            <TiltCard>
              <div className="bg-[#0a0a0a]/50 border border-slate-800/50 rounded-xl p-6 hover:border-blue-500/30 hover:bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-3 group-hover:text-blue-100 transition-colors duration-300">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                    {item.degree}
                  </h3>
                  <div className="text-blue-500 font-mono text-sm tracking-widest uppercase">
                    {item.year}
                  </div>
                </div>
                
                <p className="text-slate-400 font-sans tracking-wide mb-4 text-base md:text-lg ml-10 group-hover:text-slate-300 transition-colors duration-300">
                  {item.school}
                </p>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-1.5 bg-[#0a0a0a] border border-blue-500/30 rounded text-slate-300 font-mono text-sm shadow-[0_0_10px_rgba(59,130,246,0.1)] ml-10 cursor-default hover:border-blue-500/60 hover:text-blue-200 transition-all duration-300"
                >
                  {item.score}
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
