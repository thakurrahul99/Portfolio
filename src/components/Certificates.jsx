import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, ShieldCheck, ExternalLink, X, Eye } from 'lucide-react'

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      title: "MERN Stack Web Development",
      issuer: "Acciojob",
      date: "March 2026",
      credentialId: "AJ-FSWD-2025-8942",
      skills: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "DSA",
      ],
      image: "/assets/images/certificates/Acciojob.png",
      verificationUrl: "https://www.acciojob.com/",
      glowClass:
        "hover:border-violet-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
    },
    {
      title: "Fundamental of ML & AI",
      issuer: "AWS Training & Certificates",
      date: "August 2026",
      credentialId: "AJ-DSA-2025-0014",
      skills: ["GenAI", "Machine Learnig", "Deep Learning"],
      image: "/assets/images/certificates/AWS.png",
      verificationUrl: "https://www.skillbuilder.aws/",
      glowClass:
        "hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
    },
    {
      title: "Frontend Developer(react)",
      issuer: "Hackerrank",
      date: "August 2026",
      credentialId: "COUR-REACT-5591",
      skills: [
        "ReactJS",
        "UI/UX Design",
        "JavaScript",
        "Responsive Design",
      ],
      image: "/assets/images/certificates/Hacker.png",
      verificationUrl: "https://www.hackerrank.com/certificates/83d395a8f268",
      glowClass:
        "hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    },
  ];

  return (
    <section id="certificates" className="scroll-mt-24 space-y-12">
      <div className="text-center space-y-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
          My credentials
        </span>
        <h2 className="text-3xl font-extrabold text-white">Certificates</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Verified certifications demonstrating technical expertise and training:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCert(cert)}
            className={`glow-card glass-panel rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer ${cert.glowClass}`}
          >
            {/* Certificate Preview Image */}
            <div className="relative h-48 overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              
              {/* Eye Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-violet-600 text-white text-xs font-bold shadow-lg shadow-violet-600/30">
                  <Eye size={14} />
                  <span>View Certificate</span>
                </div>
              </div>

              {/* Top Right Award Icon Badge */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 border border-white/10 text-violet-400">
                <Award size={16} />
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-6 flex-grow flex flex-col space-y-4">
              <div>
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-base font-extrabold text-white group-hover:text-violet-300 transition-colors duration-200">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center text-slate-400 text-xs gap-1.5">
                <Calendar size={13} className="text-slate-500" />
                <span>Issued {cert.date}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[9px] font-bold text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center text-xs font-bold text-violet-400 group-hover:text-violet-300 transition-colors mt-auto">
                Verify Credential
                <ExternalLink
                  size={12}
                  className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full screen Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left: Interactive Certificate Image */}
                <div className="md:w-3/5 bg-slate-900/40 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative shrink-0">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[220px] md:max-h-[380px] max-w-full rounded-lg object-contain shadow-2xl"
                  />
                  
                  {/* Close button for Mobile (visible top-right on left side) */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 left-4 p-2 rounded-full bg-slate-950/80 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900 transition-all md:hidden"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Right: Detailed Certificate Information */}
                <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-6 overflow-y-auto flex-grow">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">
                        Certification Details
                      </span>
                      {/* Close button for Desktop */}
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="hidden md:block p-1.5 rounded-full border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <h3 className="text-lg font-extrabold text-white mt-4">
                      {selectedCert.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-semibold mt-1">
                      Issued by {selectedCert.issuer}
                    </p>

                    <div className="h-[1px] bg-white/5 my-4"></div>

                    {/* Metadata items */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-slate-300 text-xs">
                        <Calendar size={14} className="text-violet-400 shrink-0" />
                        <span>Issue Date: <strong>{selectedCert.date}</strong></span>
                      </div>
                      {/* <div className="flex items-center gap-2 text-slate-300 text-xs">
                        <ShieldCheck size={14} className="text-violet-400 shrink-0" />
                        <span className="truncate">Credential ID: <strong className="font-mono">{selectedCert.credentialId}</strong></span>
                      </div> */}
                    </div>

                    <div className="h-[1px] bg-white/5 my-4"></div>

                    {/* Skills Covered */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Skills Verified
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-bold text-violet-400 bg-violet-500/5 px-2 py-0.5 rounded-md border border-violet-500/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification CTA Button */}
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-md shadow-violet-600/20 transition-all gap-1.5"
                    >
                      <ExternalLink size={14} />
                      Verify Official Credential
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates
