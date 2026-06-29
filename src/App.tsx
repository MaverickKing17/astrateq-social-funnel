import { 
  Shield, 
  PlusCircle, 
  TrendingUp, 
  Sun, 
  Car, 
  Activity, 
  Lock, 
  Bell, 
  ChevronRight, 
  Check,
  EyeOff,
  Ban,
  Cpu,
  MegaphoneOff,
  Beaker,
  Map,
  Info
} from 'lucide-react';
import luxurySuvHero from './assets/images/luxury_suv_hero_1782157912256.jpg';

export default function App() {
  return (
    <div className="bg-[#e9f0f8] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#ebf0f7] to-[#d9e3ef] min-h-screen font-sans text-navy pb-16 px-4 relative overflow-x-hidden">
      {/* Decorative premium light reflections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/40 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-[480px] w-full mx-auto flex flex-col gap-4 relative z-10">
        
        {/* SECTION 1 — STATUS PILL */}
        <div className="w-full text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-[#1a5a9e]/10 border border-[#2d8fd4]/25 rounded-full py-1.5 px-4 shadow-[0_2px_8px_rgba(45,143,212,0.06)] animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2d8fd4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2d8fd4] animate-pulse-dot"></span>
            </span>
            <span className="font-sans text-[11.5px] font-semibold tracking-wider text-[#0e4b7a]">
              Pre-launch validation active · Canada
            </span>
          </div>
        </div>

        {/* SECTION 2 — BRAND HEADER */}
        <div className="text-center py-4 flex flex-col items-center">
          {/* Logo area */}
          <img 
            src="https://i.imgur.com/8Qoqkef.png" 
            alt="Astrateq Gadgets Logo" 
            className="w-[68px] h-[68px] rounded-[18px] object-cover shadow-sm select-none"
            referrerPolicy="no-referrer"
          />
          <p 
            className="font-bold text-[13px] tracking-[0.12em] uppercase text-accent-cyan mt-3.5"
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", Segoe, Roboto, Helvetica, Arial, sans-serif' }}
          >
            Drive Safer. Drive Smarter.
          </p>
        </div>

        {/* SECTION 3 — HERO CARD */}
        <div 
          className="bg-white rounded-[24px] border-2 border-[#2d8fd4]/25 shadow-[0_4px_20px_rgba(14,31,61,0.04)] overflow-hidden animate-fade-in-up hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(14,31,61,0.08)] hover:border-[#2d8fd4]/60 transition-all duration-300 group"
          style={{ animationDelay: '0s' }}
        >
          {/* Top — image area */}
          <div className="h-[210px] w-full relative overflow-hidden select-none">
            {/* Real luxury SUV city image */}
            <img 
              src={luxurySuvHero} 
              alt="Luxury SUV in Toronto city background" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Glassy Overlay Gradient to give cinematic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

            {/* Bottom-left corner badge with ultra-glass structure */}
            <div className="absolute bottom-3 left-3.5 z-10 text-[10px] font-sans font-semibold bg-white/80 backdrop-blur-md rounded-[8px] py-1 px-3 text-navy border border-white/40 shadow-xs">
              Ontario · Summer 2026
            </div>
          </div>

          {/* Bottom — text body */}
          <div className="p-6">
            <h2 className="font-serif text-[21px] font-bold text-navy leading-[1.3] mb-3 group-hover:text-accent-cyan transition-colors duration-200">
              Privacy-first Driver Awareness Intelligence for Canadian roads.
            </h2>
            <p className="font-sans text-[13.5px] font-semibold text-navy/85 leading-[1.6] mb-5">
              Complete a 60-second simulation to explore your fatigue exposure, attention patterns, and driving awareness profile — without vehicle tracking, insurance scoring, or hardware.
            </p>
            
            {/* Trust badge row with subtle pill styles */}
            <div className="flex gap-2 flex-wrap">
              <div className="inline-flex items-center gap-[6px] text-[11px] font-bold text-[#1a5a9e] font-sans bg-frost border border-[#2d8fd4]/25 py-1 px-2.5 rounded-full shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" strokeWidth={2.5} />
                <span>Privacy by design</span>
              </div>
              <div className="inline-flex items-center gap-[6px] text-[11px] font-bold text-[#1a5a9e] font-sans bg-frost border border-[#2d8fd4]/25 py-1 px-2.5 rounded-full shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" strokeWidth={2.5} />
                <span>No tracking</span>
              </div>
              <div className="inline-flex items-center gap-[6px] text-[11px] font-bold text-[#1a5a9e] font-sans bg-frost border border-[#2d8fd4]/25 py-1 px-2.5 rounded-full shadow-2xs">
                <PlusCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" strokeWidth={2.5} />
                <span>No hardware required</span>
              </div>
              <div className="inline-flex items-center gap-[6px] text-[11px] font-bold text-[#1a5a9e] font-sans bg-frost border border-[#2d8fd4]/25 py-1 px-2.5 rounded-full shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" strokeWidth={2.5} />
                <span>Pre-launch validation</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 — PRIMARY CTA CARD — Deep Premium Navy with glow */}
        <div 
          className="bg-gradient-to-br from-navy via-[#0d2245] to-[#0a182f] rounded-[24px] p-7 relative overflow-hidden animate-fade-in-up hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(14,31,61,0.22)] border-2 border-[#2d8fd4] transition-all duration-300 group"
          style={{ animationDelay: '0.05s' }}
        >
          {/* Advanced glowing modern backdrop blobs */}
          <div className="absolute -top-[50px] -right-[50px] w-[140px] h-[140px] rounded-full bg-accent-cyan/15 blur-2xl pointer-events-none group-hover:bg-accent-cyan/20 transition-all duration-300"></div>
          <div className="absolute -bottom-[30px] -left-[30px] w-[100px] h-[100px] rounded-full bg-accent-amber/5 blur-xl pointer-events-none"></div>

          {/* Eyebrow with animated cyan bar */}
          <div className="flex items-center mb-3">
            <span className="w-5 h-[2.5px] bg-accent-cyan rounded-full inline-block mr-2 group-hover:w-8 transition-all duration-300"></span>
            <span className="font-sans text-[10.5px] font-extrabold tracking-[0.16em] text-accent-cyan-2 uppercase select-none">
              Driver Awareness Simulation
            </span>
          </div>

          <h2 className="font-serif text-[26px] text-white leading-[1.20] mb-3">
            Start the 60-second Driver Awareness Simulation
          </h2>
          <p className="font-sans text-[14.5px] font-bold text-[#badef3] leading-[1.6] mb-5">
            Receive a simulated Driver Awareness Score, Fatigue Risk Awareness Profile, and Research Cohort Classification.
          </p>

          <a 
            href="https://score.astrateqgadgets.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-accent-cyan hover:bg-[#1a7dc4] active:scale-[0.985] text-white rounded-[14px] py-4.5 font-sans text-[15.5px] font-extrabold text-decoration-none shadow-[0_4px_14px_rgba(45,143,212,0.4)] transition-all duration-200 group-hover:shadow-[0_6px_20px_rgba(45,143,212,0.5)] cursor-pointer"
          >
            <span>Start Awareness Simulation</span>
            <span className="text-[18px] group-hover:translate-x-1.5 transition-transform duration-250">→</span>
          </a>

          {/* Microcopy row */}
          <div className="mt-3.5 text-center text-[11px] text-[#badef3] font-bold font-sans tracking-wide">
            Free · 60 seconds · No vehicle tracking · No hardware required
          </div>
        </div>

        {/* CORE POSITIONING LINE */}
        <div className="text-center py-1.5 animate-fade-in-up" style={{ animationDelay: '0.08s' }}>
          <p className="font-ms text-[12px] font-black tracking-wider text-[#0078d4] uppercase">
            Awareness intelligence without surveillance.
          </p>
        </div>

        {/* SECTION 5 — SECONDARY ACTION CARDS */}
        <div 
          className="flex flex-col gap-4.5 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Row 1 — Check Your Driving Context */}
          <a 
            href="https://score.astrateqgadgets.com?intent=context"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4.5 p-5 text-decoration-none bg-white rounded-[20px] border-2 border-[#0078d4] hover:border-[#005a9e] hover:bg-[#f3f9fd] hover:shadow-[0_10px_28px_rgba(0,120,212,0.15)] hover:scale-[1.01] active:scale-[0.99] group transition-all duration-300 shadow-[0_4px_16px_rgba(14,31,61,0.04)]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-[#0078d4]/10 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
              <Car className="w-6 h-6 text-[#0078d4]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-ms text-[16px] font-black tracking-normal text-[#081326] group-hover:text-[#0078d4] transition-colors duration-150">
                Check Your Driving Context
              </h3>
              <p className="font-ms text-[12.5px] font-bold text-[#1a2f4a] leading-relaxed mt-1">
                See how commute type, driving frequency, and road conditions shape your awareness profile.
              </p>
            </div>
            <ChevronRight className="w-5.5 h-5.5 text-[#0078d4] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" strokeWidth={3} />
          </a>

          {/* Row 2 — How the Simulation Works */}
          <a 
            href="https://score.astrateqgadgets.com?intent=howitworks"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4.5 p-5 text-decoration-none bg-white rounded-[20px] border-2 border-[#0078d4] hover:border-[#005a9e] hover:bg-[#f3f9fd] hover:shadow-[0_10px_28px_rgba(0,120,212,0.15)] hover:scale-[1.01] active:scale-[0.99] group transition-all duration-300 shadow-[0_4px_16px_rgba(14,31,61,0.04)]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-[#0078d4]/10 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
              <Activity className="w-6 h-6 text-[#0078d4]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-ms text-[16px] font-black tracking-normal text-[#081326] group-hover:text-[#0078d4] transition-colors duration-150">
                How the Simulation Works
              </h3>
              <p className="font-ms text-[12.5px] font-bold text-[#1a2f4a] leading-relaxed mt-1">
                Learn how behavioral inputs generate a simulated awareness profile for concept validation.
              </p>
            </div>
            <ChevronRight className="w-5.5 h-5.5 text-[#0078d4] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" strokeWidth={3} />
          </a>

          {/* Row 3 — Privacy & Trust */}
          <a 
            href="https://score.astrateqgadgets.com?intent=privacy"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4.5 p-5 text-decoration-none bg-white rounded-[20px] border-2 border-[#0078d4] hover:border-[#005a9e] hover:bg-[#f3f9fd] hover:shadow-[0_10px_28px_rgba(0,120,212,0.15)] hover:scale-[1.01] active:scale-[0.99] group transition-all duration-300 shadow-[0_4px_16px_rgba(14,31,61,0.04)]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-[#0078d4]/10 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
              <Lock className="w-6 h-6 text-[#0078d4]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-ms text-[16px] font-black tracking-normal text-[#081326] group-hover:text-[#0078d4] transition-colors duration-150">
                Privacy & Trust
              </h3>
              <p className="font-ms text-[12.5px] font-bold text-[#1a2f4a] leading-relaxed mt-1">
                See how Astrateq avoids vehicle tracking, insurance sharing, and hardware dependency.
              </p>
            </div>
            <ChevronRight className="w-5.5 h-5.5 text-[#0078d4] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" strokeWidth={3} />
          </a>

          {/* Row 4 — Join Research Updates */}
          <a 
            href="https://score.astrateqgadgets.com?intent=updates"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4.5 p-5 text-decoration-none bg-white rounded-[20px] border-2 border-[#0078d4] hover:border-[#005a9e] hover:bg-[#f3f9fd] hover:shadow-[0_10px_28px_rgba(0,120,212,0.15)] hover:scale-[1.01] active:scale-[0.99] group transition-all duration-300 shadow-[0_4px_16px_rgba(14,31,61,0.04)]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-[#0078d4]/10 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
              <Bell className="w-6 h-6 text-[#0078d4]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-ms text-[16px] font-black tracking-normal text-[#081326] group-hover:text-[#0078d4] transition-colors duration-150">
                Join Research Updates
              </h3>
              <p className="font-ms text-[12.5px] font-bold text-[#1a2f4a] leading-relaxed mt-1">
                Follow the validation study and future Driver Awareness Intelligence concept development.
              </p>
            </div>
            <ChevronRight className="w-5.5 h-5.5 text-[#0078d4] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" strokeWidth={3} />
          </a>
        </div>

        {/* SECTION 6 — HOW IT WORKS */}
        <div 
          className="bg-white rounded-[24px] border-2 border-[#2d8fd4]/25 p-6 animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.1)] hover:border-[#2d8fd4]/60 transition-all duration-200"
          style={{ animationDelay: '0.15s' }}
        >
          {/* Centered decorative accent bar */}
          <div className="w-8 h-[3px] bg-accent-cyan rounded-full mx-auto mb-3.5"></div>
          
          <h2 className="font-serif text-[18px] text-navy text-center mb-6 font-bold">
            How the validation flow works
          </h2>

          <div className="flex gap-2.5 items-start relative">
            {/* Connected beautiful dotted line across steps */}
            <div className="absolute top-3.5 left-8 right-8 h-[1px] border-t border-dashed border-[#0e1f3d]/15 z-0 pointer-events-none"></div>

            {/* Step 1 */}
            <div className="flex-1 text-center relative z-10 group/step">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2.5 select-none transition-transform duration-300 group-hover/step:scale-110 shadow-xs border border-white/20">
                1
              </div>
              <h4 className="font-sans text-[12px] font-extrabold text-navy mb-1 leading-tight group-hover/step:text-accent-cyan transition-colors duration-150">
                Start simulation
              </h4>
              <p className="font-sans text-[10px] font-bold text-[#1a3a62] leading-[1.45]">
                Answer quick awareness questions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center relative z-10 group/step">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2.5 select-none transition-transform duration-300 group-hover/step:scale-110 shadow-xs border border-white/20">
                2
              </div>
              <h4 className="font-sans text-[12px] font-extrabold text-navy mb-1 leading-tight group-hover/step:text-accent-cyan transition-colors duration-150">
                View your profile
              </h4>
              <p className="font-sans text-[10px] font-bold text-[#1a3a62] leading-[1.45]">
                Receive your simulated awareness score and fatigue profile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center relative z-10 group/step">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2.5 select-none transition-transform duration-300 group-hover/step:scale-110 shadow-xs border border-white/20">
                3
              </div>
              <h4 className="font-sans text-[12px] font-extrabold text-navy mb-1 leading-tight group-hover/step:text-accent-cyan transition-colors duration-150">
                Join research cohort
              </h4>
              <p className="font-sans text-[10px] font-bold text-[#1a3a62] leading-[1.45]">
                Choose whether to participate in the validation study.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 — PRIVACY TRUST CARD */}
        <div 
          className="bg-white rounded-[28px] border-2 border-[#2d8fd4]/25 p-6 shadow-[0_12px_36px_rgba(14,31,61,0.05)] animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0e2c54] to-[#1a5a9e] flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-sans text-[16px] font-extrabold text-navy tracking-tight leading-none mb-1.5">
                Privacy-first by design
              </h3>
              <span className="font-sans text-[9px] font-extrabold text-[#0078d4] tracking-widest uppercase bg-[#0078d4]/10 px-3 py-1 rounded-full inline-block">
                ASTRATEQ DATA PRINCIPLES
              </span>
            </div>
          </div>

          {/* Trust Cards Grid / List */}
          <div className="flex flex-col gap-4">
            
            {/* Principle 1 — No vehicle tracking */}
            <div className="group flex items-start gap-4 p-5 bg-[#f4f8fd] rounded-2xl border-2 border-[#2d8fd4]/40 hover:border-[#0078d4] hover:bg-[#ebf4fc] hover:shadow-[0_8px_24px_rgba(45,143,212,0.12)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(45,143,212,0.04)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#1a5a9e] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-all duration-200">
                <EyeOff className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-[14px] font-extrabold text-[#081326] mb-1 leading-tight group-hover:text-[#0078d4] transition-colors duration-150">
                  No vehicle tracking
                </h4>
                <p className="font-sans text-[12px] font-bold text-[#1a3a62]/90 leading-[1.5]">
                  The simulation does not connect to your vehicle or collect live driving data.
                </p>
              </div>
            </div>

            {/* Principle 2 — No insurance sharing */}
            <div className="group flex items-start gap-4 p-5 bg-[#f4f8fd] rounded-2xl border-2 border-[#2d8fd4]/40 hover:border-[#0078d4] hover:bg-[#ebf4fc] hover:shadow-[0_8px_24px_rgba(45,143,212,0.12)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(45,143,212,0.04)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#1a5a9e] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-all duration-200">
                <Ban className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-[14px] font-extrabold text-[#081326] mb-1 leading-tight group-hover:text-[#0078d4] transition-colors duration-150">
                  No insurance sharing
                </h4>
                <p className="font-sans text-[12px] font-bold text-[#1a3a62]/90 leading-[1.5]">
                  Your responses are not used for insurance scoring, underwriting, or pricing.
                </p>
              </div>
            </div>

            {/* Principle 3 — No hardware required */}
            <div className="group flex items-start gap-4 p-5 bg-[#f4f8fd] rounded-2xl border-2 border-[#2d8fd4]/40 hover:border-[#0078d4] hover:bg-[#ebf4fc] hover:shadow-[0_8px_24px_rgba(45,143,212,0.12)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(45,143,212,0.04)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#1a5a9e] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-all duration-200">
                <Cpu className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-[14px] font-extrabold text-[#081326] mb-1 leading-tight group-hover:text-[#0078d4] transition-colors duration-150">
                  No hardware required
                </h4>
                <p className="font-sans text-[12px] font-bold text-[#1a3a62]/90 leading-[1.5]">
                  The experience does not require a dashcam, scanner, device, or installation.
                </p>
              </div>
            </div>

            {/* Principle 4 — No advertising resale model */}
            <div className="group flex items-start gap-4 p-5 bg-[#f4f8fd] rounded-2xl border-2 border-[#2d8fd4]/40 hover:border-[#0078d4] hover:bg-[#ebf4fc] hover:shadow-[0_8px_24px_rgba(45,143,212,0.12)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(45,143,212,0.04)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#1a5a9e] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-all duration-200">
                <MegaphoneOff className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-[14px] font-extrabold text-[#081326] mb-1 leading-tight group-hover:text-[#0078d4] transition-colors duration-150">
                  No advertising resale model
                </h4>
                <p className="font-sans text-[12px] font-bold text-[#1a3a62]/90 leading-[1.5]">
                  The concept is not being designed around selling driver data to advertisers.
                </p>
              </div>
            </div>

            {/* Principle 5 — Simulation-only research */}
            <div className="group flex items-start gap-4 p-5 bg-[#f4f8fd] rounded-2xl border-2 border-[#2d8fd4]/40 hover:border-[#0078d4] hover:bg-[#ebf4fc] hover:shadow-[0_8px_24px_rgba(45,143,212,0.12)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(45,143,212,0.04)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#1a5a9e] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-all duration-200">
                <Beaker className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-[14px] font-extrabold text-[#081326] mb-1 leading-tight group-hover:text-[#0078d4] transition-colors duration-150">
                  Simulation-only research
                </h4>
                <p className="font-sans text-[12px] font-bold text-[#1a3a62]/90 leading-[1.5]">
                  Your inputs help validate interest in a future software concept.
                </p>
              </div>
            </div>

            {/* Principle 6 — Canadian driver focus */}
            <div className="group flex items-start gap-4 p-5 bg-[#f4f8fd] rounded-2xl border-2 border-[#2d8fd4]/40 hover:border-[#0078d4] hover:bg-[#ebf4fc] hover:shadow-[0_8px_24px_rgba(45,143,212,0.12)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(45,143,212,0.04)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#1a5a9e] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-all duration-200">
                <Map className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-[14px] font-extrabold text-[#081326] mb-1 leading-tight group-hover:text-[#0078d4] transition-colors duration-150">
                  Canadian driver focus
                </h4>
                <p className="font-sans text-[12px] font-bold text-[#1a3a62]/90 leading-[1.5]">
                  Designed around Canadian driving realities, privacy expectations, and road conditions.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 8 — PRE-LAUNCH TRANSPARENCY CARD — Amber-tinted disclosure */}
        <div 
          className="bg-gradient-to-br from-[#fffbeb] to-[#fffaf0] border-2 border-[#d97706] rounded-[24px] p-6.5 shadow-[0_12px_32px_rgba(217,119,6,0.1)] hover:shadow-[0_16px_40px_rgba(217,119,6,0.15)] transition-all duration-300 animate-fade-in-up hover:scale-[1.01]"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d97706] to-[#b45309] text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(217,119,6,0.25)] ring-4 ring-[#fef3c7]">
              <Info className="w-5.5 h-5.5" strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="font-sans text-[10px] font-black tracking-[0.18em] uppercase text-[#b45309] leading-none mb-1.5">
                Pre-launch transparency
              </h4>
              <p className="font-sans text-[16px] font-black text-[#78350f] tracking-tight leading-none">
                Official Validation Study Notice
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-[#451a03] font-sans text-[13.5px] font-extrabold leading-relaxed">
            <p className="border-l-4 border-[#d97706] pl-3.5">
              Astrateq Gadgets is currently validating interest in a software-based Driver Awareness Intelligence concept. This experience is simulated and does not connect to your vehicle, insurer, or hardware.
            </p>
            <p className="border-l-4 border-[#d97706] pl-3.5">
              Your participation helps determine whether this concept should move toward prototype development.
            </p>
          </div>
        </div>

        {/* SECTION 9 — SOCIAL FOOTER WITH PREMIUM ENHANCEMENTS */}
        <div className="mt-6 pt-4 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Fading Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#0e1f3d]/12 to-transparent mb-7"></div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            {/* Instagram */}
            <a 
              href="https://instagram.com/astrateq24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              title="Astrateq on Instagram"
            >
              <svg className="w-5.5 h-5.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a 
              href="https://x.com/AstrateqIQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-black text-white hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              title="Astrateq on X"
            >
              <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/astrateq-gadgets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#0077b5] text-white hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              title="Astrateq on LinkedIn"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Premium Footer text */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-sans text-[10px] font-bold text-navy tracking-[0.12em] uppercase bg-white border border-[#0e1f3d]/10 rounded-full py-1 px-4 shadow-3xs select-none">
              © 2026 Astrateq Gadgets • Toronto, ON • Canada
            </span>
            
            {/* Exquisite statement container */}
            <div className="max-w-[360px] mx-auto mt-2 p-[8px_16px] rounded-xl bg-[rgba(45,143,212,0.06)] border-2 border-[#2d8fd4]/25 shadow-xs relative">
              <span className="absolute top-1/2 left-2.5 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <p className="font-sans text-[11.5px] font-bold text-navy leading-relaxed pl-3.5">
                Built for Canadian drivers exploring smarter, privacy-first driver awareness.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
