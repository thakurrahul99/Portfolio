import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false)
        setMobileOpen(false) // Close mobile menu if open
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <div 
        className="fixed left-0 w-full z-50 px-4 transition-all duration-300 ease-in-out"
        style={{
          top: visible ? '16px' : '-100px'
        }}
      >
        <nav className="max-w-3xl mx-auto px-6 py-3 rounded-full border border-white/5 bg-slate-950/40 backdrop-blur-lg flex items-center justify-between shadow-xl shadow-black/30">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-1 font-bold text-base select-none hover:scale-105 transition-transform duration-250">
            <span className="text-violet-500 font-mono">&lt;</span>
            <span className="text-white tracking-wide logo-name">Rahul Singh</span>
            <span className="text-violet-500 font-mono">/&gt;</span>
          </a>

          {/* Desktop Links with Colorful Hover Underlines */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-slate-400 hover:text-white nav-link-underline pb-1 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-colors md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="md:hidden max-w-sm mx-auto mt-2 rounded-3xl border border-white/5 bg-slate-950/90 backdrop-blur-lg p-4 shadow-2xl shadow-black/50 animate-fadeIn" style={{ animationDuration: '0.2s' }}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default Navbar
