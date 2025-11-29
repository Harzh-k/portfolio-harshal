'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Check, Copy } from 'lucide-react'
import React, { useState } from 'react'

export default function Contact() {
  return (
    <section className="w-full bg-zinc-950 text-white py-24 px-4 flex flex-col items-center relative overflow-hidden">
      
      {/* Background Grid Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,1))] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="max-w-4xl w-full relative z-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">COLLABORATE?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Currently open for freelance projects and full-time opportunities. 
            Initialize a connection request below.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          
          {/* Copy Email Button */}
          <CopyEmailButton email="harshalkhilarii@gmail.com" />

          <ContactButton 
            href="https://www.linkedin.com/in/harshalkh" 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            color="hover:bg-blue-600"
          />
          <ContactButton 
            href="https://github.com/Harzh-k" 
            icon={<Github size={24} />} 
            label="GitHub" 
            color="hover:bg-zinc-700"
          />
        </div>

        <div className="mt-24 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-mono uppercase tracking-widest">
          <div>© 2025 Harshal Khilari</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>System Status: Online</span>
            <span className="text-green-500">●</span>
          </div>
        </div>

      </div>
    </section>
  )
}

function ContactButton({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold tracking-wide transition-all duration-300 ${color} hover:text-white hover:border-transparent shadow-lg`}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  )
}

// New Component specifically for copying email
function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold tracking-wide transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-transparent shadow-lg`}
    >
      {copied ? <Check size={24} /> : <Mail size={24} />}
      <span>{copied ? "Copied!" : "Copy Email"}</span>
    </motion.button>
  )
}