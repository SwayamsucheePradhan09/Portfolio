"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-50"
    >
      <h1 className="text-xl font-bold">
        Swayamsuchee
      </h1>

      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  )
}