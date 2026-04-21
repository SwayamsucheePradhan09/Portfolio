'use client'
import { useState, useEffect } from 'react'

const SECCTIONS = ['home', 'about', 'projects', 'skills', 'education', 'contact']

export default function ScrollNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const wHeight = window.innerHeight
      
      const current = SECCTIONS.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= wHeight / 2 && rect.bottom >= wHeight / 2
      })
      if (current) setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 items-center hidden xl:flex">
      <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-slate-500 mb-4 whitespace-nowrap rotate-90 origin-right -mr-28 opacity-50">
        SCROLL TO NAVIGATE
      </div>
      <div className="flex flex-col gap-4 relative">
        <div className="absolute top-0 bottom-0 left-[3.5px] w-[1px] bg-slate-800 -z-10"></div>
        {SECCTIONS.map((id) => (
          <a 
            key={id} 
            href={`#${id}`}
            className="group flex flex-row items-center justify-end relative h-4 w-4 outline-none"
            aria-label={`Scroll to ${id}`}
          >
            <div className={`absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono text-xs tracking-widest ${active === id ? 'text-blue-500 opacity-100' : 'text-slate-400'}`}>
              {id.toUpperCase()}
            </div>
            <div className={`w-2 h-2 rounded-full border transition-all duration-300 ${active === id ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'bg-[#050505] border-slate-600 group-hover:border-slate-400'}`} />
          </a>
        ))}
      </div>
    </div>
  )
}
