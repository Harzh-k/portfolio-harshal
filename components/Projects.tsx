'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Shield, Cpu, Database, Activity, Coffee, Leaf, Globe, Layout, MessageSquare, Users, FileText, GitBranch } from 'lucide-react'
import React from 'react'

// Project Data Interface
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  tech: { icon: React.ReactNode; label: string }[];
  status: string;
  color: string; // For the accent color (green, blue, etc.)
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "01",
      title: "ProfitOS",
      subtitle: "AI Financial Operating System",
      description: "A comprehensive SaaS platform for small businesses. It uses Gemini AI to scan bills instantly and generates professional invoices. Features a real-time Profit & Loss dashboard.",
      link: "https://bills.harshalbuilds.com",
      status: "System Online",
      color: "text-green-400",
      tech: [
        { icon: <Cpu size={14} />, label: "Python / Flask" },
        { icon: <Database size={14} />, label: "MySQL / Redis" },
        { icon: <Shield size={14} />, label: "Docker" },
        { icon: <Activity size={14} />, label: "Gemini AI" }
      ]
    },
    {
      id: "02",
      title: "ChatStream",
      subtitle: "Real-Time Messaging Engine",
      description: "Bidirectional communication platform using WebSockets for instant message delivery without page refreshes.",
      link: "https://github.com/Harzh-k/ChatStream", 
      status: "Deployed",
      color: "text-blue-400",
      tech: [
        { icon: <Coffee size={14} />, label: "Java" },
        { icon: <Leaf size={14} />, label: "Spring Boot" },
        { icon: <MessageSquare size={14} />, label: "WebSockets" }
      ]
    },
    {
      id: "03",
      title: "PayMaster",
      subtitle: "Payroll Management System",
      description: "Automated HR platform for managing employee payroll, leave requests, and salary records with a full Admin panel.",
      link: "https://github.com/Harzh-k/PayMaster", 
      status: "Archived",
      color: "text-purple-400",
      tech: [
        { icon: <Cpu size={14} />, label: "Python" },
        { icon: <Globe size={14} />, label: "Django" },
        { icon: <Database size={14} />, label: "MySQL" }
      ]
    },
    {
      id: "04",
      title: "MediBook",
      subtitle: "Hospital Appointment System",
      description: "A web-based booking system for managing doctor schedules and patient appointments with CRUD operations.",
      link: "https://github.com/Harzh-k/MediBook", 
      status: "Archived",
      color: "text-red-400",
      tech: [
        { icon: <Coffee size={14} />, label: "Java / JSP" },
        { icon: <Database size={14} />, label: "MySQL" },
        { icon: <FileText size={14} />, label: "Servlets" },
        { icon: <Layout size={14} />, label: "HTML / CSS" }
      ]
    }
  ]

  const mainProject = projects[0];
  const repoProjects = projects.slice(1);

  return (
    <section className="min-h-screen w-full bg-zinc-950 text-white py-24 px-4 relative flex flex-col items-center">
      
      <div className="max-w-5xl w-full">
        
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px w-12 bg-purple-500" />
          <h2 className="text-2xl font-bold tracking-widest uppercase">
            Mission Logs <span className="text-purple-500">_ALL</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* 1. MAIN PROJECT (Big Card - Single Column) */}
          <MainProjectCard project={mainProject} />

          {/* Divider Label */}
          <div className="flex items-center gap-4 mt-8">
             <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Archived Repositories</span>
             <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* 2. REPO GRID (Small Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repoProjects.map((project, index) => (
              <RepoCard key={project.id} project={project} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// --- LARGE CARD (For ProfitOS) ---
function MainProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl hover:border-purple-500/50 transition-all duration-500 group relative"
    >
       {/* Scanline */}
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-scan pointer-events-none z-0" />

      {/* Content takes full width (Previously only the Left side) */}
      <div className="p-8 md:p-12 relative z-10">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.color.replace('text-', 'bg-')}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${project.color.replace('text-', 'bg-')}`}></span>
            </span>
            <span className={`${project.color} text-xs font-mono tracking-[0.2em] uppercase`}>{project.status}</span>
          </div>

          <h3 className="text-4xl font-black text-white mb-2 tracking-tight">{project.title}</h3>
          <p className="text-zinc-500 font-mono text-sm mb-6 tracking-wide">{project.subtitle}</p>

          <p className="text-gray-400 leading-relaxed mb-10 text-lg">{project.description}</p>
          
          {/* --- REMOVED: Screenshot Placeholder and Visual Section --- 
             The entire right column and the screenshot div are gone.
          */}
          

          {/* Footer: Tech Stack and Link */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 pt-6 border-t border-zinc-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.tech.map((t, i) => (
                    <TechItem key={i} icon={t.icon} text={t.label} />
                ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg w-fit">
                <span>Launch System</span>
                <ExternalLink size={18} />
            </a>
          </div>


        </div>
    </motion.div>
  )
}

// --- SMALL CARD (For Other Repos) ---
function RepoCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-white group-hover:bg-zinc-700 transition-colors">
          <GitBranch size={20} />
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
      
      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{project.title}</h4>
      <p className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-wide">{project.status}</p>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
            {t.label}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function TechItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 text-gray-300 hover:border-zinc-700 hover:text-white transition-colors">
      {icon}
      <span className="font-medium text-sm">{text}</span>
    </div>
  )
}