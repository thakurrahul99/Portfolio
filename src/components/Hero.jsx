import React, { useState, useEffect } from 'react'
import { Github, Twitter, Instagram, Linkedin, Mail, ArrowUpRight, Download } from 'lucide-react'

function Hero() {
  const words = ["MERN Stack Developer", "React Specialist", "Creative UI Designer", "Frontend Engineer"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing Loop
  useEffect(() => {
    let timer
    const fullWord = words[currentWordIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1))
      }, 40)
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1))
      }, 85)
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 1600)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex])

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/thakurrahul99",
      label: "Github",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://www.instagram.com/mr.rahul_thakurr?igsh=MXdnM3ZqZmsxdWl2Mw==",
      label: "Instagram",
    },
    {
      icon: <Download size={18} />,
      href: "/assets/resume/Resume.pdf",
      label: "Download Resume",
      download: "Rahul_Singh_Resume.pdf",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/rahul-singh-rajput99/",
      label: "Linkedin",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-[17px] h-[17px] fill-current"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      ),
      href: "https://wa.me/917300548523",
      label: "WhatsApp",
    },
  ];

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative pt-8 md:pt-16">
      
      {/* 1. Floating Social Sidebar on Left (Large Screens only) */}
      <div className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center space-y-6 after:content-[''] after:w-[1.5px] after:h-24 after:bg-slate-800 after:mt-4">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-violet-500 hover:-translate-y-1 transition-all duration-300"
            title={link.label}
            download={link.download}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Centered Premium Content Layout */}
      <div className="flex flex-col justify-center items-center text-center space-y-6 max-w-3xl mx-auto w-full pt-6">
        
        {/* Welcome Tag */}
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3 animate-pulse">
            ✨ Available for Work
          </span>
          <span className="block text-slate-400 font-medium text-xs sm:text-sm tracking-widest uppercase mb-1">
            Namaste, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Rahul Singh
            </span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="h-8 flex justify-center items-center">
          <span className="text-base sm:text-lg font-bold text-violet-400 tracking-wide font-mono">
            &gt; {currentText}
          </span>
          <span className="w-1.5 h-5 bg-violet-500 ms-1 cursor-blink"></span>
        </div>

        {/* Tagline Description */}
        <p className="text-slate-450 text-xs sm:text-sm max-w-2xl leading-relaxed">
           Building modern, responsive, and high-performing <span className="text-violet-400 font-semibold">MERN stack applications</span> with interactive animations and fully responsive layouts! Building clean, functional, and visually stunning digital spaces.
        </p>

        {/* Social Icons for Mobile / Tablet Screens */}
        <div className="flex xl:hidden flex-wrap justify-center gap-4 pt-2">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/5 bg-slate-900/40 text-slate-400 hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
              download={link.download}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-violet-600/35 hover:shadow-violet-600/45 transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
          >
            <Mail size={14} className="mr-2" />
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            View Portfolio
            <ArrowUpRight size={14} className="ml-2 text-violet-400" />
          </a>
        </div>
      </div>

      {/* Hero Visual Avatar (Commented Out per request) */}
      {/*
      <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-full opacity-35 blur-[35px] pulse-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full p-[2.5px] shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#030712]">
              <img 
                src="/assets/images/portrait-2.webp" 
                alt="Rahul Singh" 
                className="w-full h-full object-cover scale-105"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/images/portrait.jpg'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-[-10%] sm:bottom-[-5%] left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-60">
        <span className="text-[9px] tracking-widest text-slate-500 uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-[1.5px] border-slate-500 flex justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
