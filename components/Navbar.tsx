'use client'

import { motion } from 'framer-motion'
import { Home, User, Briefcase, Code, Mail } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-2xl shadow-purple-500/20">
        
        <DockItem href="#hero" icon={<Home size={20} />} label="Base" />
        <DockItem href="#inventory" icon={<Code size={20} />} label="Loadout" />
        <DockItem href="#experience" icon={<User size={20} />} label="History" />
        <DockItem href="#projects" icon={<Briefcase size={20} />} label="Missions" />
        <DockItem href="#contact" icon={<Mail size={20} />} label="Uplink" />

      </div>
    </div>
  )
}

function DockItem({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer group"
      >
        {icon}
        
        {/* Tooltip Label */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bg-black border border-zinc-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest whitespace-nowrap pointer-events-none"
          >
            {label}
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
}