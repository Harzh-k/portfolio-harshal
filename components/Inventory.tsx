'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Box, Cpu, Terminal, Globe, Zap, Database, Coffee, Leaf, GitBranch, Layers } from 'lucide-react'
import React from 'react'

export default function Inventory() {
  return (
    <section className="min-h-screen w-full bg-zinc-950 text-white py-20 px-4 flex flex-col items-center justify-center">
      
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-green-500" />
          <h2 className="text-2xl font-bold tracking-widest uppercase">
            Character Loadout <span className="text-green-500">_02</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: The Inventory Grid */}
          <div>
            <h3 className="text-zinc-500 font-mono text-sm mb-6 uppercase tracking-widest">Equipped Tech</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              <InventorySlot icon={<Coffee size={24} />} name="Java" level="Lvl 85" type="Language" color="text-red-400" />
              <InventorySlot icon={<Leaf size={24} />} name="Spring" level="Lvl 80" type="Framework" color="text-green-500" />
              <InventorySlot icon={<Code2 size={24} />} name="Python" level="Lvl 90" type="Language" color="text-yellow-400" />
              <InventorySlot icon={<Globe size={24} />} name="Next.js" level="Lvl 85" type="Framework" color="text-blue-400" />
              
              <InventorySlot icon={<Server size={24} />} name="Flask" level="Lvl 95" type="Backend" color="text-white" />
              <InventorySlot icon={<Box size={24} />} name="Docker" level="Lvl 80" type="DevOps" color="text-blue-500" />
              <InventorySlot icon={<Database size={24} />} name="MySQL" level="Lvl 88" type="Database" color="text-orange-400" />
              <InventorySlot icon={<Layers size={24} />} name="Redis" level="Lvl 70" type="Cache" color="text-red-500" />
              
              <InventorySlot icon={<GitBranch size={24} />} name="Git" level="Lvl 85" type="VCS" color="text-orange-600" />
              <InventorySlot icon={<Cpu size={24} />} name="Gemini" level="Lvl 92" type="AI" color="text-purple-400" />
              <InventorySlot icon={<Terminal size={24} />} name="Linux" level="Lvl 75" type="OS" color="text-green-400" />
              <InventorySlot icon={<Zap size={24} />} name="Tailwind" level="Lvl 90" type="Style" color="text-cyan-400" />
            </div>
          </div>

          {/* Right: Item Details / Stats Panel */}
          <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between h-full min-h-[400px]">
             
             {/* Background detail */}
             <div className="absolute top-4 right-4 text-zinc-700 font-mono text-xs">ID: HK-8088</div>

             <div>
               <h3 className="text-3xl font-black mb-2">Harshal Khilari</h3>
               <p className="text-green-400 font-mono text-sm mb-8">Full Stack Operator</p>
               
               <div className="space-y-6">
                 <StatBar label="Backend Engineering" value={95} color="bg-purple-500" />
                 <StatBar label="Frontend Design" value={85} color="bg-blue-500" />
                 <StatBar label="System Architecture" value={80} color="bg-yellow-500" />
                 <StatBar label="AI Integration" value={90} color="bg-red-500" />
               </div>
             </div>

             <div className="mt-12 pt-6 border-t border-zinc-800">
               <p className="text-zinc-400 text-sm leading-relaxed">
                 &quot;Specializes in building scalable SaaS applications using Python and Docker. Currently equipped with the latest AI models for maximum efficiency.&quot;
               </p>
             </div>

          </div>

        </div>
      </div>

    </section>
  )
}

function InventorySlot({ icon, name, level, type, color }: { icon: React.ReactNode, name: string, level: string, type: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.5)', backgroundColor: 'rgba(39, 39, 42, 1)' }}
      className="aspect-square rounded-lg border border-zinc-800 bg-zinc-900/50 cursor-pointer group relative flex flex-col items-center justify-center gap-2 transition-all duration-300"
    >
      {/* Icon */}
      <div className={`${color} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}>
        {icon}
      </div>
      
      {/* Name text below icon */}
      <div className="text-[10px] font-bold text-zinc-300 text-center tracking-wide px-1">
        {name}
      </div>
      
      {/* Hover Tooltip Info (Overlay with details) */}
      <div className="absolute inset-0 bg-zinc-900/95 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-zinc-700 p-1 z-10">
        <div className="text-xs font-bold text-white text-center leading-tight mb-1">{name}</div>
        <div className="text-[9px] text-zinc-400 uppercase tracking-tighter">{type}</div>
        <div className="text-[9px] text-green-400 font-mono mt-1">{level}</div>
      </div>
    </motion.div>
  )
}

function StatBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
        <span className="text-zinc-400">{label}</span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color}`} 
        />
      </div>
    </div>
  )
}