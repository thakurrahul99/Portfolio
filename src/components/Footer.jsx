import React from 'react'
import { Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8 mt-24 bg-[#02050d] text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs font-semibold tracking-wide">
          &copy; {currentYear} Rahul Singh. All rights reserved.
        </p>
        <p className="text-xs flex items-center justify-center gap-1 font-medium">
          Made with <span className="text-violet-400">React</span> &amp; <span className="text-violet-400">Tailwind CSS</span> and a dash of 
          <Heart size={12} className="fill-red-500 text-red-500 animate-pulse inline" /> by Rahul.
        </p>
      </div>
    </footer>
  )
}

export default Footer
