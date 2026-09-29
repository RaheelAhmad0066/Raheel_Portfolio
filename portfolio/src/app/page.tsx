import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto border-b border-gray-100 z-50 relative bg-purple-50/90 backdrop-blur-md rounded-b-3xl">
        <div className="text-2xl font-black tracking-tight text-purple-600 flex items-center gap-1">
          <span className="text-purple-400">&lt;</span>R<span className="text-purple-400">/&gt;</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-purple-600 transition">Home</a>
          <a href="#about" className="hover:text-purple-600 transition">About</a>
          <a href="#experience" className="hover:text-purple-600 transition">Experience</a>
          <a href="#portfolio" className="hover:text-purple-600 transition">Projects</a>
        </div>
        <a href="https://wa.me/923090320565" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 shadow-md shadow-purple-500/20 transition">
          Contact Me
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative px-10 py-32 flex flex-col md:flex-row items-center justify-center text-center overflow-hidden min-h-[85vh]">
        {/* Animated Dust Particles */}
        <ParticleBackground />
        
        <div className="flex flex-col gap-6 items-center z-10 w-full max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-gray-900 tracking-tight drop-shadow-sm">
            Hello, I’m <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">Raheel Ahmad</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mt-2">Flutter & Mobile App Developer</h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-4">
            Passionate and results-driven Flutter Developer with over 3 years of experience in building scalable and high-performance mobile applications for Android and iOS platforms.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/Raheel_Ahmad_CV.pdf" download="Raheel_Ahmad_CV.pdf" target="_blank" className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-100 rounded-full shadow-xl shadow-purple-500/10 font-bold text-lg hover:bg-purple-50 hover:-translate-y-1 transition-transform flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-gray-100/50 w-full max-w-3xl relative z-10 bg-white/40 backdrop-blur-sm rounded-3xl pb-8">
            <div>
              <h3 className="text-5xl font-black text-gray-800">3+ Y.</h3>
              <p className="text-sm font-bold text-purple-500 uppercase tracking-wide mt-2">Experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-gray-800">4+</h3>
              <p className="text-sm font-bold text-purple-500 uppercase tracking-wide mt-2">Major Projects</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-gray-800">100%</h3>
              <p className="text-sm font-bold text-purple-500 uppercase tracking-wide mt-2">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="px-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start gap-16">
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Software Engineer & Flutter Expert
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Based in Lahore, I specialize in Dart, Firebase, REST APIs, and UI/UX best practices. I have a demonstrated ability to design and implement robust features, fix bugs, and collaborate effectively in agile teams.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#portfolio" className="px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg font-medium hover:bg-purple-700 transition">
                My Projects
              </a>
              <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-medium hover:bg-gray-800 hover:text-white transition">
                Download CV
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl w-full">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Dart', 'Flutter', 'Firebase', 'REST APIs', 'Git/GitHub', 'GitLab', 'Node.js', 'MongoDB', 'DevOps', 'BLoC', 'Provider', 'GetX', 'Swift', 'MVVM'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white shadow-sm border border-gray-100 rounded-full text-purple-700 font-medium text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-10 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Work Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { role: "Flutter Developer", company: "Mentor Sol-Tech", period: "09/2024 – Present", desc: "Developing modular mobile apps using Flutter and Dart. Integrating Firebase, REST APIs, and payment gateways." },
              { role: "Flutter Developer", company: "Opal Axis", period: "01/2022 – 12/2023", desc: "Assisted in UI/UX improvements, implemented features & bug fixes, and optimized app performance." },
              { role: "Flutter Developer", company: "Acme Technologies", period: "01/2021 – 01/2022", desc: "Integrated various APIs and third-party services such as Firebase, REST APIs, and payment gateways." },
              { role: "Flutter Developer (Intern)", company: "Combined Fabric", period: "2019 – 08/2020", desc: "Designed custom WordPress websites and improved website speed and SEO results before transitioning to Flutter." },
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{job.role}</h3>
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{job.period}</span>
                </div>
                <h4 className="text-md font-semibold text-gray-600 mb-4">{job.company}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="px-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            A selection of mobile applications I have developed, showcasing my expertise in Flutter state management and API integrations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              { 
                name: "BAZAR", 
                type: "Chalet Booking & Rewards", 
                tech: "BLoC | REST API", 
                desc: "Implemented BLoC state management and integrated RESTful APIs for chalet listings, bookings, user profiles, and secure payments.",
                link: "https://play.google.com/store/apps/details?id=com.vga.bazzar&hl=en_US",
                linkText: "Play Store",
                image: "/images/bazar.png"
              },
              { 
                name: "REC Support", 
                type: "Sports & Events Management", 
                tech: "Provider | API Integration", 
                desc: "Built features for event-related support and provider-based user flows, ensuring smooth data handling and clean UI interactions.",
                link: "https://play.google.com/store/apps/details?id=com.recsportskw.recsports&hl=en",
                linkText: "Play Store",
                image: "/images/recsports.png"
              },
              { 
                name: "HIITS Plus", 
                type: "Fitness & Training", 
                tech: "GetX | API Integration", 
                desc: "Contributed to UI/UX improvements and REST API integration to manage workout programs, timers, and app performance.",
                link: "https://apps.apple.com/pk/app/hiits-plus/id1672426650",
                linkText: "App Store",
                image: "/images/hiits.png"
              },
              { 
                name: "Essaly", 
                type: "Digital Receipts & Loyalty", 
                tech: "BLoC | API Integration", 
                desc: "Supported receipt management, loyalty points tracking, and merchant-consumer workflows, delivering bug-free updates with zero downtime.",
                link: "https://play.google.com/store/apps/details?id=com.essalyapp&hl=en",
                linkText: "Play Store",
                image: "/images/essaly.png"
              },
              { 
                name: "Off Grid", 
                type: "Mobile Application", 
                tech: "Flutter | UI/UX", 
                desc: "Developed and maintained the mobile application, ensuring optimal performance and seamless user experiences with responsive design.",
                link: "https://play.google.com/store/apps/details?id=com.vga.offgrid",
                linkText: "Play Store",
                image: "/images/offgrid.png"
              },
              { 
                name: "CCar", 
                type: "Mobile Application", 
                tech: "Flutter | API Integration", 
                desc: "Implemented core features and integrated APIs for a smooth and scalable mobile experience, ensuring high code quality.",
                link: "https://play.google.com/store/apps/details?id=com.vga.ccar&pcampaignid=web_share",
                linkText: "Play Store",
                image: "/images/ccar.png"
              },
              { 
                name: "Quizzax", 
                type: "Quiz Learning App", 
                tech: "Flutter App", 
                desc: "Think Outside the Box — personalized quiz learning app.",
                link: "https://play.google.com/store/apps/details?id=com.afn.test&hl=en",
                linkText: "Play Store",
                image: "/images/quizzax.png"
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative bg-gray-50 rounded-3xl p-6 hover:bg-purple-600 transition-colors duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                <div>
                  {project.image ? (
                    <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-4">
                      <img src={project.image} alt={project.name} className="object-contain w-full h-full transform group-hover:scale-105 transition duration-500" />
                    </div>
                  ) : (
                    <div className="w-full h-64 mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-50 flex flex-col items-center justify-center text-purple-300 shadow-sm group-hover:from-purple-500 group-hover:to-purple-400 transition duration-500">
                      <span className="text-4xl font-black opacity-30">{project.name}</span>
                      <span className="text-sm mt-2 opacity-50">Image coming soon</span>
                    </div>
                  )}
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider text-purple-600 uppercase group-hover:text-purple-200">{project.tech}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-white">{project.name}</h3>
                  <h4 className="text-md font-medium text-gray-600 mb-4 group-hover:text-purple-100">{project.type}</h4>
                  <p className="text-gray-500 group-hover:text-purple-50 mb-6">{project.desc}</p>
                </div>
                <div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-purple-700 group-hover:text-white underline decoration-2 underline-offset-4">
                    View on {project.linkText} ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Raheel Ahmad</h2>
            <p className="text-gray-400">Flutter & Mobile App Developer based in Lahore.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="https://github.com/RaheelAhmad0066" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-gray-600 hover:text-purple-400 hover:decoration-purple-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/raheel-ahmad-dev" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-gray-600 hover:text-purple-400 hover:decoration-purple-400 transition">LinkedIn</a>
            <a href="mailto:raheelahmad0119@gmail.com" className="underline underline-offset-4 decoration-gray-600 hover:text-purple-400 hover:decoration-purple-400 transition">Email</a>
            <a href="https://wa.me/923090320565" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-gray-600 hover:text-purple-400 hover:decoration-purple-400 transition">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
