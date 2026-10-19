import ParticleBackground from "./ParticleBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBFD] text-slate-900 selection:bg-purple-600 selection:text-white relative">
      {/* Global Animated Coding Stream Background */}
      <ParticleBackground />

      {/* Subtle Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/30 to-indigo-100/20 rounded-full blur-[130px] animate-glow" />
        <div className="absolute top-[35%] -right-40 w-[550px] h-[550px] bg-gradient-to-bl from-violet-200/30 to-fuchsia-100/20 rounded-full blur-[140px] animate-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-t from-purple-100/30 to-pink-50/15 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 pt-4">
        <nav className="glass-nav max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-2xl shadow-sm shadow-purple-500/5 transition-all duration-300">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform">
              R
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Raheel<span className="text-purple-600 font-extrabold">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/50 text-sm font-medium text-slate-600">
            <a href="#" className="px-4 py-1.5 rounded-lg text-purple-700 bg-white shadow-xs font-semibold">Home</a>
            <a href="#about" className="px-4 py-1.5 rounded-lg hover:text-slate-900 hover:bg-white/60 transition">About</a>
            <a href="#experience" className="px-4 py-1.5 rounded-lg hover:text-slate-900 hover:bg-white/60 transition">Experience</a>
            <a href="#portfolio" className="px-4 py-1.5 rounded-lg hover:text-slate-900 hover:bg-white/60 transition">Projects</a>
          </div>

          <a 
            href="https://wa.me/923090320565" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm rounded-xl shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Let’s Talk</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col items-center justify-center text-center overflow-hidden">


        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 shadow-xs mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-purple-900">Senior Mobile Application Engineer</span>
          </div>

          {/* Main sleek heading with Outfit font */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-800 leading-[1.2] mb-5">
            Architecting <span className="font-medium text-slate-900">mobile products</span> with
            <br />
            <span className="font-normal italic bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              clarity, precision & speed
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            I’m <strong className="text-slate-900 font-medium">Raheel Ahmad</strong> — a Flutter & Mobile Application Engineer with 3+ years of experience delivering cross-platform apps with clean architectures and fluid UI experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a 
              href="/Raheel_Ahmad_CV.pdf" 
              download="Raheel_Ahmad_CV.pdf" 
              target="_blank" 
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium text-sm shadow-md hover:bg-purple-700 hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Download CV</span>
            </a>

            <a 
              href="#portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 text-slate-700 border border-slate-200/90 rounded-xl font-medium text-sm shadow-xs hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl">
            {[
              { val: "3+ Yrs", label: "Experience" },
              { val: "7+ Apps", label: "Shipped" },
              { val: "100%", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl shadow-xs text-center border border-purple-100/60 hover:border-purple-300 transition-colors">
                <div className="text-2xl sm:text-3xl font-light text-slate-900">
                  {stat.val}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Bio Side */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Engineering Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Crafting Scalable, Native-Feel Experiences
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Based in Lahore, Pakistan, I specialize in crafting mobile applications that balance pristine architecture with pixel-perfect visual design.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Experienced in complex state management paradigms (BLoC, GetX, Provider), responsive layout composition, real-time synchronization, and integrating secure payment channels.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/RaheelAhmad0066" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:border-purple-300 hover:text-purple-600 shadow-xs transition"
              >
                GitHub Profile ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/raheel-ahmad-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:border-purple-300 hover:text-purple-600 shadow-xs transition"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Skills side */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-purple-100/80 shadow-sm shadow-purple-500/5">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
              <span>Technical Arsenal & Tooling</span>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">Verified Skills</span>
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Mobile & Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Dart', 'BLoC Pattern', 'Provider', 'GetX', 'Swift', 'MVVM', 'Clean Architecture'].map(skill => (
                    <span key={skill} className="px-3.5 py-1.5 bg-purple-50/70 border border-purple-100/90 rounded-xl text-purple-900 font-medium text-xs hover:border-purple-300 hover:bg-purple-100/80 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Backend & Cloud</p>
                <div className="flex flex-wrap gap-2">
                  {['Firebase', 'RESTful APIs', 'Node.js', 'MongoDB', 'Authentication & JWT', 'Payment Gateways'].map(skill => (
                    <span key={skill} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 font-medium text-xs hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">DevOps & Collaboration</p>
                <div className="flex flex-wrap gap-2">
                  {['Git / GitHub', 'GitLab CI/CD', 'App Store Connect', 'Google Play Console', 'Agile / Scrum'].map(skill => (
                    <span key={skill} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 font-medium text-xs hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Work Experience</h2>
          <p className="text-slate-500 text-sm mt-3">A progressive journey building dependable applications for high-impact teams.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              role: "Flutter Developer", 
              company: "Mentor Sol-Tech", 
              period: "09/2024 – Present", 
              badge: "Current",
              desc: "Developing modular mobile apps using Flutter and Dart. Integrating Firebase, REST APIs, and seamless in-app payment gateways." 
            },
            { 
              role: "Flutter Developer", 
              company: "Opal Axis", 
              period: "01/2022 – 12/2023", 
              badge: "Full-Time",
              desc: "Assisted in UI/UX improvements, implemented features & critical bug fixes, and drastically optimized app frame rates & memory usage." 
            },
            { 
              role: "Flutter Developer", 
              company: "Acme Technologies", 
              period: "01/2021 – 01/2022", 
              badge: "Full-Time",
              desc: "Integrated various APIs and third-party services such as Firebase, REST endpoints, and complex state management workflows." 
            },
            { 
              role: "Developer (Intern)", 
              company: "Combined Fabric", 
              period: "2019 – 08/2020", 
              badge: "Internship",
              desc: "Engineered web interfaces and resolved performance bottlenecks before specializing completely in Flutter & mobile architectures." 
            },
          ].map((job, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">{job.role}</h3>
                    <p className="text-sm font-semibold text-purple-600">{job.company}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            Featured Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Production Deployments</h2>
          <p className="text-slate-500 text-sm mt-3">
            Production apps published on Google Play Store and Apple App Store built with clean architecture and delightful UI interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "BAZAR", 
              type: "Chalet Booking & Rewards Platform", 
              tech: "BLoC • REST APIs", 
              desc: "Implemented BLoC state management and integrated RESTful APIs for chalet listings, bookings, user profiles, and secure payment processing.",
              link: "https://play.google.com/store/apps/details?id=com.vga.bazzar&hl=en_US",
              linkText: "Google Play",
              image: "/images/bazar.png"
            },
            { 
              name: "REC Support", 
              type: "Sports & Tournament Management", 
              tech: "Provider • Real-Time Data", 
              desc: "Built event-related support and provider-based reactive user flows, guaranteeing smooth data synchronization and fluid UI transitions.",
              link: "https://play.google.com/store/apps/details?id=com.recsportskw.recsports&hl=en",
              linkText: "Google Play",
              image: "/images/recsports.png"
            },
            { 
              name: "HIITS Plus", 
              type: "High Intensity Training & Timers", 
              tech: "GetX • Apple Health Integration", 
              desc: "Contributed to ergonomic UI/UX patterns and REST API integration to govern workout programs, complex interval timers, and local caching.",
              link: "https://apps.apple.com/pk/app/hiits-plus/id1672426650",
              linkText: "App Store",
              image: "/images/hiits.png"
            },
            { 
              name: "Essaly", 
              type: "Digital Receipts & Customer Loyalty", 
              tech: "BLoC • QR Engine", 
              desc: "Supported receipt parsing, loyalty points tracking, and merchant-consumer workflows, achieving dependable zero-downtime updates.",
              link: "https://play.google.com/store/apps/details?id=com.essalyapp&hl=en",
              linkText: "Google Play",
              image: "/images/essaly.png"
            },
            { 
              name: "Off Grid", 
              type: "Adventure & Offline Navigation", 
              tech: "Flutter • Offline Sync", 
              desc: "Engineered offline resilience, interactive location maps, and sleek UI layouts tailored for smooth performance across varied devices.",
              link: "https://play.google.com/store/apps/details?id=com.vga.offgrid",
              linkText: "Google Play",
              image: "/images/offgrid.png"
            },
            { 
              name: "CCar", 
              type: "Automotive Service & Booking", 
              tech: "Flutter • REST Integration", 
              desc: "Developed end-to-end car servicing and inspection booking workflows with intuitive UX, real-time order tracking, and push notifications.",
              link: "https://play.google.com/store/apps/details?id=com.vga.ccar&pcampaignid=web_share",
              linkText: "Google Play",
              image: "/images/ccar.png"
            },
            { 
              name: "Quizzax", 
              type: "Interactive Learning & Testing", 
              tech: "Flutter App • Gamification", 
              desc: "Engaging quiz platform with dynamic test timers, question sets, instant grading calculations, and high-retention study visuals.",
              link: "https://play.google.com/store/apps/details?id=com.afn.test&hl=en",
              linkText: "Google Play",
              image: "/images/quizzax.png"
            }
          ].map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Banner Image Preview */}
                <div className="relative w-full h-64 bg-slate-50/70 border-b border-slate-100 overflow-hidden flex items-center justify-center p-4">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="text-slate-300 font-bold text-xl">Preview Coming Soon</div>
                  )}
                  <span className="absolute top-4 left-4 text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-white/95 text-purple-700 shadow-xs border border-purple-100 backdrop-blur-sm">
                    {project.tech}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <h4 className="text-sm font-semibold text-purple-600 mb-3">{project.type}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-200 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white transition-all duration-200 shadow-xs"
                >
                  <span>View on {project.linkText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950 text-slate-300 py-16 px-6 mt-16 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <h2 className="text-xl font-extrabold text-white">Raheel Ahmad</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Mobile Application Engineer specializing in high-performance Flutter architectures and elegant native mobile solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a href="https://github.com/RaheelAhmad0066" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/raheel-ahmad-dev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="mailto:raheelahmad0119@gmail.com" className="hover:text-purple-400 transition-colors">Email</a>
            <a href="https://wa.me/923090320565" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600 hover:text-white transition-all">WhatsApp</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Raheel Ahmad. All rights reserved.</p>
          <p className="font-mono text-slate-500">Crafted with Flutter mindset & Next.js</p>
        </div>
      </footer>
    </div>
  );
}

