import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [sent, setSent] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }))
    }, 4000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Enforce strict non-empty checks (no empty fields allowed)
    if (!formData.name.trim()) {
      showToast('Please enter your name.', 'error')
      return
    }

    if (!formData.email.trim()) {
      showToast('Please enter your email.', 'error')
      return
    }

    // Strict email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      showToast('Please enter a valid email address.', 'error')
      return
    }

    if (!formData.subject.trim()) {
      showToast('Please enter a subject.', 'error')
      return
    }

    if (!formData.message.trim()) {
      showToast('Please enter your message.', 'error')
      return
    }

    setSent(true)

    // FormSubmit AJAX request to deliver email directly
    fetch('https://formsubmit.co/ajax/rahulsinghrajpoot9997@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Name: formData.name.trim(),
        Email: formData.email.trim(),
        Subject: formData.subject.trim(),
        Message: formData.message.trim()
      })
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok.')
    })
    .then(() => {
      showToast('Message sent successfully! Rahul will contact you soon.', 'success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSent(false)
    })
    .catch(() => {
      showToast('Something went wrong. Please try again later.', 'error')
      setSent(false)
    })
  }

  return (
    <section id="contact" className="scroll-mt-24 max-w-2xl mx-auto w-full">
      <div className="text-center space-y-2 mb-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
          What's next!
        </span>
        <h2 className="text-3xl font-extrabold text-white">Get In Touch</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Interested in working together? We should schedule a time to chat. I'll bring the coffee.
        </p>
      </div>

      <div 
        className="glow-card glass-panel p-8 sm:p-10 rounded-3xl shadow-xl shadow-black/20"
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.45)', // dark glass tint
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label 
                htmlFor="name" 
                className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Rahul Singh"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-white/5 bg-slate-950/40 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label 
                htmlFor="email" 
                className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-white/5 bg-slate-950/40 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label 
              htmlFor="subject" 
              className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Let's build a website together!"
              value={formData.subject}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-white/5 bg-slate-950/40 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label 
              htmlFor="message" 
              className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-white/5 bg-slate-950/40 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sent}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-750 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-violet-600/10 hover:shadow-lg active:scale-98 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {sent ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={14} className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Floating Glass Toast Alert Notice */}
      {toast.show && (
        <div 
          style={{
            position: 'fixed',
            top: '85px',
            right: '25px',
            zIndex: 9999,
            background: toast.type === 'success' ? 'rgba(25, 135, 84, 0.85)' : 'rgba(220, 53, 69, 0.85)',
            border: toast.type === 'success' ? '1px solid rgba(40, 167, 69, 0.2)' : '1px solid rgba(220, 53, 69, 0.2)',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '18px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            animation: 'slideInToast 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 size={16} className="text-white" />
          ) : (
            <AlertCircle size={16} className="text-white" />
          )}
          <span className="text-xs font-semibold tracking-wide">{toast.message}</span>
        </div>
      )}

      {/* Custom Toast Animations */}
      <style>{`
        @keyframes slideInToast {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
