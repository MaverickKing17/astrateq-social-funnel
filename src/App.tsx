import React, { useState, useEffect, useRef } from 'react';
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
  ExternalLink,
  X,
  RefreshCw,
  Award,
  Zap,
  CheckCircle2,
  Copy
} from 'lucide-react';
import luxurySuvHero from './assets/images/luxury_suv_hero_1782157912256.jpg';

export default function App() {
  // State to hold incoming query parameters
  const [outboundParams, setOutboundParams] = useState('');
  
  // State for interactive accordions
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Modals state
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);

  // Simulation state
  const [simStep, setSimStep] = useState<1 | 2 | 3>(1);
  const [commuteType, setCommuteType] = useState('urban');
  const [weatherCondition, setWeatherCondition] = useState('rain');
  const [commuteTime, setCommuteTime] = useState('medium');
  
  // Interactive reaction test state
  const [testStatus, setTestStatus] = useState<'idle' | 'waiting' | 'ready' | 'pressed' | 'done'>('idle');
  const [trials, setTrials] = useState<number[]>([]);
  const [currentTrial, setCurrentTrial] = useState(1);
  const [reactionMsg, setReactionMsg] = useState('Tap "Start Reaction Test" when ready.');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // Updates form state
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateProvince, setUpdateProvince] = useState('ON');
  const [updateSubscribed, setUpdateSubscribed] = useState(false);
  const [copiedProfile, setCopiedProfile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOutboundParams(window.location.search);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Reset simulator
  const resetSim = () => {
    setSimStep(1);
    setTestStatus('idle');
    setTrials([]);
    setCurrentTrial(1);
    setReactionMsg('Tap "Start Reaction Test" when ready.');
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Start trial
  const startTrial = () => {
    setTestStatus('waiting');
    setReactionMsg('Wait for the signal to turn BLUE...');
    const randomDelay = Math.floor(Math.random() * 2000) + 1500; // 1.5s - 3.5s
    
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTestStatus('ready');
      setReactionMsg('TAP NOW!');
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  // Handle tap on reaction box
  const handleReactionTap = () => {
    if (testStatus === 'waiting') {
      // Tapped too early
      if (timerRef.current) clearTimeout(timerRef.current);
      setReactionMsg('Too early! Wait for the blue signal.');
      setTestStatus('idle');
    } else if (testStatus === 'ready') {
      const elapsed = Date.now() - startTimeRef.current;
      const newTrials = [...trials, elapsed];
      setTrials(newTrials);

      if (currentTrial < 3) {
        setTestStatus('pressed');
        setReactionMsg(`Trial ${currentTrial} result: ${elapsed}ms. Preparing next trial...`);
        setTimeout(() => {
          setCurrentTrial(prev => prev + 1);
          startTrial();
        }, 1200);
      } else {
        setTestStatus('done');
        setReactionMsg('Simulation Complete! Calculating baseline intelligence profile...');
        setTimeout(() => {
          setSimStep(3);
        }, 1000);
      }
    }
  };

  // Calculate score
  const avgReactionTime = trials.length > 0 
    ? Math.round(trials.reduce((a, b) => a + b, 0) / trials.length) 
    : 280;

  // Compute Awareness Score
  const awarenessScore = Math.min(99, Math.max(65, Math.round(100 - (avgReactionTime - 200) * 0.15)));
  
  const getFatigueLevel = () => {
    if (avgReactionTime < 270) return { label: 'Low Risk', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' };
    if (avgReactionTime < 350) return { label: 'Moderate Risk', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' };
    return { label: 'High Strain', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' };
  };

  const copyProfile = () => {
    const text = `Astrateq Driver Awareness Profile:\n- Score: ${awarenessScore}/100\n- Avg Reaction: ${avgReactionTime}ms\n- Fatigue Profile: ${getFatigueLevel().label}\n- Cohort: Canadian ${updateProvince} Benchmark`;
    navigator.clipboard.writeText(text);
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2000);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (updateEmail) {
      setUpdateSubscribed(true);
    }
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
                alt="Astrateq Automotive Software Intelligence Logo" 
                className="w-14 h-14 rounded-xl object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Explicit Software Intelligence Brand Tagline */}
            <div className="mt-3.5 flex flex-col items-center gap-0.5">
              <span className="text-[11.5px] sm:text-[12px] font-black tracking-[0.18em] text-slate-900 uppercase">
                ASTRATEQ | Automotive Software Intelligence
              </span>
              <span className="text-[10px] font-semibold tracking-[0.14em] text-blue-700 uppercase">
                Intelligent Systems & Software
              </span>
            </div>
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
            <h1 className="text-xl md:text-2xl font-extrabold text-white leading-snug tracking-tight mb-2">
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

          <h2 className="text-lg md:text-xl font-extrabold text-white leading-snug mb-2">
            Start the 60-second Driver Awareness Simulation
          </h2>
          
          <p className="text-slate-300 text-[13px] font-medium leading-relaxed mb-4">
            Receive a simulated Driver Awareness Score, Fatigue Risk Profile, and Research Cohort Classification.
          </p>

          {/* Primary Action Button with prominent royal blue styling and scaling effect */}
          <button 
            onClick={() => { setIsSimulatorOpen(true); resetSim(); }}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4.5 px-6 font-bold text-[15px] shadow-lg shadow-blue-500/25 active:scale-[0.985] hover:scale-[1.015] transition-all duration-200 cursor-pointer text-center border-0"
          >
            <span>Start Driver Awareness Simulation</span>
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>

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
            <h3 className="text-white text-[12.5px] font-black tracking-wider uppercase mb-1 border-b border-white/5 pb-2.5">
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
              <h3 className="text-white font-extrabold text-[15px] leading-tight">
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
          <button 
            onClick={() => setIsUpdatesOpen(true)}
            className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl shadow-sm hover:border-blue-500/50 hover:bg-slate-900/90 active:scale-[0.99] transition-all duration-200 group text-left cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Bell className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-white text-[13.5px] font-extrabold leading-snug">
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
          </button>

          {/* Pre-Launch Validation Notice Card */}
          <div className="bg-slate-900 border border-white/10 rounded-[24px] px-6 py-4 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                <Info className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-[13px] font-extrabold">
                Pre-Launch Validation Notice
              </h4>
            </div>
            <p className="text-slate-300 text-[11.5px] leading-relaxed border-l-2 border-blue-500/30 pl-3">
              Astrateq is currently conducting early-stage Canadian research to check demand and validate consumer interest in this software intelligence platform concept. This pre-launch simulation does not represent a finished consumer product, nor does it require physical hardware or log live vehicular telemetry.
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
            © 2026 ASTRATEQ • AUTOMOTIVE SOFTWARE INTELLIGENCE • TORONTO, ON • CANADA
          </div>

        </footer>

      </div>

      {/* ========================================================================= */}
      {/* 60-SECOND DRIVER AWARENESS SIMULATOR MODAL */}
      {/* ========================================================================= */}
      {isSimulatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-white/15 rounded-[28px] w-full max-w-[500px] max-h-[90vh] overflow-y-auto p-6 shadow-2xl text-white relative flex flex-col gap-5">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-white leading-tight">
                    Driver Awareness Simulator
                  </h3>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    Software Intelligence Benchmark
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsSimulatorOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step Progress Pills */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className={`py-1.5 rounded-lg text-[10.5px] font-bold border transition-all ${simStep === 1 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                1. Context
              </div>
              <div className={`py-1.5 rounded-lg text-[10.5px] font-bold border transition-all ${simStep === 2 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                2. Focus Test
              </div>
              <div className={`py-1.5 rounded-lg text-[10.5px] font-bold border transition-all ${simStep === 3 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                3. Profile
              </div>
            </div>

            {/* STEP 1: CONTEXT SELECTION */}
            {simStep === 1 && (
              <div className="flex flex-col gap-4 animate-fade-in">
                <p className="text-[12.5px] text-slate-300 leading-relaxed font-medium">
                  Set your Canadian driving environment parameters to calibrate your baseline driver focus calculation:
                </p>

                {/* Commute Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Primary Route Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'urban', label: 'Urban Grid' },
                      { id: 'highway', label: '400-Series Highway' },
                      { id: 'rural', label: 'Rural / Secondary' },
                      { id: 'longdistance', label: 'Intercity Commute' }
                    ].map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCommuteType(item.id)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${commuteType === item.id ? 'bg-blue-600/30 border-blue-500 text-white shadow-sm' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weather */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Typical Weather Conditions
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'clear', label: '☀️ Clear & Dry' },
                      { id: 'rain', label: '🌧️ Heavy Rain' },
                      { id: 'snow', label: '❄️ Winter Snow/Ice' },
                      { id: 'fog', label: '🌙 Night / Low Vision' }
                    ].map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setWeatherCondition(item.id)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${weatherCondition === item.id ? 'bg-blue-600/30 border-blue-500 text-white shadow-sm' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Commute Duration */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Daily Commute Duration
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'short', label: '< 30 mins' },
                      { id: 'medium', label: '30 - 60 mins' },
                      { id: 'long', label: '60+ mins' }
                    ].map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCommuteTime(item.id)}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${commuteTime === item.id ? 'bg-blue-600/30 border-blue-500 text-white shadow-sm' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSimStep(2)}
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Proceed to Focus Test</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 2: INTERACTIVE REACTION & FOCUS TEST */}
            {simStep === 2 && (
              <div className="flex flex-col gap-4 animate-fade-in text-center">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Trial {currentTrial} of 3</span>
                  <span>Interactive Reaction Speed</span>
                </div>

                {/* Reaction Area Box */}
                <div 
                  onClick={testStatus === 'ready' || testStatus === 'waiting' ? handleReactionTap : undefined}
                  className={`min-h-[160px] rounded-2xl border-2 flex flex-col items-center justify-center p-6 transition-all duration-200 select-none ${
                    testStatus === 'ready' 
                      ? 'bg-cyan-500 border-cyan-300 text-slate-950 cursor-pointer shadow-lg shadow-cyan-500/30 scale-[1.02]' 
                      : testStatus === 'waiting'
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 cursor-pointer'
                      : testStatus === 'pressed'
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-950 border-white/15 text-slate-300'
                  }`}
                >
                  {testStatus === 'ready' && (
                    <div className="flex flex-col items-center gap-1 animate-bounce">
                      <Zap className="w-10 h-10 text-slate-950" />
                      <span className="text-xl font-black uppercase tracking-widest">TAP NOW!</span>
                    </div>
                  )}

                  {testStatus === 'waiting' && (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-400 animate-ping"></div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Wait for Blue Signal...
                      </span>
                    </div>
                  )}

                  {testStatus === 'pressed' && (
                    <div className="flex flex-col items-center gap-1">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-300">{reactionMsg}</span>
                    </div>
                  )}

                  {testStatus === 'idle' && (
                    <div className="flex flex-col items-center gap-3">
                      <Activity className="w-8 h-8 text-blue-400" />
                      <p className="text-xs font-semibold text-slate-300">
                        Tap the button below to start Trial {currentTrial}. When the box turns <span className="text-cyan-400 font-bold">CYAN BLUE</span>, tap inside as fast as you can!
                      </p>
                    </div>
                  )}
                </div>

                {testStatus === 'idle' && (
                  <button
                    type="button"
                    onClick={startTrial}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.98] transition-all"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Start Trial {currentTrial}</span>
                  </button>
                )}

                {trials.length > 0 && (
                  <div className="flex items-center justify-center gap-3 text-xs font-bold text-slate-400 border-t border-white/10 pt-3">
                    {trials.map((t, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                        T{idx + 1}: <strong className="text-cyan-400">{t}ms</strong>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: RESULTS & PROFILE */}
            {simStep === 3 && (
              <div className="flex flex-col gap-4 animate-fade-in">
                
                {/* Score Hero Card */}
                <div className="bg-gradient-to-b from-blue-950/80 to-slate-950 border border-blue-500/30 rounded-2xl p-5 text-center flex flex-col items-center gap-2 relative overflow-hidden shadow-lg">
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 rounded-full px-2.5 py-0.5 text-[9px] font-bold text-blue-300 uppercase">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Calculated Profile</span>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Driver Awareness Score
                  </span>

                  <div className="text-4xl font-black text-white tracking-tight flex items-baseline justify-center gap-1 my-1">
                    <span className="text-cyan-400">{awarenessScore}</span>
                    <span className="text-slate-500 text-lg font-bold">/100</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-bold text-cyan-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>Optimal Attention Recovery Margin</span>
                  </div>
                </div>

                {/* Breakdown Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Avg Response Time
                    </span>
                    <span className="text-base font-extrabold text-white">
                      {avgReactionTime} ms
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Fast visual reaction
                    </span>
                  </div>

                  <div className={`border rounded-xl p-3 flex flex-col gap-1 ${getFatigueLevel().bg}`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Fatigue Risk Profile
                    </span>
                    <span className={`text-base font-extrabold ${getFatigueLevel().color}`}>
                      {getFatigueLevel().label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Baseline focus stability
                    </span>
                  </div>
                </div>

                {/* Cohort Classification */}
                <div className="bg-slate-950 border border-white/10 rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Canadian Research Cohort
                      </span>
                      <span className="text-xs font-extrabold text-white">
                        {updateProvince} Urban Commuter Benchmark
                      </span>
                    </div>
                  </div>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="button"
                    onClick={copyProfile}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer border border-white/10 text-xs transition-colors"
                  >
                    {copiedProfile ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedProfile ? 'Profile Copied to Clipboard!' : 'Copy Intelligence Profile'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIsSimulatorOpen(false); setIsUpdatesOpen(true); }}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs shadow-md active:scale-[0.98] transition-all"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Join Research Updates with Profile</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetSim}
                    className="text-slate-400 hover:text-slate-200 text-xs font-semibold py-1 flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Retake 60-Second Simulation</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* RESEARCH UPDATES MODAL */}
      {/* ========================================================================= */}
      {isUpdatesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-white/15 rounded-[28px] w-full max-w-[460px] p-6 shadow-2xl text-white relative flex flex-col gap-5">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-white leading-tight">
                    Join Astrateq Research Updates
                  </h3>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    Automotive Software Intelligence
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { setIsUpdatesOpen(false); setUpdateSubscribed(false); }}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {updateSubscribed ? (
              <div className="flex flex-col items-center text-center gap-3 py-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-white">Registered for Research Cohort</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                  Thank you! You have been enrolled in Astrateq's Canadian driver awareness research group (<strong className="text-blue-400">{updateProvince} Cohort</strong>). We will notify you when new milestone features are released.
                </p>
                <button
                  type="button"
                  onClick={() => setIsUpdatesOpen(false)}
                  className="mt-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 px-6 rounded-xl cursor-pointer transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-4">
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Follow pre-launch research milestones and driver focus benchmarking updates directly from our Toronto research team.
                </p>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="driver@example.ca"
                    value={updateEmail}
                    onChange={(e) => setUpdateEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Province / Territory
                  </label>
                  <select
                    value={updateProvince}
                    onChange={(e) => setUpdateProvince(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="ON">Ontario (ON)</option>
                    <option value="BC">British Columbia (BC)</option>
                    <option value="AB">Alberta (AB)</option>
                    <option value="QC">Quebec (QC)</option>
                    <option value="NS">Nova Scotia (NS)</option>
                    <option value="MB">Manitoba (MB)</option>
                    <option value="SK">Saskatchewan (SK)</option>
                    <option value="NB">New Brunswick (NB)</option>
                    <option value="NL">Newfoundland & Labrador (NL)</option>
                    <option value="PE">Prince Edward Island (PE)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.98] transition-all text-xs"
                >
                  <Bell className="w-4 h-4" />
                  <span>Subscribe to Research Updates</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center font-medium">
                  🔒 Privacy guarantee: No spam. Your email will never be shared or sold.
                </p>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
