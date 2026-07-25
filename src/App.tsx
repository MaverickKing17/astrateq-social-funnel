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
  Copy,
  Brain,
  MessageSquare,
  Compass,
  Sliders,
  HeartPulse,
  Gauge,
  LayoutGrid,
  GitCommit,
  SlidersHorizontal,
  TrendingUp,
  Layers
} from 'lucide-react';
import luxurySuvHero from './assets/images/luxury_suv_hero_1782157912256.jpg';
import simVehicle3d from './assets/images/sim_vehicle_3d_1784999034628.jpg';
import simVehicleHero3d from './assets/images/sim_vehicle_hero_3d_1784999345879.jpg';
import cockpitWireframe3d from './assets/images/cockpit_wireframe_3d_1785000135508.jpg';

export default function App() {
  // State to hold incoming query parameters
  const [outboundParams, setOutboundParams] = useState('');
  
  // State for interactive accordions
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Modals state
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);

  // Simulation state (5 Stages)
  const [simStep, setSimStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isStepTransitioning, setIsStepTransitioning] = useState(false);
  const [commuteType, setCommuteType] = useState('urban');
  const [weatherCondition, setWeatherCondition] = useState('rain');
  const [commuteTime, setCommuteTime] = useState('medium');
  
  // Visual layout variation options (User Prompt requested variations)
  const [welcomeOption, setWelcomeOption] = useState<'option1' | 'option2' | 'option3'>('option1');
  const [resultsOption, setResultsOption] = useState<'grid' | 'journey' | 'minimal'>('grid');
  
  // Generation & profile animation state
  const [genStep, setGenStep] = useState(1);
  const [displayScore, setDisplayScore] = useState(0);

  // In-modal feedback state
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackInput, setFeedbackInput] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  // Interactive reaction test state
  const [testStatus, setTestStatus] = useState<'idle' | 'waiting' | 'ready' | 'pressed' | 'done'>('idle');
  const [trials, setTrials] = useState<number[]>([]);
  const [currentTrial, setCurrentTrial] = useState(1);
  const [reactionMsg, setReactionMsg] = useState('Tap "Start Trial 1" when ready.');
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

  // Calculate score
  const avgReactionTime = trials.length > 0 
    ? Math.round(trials.reduce((a, b) => a + b, 0) / trials.length) 
    : 280;

  // Compute Awareness Score
  const awarenessScore = Math.min(99, Math.max(65, Math.round(100 - (avgReactionTime - 200) * 0.15)));

  // Screen 4 Profile Generation Timer and Score Increment Effect
  useEffect(() => {
    if (simStep === 4) {
      setGenStep(1);
      setDisplayScore(0);

      const t1 = setTimeout(() => setGenStep(2), 700);
      const t2 = setTimeout(() => setGenStep(3), 1500);

      const targetScore = awarenessScore;
      let start = 0;
      const interval = setInterval(() => {
        start += 3;
        if (start >= targetScore) {
          setDisplayScore(targetScore);
          clearInterval(interval);
        } else {
          setDisplayScore(start);
        }
      }, 30);

      const t3 = setTimeout(() => {
        setSimStep(5);
      }, 2800);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearInterval(interval);
      };
    }
  }, [simStep, awarenessScore]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Reset simulator
  const resetSim = () => {
    setSimStep(1);
    setIsStepTransitioning(false);
    setTestStatus('idle');
    setTrials([]);
    setCurrentTrial(1);
    setReactionMsg('Tap "Start Trial 1" when ready.');
    setIsFeedbackOpen(false);
    setFeedbackInput('');
    setFeedbackSent(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Transition to focus test smoothly
  const handleProceedToFocusTest = () => {
    setIsStepTransitioning(true);
    setTimeout(() => {
      setSimStep(3);
      setIsStepTransitioning(false);
    }, 400);
  };

  // Start trial
  const startTrial = () => {
    setTestStatus('waiting');
    setReactionMsg('Wait for the signal to turn CYAN BLUE...');
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
      setReactionMsg('Too early! Wait for the cyan signal.');
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
        }, 1100);
      } else {
        setTestStatus('done');
        setReactionMsg('Focus Assessment Complete! Generating Intelligence Profile...');
        setIsStepTransitioning(true);
        setTimeout(() => {
          setSimStep(4);
          setIsStepTransitioning(false);
        }, 600);
      }
    }
  };


  const getAttentionStability = () => {
    if (avgReactionTime < 270) return { label: 'GOOD', color: 'text-emerald-400', desc: 'Fast cognitive reaction velocity' };
    if (avgReactionTime < 350) return { label: 'STABLE', color: 'text-cyan-300', desc: 'Consistent baseline response' };
    return { label: 'MODERATE', color: 'text-amber-300', desc: 'Slight response latency under load' };
  };

  const getFatigueRisk = () => {
    if (avgReactionTime < 270 && commuteTime !== 'long') return { label: 'LOW', color: 'text-emerald-400', desc: 'High mental energy reserve' };
    if (avgReactionTime < 350 || commuteTime === 'medium') return { label: 'MODERATE', color: 'text-cyan-300', desc: 'Standard commute focus baseline' };
    return { label: 'ELEVATED', color: 'text-amber-300', desc: 'Typical for heavy urban traffic' };
  };

  const getEnvironmentalComplexity = () => {
    if (weatherCondition === 'snow' || weatherCondition === 'fog' || (commuteType === 'urban' && commuteTime === 'long')) {
      return { label: 'HIGH', color: 'text-amber-300', desc: 'Multi-variable road demand' };
    }
    if (weatherCondition === 'rain' || commuteType === 'highway' || commuteTime === 'medium') {
      return { label: 'MODERATE', color: 'text-cyan-300', desc: 'Balanced commute factors' };
    }
    return { label: 'LOW', color: 'text-emerald-400', desc: 'Predictable clear conditions' };
  };

  const getEducationalInsight = () => {
    const routeLabel = commuteType === 'urban' ? 'urban grid' : commuteType === 'highway' ? 'highway corridor' : commuteType === 'rural' ? 'rural secondary route' : 'intercity route';
    const weatherLabel = weatherCondition === 'clear' ? 'clear weather' : weatherCondition === 'rain' ? 'heavy rainfall' : weatherCondition === 'snow' ? 'winter snow & ice' : 'night low-visibility';
    const durationLabel = commuteTime === 'short' ? 'short commute' : commuteTime === 'medium' ? '30-60 minute commute' : 'extended 60+ minute commute';

    return `Your simulation results suggest that navigating a ${durationLabel} on an ${routeLabel} during ${weatherLabel} increases overall cognitive demand. Astrateq's privacy-first software is being engineered to support drivers during peak cognitive load without collecting personal telematics.`;
  };

  const copyProfile = () => {
    const text = `Astrateq Driver Awareness Profile:\n- Overall Score: ${awarenessScore}/100\n- Avg Reaction: ${avgReactionTime}ms\n- Attention Stability: ${getAttentionStability().label}\n- Fatigue Risk: ${getFatigueRisk().label}\n- Environmental Complexity: ${getEnvironmentalComplexity().label}\n- Cohort: Canadian ${updateProvince} Benchmark`;
    navigator.clipboard.writeText(text);
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 3000);
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
        <div id="top-status-branding" className="w-full flex flex-col items-center gap-4 mb-2">
          
          {/* Centered High-Contrast Capsule Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50/90 border border-blue-200/80 rounded-full py-1.5 px-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-bold tracking-wide text-blue-800 uppercase">
              Pre-launch Research Active • Canada
            </span>
          </div>

          {/* Centered Minimal Logo Frame */}
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-200/80 ring-1 ring-slate-900/5">
              <img 
                src="https://i.imgur.com/8Qoqkef.png" 
                alt="Astrateq Automotive Software Intelligence Logo" 
                className="w-14 h-14 rounded-xl object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Explicit Software Intelligence Brand Tagline */}
            <div className="mt-3 flex flex-col items-center gap-1.5">
              <h1 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-slate-900 uppercase">
                ASTRATEQ
              </h1>
              <div className="inline-flex items-center gap-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full px-3.5 py-1">
                <Cpu className="w-3.5 h-3.5 text-blue-700" />
                <span className="text-[10.5px] font-extrabold tracking-[0.14em] text-blue-800 uppercase">
                  Automotive Software Intelligence
                </span>
              </div>
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none"></div>

            {/* Overlapping top-left Concept Visual Badge */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md rounded-lg py-1 px-2.5 border border-white/25 shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-[9px] font-black tracking-widest text-cyan-400 uppercase">
                CONCEPT VISUAL
              </span>
            </div>
          </div>

          {/* Hero text section */}
          <div className="px-6 py-5 flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug tracking-tight mb-1">
              Privacy-First Driver Awareness Intelligence for Canadian Roads
            </h2>
            
            <p className="text-slate-300 text-[13px] font-medium leading-relaxed mb-3">
              Complete a brief simulation to explore your baseline focus profile—without vehicle tracking, hardware dependencies, or third-party data sharing.
            </p>

            {/* Layout Pills (Row of three inline micro-badges with clean icons) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-slate-300 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Privacy by Design</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-slate-300 text-xs font-semibold">
                <EyeOff className="w-3.5 h-3.5 text-cyan-400" />
                <span>No Tracking</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-slate-300 text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>No Hardware Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PRIMARY CTA ACCENT CARD */}
        {/* ========================================================================= */}
        <section id="primary-cta" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-white/10 rounded-[28px] p-6 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          
          {/* Subtle Ambient Accent Glow Grid in corner */}
          <div className="absolute -top-[60px] -right-[60px] w-36 h-36 rounded-full bg-blue-500/15 blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-300"></div>
          
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-4 h-1 bg-blue-500 rounded-full"></span>
            <span className="text-[9.5px] font-black tracking-widest text-cyan-400 uppercase">
              IMMEDIATE SIMULATOR ACCESS
            </span>
          </div>

          <h2 className="text-lg md:text-xl font-extrabold text-white leading-snug mb-2">
            Start the 60-Second Driver Awareness Simulation
          </h2>
          
          <p className="text-slate-300 text-[13px] font-medium leading-relaxed mb-5">
            Receive a simulated Driver Awareness Score, Fatigue Risk Profile, and Research Cohort Classification.
          </p>

          {/* Primary Action Button with glowing gradient */}
          <button 
            onClick={() => { setIsSimulatorOpen(true); resetSim(); }}
            className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl py-4 px-6 font-extrabold text-[15px] shadow-lg shadow-blue-500/25 active:scale-[0.985] hover:scale-[1.01] transition-all duration-200 cursor-pointer text-center border-0 group/btn"
          >
            <span>Start Driver Awareness Simulation</span>
            <ArrowRight className="w-4.5 h-4.5 text-white transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.5} />
          </button>

          {/* Micro-disclaimer */}
          <div className="flex items-center justify-center gap-2 text-slate-400 text-[10.5px] font-semibold text-center mt-3.5 tracking-wide">
            <span>Free</span>
            <span className="text-blue-500">•</span>
            <span>60 seconds</span>
            <span className="text-blue-500">•</span>
            <span>No vehicle tracking</span>
            <span className="text-blue-500">•</span>
            <span>Software-only</span>
          </div>
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
      {/* ASTRATEQ DRIVER AWARENESS SIMULATOR (5-STAGE MOBILE INTELLIGENCE APP) */}
      {/* ========================================================================= */}
      {isSimulatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-lg animate-fade-in">
          <div className="bg-[#081028] border border-cyan-500/30 rounded-[28px] w-full max-w-[540px] max-h-[92vh] overflow-y-auto p-5 sm:p-6 shadow-[0_0_35px_rgba(6,182,212,0.25)] text-white relative flex flex-col gap-4 sm:gap-5">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-500/20">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-white leading-tight tracking-wide">
                    Driver Awareness Simulation
                  </h3>
                  <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                    <Shield className="w-3 h-3 text-cyan-400" />
                    <span>ASTRATEQ PRIVACY-FIRST RESEARCH</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsSimulatorOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 5-Stage Step Progress Navigation Tabs */}
            <div className="grid grid-cols-5 gap-1.5 text-center">
              {[
                { step: 1, label: 'Welcome' },
                { step: 2, label: 'Context' },
                { step: 3, label: 'Focus' },
                { step: 4, label: 'Analysis' },
                { step: 5, label: 'Profile' }
              ].map(item => (
                <button 
                  key={item.step}
                  type="button"
                  onClick={() => setIsStepTransitioning(false) || setSimStep(item.step)}
                  className={`py-1.5 px-1 rounded-xl text-[10px] font-extrabold border transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    simStep === item.step 
                      ? 'bg-cyan-500 border-cyan-300 text-white shadow-[0_0_14px_rgba(6,182,212,0.6)] scale-[1.02]' 
                      : simStep > item.step 
                      ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60' 
                      : 'bg-slate-900/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                  }`}
                >
                  {simStep > item.step ? <Check className="w-3 h-3 text-cyan-400 shrink-0" /> : null}
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>

            {/* STEP TRANSITION LOADER */}
            {isStepTransitioning ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-fade-in my-2">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin"></div>
                  <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                    {simStep === 1 ? 'Initializing Simulation Environment...' : 'Processing Cognitive Telematics...'}
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-400">
                    Applying privacy-first baseline algorithms
                  </span>
                </div>
              </div>
            ) : (
              <>
                {/* SCREEN 1: WELCOME & HIGH-TECH WIREFRAME SIMULATION */}
                {simStep === 1 && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    
                    {/* Visual Interface Shell */}
                    <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#050b18] border border-cyan-500/25 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
                      
                      {/* Ambient Volumetric Backdrop */}
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-2xl pointer-events-none"></div>
                      
                      {/* High-Tech 3D Vehicle & Cockpit Visual Canvas with Telemetry Callouts */}
                      <div className="relative w-full h-56 sm:h-64 mb-3 rounded-2xl bg-[#030814] border border-cyan-500/35 overflow-hidden group shadow-[0_12px_36px_rgba(6,182,212,0.3)] flex items-center justify-center">
                        
                        {/* 3D Render Image based on selected Layout Variation */}
                        <img 
                          src={welcomeOption === 'option1' ? simVehicleHero3d : welcomeOption === 'option2' ? simVehicle3d : cockpitWireframe3d} 
                          alt="Driver Telemetry Simulation Perspective" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                        />

                        {/* Animated Grid / Scanning Effect for Option 2 */}
                        {welcomeOption === 'option2' && (
                          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-cyan-400/20 to-transparent pointer-events-none animate-pulse"></div>
                        )}

                        {/* Top specular reflection overlay */}
                        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent pointer-events-none"></div>

                        {/* TELEMETRY CALLOUT 1: Top Left */}
                        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-cyan-500/40 shadow-lg text-left max-w-[150px] sm:max-w-[170px] pointer-events-none">
                          <p className="text-[8.5px] font-mono font-bold text-cyan-400 uppercase tracking-tight">
                            {welcomeOption === 'option1' ? 'EXTERIOR RENDER:' : welcomeOption === 'option2' ? 'AI SCAN MATRIX:' : 'COGNITIVE DEMAND:'}
                          </p>
                          <p className="text-[10px] font-extrabold text-white truncate">
                            {welcomeOption === 'option1' ? 'Full-Width Hero' : welcomeOption === 'option2' ? 'Active Scanning' : 'Moderate (72/100)'}
                          </p>
                        </div>

                        {/* TELEMETRY CALLOUT 2: Top Right */}
                        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-cyan-500/40 shadow-lg text-left max-w-[150px] sm:max-w-[170px] pointer-events-none">
                          <p className="text-[8.5px] font-mono font-bold text-cyan-400 uppercase tracking-tight">
                            ATTENTION PROFILE:
                          </p>
                          <p className="text-[10px] font-extrabold text-white truncate">
                            Multi-Screen Focus
                          </p>
                        </div>

                        {/* TELEMETRY CALLOUT 3: Mid Left */}
                        <div className="absolute bottom-11 left-2.5 sm:bottom-12 sm:left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-cyan-500/40 shadow-lg text-left max-w-[140px] sm:max-w-[160px] pointer-events-none">
                          <p className="text-[8.5px] font-mono font-bold text-cyan-400 uppercase tracking-tight">
                            GAZE VECTORS:
                          </p>
                          <p className="text-[10px] font-extrabold text-white truncate">
                            Optimal Path
                          </p>
                        </div>

                        {/* TELEMETRY CALLOUT 4: Mid Right */}
                        <div className="absolute bottom-11 right-2.5 sm:bottom-12 sm:right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-cyan-500/40 shadow-lg text-left max-w-[140px] sm:max-w-[160px] pointer-events-none">
                          <p className="text-[8.5px] font-mono font-bold text-cyan-400 uppercase tracking-tight">
                            FATIGUE MARKER:
                          </p>
                          <p className="text-[10px] font-extrabold text-emerald-400 truncate">
                            Low Risk
                          </p>
                        </div>

                        {/* INTEGRATED HUD PERSPECTIVE SELECTOR INSIDE IMAGE CANVAS */}
                        <div className="absolute bottom-2 inset-x-2 flex items-center justify-between bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-cyan-500/30 text-[10px] font-bold z-10">
                          <span className="text-cyan-400 font-mono text-[9px] flex items-center gap-1 uppercase tracking-tight">
                            <Layers className="w-3 h-3 text-cyan-400" />
                            <span className="hidden sm:inline">PERSPECTIVE:</span>
                          </span>
                          <div className="flex items-center gap-1">
                            {[
                              { id: 'option1', label: '1: Hero SUV' },
                              { id: 'option2', label: '2: AI Scanning' },
                              { id: 'option3', label: '3: Cockpit 3D' }
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => setWelcomeOption(opt.id as 'option1' | 'option2' | 'option3')}
                                className={`px-2 py-0.5 rounded-lg text-[9px] sm:text-[9.5px] font-extrabold transition-all cursor-pointer ${
                                  welcomeOption === opt.id
                                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/40 font-black'
                                    : 'text-slate-400 hover:text-cyan-200 hover:bg-white/5'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Glowing Accent Bar */}
                        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]"></div>
                      </div>

                      <h4 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1">
                        Driver Awareness Simulation
                      </h4>

                      <p className="text-xs text-slate-300 max-w-md leading-relaxed mb-4">
                        Understand how your simulated driving environment influences attention, fatigue indicators, and cognitive awareness habits. <span className="text-slate-400 text-[11px]">(This analysis uses zero vehicle-level or GPS tracking)</span>
                      </p>

                      {/* Streamlined Single-Row Trust Badges Grid */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full max-w-sm sm:max-w-md mx-auto mb-1">
                        <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-[10.5px] font-bold py-1.5 px-1.5 sm:px-2 rounded-xl flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm text-center truncate">
                          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">100% Anonymous</span>
                        </span>
                        <span className="bg-blue-950/60 border border-blue-500/40 text-blue-300 text-[10px] sm:text-[10.5px] font-bold py-1.5 px-1.5 sm:px-2 rounded-xl flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm text-center truncate">
                          <Zap className="w-3 h-3 text-blue-400 shrink-0" />
                          <span className="truncate">60s Challenge</span>
                        </span>
                        <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-[10.5px] font-bold py-1.5 px-1.5 sm:px-2 rounded-xl flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm text-center truncate">
                          <Brain className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">Cognitive Bench...</span>
                        </span>
                      </div>

                    </div>

                    {/* Primary Action Button */}
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={() => setSimStep(2)}
                        className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-extrabold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-cyan-500/25 border border-cyan-400/40 hover:border-cyan-300 hover:shadow-cyan-500/40 hover:scale-[1.01] focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.985] transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider group"
                      >
                        <span>PROCEED TO ANALYSIS</span>
                        <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                      </button>

                      {/* PERSISTENT PRIVACY SECTION */}
                      <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-300 text-center bg-slate-950/80 border border-white/10 py-3 px-4 rounded-xl">
                        <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Your simulation responses are processed anonymously. No vehicle tracking or telematics stored.</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* SCREEN 2: DRIVING CONTEXT */}
                {simStep === 2 && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">Driving Context</h4>
                      <p className="text-[12px] text-slate-300 leading-relaxed font-medium mt-0.5">
                        Select your typical driving parameters to calibrate your cognitive baseline:
                      </p>
                    </div>

                    {/* Route Type */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                        <span>Primary Route Type</span>
                        <span className="text-[10px] font-bold text-cyan-400 lowercase">select route</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'urban', label: 'Urban Grid', desc: 'Grid traffic & signals' },
                          { id: 'highway', label: '400-Series Highway', desc: 'High-speed cruising' },
                          { id: 'rural', label: 'Rural / Secondary', desc: 'Variable pavement' },
                          { id: 'longdistance', label: 'Intercity Commute', desc: 'Long-haul endurance' }
                        ].map(item => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setCommuteType(item.id)}
                            className={`p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between gap-1 ${
                              commuteType === item.id 
                                ? 'bg-cyan-950/60 border-cyan-400 text-white ring-2 ring-cyan-500/50 shadow-md shadow-cyan-500/20' 
                                : 'bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="text-xs font-extrabold">{item.label}</span>
                              {commuteType === item.id && (
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">{item.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weather */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                        <span>Weather Conditions</span>
                        <span className="text-[10px] font-bold text-cyan-400 lowercase">select weather</span>
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
                            className={`py-2.5 px-3 rounded-xl border text-xs font-extrabold text-left transition-all duration-150 cursor-pointer flex items-center justify-between ${
                              weatherCondition === item.id 
                                ? 'bg-cyan-950/60 border-cyan-400 text-white ring-2 ring-cyan-500/50 shadow-md shadow-cyan-500/20' 
                                : 'bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200'
                            }`}
                          >
                            <span>{item.label}</span>
                            {weatherCondition === item.id && (
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Commute Duration */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                        <span>Daily Commute Duration</span>
                        <span className="text-[10px] font-bold text-cyan-400 lowercase">select duration</span>
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
                            className={`py-2.5 px-2.5 rounded-xl border text-xs font-extrabold text-center transition-all duration-150 cursor-pointer flex items-center justify-center gap-1.5 ${
                              commuteTime === item.id 
                                ? 'bg-cyan-950/60 border-cyan-400 text-white ring-2 ring-cyan-500/50 shadow-md shadow-cyan-500/20' 
                                : 'bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200'
                            }`}
                          >
                            {commuteTime === item.id && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            )}
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-1">
                      <button
                        type="button"
                        onClick={handleProceedToFocusTest}
                        className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-[0.985] transition-all text-xs uppercase tracking-wider"
                      >
                        <span>Proceed to Focus Test</span>
                        <ArrowRight className="w-4 h-4 text-cyan-200" />
                      </button>

                      {/* PERSISTENT PRIVACY SECTION */}
                      <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-300 text-center bg-slate-950/80 border border-white/10 py-3 px-4 rounded-xl">
                        <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Your simulation responses are processed anonymously. No vehicle tracking or telematics stored.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 3: FOCUS ASSESSMENT */}
                {simStep === 3 && (
                  <div className="flex flex-col gap-4 animate-fade-in text-center">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <span className="text-cyan-400">Trial {currentTrial} of 3</span>
                      <span>Attention Switching & Reaction</span>
                    </div>

                    {/* Interactive Challenge Card */}
                    <div 
                      onClick={testStatus === 'ready' || testStatus === 'waiting' ? handleReactionTap : undefined}
                      className={`min-h-[170px] rounded-2xl border-2 flex flex-col items-center justify-center p-6 transition-all duration-200 select-none relative overflow-hidden ${
                        testStatus === 'ready' 
                          ? 'bg-cyan-500 border-cyan-200 text-slate-950 cursor-pointer shadow-xl shadow-cyan-500/40 scale-[1.02]' 
                          : testStatus === 'waiting'
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 cursor-pointer'
                          : testStatus === 'pressed'
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : 'bg-slate-950 border-cyan-500/20 text-slate-300'
                      }`}
                    >
                      {testStatus === 'ready' && (
                        <div className="flex flex-col items-center gap-1.5 animate-bounce">
                          <Zap className="w-10 h-10 text-slate-950 fill-slate-950" />
                          <span className="text-2xl font-black uppercase tracking-widest text-slate-950">TAP NOW!</span>
                        </div>
                      )}

                      {testStatus === 'waiting' && (
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-amber-400 animate-ping"></div>
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                            Wait for Signal to turn CYAN BLUE...
                          </span>
                        </div>
                      )}

                      {testStatus === 'pressed' && (
                        <div className="flex flex-col items-center gap-1">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                          <span className="text-xs font-bold text-emerald-300">{reactionMsg}</span>
                        </div>
                      )}

                      {testStatus === 'idle' && (
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                            <Activity className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-semibold text-slate-300 max-w-xs">
                            Tap <span className="text-cyan-400 font-bold">Start Trial {currentTrial}</span> below. When the box turns <span className="text-cyan-400 font-bold">CYAN BLUE</span>, tap as fast as possible.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      {testStatus === 'idle' && (
                        <button
                          type="button"
                          onClick={startTrial}
                          className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-[0.985] transition-all text-xs uppercase tracking-wider"
                        >
                          <Zap className="w-4 h-4 text-cyan-300" />
                          <span>Start Trial {currentTrial}</span>
                        </button>
                      )}

                      {trials.length > 0 && (
                        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 bg-slate-950/60 border border-white/10 py-2 px-3 rounded-xl">
                          {trials.map((t, idx) => (
                            <span key={idx} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                              T{idx + 1}: <strong className="text-cyan-400">{t}ms</strong>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* PERSISTENT PRIVACY SECTION */}
                      <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-300 text-center bg-slate-950/80 border border-white/10 py-3 px-4 rounded-xl">
                        <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Your simulation responses are processed anonymously. No vehicle tracking or telematics stored.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 4: AWARENESS PROFILE GENERATION */}
                {simStep === 4 && (
                  <div className="flex flex-col items-center justify-center py-6 gap-6 text-center animate-fade-in my-2">
                    
                    {/* Animated circular score preview ring */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin"></div>
                      <div className="flex flex-col items-center justify-center bg-slate-950 rounded-full w-28 h-28 border border-cyan-500/30 shadow-inner">
                        <span className="text-3xl font-black text-cyan-400 tracking-tight">{displayScore}</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">/ 100</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-extrabold text-white tracking-wide">
                        Generating Awareness Profile
                      </h4>
                      <p className="text-[11px] font-medium text-slate-400">
                        Synthesizing cognitive attention vectors & road parameters...
                      </p>
                    </div>

                    {/* Sequential Progress Checklist */}
                    <div className="w-full bg-slate-950/80 border border-cyan-500/20 rounded-2xl p-4 flex flex-col gap-2.5 text-left text-xs font-semibold">
                      <div className={`flex items-center justify-between transition-colors ${genStep >= 1 ? 'text-cyan-300' : 'text-slate-500'}`}>
                        <span>Analyzing driving context & environmental variables...</span>
                        {genStep >= 1 ? <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> : <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-600 border-t-cyan-400 animate-spin" />}
                      </div>

                      <div className={`flex items-center justify-between transition-colors ${genStep >= 2 ? 'text-cyan-300' : 'text-slate-500'}`}>
                        <span>Evaluating attention patterns & reaction velocity...</span>
                        {genStep >= 2 ? <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> : <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-600 border-t-cyan-400 animate-spin" />}
                      </div>

                      <div className={`flex items-center justify-between transition-colors ${genStep >= 3 ? 'text-cyan-300' : 'text-slate-500'}`}>
                        <span>Generating privacy-first driver profile...</span>
                        {genStep >= 3 ? <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> : <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-600 border-t-cyan-400 animate-spin" />}
                      </div>
                    </div>

                    {/* PERSISTENT PRIVACY SECTION */}
                    <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-300 text-center bg-slate-950/80 border border-white/10 py-3 px-4 rounded-xl w-full">
                      <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Your simulation responses are processed anonymously. No vehicle tracking or telematics stored.</span>
                    </div>

                  </div>
                )}

                {/* SCREEN 5: RESULTS DASHBOARD WITH 3 LAYOUT VARIATIONS */}
                {simStep === 5 && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    
                    {/* LAYOUT VARIATION MODE SWITCHER TABS */}
                    <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-1.5 flex flex-col gap-1 text-center">
                      <div className="flex items-center justify-between px-2 pt-1 text-[10px] font-bold text-slate-400">
                        <span className="flex items-center gap-1 uppercase tracking-wider text-cyan-400">
                          <SlidersHorizontal className="w-3 h-3" />
                          <span>Results Layout Mode</span>
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono">Verbatim Astrateq Data</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 mt-0.5">
                        <button
                          type="button"
                          onClick={() => setResultsOption('grid')}
                          className={`py-2 px-1.5 rounded-xl text-[10px] font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                            resultsOption === 'grid'
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 ring-1 ring-cyan-300'
                              : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          <LayoutGrid className="w-3 h-3 shrink-0" />
                          <span className="truncate">1: Dashboard Grid</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setResultsOption('journey')}
                          className={`py-2 px-1.5 rounded-xl text-[10px] font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                            resultsOption === 'journey'
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 ring-1 ring-cyan-300'
                              : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          <GitCommit className="w-3 h-3 shrink-0" />
                          <span className="truncate">2: User Journey</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setResultsOption('minimal')}
                          className={`py-2 px-1.5 rounded-xl text-[10px] font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                            resultsOption === 'minimal'
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 ring-1 ring-cyan-300'
                              : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          <Zap className="w-3 h-3 shrink-0" />
                          <span className="truncate">3: Minimal Summary</span>
                        </button>
                      </div>
                    </div>

                    {/* VARIATION 1: INTEGRATED DASHBOARD GRID */}
                    {resultsOption === 'grid' && (
                      <div className="flex flex-col gap-3.5 animate-fade-in">
                        
                        {/* Overall Score Hero Card */}
                        <div className="bg-gradient-to-b from-cyan-950/80 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-4 text-center flex flex-col items-center gap-2 relative overflow-hidden shadow-xl">
                          <div className="absolute top-2.5 right-3 flex items-center gap-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-2.5 py-0.5 text-[9px] font-extrabold text-cyan-300 uppercase">
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            <span>Intelligence Profile</span>
                          </div>

                          <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                            Overall Awareness Score
                          </span>

                          <div className="text-4xl font-black text-white tracking-tight flex items-baseline justify-center gap-1 my-0.5">
                            <span className="text-cyan-400">{awarenessScore}</span>
                            <span className="text-slate-500 text-lg font-bold">/ 100</span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 rounded-full text-xs font-bold text-cyan-300">
                            <Award className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Optimal Attention Recovery Margin</span>
                          </div>
                        </div>

                        {/* Cohesive Dashboard Grid of Secondary Metrics with Linear Gauge Bars */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-950/80 border border-white/10 rounded-xl p-3 flex flex-col gap-1.5 text-left relative overflow-hidden">
                            <span className="text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                              Attention Stability
                            </span>
                            <span className={`text-sm font-black ${getAttentionStability().color}`}>
                              {getAttentionStability().label}
                            </span>
                            {/* Linear Progress Bar */}
                            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                              <div className="bg-cyan-400 h-full rounded-full w-[85%]"></div>
                            </div>
                            <span className="text-[9.5px] text-slate-400 font-medium leading-tight mt-0.5">
                              {getAttentionStability().desc}
                            </span>
                          </div>

                          <div className="bg-slate-950/80 border border-white/10 rounded-xl p-3 flex flex-col gap-1.5 text-left relative overflow-hidden">
                            <span className="text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                              Fatigue Risk
                            </span>
                            <span className={`text-sm font-black ${getFatigueRisk().color}`}>
                              {getFatigueRisk().label}
                            </span>
                            {/* Linear Progress Bar */}
                            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                              <div className="bg-emerald-400 h-full rounded-full w-[25%]"></div>
                            </div>
                            <span className="text-[9.5px] text-slate-400 font-medium leading-tight mt-0.5">
                              {getFatigueRisk().desc}
                            </span>
                          </div>

                          <div className="bg-slate-950/80 border border-white/10 rounded-xl p-3 flex flex-col gap-1.5 text-left relative overflow-hidden">
                            <span className="text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                              Complexity
                            </span>
                            <span className={`text-sm font-black ${getEnvironmentalComplexity().color}`}>
                              {getEnvironmentalComplexity().label}
                            </span>
                            {/* Linear Progress Bar */}
                            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                              <div className="bg-amber-400 h-full rounded-full w-[60%]"></div>
                            </div>
                            <span className="text-[9.5px] text-slate-400 font-medium leading-tight mt-0.5">
                              {getEnvironmentalComplexity().desc}
                            </span>
                          </div>
                        </div>

                        {/* Integrated Context Summary Bar */}
                        <div className="bg-slate-950 border border-cyan-500/20 rounded-xl p-3 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5">
                            <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span className="font-extrabold text-white text-[11px]">
                              {commuteType === 'urban' ? 'Urban Grid' : commuteType === 'highway' ? '400-Series Highway' : commuteType === 'rural' ? 'Rural Secondary' : 'Intercity Commute'} • {weatherCondition === 'clear' ? 'Clear & Dry' : weatherCondition === 'rain' ? 'Heavy Rain' : weatherCondition === 'snow' ? 'Winter Snow/Ice' : 'Night Vision'} • {commuteTime === 'short' ? '<30m' : commuteTime === 'medium' ? '30-60m' : '60m+'}
                            </span>
                          </div>
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        </div>

                        {/* Educational Insights Section */}
                        <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-3.5 flex items-start gap-3">
                          <Brain className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                            {getEducationalInsight()}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* VARIATION 2: USER JOURNEY INFOGRAPHIC */}
                    {resultsOption === 'journey' && (
                      <div className="flex flex-col gap-3.5 animate-fade-in">
                        
                        <div className="text-center mb-1">
                          <h5 className="text-xs font-extrabold text-cyan-300 uppercase tracking-widest flex items-center justify-center gap-1.5">
                            <GitCommit className="w-4 h-4 text-cyan-400" />
                            <span>Simulation Journey Flowchart</span>
                          </h5>
                          <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                            From environment input selection to synthesized cognitive intelligence
                          </p>
                        </div>

                        {/* Flowchart Timeline Nodes */}
                        <div className="flex flex-col gap-2.5 relative">
                          
                          {/* NODE 1: INPUTS */}
                          <div className="bg-slate-950/90 border border-cyan-500/30 rounded-xl p-3.5 flex items-center gap-3 relative shadow-lg">
                            <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 font-extrabold text-xs">
                              01
                            </div>
                            <div className="flex flex-col gap-0.5 text-left flex-1 min-w-0">
                              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                                STEP 1: CONTEXT INPUTS
                              </span>
                              <span className="text-xs font-extrabold text-white truncate">
                                {commuteType === 'urban' ? 'Urban Grid' : commuteType === 'highway' ? '400-Series Highway' : commuteType === 'rural' ? 'Rural Secondary' : 'Intercity'} • {weatherCondition === 'clear' ? 'Clear & Dry' : weatherCondition === 'rain' ? 'Heavy Rain' : weatherCondition === 'snow' ? 'Snow/Ice' : 'Night'}
                              </span>
                              <span className="text-[10px] text-slate-400">
                                Duration: {commuteTime === 'short' ? '< 30 mins' : commuteTime === 'medium' ? '30-60 mins' : '60+ mins'}
                              </span>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          </div>

                          {/* CONNECTING FLOW ARROW */}
                          <div className="flex justify-center -my-1">
                            <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
                          </div>

                          {/* NODE 2: ASSESSMENT TRIALS */}
                          <div className="bg-slate-950/90 border border-cyan-500/30 rounded-xl p-3.5 flex items-center gap-3 relative shadow-lg">
                            <div className="w-8 h-8 rounded-xl bg-blue-950 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0 font-extrabold text-xs">
                              02
                            </div>
                            <div className="flex flex-col gap-0.5 text-left flex-1 min-w-0">
                              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                                STEP 2: FOCUS ASSESSMENT
                              </span>
                              <span className="text-xs font-extrabold text-white truncate">
                                Reaction Velocity: <strong className="text-cyan-400">{avgReactionTime} ms avg</strong>
                              </span>
                              <span className="text-[10px] text-slate-400">
                                3 Attention Switching Trials Completed
                              </span>
                            </div>
                            <Zap className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
                          </div>

                          {/* CONNECTING FLOW ARROW */}
                          <div className="flex justify-center -my-1">
                            <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                          </div>

                          {/* NODE 3: INTELLIGENCE PROFILE RESULT */}
                          <div className="bg-gradient-to-r from-cyan-950/80 via-slate-950 to-indigo-950/80 border border-cyan-400/50 rounded-xl p-4 flex items-center gap-3.5 relative shadow-xl">
                            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0 font-black text-sm">
                              03
                            </div>
                            <div className="flex flex-col gap-0.5 text-left flex-1 min-w-0">
                              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                                FINAL CULMINATION PROFILE
                              </span>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-xl font-black text-white">{awarenessScore}</span>
                                <span className="text-xs font-bold text-cyan-400">/ 100 Overall Score</span>
                              </div>
                              <span className="text-[10px] text-slate-300 font-medium">
                                Optimal Attention Recovery Margin
                              </span>
                            </div>
                            <Award className="w-6 h-6 text-cyan-400 shrink-0" />
                          </div>

                        </div>

                        {/* Educational Insight Card */}
                        <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-300">
                          <Brain className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <p className="text-[10.5px] leading-relaxed">
                            {getEducationalInsight()}
                          </p>
                        </div>

                      </div>
                    )}

                    {/* VARIATION 3: ACTION-ORIENTED MINIMALIST SUMMARY */}
                    {resultsOption === 'minimal' && (
                      <div className="flex flex-col gap-3.5 animate-fade-in">
                        
                        {/* Massive Hero Score Ring Callout */}
                        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-5 text-center flex flex-col items-center gap-3 relative overflow-hidden shadow-2xl">
                          <div className="relative w-32 h-32 flex items-center justify-center my-1">
                            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin-slow"></div>
                            <div className="flex flex-col items-center justify-center bg-slate-950 rounded-full w-28 h-28 border border-cyan-400/40 shadow-inner">
                              <span className="text-4xl font-black text-cyan-400 tracking-tight">{awarenessScore}</span>
                              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">/ 100</span>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-0.5">
                            <h5 className="text-sm font-extrabold text-white tracking-wide">
                              Optimal Attention Recovery Margin
                            </h5>
                            <p className="text-[10.5px] font-medium text-slate-400">
                              Verified with zero vehicle-level tracking or telematics stored
                            </p>
                          </div>

                          {/* Condensed Secondary Metric Badges with Hover Tooltips */}
                          <div className="grid grid-cols-3 gap-1.5 w-full mt-1">
                            <div className="bg-slate-950/90 border border-white/10 rounded-xl py-2 px-1 text-center flex flex-col items-center gap-0.5">
                              <span className="text-[8.5px] font-mono text-slate-400 uppercase">Attention</span>
                              <span className={`text-[11px] font-extrabold ${getAttentionStability().color}`}>
                                {getAttentionStability().label}
                              </span>
                            </div>

                            <div className="bg-slate-950/90 border border-white/10 rounded-xl py-2 px-1 text-center flex flex-col items-center gap-0.5">
                              <span className="text-[8.5px] font-mono text-slate-400 uppercase">Fatigue</span>
                              <span className={`text-[11px] font-extrabold ${getFatigueRisk().color}`}>
                                {getFatigueRisk().label}
                              </span>
                            </div>

                            <div className="bg-slate-950/90 border border-white/10 rounded-xl py-2 px-1 text-center flex flex-col items-center gap-0.5">
                              <span className="text-[8.5px] font-mono text-slate-400 uppercase">Complexity</span>
                              <span className={`text-[11px] font-extrabold ${getEnvironmentalComplexity().color}`}>
                                {getEnvironmentalComplexity().label}
                              </span>
                            </div>
                          </div>

                          {/* PROMINENT IMMEDIATE CTA PLACED DIRECTLY BELOW SCORE */}
                          <button
                            type="button"
                            onClick={() => { setIsSimulatorOpen(false); setIsUpdatesOpen(true); }}
                            className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-black py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/30 border border-cyan-300 mt-1 hover:scale-[1.01] active:scale-[0.985] transition-all group"
                          >
                            <Bell className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                            <span>JOIN RESEARCH COHORT</span>
                            <ArrowRight className="w-4 h-4 text-white ml-auto" />
                          </button>
                        </div>

                      </div>
                    )}

                    {/* In-Modal Feedback Drawer (if open) */}
                    {isFeedbackOpen && (
                      <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-3.5 flex flex-col gap-2 animate-fade-in">
                        <div className="flex items-center justify-between text-xs font-extrabold text-white">
                          <span className="flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4 text-cyan-400" />
                            Share Research Feedback
                          </span>
                          <button onClick={() => setIsFeedbackOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {feedbackSent ? (
                          <div className="text-xs text-emerald-400 font-bold py-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Thank you! Your feedback has been sent to the Astrateq research team.</span>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <textarea
                              value={feedbackInput}
                              onChange={(e) => setFeedbackInput(e.target.value)}
                              placeholder="How did this simulation feel? Share your thoughts on awareness & privacy..."
                              className="w-full bg-slate-900 border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 min-h-[60px]"
                            />
                            <button
                              type="button"
                              onClick={() => { if(feedbackInput.trim()) setFeedbackSent(true); }}
                              className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black py-2 px-3 rounded-lg text-xs self-end cursor-pointer transition-colors"
                            >
                              Submit Feedback
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Final Conversion CTAs & Actions (for Grid & Journey modes) */}
                    {resultsOption !== 'minimal' && (
                      <div className="flex flex-col gap-2.5 pt-1">
                        <p className="text-[11px] font-bold text-slate-400 text-center">
                          Help shape the future of privacy-first driver intelligence in Canada.
                        </p>

                        {/* PRIMARY CONVERSION CTA */}
                        <button
                          type="button"
                          onClick={() => { setIsSimulatorOpen(false); setIsUpdatesOpen(true); }}
                          className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 border border-cyan-400/30 active:scale-[0.985] hover:scale-[1.01] transition-all group"
                        >
                          <Bell className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
                          <span>Join Research Cohort</span>
                          <ArrowRight className="w-4 h-4 text-white ml-auto" />
                        </button>
                      </div>
                    )}

                    {/* SECONDARY UTILITY ACTIONS */}
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer border border-white/10 text-xs transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Share Feedback</span>
                      </button>

                      <button
                        type="button"
                        onClick={copyProfile}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer border border-white/10 text-xs transition-colors"
                      >
                        {copiedProfile ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                        <span>{copiedProfile ? 'Copied!' : 'Copy Profile'}</span>
                      </button>
                    </div>

                    {/* RETAKE SIMULATION ACTION */}
                    <button
                      type="button"
                      onClick={resetSim}
                      className="text-slate-400 hover:text-slate-200 text-xs font-semibold py-1 flex items-center justify-center gap-1.5 cursor-pointer transition-colors mt-0.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                      <span>Retake Simulation</span>
                    </button>

                    {/* PERSISTENT PRIVACY SECTION WITH GENEROUS BOTTOM PADDING */}
                    <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-300 text-center bg-slate-950/80 border border-white/10 py-3 px-4 rounded-xl mt-2 mb-2 shadow-sm">
                      <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Your simulation responses are processed anonymously. No vehicle tracking or telematics stored.</span>
                    </div>

                  </div>
                )}
              </>
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
