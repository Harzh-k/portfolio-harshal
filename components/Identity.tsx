'use client'

import { motion } from 'framer-motion'
import { Fingerprint, Scan, ShieldCheck } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'

export default function Identity() {
  return (
    <section className="w-full bg-zinc-950 text-white py-32 px-4 flex flex-col items-center justify-center relative border-t border-b border-zinc-900">
      
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Security Badge */}
        <div className="flex items-center gap-2 mb-8 text-green-500/50 border border-green-500/20 px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase">
          <Scan size={14} className="animate-pulse" />
          <span>Identity Verified</span>
        </div>

        {/* THE CRAZY NAME SCRAMBLER */}
        <div className="relative group cursor-default">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="relative text-5xl md:text-8xl font-black tracking-tighter text-center">
            <HackerText text="HARSHAL KHILARI" />
          </h2>
        </div>

        {/* Meta Data */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-12 text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Fingerprint size={16} className="text-purple-500" />
            <span>ID: HK-8088</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-blue-500" />
            <span>Access: Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span>Status: Active</span>
          </div>
        </div>

      </div>

    </section>
  )
}

// --- THE HACKER TEXT COMPONENT ---
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const HackerText = ({ text }: { text: string }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          const randomInputChar = text[Math.floor(Math.random() * text.length)];
          return Math.random() > 0.5 ? randomChar : randomInputChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplayText(text);
  };

  // Scramble on Mount (First Load)
  useEffect(() => {
    scramble();
    return () => stopScramble();
  }, []);

  return (
    <span 
      onMouseEnter={scramble} 
      className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
    >
      {displayText}
    </span>
  );
};