import { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  EyeOff, 
  Ban, 
  Cpu, 
  MegaphoneOff, 
  Beaker, 
  Map, 
  Info, 
  ArrowRight, 
  ChevronRight, 
  Check,
  Activity,
  Car,
  Bell,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import luxurySuvHero from './assets/images/luxury_suv_hero_1782157912256.jpg';

export default function App() {
  // State to hold incoming query parameters
  const [outboundParams, setOutboundParams] = useState('');
  
  // State for interactive accordions
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOutboundParams(window.location.search);
    }
  }, []);

  // Helper to preserve incoming query parameters on outbound links
  const getOutboundUrl = (destUrlStr: string) => {
    try {
      const destUrl = new URL(destUrlStr);
      if (outboundParams) {
        const currentParams = new URLSearchParams(outboundParams);
        currentParams.forEach((value, key) => {
          destUrl.searchParams.set(key, value);
        });
      }
      return destUrl.toString();
    } catch (e) {
      return destUrlStr;
    }
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20 px-4 relative overflow-x-hidden font-sans">
      {/* Subtle background decorative premium gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-blue-100/30 via-slate-50 to-transparent pointer-events-none -z-10"></div>
      
      {/* Micro Grid Pattern for high tech texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 -z-20 pointer-events-none"></div>

      <div className="max-w-[480px] w-full mx-auto flex flex-col gap-5 relative z-10 pt-6">
        
        {/* ========================================================================= */}
        {/* 1. TOP STATUS ANCHOR & BRANDING */}
        {/* ========================================================================= */}
        <div id="top-status-branding" className="w-full flex flex-col items-center gap-4.5 mb-2">
          
          {/* Centered High-Contrast Capsule Badge */}
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/60 rounded-full py-1 px-3.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-bold tracking-wide text-blue-700 uppercase">
              Pre-launch validation active - Canada
            </span>
          </div>

          {/* Centered Minimal Logo Frame */}
          <div className="flex flex-col items-center text-center">
            <div className="p-1 bg-white rounded-2xl shadow-md border border-slate-200/80">
              <img 
                src="https://i.imgur.com/8Qoqkef.png" 
                alt="Astrateq Gadgets Logo" 
                className="w-14 h-14 rounded-xl object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Tracking-Wide Uppercase Tagline */}
            <p className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase mt-4">
              DRIVE SAFER. DRIVE SMARTER.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CONCEPT HERO CARD */}
        {/* ========================================================================= */}
        <section id="concept-hero" className="bg-slate-900 border border-white/10 rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          
          {/* 16:9 Image Aspect Ratio Container */}
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-950 select-none">
            <img 
              src={luxurySuvHero} 
              alt="Luxury SUV on a modern rain-slicked Canadian city street" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Cinematic Gradient Tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none"></div>

            {/* Overlapping top-left Concept Visual Badge */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md rounded-lg py-1 px-2.5 border border-white/25 shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-[9px] font-black tracking-widest text-cyan-400 uppercase">
                CONCEPT VISUAL
              </span>
            </div>
          </div>

          {/* Hero text section */}
          <div className="px-6 py-4 flex flex-col gap-3">
            <h1 className="px-5 py-3 text-xl md:text-2xl font-extrabold text-white leading-snug tracking-tight mb-2">
              Privacy-first Driver Awareness Intelligence for Canadian roads.
            </h1>
            
            <p className="text-slate-300 text-[13px] font-medium leading-relaxed mb-4">
              Complete a brief simulation to explore your baseline focus profile—without vehicle tracking, hardware dependencies, or third-party data sharing.
            </p>

            {/* Layout Pills (Row of three inline micro-badges with clean icons) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-slate-300 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>🔒 Privacy by design</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-slate-300 text-xs font-semibold">
                <EyeOff className="w-3.5 h-3.5 text-cyan-400" />
                <span>🚫 No tracking</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-slate-300 text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>🛠️ No hardware required</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PRIMARY CTA ACCENT CARD */}
        {/* ========================================================================= */}
        <section id="primary-cta" className="bg-slate-900 border border-white/10 rounded-[28px] px-6 py-4 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          
          {/* Subtle Ambient Accent Glow Grid in corner */}
          <div className="absolute -top-[60px] -right-[60px] w-32 h-32 rounded-full bg-blue-500/10 blur-2xl pointer-events-none group-hover:bg-blue-500/15 transition-colors duration-300"></div>
          
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-4 h-1 bg-blue-500 rounded-full"></span>
            <span className="text-[9px] font-black tracking-widest text-blue-400 uppercase">
              IMMEDIATE SIMULATOR ACCESS
            </span>
          </div>

          <h2 className="px-5 py-3 text-lg md:text-xl font-extrabold text-white leading-snug mb-2">
            Start the 60-second Driver Awareness Simulation
          </h2>
          
          <p className="text-slate-300 text-[13px] font-medium leading-relaxed mb-4">
            Receive a simulated Driver Awareness Score, Fatigue Risk Profile, and Research Cohort Classification.
          </p>

          {/* Primary Action Button with prominent royal blue styling and scaling effect */}
          <a 
            href={getOutboundUrl("https://score.astrateqgadgets.com")}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4.5 px-6 font-bold text-[15px] shadow-lg shadow-blue-500/25 active:scale-[0.985] hover:scale-[1.015] transition-all duration-200 cursor-pointer text-center decoration-none"
          >
            <span>Start Driver Awareness Simulation</span>
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
          </a>

          {/* Micro-disclaimer */}
          <p className="text-slate-400 text-[10.5px] font-semibold text-center mt-3.5 tracking-wide">
            Free • 60 seconds • No vehicle tracking • No hardware required
          </p>
        </section>

        {/* SECTION LABEL UPPERCASE */}
        <div className="text-center mt-2.5 mb-1">
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
            AWARENESS INTELLIGENCE WITHOUT SURVEILLANCE.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4. STEP-BY-STEP FLOW BLOCK */}
        {/* ========================================================================= */}
        <section id="simulation-flow-details" className="flex flex-col gap-4">
          
          {/* Interactive Accordion Block */}
          <div className="bg-slate-900 border border-white/10 rounded-[28px] px-6 py-4 flex flex-col gap-3 shadow-md">
            <h3 className="px-5 py-3 text-white text-[12.5px] font-black tracking-wider uppercase mb-1 border-b border-white/5 pb-2.5">
              Explore Concept Dimensions
            </h3>

            {/* Accordion 1 */}
            <div className="border-b border-white/5 pb-2">
              <button 
                onClick={() => toggleAccordion('context')}
                className="w-full flex items-center justify-between text-left py-2.5 text-white hover:text-blue-400 transition-colors duration-150 cursor-pointer focus:outline-none"
                aria-expanded={openAccordion === 'context'}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/15">
                    <Car className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[14px] font-bold text-white">Check Your Driving Context</span>
                </div>
                <div className={`transition-transform duration-300 ${openAccordion === 'context' ? 'rotate-90' : ''}`}>
                  <ChevronRight className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                </div>
              </button>
              
              {openAccordion === 'context' && (
                <div className="pl-11 pr-4 pb-3 pt-1 text-slate-300 text-[12.5px] leading-relaxed animate-fade-in-up">
                  Analyze how your common commute types, weekly driving frequencies, road weather conditions, and seasonal parameters influence driver attention and stress margins.
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="border-b border-white/5 pb-2">
              <button 
                onClick={() => toggleAccordion('howitworks')}
                className="w-full flex items-center justify-between text-left py-2.5 text-white hover:text-blue-400 transition-colors duration-150 cursor-pointer focus:outline-none"
                aria-expanded={openAccordion === 'howitworks'}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/15">
                    <Activity className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[14px] font-bold text-white">How the Simulation Works</span>
                </div>
                <div className={`transition-transform duration-300 ${openAccordion === 'howitworks' ? 'rotate-90' : ''}`}>
                  <ChevronRight className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                </div>
              </button>
              
              {openAccordion === 'howitworks' && (
                <div className="pl-11 pr-4 pb-3 pt-1 text-slate-300 text-[12.5px] leading-relaxed animate-fade-in-up">
                  Our lightweight pre-launch browser simulation processes rapid response baseline inputs to model cognitive focus shifts, fatigue levels, and distraction resistance scoring.
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="pb-1">
              <button 
                onClick={() => toggleAccordion('privacy')}
                className="w-full flex items-center justify-between text-left py-2.5 text-white hover:text-blue-400 transition-colors duration-150 cursor-pointer focus:outline-none"
                aria-expanded={openAccordion === 'privacy'}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/15">
                    <Lock className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[14px] font-bold text-white">Privacy & Trust</span>
                </div>
                <div className={`transition-transform duration-300 ${openAccordion === 'privacy' ? 'rotate-90' : ''}`}>
                  <ChevronRight className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                </div>
              </button>
              
              {openAccordion === 'privacy' && (
                <div className="pl-11 pr-4 pb-3 pt-1 text-slate-300 text-[12.5px] leading-relaxed animate-fade-in-up">
                  We collect no live vehicular telemetry, GPS streams, or dashboard camera feeds. Your data is strictly structured for pre-launch interest validation and remains isolated.
                </div>
              )}
            </div>

          </div>

          {/* 3-Step Numbered Sequence Block */}
          <div className="bg-slate-900 border border-white/10 rounded-[28px] px-6 py-4 shadow-md">
            <h3 className="text-white text-[14px] font-extrabold text-center mb-5.5 tracking-tight">
              How the validation flow works
            </h3>

            <div className="grid grid-cols-3 gap-3 relative">
              {/* Connected guide line */}
              <div className="absolute top-[14px] left-10 right-10 h-[1px] border-t border-dashed border-white/10 z-0"></div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-8.5 h-8.5 rounded-full bg-blue-600 border border-white/10 text-white font-bold text-xs flex items-center justify-center mb-2.5 shadow-sm">
                  1
                </div>
                <span className="text-white text-[11px] font-bold leading-tight mb-1">
                  Start simulation
                </span>
                <span className="text-slate-400 text-[10px] leading-normal font-medium">
                  Answer quick baseline questions.
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-8.5 h-8.5 rounded-full bg-slate-800 border border-white/10 text-white font-bold text-xs flex items-center justify-center mb-2.5 shadow-sm">
                  2
                </div>
                <span className="text-white text-[11px] font-bold leading-tight mb-1">
                  View your profile
                </span>
                <span className="text-slate-400 text-[10px] leading-normal font-medium">
                  Analyze your simulated score.
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-8.5 h-8.5 rounded-full bg-slate-800 border border-white/10 text-white font-bold text-xs flex items-center justify-center mb-2.5 shadow-sm">
                  3
                </div>
                <span className="text-white text-[11px] font-bold leading-tight mb-1">
                  Join cohort
                </span>
                <span className="text-slate-400 text-[10px] leading-normal font-medium">
                  Choose whether to follow updates.
                </span>
              </div>

            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. "PRIVACY FIRST BY DESIGN" ARCHITECTURE CARD */}
        {/* ========================================================================= */}
        <section id="privacy-architecture" className="bg-slate-900 border border-white/10 rounded-[28px] px-6 py-4 shadow-xl">
          
          {/* Section Header */}
          <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-inner">
              <Shield className="w-5.5 h-5.5 text-blue-400" />
            </div>
            <div>
              <h3 className="px-5 py-3 text-white font-extrabold text-[15px] leading-tight">
                Privacy-First by Design
              </h3>
              <p className="text-[9.5px] font-black tracking-widest text-blue-400 uppercase mt-0.5">
                Core Architecture Principles
              </p>
            </div>
          </div>

          {/* Deep Vertical Outline list */}
          <div className="flex flex-col gap-4.5">
            
            {/* Principle 1 — No vehicle tracking */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-200">
                <EyeOff className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-[13px] font-extrabold leading-tight mb-1">
                  No vehicle tracking
                </h4>
                <p className="text-slate-400 text-[11.5px] leading-relaxed">
                  The simulation does not connect to your vehicle or collect live driving data.
                </p>
              </div>
            </div>

            {/* Principle 2 — No insurance storing */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-200">
                <Ban className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-[13px] font-extrabold leading-tight mb-1">
                  No insurance storing
                </h4>
                <p className="text-slate-400 text-[11.5px] leading-relaxed">
                  Your inputs are never shared with insurance agencies or used for premium scoring or pricing.
                </p>
              </div>
            </div>

            {/* Principle 3 — No hardware required */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-200">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-[13px] font-extrabold leading-tight mb-1">
                  No hardware required
                </h4>
                <p className="text-slate-400 text-[11.5px] leading-relaxed">
                  Does not require specialized sensors, external dashcams, or in-cabin hardware installations.
                </p>
              </div>
            </div>

            {/* Principle 4 — No advertising resale model */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-200">
                <MegaphoneOff className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-[13px] font-extrabold leading-tight mb-1">
                  No advertising resale model
                </h4>
                <p className="text-slate-400 text-[11.5px] leading-relaxed">
                  Your focus response patterns remain sovereign and are never sold to third-party advertising brokers.
                </p>
              </div>
            </div>

            {/* Principle 5 — Simulation-only research */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-200">
                <Beaker className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-[13px] font-extrabold leading-tight mb-1">
                  Simulation-only research
                </h4>
                <p className="text-slate-400 text-[11.5px] leading-relaxed">
                  Your inputs validate interest and demand in a future sovereign vehicle safety software concept.
                </p>
              </div>
            </div>

            {/* Principle 6 — Canadian driver focus */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-200">
                <Map className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-[13px] font-extrabold leading-tight mb-1">
                  Canadian driver focus
                </h4>
                <p className="text-slate-400 text-[11.5px] leading-relaxed">
                  Tailored explicitly to unique Canadian commuting metrics, weather conditions, and provincial privacy frameworks.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 6. TRANSPARENT LEGAL FOOTER */}
        {/* ========================================================================= */}
        <footer id="legal-footer" className="flex flex-col gap-5 mt-2">
          
          {/* Join Research Updates Link Component */}
          <a 
            href={getOutboundUrl("https://score.astrateqgadgets.com?intent=updates")}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl shadow-sm hover:border-blue-500/50 hover:bg-slate-900/90 active:scale-[0.99] transition-all duration-200 group decoration-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Bell className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="px-5 py-3 text-white text-[13.5px] font-extrabold leading-snug">
                  Join Research Updates
                </h4>
                <p className="text-slate-400 text-[11px] leading-normal font-medium">
                  Follow study updates and future concept milestones.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-black tracking-wider text-blue-400 uppercase hidden sm:inline-block">
                FOLLOW
              </span>
              <ChevronRight className="w-4 h-4 text-blue-400 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </div>
          </a>

          {/* Pre-Launch Validation Notice Card */}
          <div className="bg-slate-900 border border-white/10 rounded-[24px] px-6 py-4 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                <Info className="w-4.5 h-4.5" />
              </div>
              <h4 className="px-5 py-3 text-white text-[13px] font-extrabold">
                Pre-Launch Validation Notice
              </h4>
            </div>
            <p className="text-slate-300 text-[11.5px] leading-relaxed border-l-2 border-blue-500/30 pl-3">
              Astrateq Gadgets is currently conducting early-stage Canadian research to check demand and validate consumer interest in this software concept. This pre-launch simulation does not represent a finished consumer product, nor does it log live vehicular telemetry.
            </p>
          </div>

          {/* Centered Social Icons */}
          <div className="flex justify-center gap-3.5 pt-2">
            {/* Instagram */}
            <a 
              href="https://instagram.com/astrateq24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-pink-500/10 hover:shadow-pink-500/25"
              title="Astrateq on Instagram"
            >
              <svg className="w-4.5 h-4.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* X */}
            <a 
              href="https://x.com/AstrateqIQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:bg-neutral-900"
              title="Astrateq on X"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/astrateq-gadgets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 hover:bg-[#00629b]"
              title="Astrateq on LinkedIn"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Centered fine-print legal line */}
          <div className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
            © 2026 ASTRATEQ GADGETS • TORONTO, ON • CANADA
          </div>

        </footer>

      </div>
    </div>
  );
}
