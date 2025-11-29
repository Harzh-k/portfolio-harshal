'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Plane, Terminal, MapPin } from 'lucide-react'
import React, { useState } from 'react'

export default function Hero() {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-zinc-950 text-white selection:bg-purple-500/50">
      
      {/* 1. The Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* 2. The Moving Scanline */}
      <div className="scanline-overlay" />

      {/* 3. The Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      {/* 4. The Content */}
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
        
        {/* "Player 1 Ready" Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/50 bg-purple-900/20 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-lg shadow-purple-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Player 1 Ready
        </motion.div>

        {/* 5. THE INTERACTIVE NAME (HARSHAL -> HarZ on Hover) */}
        <div 
          className="relative h-24 md:h-40 w-full flex flex-col items-center justify-center mb-2 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.h1 
                key="gamer"
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.2 }}
                className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 absolute top-0"
              >
                HarZ<span className="text-white">.</span>
              </motion.h1>
            ) : (
              <motion.h1 
                key="real"
                initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                transition={{ duration: 0.2 }}
                className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none absolute top-0"
              >
                HARSHAL<span className="text-purple-500">.</span>
              </motion.h1>
            )}
          </AnimatePresence>
          
          {/* Ghost text to hold the height open so layout doesn't jump */}
          <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none opacity-0 pointer-events-none select-none">
            HARSHAL.
          </h1>
        </div>
        
        {/* 6. STATIC SURNAME */}
        <div className="mb-12">
           <p className="text-lg md:text-3xl font-mono font-bold text-zinc-500 tracking-[0.5em] uppercase">
             KHILARI
           </p>
        </div>

        {/* 7. STATS HUD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
        >
          <StatItem icon={<Terminal size={20} />} label="Class" value="Builder" color="text-blue-400" />
          <StatItem icon={<Gamepad2 size={20} />} label="Hobby" value="Gamer" color="text-purple-400" />
          <StatItem icon={<Plane size={20} />} label="Mode" value="Explorer" color="text-green-400" />
          <StatItem icon={<MapPin size={20} />} label="Base" value="Pune, IN" color="text-red-400" />
        </motion.div>

      </div>
    </section>
  )
}

// --- HELPER COMPONENT: Stats Card ---
function StatItem({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-300">
      <div className={`${color}`}>{icon}</div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-gray-500">{label}</span>
        <span className="text-base font-bold text-white tracking-wide">{value}</span>
      </div>
    </div>
  )
}