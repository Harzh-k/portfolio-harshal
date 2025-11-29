'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import React from 'react'

// Define the interface for history items
interface HistoryItem {
  type: 'work' | 'edu';
  role: string;
  company: string;
  date: string;
  location: string;
  desc: string;
  skills: string[];
}

export default function Experience() {
  const history: HistoryItem[] = [
    {
      type: 'work',
      role: 'Lead Full Stack Engineer (ProfitOS)',
      company: 'Portfolio Project',
      date: '2024 - Present',
      location: 'Remote',
      desc: 'Architected a production-ready financial SaaS. Solved complex concurrency issues with Celery/Redis, implemented AI extraction pipelines with Gemini, and deployed a microservices architecture using Docker.',
      skills: ['Python', 'Flask', 'Next.js', 'Docker', 'System Design']
    },
    {
      type: 'edu',
      role: 'Masters of Computer Applications (MCA)',
      company: 'Sinhgad Institute of Business Administration & Research', 
      date: '2023 - 2025',
      location: 'Pune, MH',
      desc: 'Specializing in advanced software development and application architecture. Maintained a strong academic record (CGPA: 7.42/10).',
      skills: ['Java', 'Spring Boot', 'Advanced DBMS', 'Software Engineering']
    },
    {
      type: 'edu',
      role: 'B.Sc. Computer Science',
      company: 'Indira College of Commerce and Science', 
      date: '2020 - 2023',
      location: 'Pune, MH',
      desc: 'Graduated with distinction (CGPA: 8.68/10). Built strong foundations in computer science principles, data structures, and web development.',
      skills: ['Data Structures', 'Web Technologies', 'Database Management']
    },
    {
      type: 'edu',
      role: 'Higher Secondary (HSC)',
      company: 'G.R.P. Sabnis College', 
      date: '2018 - 2020',
      location: 'Narayangaon, MH',
      desc: 'Science stream foundation. Developed early analytical and problem-solving skills through Mathematics and Physics.',
      skills: ['Mathematics', 'Physics', 'Logic']
    }
  ]

  return (
    <section className="min-h-screen w-full bg-zinc-950 text-white py-24 px-4 flex flex-col items-center">
      
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px w-12 bg-blue-500" />
          <h2 className="text-2xl font-bold tracking-widest uppercase">
            Quest History <span className="text-blue-500">_03</span>
          </h2>
        </div>

        <div className="relative space-y-12">
          {/* The Timeline Line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

          {history.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: HistoryItem, index: number }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      
      {/* 1. The Connector Dot (Center) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-zinc-950 bg-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

      {/* 2. The Content Card */}
      <div className="ml-20 md:ml-0 w-full md:w-1/2">
        <div className={`p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-blue-500/30 transition-colors group ${!isEven ? 'md:mr-12' : 'md:ml-12'}`}>
          
          {/* Header: Role & Icon */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 text-sm text-zinc-400 font-mono mt-1">
                <span>{item.company}</span>
              </div>
            </div>
            <div className="p-2 rounded bg-zinc-800/50 text-blue-400">
              {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
            </div>
          </div>

          {/* Meta: Date & Location */}
          <div className="flex flex-wrap gap-4 text-xs text-zinc-500 uppercase tracking-wider mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              {item.date}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {item.desc}
          </p>

          {/* Loot / Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill: string) => (
              <span key={skill} className="px-2 py-1 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
      
      {/* 3. Empty Space for the other side (Desktop only) */}
      <div className="hidden md:block w-1/2" />

    </motion.div>
  )
}