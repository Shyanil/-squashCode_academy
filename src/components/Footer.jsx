import React from "react";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f8f9fc] pt-20 pb-10 overflow-hidden font-sans border-t border-slate-100">
      
      {/* --- BACKGROUND ELEMENTS (The "Premium" Touch) --- */}
      
      {/* 1. Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      {/* 2. Soft Brand Glows (Ambient Light) */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[#3F348F]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#FF0065]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 3. Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3F348F]/20 to-transparent"></div>


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* --- 1. BRAND --- */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-2xl font-extrabold text-[#1a1a2e] tracking-tight">
              SquashCode<span className="text-[#3F348F]">.</span>
            </h3>
            <p className="text-slate-500 text-[15px] leading-7 max-w-sm font-medium">
              We turn beginners into performance marketers through real campaigns, real budgets, and real execution.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#3F348F] hover:border-[#3F348F] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Icon strokeWidth={1.5} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* --- 2. EXPLORE --- */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#3F348F]"></span> Explore
            </h4>
            <ul className="space-y-4">
              {['Our Courses', 'Why Choose Us', 'Curriculum', 'Placement Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-slate-500 hover:text-[#3F348F] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#3F348F] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- 3. CONTACT --- */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#FF0065]"></span> Visit Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#3F348F] transition-colors">
                   <MapPin strokeWidth={1.5} className="w-4 h-4 text-[#3F348F]" />
                </div>
                <span className="text-sm font-medium text-slate-500 leading-relaxed pt-1">
                  123 Anywhere St, Tech Park,<br/> Kolkata, India
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#3F348F] transition-colors">
                   <Phone strokeWidth={1.5} className="w-4 h-4 text-[#3F348F]" />
                </div>
                <span className="text-sm font-medium text-slate-500">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#3F348F] transition-colors">
                   <Mail strokeWidth={1.5} className="w-4 h-4 text-[#3F348F]" />
                </div>
                <span className="text-sm font-medium text-slate-500 hover:text-[#3F348F] cursor-pointer transition-colors">
                  hello@squashcode.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold text-slate-400">
            © {currentYear} SquashCode Academy.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-semibold text-slate-400 hover:text-[#3F348F] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-semibold text-slate-400 hover:text-[#3F348F] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}