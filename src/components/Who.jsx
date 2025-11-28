import React from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  Laptop2, 
  RefreshCcw,
  ArrowRight
} from "lucide-react";

const profiles = [
  {
    id: 1,
    title: "Students & Grads",
    role: "Kickstart Career",
    desc: "Don't wait for a degree. Build a portfolio that gets you hired before you graduate.",
    icon: <GraduationCap className="w-7 h-7" />,
    // Premium 3D Icon Gradient
    iconGradient: "from-[#3F348F] to-[#6d63c4]",
    shadowColor: "shadow-purple-500/40",
    borderGradient: "group-hover:from-purple-500 group-hover:to-indigo-500"
  },
  {
    id: 2,
    title: "Working Professionals",
    role: "Upskill & Scale",
    desc: "Stuck in your current role? Master high-demand skills to negotiate a better salary.",
    icon: <Briefcase className="w-7 h-7" />,
    iconGradient: "from-[#FF0065] to-[#ff5c9d]",
    shadowColor: "shadow-pink-500/40",
    borderGradient: "group-hover:from-pink-500 group-hover:to-rose-500"
  },
  {
    id: 3,
    title: "Startup Founders",
    role: "Do It Yourself",
    desc: "Stop outsourcing blindly. Learn to run your own profitable ads and save agency fees.",
    icon: <Rocket className="w-7 h-7" />,
    iconGradient: "from-[#3F348F] to-[#6d63c4]",
    shadowColor: "shadow-purple-500/40",
    borderGradient: "group-hover:from-purple-500 group-hover:to-indigo-500"
  },
  {
    id: 4,
    title: "Freelancers",
    role: "Charge More",
    desc: "Move from low-ticket gigs to high-ticket retainers by offering end-to-end strategy.",
    icon: <Laptop2 className="w-7 h-7" />,
    iconGradient: "from-[#FF0065] to-[#ff5c9d]",
    shadowColor: "shadow-pink-500/40",
    borderGradient: "group-hover:from-pink-500 group-hover:to-rose-500"
  },
  {
    id: 5,
    title: "Career Switchers",
    role: "Fresh Start",
    desc: "From non-tech to digital expert. No coding required, just logic and strategy.",
    icon: <RefreshCcw className="w-7 h-7" />,
    iconGradient: "from-blue-600 to-cyan-500",
    shadowColor: "shadow-blue-500/40",
    borderGradient: "group-hover:from-blue-500 group-hover:to-cyan-500"
  }
];

export default function WhoIsThisFor() {
  return (
    <section className="py-24 md:py-32 bg-[#faeef4] relative overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      {/* Soft blobs moving behind glass cards */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#3F348F 0.5px, transparent 0.5px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
             <span className="text-xs font-bold text-[#3F348F] uppercase tracking-widest">Target Audience</span>
          </div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
                <span className="font-light text-slate-600">Is that You?</span> <br/>
                <span className="font-bold text-[#3F348F]">
                Then Choose us
                </span>
                </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Whether you are starting out or scaling up, our curriculum adapts to your professional goals.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {profiles.map((item) => (
            // WRAPPER DIV for the Gradient Border Effect
            <div 
              key={item.id} 
              className={`
                group relative w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] 
                rounded-[32px] p-[1.5px] /* Thickness of gradient border */
                bg-gradient-to-br from-white/60 to-white/10 ${item.borderGradient}
                transition-all duration-500 hover:-translate-y-2
                shadow-xl shadow-[#3F348F]/5 hover:shadow-2xl hover:shadow-[#3F348F]/15
              `}
            >
              
              {/* GLASSMOPHISM CARD CONTENT */}
              <div className="h-full w-full bg-white/60 backdrop-blur-xl rounded-[30px] p-8 flex flex-col relative overflow-hidden">
                
                {/* Subtle shine effect on glass */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none"></div>

                {/* Header: Icon & Tag */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  
                  {/* 3D-Style Icon Container */}
                  <div className={`
                    w-16 h-16 rounded-2xl 
                    bg-gradient-to-br ${item.iconGradient}
                    text-white flex items-center justify-center
                    shadow-lg ${item.shadowColor}
                    transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 ease-out
                  `}>
                    {item.icon}
                  </div>
                  
                  {/* Modern Pill Tag */}
                  <span className="
                    text-[10px] font-bold uppercase tracking-wider 
                    px-3 py-1.5 rounded-full 
                    bg-gradient-to-r from-slate-100 to-white 
                    border border-white/50 text-slate-600 shadow-sm
                  ">
                    {item.role}
                  </span>
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3 leading-tight group-hover:text-[#3F348F] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium opacity-80">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Interaction: Action Link */}
                <div className="mt-auto relative z-10">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#3F348F] opacity-60 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
                    View Path <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}