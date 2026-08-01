import React from 'react'
import { GraduationCap, Palette, Code, Layers } from 'lucide-react'

function About() {
  const interests = [
    {
      icon: <Palette size={20} className="text-violet-400" />,
      title: 'Designing',
      text: "I love designing. When I see something that needs improvement, I enjoy making it better visually. I pay attention to every detail, whether it's a graphic or a user interface. My goal is to create designs that catch the eye and inspire others."
    },
    {
      icon: <Code size={20} className="text-violet-400" />,
      title: 'Developing',
      text: "After designing, I dive into development. Coding is where I bring designs to life, turning concepts into digital experiences. Each line of code reflects my vision for functionality and elegance, showcasing my commitment to excellence."
    },
    {
      icon: <Layers size={20} className="text-indigo-400" />,
      title: 'MERN Stack',
      text: "Connecting front-end interfaces built in React to powerful back-end services using Node.js, Express, and MongoDB. I focus on developing clean RESTful APIs, secure routes, and database schemas for robust web applications."
    }
  ]

  const qualifications = [
    { 
      year: '2019', 
      title: 'High School (10th Standard)', 
      institution: 'SKP School, Goverdhan', 
      desc: 'Completed secondary school studies under board curriculum.' 
    },
    { 
      year: '2021', 
      title: 'Intermediate (12th Standard)', 
      institution: 'MKSVM, Goverdhan', 
      desc: 'Completed senior secondary education in Science stream (Physics, Chemistry, Mathematics).' 
    },
    { 
      year: '2024', 
      title: 'Bachelor of Science (B.Sc. - PCM)', 
      institution: 'Sri Siddhi Vinayak Mahavidhyalaya', 
      university: 'Dr. Bhimrao Ambedkar University, Agra',
      desc: 'Graduated with scientific foundations, focusing on analytical skills and mathematics.' 
    },
    { 
      year: '2025', 
      title: 'Full Stack Web Development', 
      institution: 'Acciojob, Noida', 
      desc: 'Rigorous course training covering Frontend technologies, MERN stack integration, API design, and Data Structures.' 
    },
    { 
      year: 'Present', 
      title: 'Master of Computer Applications (MCA)', 
      institution: 'BSA College of Engineering & Technology, Mathura', 
      university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
      desc: 'Currently pursuing post-graduation to specialize in advanced software engineering, software systems, and data processing architectures.' 
    }
  ]

  return (
    <section id="about" className="scroll-mt-24 space-y-28">
      {/* 1. About Biography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Glass Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-48 h-48 sm:w-56 sm:h-56 lg:w-full lg:h-auto lg:max-w-sm rounded-full lg:rounded-3xl overflow-hidden p-[1.5px] bg-gradient-to-br from-violet-500 to-indigo-500 shadow-2xl">
            {/* Soft Ambient Glow behind Portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-full lg:rounded-3xl"></div>

            <div className="w-full h-full lg:h-auto rounded-full lg:rounded-[22px] overflow-hidden bg-slate-950">
              <img
                src="/assets/images/portrait-2.webp"
                alt="About Rahul Singh"
                className="w-full h-full lg:h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right: Bio Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
              But who am I?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              About Me
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm tracking-wide">
              My story in a nutshell ;)
            </p>
          </div>

          <div className="space-y-4 text-slate-355 text-xs sm:text-sm leading-relaxed">
            <p>
              Hey there, I'm{" "}
              <span className="text-white font-bold">Rahul Singh</span>, a MERN
              Stack Developer passionate about building fast, scalable, and
              user-centric web applications. I enjoy transforming ideas into
              modern digital experiences using React, Next.js, Node.js,
              Express.js, and MongoDB.{" "}
            </p>
            <p>
              {" "}
              I hold a <b>Bachelor's degree in Science</b> and am currently
              pursuing a <b>Master of Computer Applications (MCA)</b>. Alongside
              my academic journey, I continuously enhance my skills by building
              real-world projects, exploring modern web technologies, and
              writing clean, maintainable code.
            </p>
            <p>
              {" "}
              My focus is on creating responsive, high-performance applications
              with intuitive user experiences, scalable architecture, and
              pixel-perfect interfaces. I'm always eager to learn, solve
              challenging problems, and contribute to impactful software
              projects.
            </p>
            <p>
              <b>
                {" "}
                "I don't just build websites—I create fast, scalable, and
                meaningful digital experiences that make an impact."
              </b>
            </p>
          </div>
        </div>
      </div>

      {/* 2. Interests (Things I Love) */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Interests
          </span>
          <h2 className="text-3xl font-extrabold text-white">Things I Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="glow-card glass-panel rounded-3xl p-8 flex flex-col items-center text-center space-y-4 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-400">
                {interest.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{interest.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {interest.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Qualifications Timeline */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Education
          </span>
          <h2 className="text-3xl font-extrabold text-white">Qualifications</h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-2xl mx-auto px-4">
          {/* Vertical Timeline Laser Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent"></div>

          <div className="space-y-12">
            {qualifications.map((qual, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Glowing Node Bullet */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7.5px] md:-translate-x-[7.5px] w-[15px] h-[15px] rounded-full bg-violet-500 border-4 border-[#030712] shadow-[0_0_10px_#8b5cf6] z-20"></div>

                  {/* Timeline Card */}
                  <div
                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? "md:mr-auto text-left md:text-right" : "md:ml-auto text-left"}`}
                  >
                    <div className="glow-card glass-panel p-6 rounded-3xl transition-all duration-300 hover:scale-103 inline-block w-full text-left">
                      <span className="text-xs font-bold text-violet-400 font-mono mb-1.5 block">
                        {qual.year}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-white mb-2 flex items-center gap-2">
                        <GraduationCap
                          size={16}
                          className="text-violet-400 shrink-0"
                        />
                        {qual.title}
                      </h3>

                      <p className="text-slate-300 text-xs font-bold mb-0.5">
                        {qual.institution}
                      </p>

                      {qual.university && (
                        <p className="text-[10px] text-slate-500 font-medium italic mb-2">
                          Affiliated with: {qual.university}
                        </p>
                      )}

                      <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-2 mt-2">
                        {qual.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
