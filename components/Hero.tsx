'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import WavyText from './WavyText'
import MagneticButton from './MagneticButton'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      <div className="absolute left-6 top-1/2 opacity-20 font-mono text-sm tracking-widest text-blue-500 pointer-events-none hidden md:block">
        X:{mousePosition.x} Y:{mousePosition.y}
      </div>

      <div className="flex flex-col items-center z-10 w-full px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-xs md:text-sm tracking-[0.2em] font-mono mb-8 whitespace-nowrap bg-blue-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.1)] breathe-glow"
        >
          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse" />
          AVAILABLE FOR NEW OPPORTUNITIES
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center w-full"
        >
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tracking-tighter uppercase font-sans flex flex-wrap justify-center md:block">
            <WavyText text="SWAYAMSUCHEE" className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]" delay={0.2} />
            <br className="md:hidden" />
            <WavyText text="PRADHAN" className="text-slate-100 md:ml-4" delay={0.6} />
          </h1>
          <h2 className="text-xl md:text-3xl mt-6 font-mono font-medium tracking-wide flex items-center justify-center flex-wrap gap-2">
            <TypeAnimation
              sequence={[
                'Software',
                2000,
                'Full-Stack',
                2000,
                'Front-end',
                2000,
                'Creative',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="shimmer-text drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]"
              repeat={Infinity}
            />
            <span className="text-slate-300">Engineer Intern</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative w-64 h-80 sm:w-72 sm:h-96 animate-float"
        >
          <div className="absolute inset-0 border border-blue-900/40 opacity-50 z-0 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
          </div>
          <div className="absolute inset-2 bg-[#0a0a0a] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition duration-700 group">
             <img 
               src="/swayam.jpeg" 
               alt="Swayamsuchee Pradhan" 
               className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=SP&background=0a0a0a&color=3b82f6&size=400';
               }}
             />
          </div>
          {/* Scan line effect on hover */}
          <div className="absolute inset-2 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4"
        >
          <MagneticButton 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-mono font-medium tracking-wide w-full sm:w-auto px-8 py-4 rounded transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            CONTACT ME
          </MagneticButton>
          <MagneticButton 
            href="/resume.pdf" 
            target="_blank" 
            className="bg-transparent border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-mono w-full sm:w-auto font-medium tracking-wide px-8 py-4 rounded transition-all flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            DOWNLOAD PDF
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-slate-600 uppercase">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-blue-500/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}