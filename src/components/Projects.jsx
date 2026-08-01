import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, X, Hourglass } from 'lucide-react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Braj Path Pradarshak",
      stacks: ["Next.js", "React", "Tailwind CSS", "Responsive Grid"],
      shortDesc:
        "A professional MERN-based travel website designed to simplify spiritual tour planning across the Braj region",
      fullDesc:
        "A modern travel and tourism website for exploring the spiritual heritage of Braj, offering curated tour packages, seamless booking, and an intuitive user experience. Built with Next.js, React, and Tailwind CSS for speed, responsiveness, and scalability.",
      features: [
        "Curated tour packages for Mathura, Vrindavan, Barsana, Nandgaon, and Govardhan.",
        "Fully responsive design optimized for mobile, tablet, and desktop.",
        "Fast performance with Next.js and modern UI using Tailwind CSS.",
        "Interactive package cards, smooth animations, and clean navigation.",
        "Quick contact options via WhatsApp, phone, and inquiry forms.",
        "SEO-friendly architecture for better search engine visibility.",
      ],
      banner: "/assets/images/projects/banner-braj.webp",
      logo: "/assets/images/projects/logo.png",
      status: "Completed",
      privateRepo: true,
      github: "#",
      demo: "https://www.brajpathpradarshak.com/",
    },
    {
      title: "Spotify Clone",
      stacks: ["HTML", "CSS", "Audio UI Layout"],
      shortDesc: "This is a clone of a music player app named Spotify.",
      fullDesc:
        "A visually authentic recreation of the Spotify music streaming web client, highlighting custom styled audio controls, playlists sidebars, and responsive album grids.",
      features: [
        "Mock music controller dashboard with play/pause icons, progress sliders, and volume indicators.",
        "Left sidebar panel reproducing official Spotify categories.",
        "Card grids showing album covers that zoom slightly when hovered.",
        "Dark player theme with custom gradients matching Spotify layouts.",
      ],
      banner: "/assets/images/projects/spotify.png",
      logo: "/assets/images/projects/spotify.png",
      status: "In Progress",
      github: "#",
      demo: "#",
    },
    {
      title: "ChatGPT Clone",
      stacks: ["HTML", "CSS", "Chat Interface"],
      shortDesc:
        "This is a clone of a arificial intelligence chat bot named ChatGPT.",
      fullDesc:
        "A frontend interface replica of the ChatGPT workspace panel, practicing clean chat layouts, sidebar history grids, message threads, and prompt helpers.",
      features: [
        "Clean sidebar panel listing mock chat history channels.",
        "Center grid panel showing helper guides and recommendation prompt triggers.",
        "Chat thread bubbles with user and assistant avatars.",
        "Responsive text area input field resembling OpenAI chat container.",
      ],
      banner: "/assets/images/projects/chatgpt.png",
      logo: "/assets/images/projects/chatgpt.png",
      status: "Completed",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <div className="text-center space-y-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
          What I've done?
        </span>
        <h2 className="text-3xl font-extrabold text-white">Projects</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Replications and interfaces of popular web platforms:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(project)}
            className="glow-card glass-panel rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
          >
            {/* Project Banner Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.banner}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {project.status === "In Progress" ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Hourglass
                      size={10}
                      className="mr-1 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                    In Progress
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Completed
                  </span>
                )}
              </div>
            </div>

            {/* Project Information */}
            <div className="p-6 flex-grow flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={project.logo}
                  alt="Logo"
                  className="w-10 h-10 rounded-xl object-contain bg-slate-900 border border-white/5"
                />
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.stacks.map((stack, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-bold text-violet-400 bg-violet-500/5 px-2 py-0.5 rounded-md border border-violet-500/10"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed flex-grow">
                {project.shortDesc}
              </p>

              <div className="pt-2 flex items-center text-xs font-bold text-violet-400 group-hover:text-violet-300 transition-colors">
                View Details
                <ArrowUpRight
                  size={14}
                  className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Dialog */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Banner */}
                <div className="relative h-56 w-full">
                  <img
                    src={selectedProject.banner}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/5 text-slate-400 hover:text-white hover:bg-black/80 transition-all"
                  >
                    <X size={16} />
                  </button>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <img
                      src={selectedProject.logo}
                      alt="Logo"
                      className="w-12 h-12 rounded-xl object-contain bg-slate-900 border border-white/5"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold text-white">
                        {selectedProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedProject.stacks.map((stack, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] font-bold text-violet-400 bg-violet-500/5 px-2 py-0.5 rounded-md border border-violet-500/10"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-violet-400">
                      Description
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-violet-400">
                      Key Features
                    </h4>
                    <ul className="list-disc ps-5 space-y-1 text-slate-350 text-xs sm:text-sm">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action Links */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <span className="text-slate-500 text-xs">Status: </span>
                      <span
                        className={`text-xs font-bold ${
                          selectedProject.status === "In Progress"
                            ? "text-amber-400"
                            : "text-emerald-400"
                        }`}
                      >
                        {selectedProject.status}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      {selectedProject.privateRepo ? (
                        <button
                          disabled
                          title="This is a private client project. Source code is not publicly available."
                          className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 text-slate-400 text-xs font-bold cursor-not-allowed"
                        >
                          🔒 Private Repository
                        </button>
                      ) : (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-bold transition-all"
                        >
                          <Github size={14} className="mr-1.5" />
                          Code
                        </a>
                      )}

                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-md shadow-violet-600/20 transition-all"
                      >
                        <ExternalLink size={14} className="mr-1.5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects
