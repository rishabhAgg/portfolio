"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Database,
  Code2,
  Mail,
  Linkedin,
  CheckCircle2,
  Bot,
  FileText,
  Presentation,
  Globe,
  ChevronRight,
  Calendar,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 -top-48 -left-48 animate-float" />
        <div className="orb-2 top-1/3 -right-48 animate-float-delayed" />
        <div className="orb-3 bottom-0 left-1/3 animate-float" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white">
            Rishabh<span className="text-indigo-400">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Let&apos;s Talk <ArrowRight size={16} />
            </a>
          </div>
          <a
            href="#contact"
            className="md:hidden btn-primary text-sm py-2 px-4"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-slate-300">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 text-glow">
              I Build{" "}
              <span className="gradient-text">AI-Powered</span>
              <br />
              Products for Startups
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              6 years of backend expertise. Now helping startups integrate AI
              and automate complex workflows into{" "}
              <span className="text-white">one-click solutions</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                Start a Project <ArrowUpRight size={20} />
              </a>
              <a
                href="#work"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              <div className="relative">
                <div className="text-4xl font-bold text-white mb-1">6+</div>
                <div className="text-slate-500">Years Experience</div>
                <div className="absolute -inset-4 bg-indigo-500/10 rounded-xl blur-xl -z-10" />
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">AI</div>
                <div className="text-slate-500">Focused Development</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">IST</div>
                <div className="text-slate-500">India Timezone</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full border border-indigo-500/20 absolute -inset-12" />
              <div className="w-96 h-96 rounded-full border border-purple-500/10 absolute -inset-24" />
              <div className="w-64 h-64 glass rounded-3xl p-6 glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-sm text-slate-400 space-y-2">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">ai</span> ={" "}
                    <span className="text-green-400">&apos;integrated&apos;</span>;
                  </div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">workflow</span> ={" "}
                    <span className="text-green-400">&apos;automated&apos;</span>;
                  </div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">success</span> ={" "}
                    <span className="text-yellow-400">true</span>;
                  </div>
                  <div className="pt-2 text-indigo-400">
                    {"// Let's build →"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-indigo-400 text-sm font-medium mb-6">
                <Sparkles size={16} />
                SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How I Can Help You
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                From AI integration to backend architecture, I build solutions
                that scale with your business.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 - AI */}
              <motion.div variants={fadeInUp} className="group">
                <div className="h-full glass rounded-2xl p-8 card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25">
                      <Bot className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      AI Integration
                    </h3>
                    <p className="text-slate-400 mb-6">
                      RAG systems, LLM integration, and custom AI solutions that
                      make your product intelligent.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "ChatGPT & Claude APIs",
                        "RAG Systems",
                        "AI-Powered Features",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-indigo-400 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 - Automation */}
              <motion.div variants={fadeInUp} className="group">
                <div className="h-full glass rounded-2xl p-8 card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25">
                      <Zap className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Business Automation
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Turn hours of manual work into one-click processes.
                      Documents, emails, workflows.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Document Processing",
                        "Email Automation",
                        "Report Generation",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-amber-400 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 - Backend */}
              <motion.div variants={fadeInUp} className="group">
                <div className="h-full glass rounded-2xl p-8 card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                      <Database className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Backend Development
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Scalable APIs, database design, and architecture that
                      grows with your business.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Node.js & Ruby on Rails",
                        "API Development",
                        "Performance Optimization",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-emerald-400 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 4 - MVP */}
              <motion.div variants={fadeInUp} className="group">
                <div className="h-full glass rounded-2xl p-8 card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/25">
                      <Code2 className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      MVP Development
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Launch your startup idea with a solid technical
                      foundation. Fast, scalable, built right.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Full-Stack Development",
                        "Rapid Prototyping",
                        "Technical Consulting",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-violet-400 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 5 - PWA */}
              <motion.div variants={fadeInUp} className="group">
                <div className="h-full glass rounded-2xl p-8 card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-rose-500/25">
                      <Globe className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Progressive Web Apps
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Mobile-like experiences without the app store. Fast,
                      installable, works offline.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Offline Capabilities",
                        "Push Notifications",
                        "Native-like UX",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-rose-400 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div variants={fadeInUp} className="group">
                <div className="h-full rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2Mkgy NHYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                  <div className="relative h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Have a Project in Mind?
                    </h3>
                    <p className="text-indigo-100 mb-8">
                      Let&apos;s discuss how I can help bring your idea to life
                      with the power of AI.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors w-fit"
                    >
                      Get in Touch <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work/Case Studies Section */}
      <section id="work" className="relative py-32 px-6">
        <div className="orb-2 top-1/2 -left-48" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-indigo-400 text-sm font-medium mb-6">
                <FileText size={16} />
                CASE STUDIES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Problems I&apos;ve Solved
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Real solutions that saved time, reduced errors, and transformed
                business operations.
              </p>
            </motion.div>

            {/* Case Studies */}
            <div className="space-y-8">
              {/* Case Study 1 */}
              <motion.div variants={fadeInUp}>
                <div className="glass rounded-3xl p-8 md:p-12 card-hover relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                  <div className="relative flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-20 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
                        <Presentation className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-amber-400 text-sm font-semibold tracking-wider mb-3">
                        AUTOMATION
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        One-Click Presentation Generator
                      </h3>
                      <p className="text-slate-400 mb-8 text-lg">
                        A business was spending hours manually creating
                        presentations from database data, leading to errors and
                        wasted time.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Problem
                          </div>
                          <div className="text-white font-semibold">
                            Hours of manual work
                          </div>
                        </div>
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Solution
                          </div>
                          <div className="text-white font-semibold">
                            Automated generation
                          </div>
                        </div>
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Result
                          </div>
                          <div className="text-green-400 font-semibold">
                            One click, zero errors
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "Template Engine",
                          "Database Integration",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Case Study 2 */}
              <motion.div variants={fadeInUp}>
                <div className="glass rounded-3xl p-8 md:p-12 card-hover relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                  <div className="relative flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-20 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                        <FileText className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-indigo-400 text-sm font-semibold tracking-wider mb-3">
                        AUTOMATION
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Intelligent Email & PDF Processing
                      </h3>
                      <p className="text-slate-400 mb-8 text-lg">
                        Manual processing of emails and PDF attachments was
                        creating a massive bottleneck in operations.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Problem
                          </div>
                          <div className="text-white font-semibold">
                            Manual data entry
                          </div>
                        </div>
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Solution
                          </div>
                          <div className="text-white font-semibold">
                            Auto-extraction pipeline
                          </div>
                        </div>
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Result
                          </div>
                          <div className="text-green-400 font-semibold">
                            100% automated
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "PDF Processing",
                          "Email Integration",
                          "Database",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Case Study 3 */}
              <motion.div variants={fadeInUp}>
                <div className="glass rounded-3xl p-8 md:p-12 card-hover relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                  <div className="relative flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-20 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                        <Bot className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-violet-400 text-sm font-semibold tracking-wider mb-3">
                        AI DEVELOPMENT
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        AI-Powered Knowledge Base (RAG)
                      </h3>
                      <p className="text-slate-400 mb-8 text-lg">
                        Users struggled to find information buried in large
                        databases. They needed a way to ask questions in plain
                        English.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Problem
                          </div>
                          <div className="text-white font-semibold">
                            Data inaccessible
                          </div>
                        </div>
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Solution
                          </div>
                          <div className="text-white font-semibold">
                            RAG-powered Q&A
                          </div>
                        </div>
                        <div className="glass rounded-xl p-5">
                          <div className="text-slate-500 text-sm mb-1">
                            Result
                          </div>
                          <div className="text-green-400 font-semibold">
                            Natural language queries
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {["AI/LLM", "RAG", "Vector Database", "Node.js"].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Column */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-indigo-400 text-sm font-medium mb-6">
                <Sparkles size={16} />
                ABOUT ME
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Building the Future,
                <br />
                <span className="gradient-text">One API at a Time</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>
                  I&apos;m Rishabh, a Senior Software Developer with 6 years of
                  experience building robust backend systems. My journey has
                  taken me through E-commerce, SaaS, and multiple startups.
                </p>
                <p>
                  Now, I&apos;m focused on what I believe is the most exciting
                  opportunity in tech:{" "}
                  <span className="text-white font-medium">
                    helping businesses leverage AI
                  </span>
                  . I&apos;ve seen firsthand how the right automation can
                  transform operations.
                </p>
                <p>
                  My approach is simple: understand the problem deeply, build
                  solutions that actually work, and communicate clearly
                  throughout the process.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <h3 className="text-white font-semibold mb-4">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Node.js",
                    "Ruby on Rails",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "OpenAI",
                    "LangChain",
                    "React",
                    "AWS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass rounded-lg text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Why Work With Me */}
            <motion.div variants={fadeInUp}>
              <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Why Work With Me?
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "No Technical Interviews",
                        desc: "I prove my skills through work, not whiteboard puzzles.",
                      },
                      {
                        title: "Clear Communication",
                        desc: "Regular updates, no surprises. You'll always know where things stand.",
                      },
                      {
                        title: "Startup Mindset",
                        desc: "I understand the need for speed without sacrificing quality.",
                      },
                      {
                        title: "Full Ownership",
                        desc: "I don't just write code—I care about the outcome.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-indigo-500/20">
                          <CheckCircle2
                            className="text-indigo-400"
                            size={24}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-50" />
            <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                  Whether you need AI integration, automation, or a full product
                  build, let&apos;s discuss how I can help.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all hover:scale-105"
                >
                  <Calendar size={22} />
                  Schedule a Free Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="orb-1 bottom-0 right-0" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-indigo-400 text-sm font-medium mb-6">
                <Mail size={16} />
                CONTACT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Have a project in mind? I&apos;d love to hear about it. Send me
                a message or book a call.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <div className="glass rounded-3xl p-8 md:p-10">
                  <h3 className="text-xl font-bold text-white mb-8">
                    Send a Message
                  </h3>
                  <form
                    action="https://formspree.io/f/xkonkyge"
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Tell Me About Your Project
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
                        placeholder="I'm looking for help with..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg"
                    >
                      Send Message <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Book a Call & Connect */}
              <motion.div variants={fadeInUp} className="space-y-8">
                {/* Book a Call */}
                <div className="glass rounded-3xl p-8 md:p-10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Prefer to Talk?
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Schedule a free 30-minute call to discuss your project and
                    see if we&apos;re a good fit.
                  </p>
                  <a
                    href="https://cal.com/rishabh-aggarwal-trzihi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Calendar size={18} />
                    Book a Call on Cal.com
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Connect */}
                <div className="glass rounded-3xl p-8 md:p-10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:aggarwalrishabh105@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                        <Mail size={22} className="text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500">Email</div>
                        <div className="text-white font-medium">
                          aggarwalrishabh105@gmail.com
                        </div>
                      </div>
                      <ChevronRight
                        size={20}
                        className="text-slate-600 group-hover:text-indigo-400 transition-colors"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rishabh105/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Linkedin size={22} className="text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500">LinkedIn</div>
                        <div className="text-white font-medium">
                          Connect with me
                        </div>
                      </div>
                      <ChevronRight
                        size={20}
                        className="text-slate-600 group-hover:text-indigo-400 transition-colors"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500">
            © 2026 Rishabh Aggarwal. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/rishabh105/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aggarwalrishabh105@gmail.com"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
