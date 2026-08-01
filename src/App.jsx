import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ArrowUp } from 'lucide-react'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Track mouse coordinates for background glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Show Back-to-Top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen text-slate-100 bg-[#030712] relative overflow-hidden select-none">
      
      {/* 1. Dynamic Cursor Glowing Aura */}
      <div className="pointer-events-none fixed inset-0 z-30 mouse-glow-bg"></div>

      {/* 2. Floating Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Violet Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[140px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        {/* Soft Indigo Blob */}
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse" style={{ animationDuration: '6s' }}></div>
        {/* Soft Fuchsia Blob */}
        <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] rounded-full bg-fuchsia-600/5 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 font-sans">
        <Navbar />
        
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40 pt-28 pb-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>

      {/* Premium Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/30 border border-violet-500/20 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  )
}

export default App
