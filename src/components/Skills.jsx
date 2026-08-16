import React from 'react'

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "/assets/images/skills/HTML.svg",
      glowClass:
        "hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(240,101,41,0.2)]",
    },
    {
      name: "CSS",
      image: "/assets/images/skills/CSS.svg",
      glowClass:
        "hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(41,101,241,0.2)]",
    },
    {
      name: "JavaScript",
      image: "/assets/images/skills/JS.svg",
      glowClass:
        "hover:border-yellow-500/40 hover:shadow-[0_0_15px_rgba(247,223,30,0.2)]",
    },
    {
      name: "ReactJS",
      image: "/assets/images/skills/react-svgrepo-com.svg",
      glowClass:
        "hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]",
    },
    {
      name: "NodeJS",
      image: "/assets/images/skills/NodeJS.svg",
      glowClass:
        "hover:border-green-500/40 hover:shadow-[0_0_15px_rgba(61,135,53,0.2)]",
    },
    {
      name: "ExpressJS",
      image: "/assets/images/skills/ExpressJS.svg",
      glowClass:
        "hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    },
    {
      name: "Bootstrap",
      image: "/assets/images/skills/Bootstrap.svg",
      glowClass:
        "hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(121,44,237,0.2)]",
    },
    {
      name: "NextJS",
      image: "/assets/images/skills/nextjs.svg",
      glowClass:
        "hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(55,115,165,0.2)]",
    },
    {
      name: "Tailwind CSS",
      image: "/assets/images/skills/Tailwind.svg.png",
      glowClass:
        "hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]",
      isTailwind: true,
    },
    {
      name: "MongoDB",
      image: "/assets/images/skills/MongoDB.svg",
      glowClass:
        "hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(71,162,72,0.2)]",
    },
  ];

  const tools = [
    {
      name: "VSCode",
      image: "/assets/images/tools/vscode.svg",
      glowClass:
        "hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(0,122,204,0.2)]",
    },
    {
      name: "Antigravity",
      image: "/assets/images/tools/antigravity-color.svg",
      glowClass:
        "hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(0,122,204,0.2)]",
    },
    {
      name: "Git",
      image: "/assets/images/tools/git.svg",
      glowClass:
        "hover:border-slate-400/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    },
    {
      name: "Github",
      image: "/assets/images/tools/github.svg",
      glowClass:
        "hover:border-slate-400/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    },
    {
      name: "Vercel",
      image: "/assets/images/tools/vercel-fill-svgrepo-com.svg",
      glowClass:
        "hover:border-slate-400/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    },
    {
      name: "Warp",
      glowClass:
        "hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
      customSvg: (
        <svg
          className="w-10 h-10 text-slate-350 group-hover:text-cyan-400 transition-colors duration-300"
          fill="none"
          viewBox="0 0 101 83"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.0696 0.921936H88.7341C94.8309 0.921936 99.7736 6.02928 99.7736 12.3295V56.6175C99.7736 62.9179 94.8309 68.0252 88.7341 68.0252H34.835L51.0696 0.921936Z"
            fill="currentColor"
          ></path>
          <path
            d="M41.2866 13.6346H10.9455C4.90046 13.6346 0 18.7419 0 25.0421V69.3302C0 75.6305 4.90046 80.7378 10.9455 80.7378H48.2888L49.7863 74.495H26.6878L41.2866 13.6346Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Claude",
      image: "/assets/images/tools/claude-color.svg",
      glowClass:
        "hover:border-teal-500/40 hover:shadow-[0_0_15px_rgba(16,163,127,0.2)]",
    },
    {
      name: "Figma",
      image: "/assets/images/tools/Figma.svg",
      glowClass:
        "hover:border-violet-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
    },
    {
      name: "Postman",
      image: "/assets/images/tools/Postman.svg",
      glowClass:
        "hover:border-slate-400/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    },
    {
      name: "Canva",
      image: "/assets/images/tools/canva.svg",
      glowClass:
        "hover:border-slate-400/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 space-y-20">
      {/* 1. Skills Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            What do I know?
          </span>
          <h2 className="text-3xl font-extrabold text-white">Skills</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Technologies that are part of my current stack:</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`glow-card glass-panel p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:-translate-y-1.5 transition-all duration-300 group cursor-default ${skill.glowClass}`}
            >
              <div className="h-12 flex items-center justify-center">
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className={`w-10 h-10 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${skill.isTailwind ? 'scale-90' : ''}`}
                />
              </div>
              <span className="text-xs font-bold text-slate-350 group-hover:text-white transition-colors">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Tools Grid */}
      <div className="space-y-12 pt-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            What I use?
          </span>
          <h2 className="text-3xl font-extrabold text-white">Tools</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Tech stack known? These are the tools that I run:</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`glow-card glass-panel p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:-translate-y-1.5 transition-all duration-300 group cursor-default ${tool.glowClass}`}
            >
              <div className="h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {tool.customSvg ? (
                  tool.customSvg
                ) : (
                  <img src={tool.image} alt={tool.name} className="w-10 h-10 object-contain" />
                )}
              </div>
              <span className="text-xs font-bold text-slate-350 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
