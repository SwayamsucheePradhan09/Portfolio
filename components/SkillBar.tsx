"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (

    <div className="mb-6">

      <p className="mb-2">{name}</p>

      <div className="w-full bg-gray-200 rounded-lg h-4">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="bg-indigo-500 h-4 rounded-lg"
        />

      </div>

    </div>

  )
}