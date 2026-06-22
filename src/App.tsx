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
  Check 
} from 'lucide-react';

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
            <span className="font-sans text-[11px] font-semibold tracking-wider text-[#0e4b7a]">
              🇨🇦 Validation active · Program open
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
          className="bg-white rounded-[24px] border border-[#0e1f3d]/6 shadow-[0_4px_20px_rgba(14,31,61,0.04)] overflow-hidden animate-fade-in-up hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(14,31,61,0.08)] transition-all duration-300 group"
          style={{ animationDelay: '0s' }}
        >
          {/* Top — image placeholder area */}
          <div className="h-[210px] w-full relative overflow-hidden select-none">
            {/* Real luxury SUV city image */}
            <img 
              src="/src/assets/images/luxury_suv_hero_1782157912256.jpg" 
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
            <h2 className="font-serif text-[21px] text-navy leading-[1.3] mb-3 group-hover:text-accent-cyan transition-colors duration-200">
              Privacy-first vehicle intelligence for smarter driving decisions.
            </h2>
            <p className="font-sans text-[13px] text-text-mid leading-[1.6] mb-5">
              Join the Canadian pre-launch validation program, check your vehicle fit, or complete the Summer Vehicle Readiness Check before the founding cohort window closes.
            </p>
            
            {/* Trust badge row with subtle pill styles */}
            <div className="flex gap-3 flex-wrap">
              <div className="inline-flex items-center gap-[6px] text-[11px] font-medium text-[#4a6e9e] font-sans bg-frost/75 border border-[#0e1f3d]/5 py-1 px-2.5 rounded-full shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                <span>Privacy by design</span>
              </div>
              <div className="inline-flex items-center gap-[6px] text-[11px] font-medium text-[#4a6e9e] font-sans bg-frost/75 border border-[#0e1f3d]/5 py-1 px-2.5 rounded-full shadow-2xs">
                <PlusCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                <span>No charge today</span>
              </div>
              <div className="inline-flex items-center gap-[6px] text-[11px] font-medium text-[#4a6e9e] font-sans bg-frost/75 border border-[#0e1f3d]/5 py-1 px-2.5 rounded-full shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                <span>Pre-launch pilot</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 — PRIMARY CTA CARD — Deep Premium Navy with glow */}
        <div 
          className="bg-gradient-to-br from-navy via-[#0d2245] to-[#0a182f] rounded-[24px] p-7 relative overflow-hidden animate-fade-in-up hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(14,31,61,0.22)] border border-white/5 transition-all duration-300 group"
          style={{ animationDelay: '0.05s' }}
        >
          {/* Advanced glowing modern backdrop blobs */}
          <div className="absolute -top-[50px] -right-[50px] w-[140px] h-[140px] rounded-full bg-accent-cyan/15 blur-2xl pointer-events-none group-hover:bg-accent-cyan/20 transition-all duration-300"></div>
          <div className="absolute -bottom-[30px] -left-[30px] w-[100px] h-[100px] rounded-full bg-accent-amber/5 blur-xl pointer-events-none"></div>

          {/* Eyebrow with animated cyan bar */}
          <div className="flex items-center mb-3">
            <span className="w-5 h-[2.5px] bg-accent-cyan rounded-full inline-block mr-2 group-hover:w-8 transition-all duration-300"></span>
            <span className="font-sans text-[10px] font-extrabold tracking-[0.16em] text-accent-cyan-2 uppercase select-none">
              FOUNDING DRIVER COHORT
            </span>
          </div>

          <h2 className="font-serif text-[27px] text-white leading-[1.20] mb-3">
            Reserve Early Access Consideration
          </h2>
          <p className="font-sans text-[13.5px] text-text-on-navy-2/90 leading-[1.6] mb-5">
            Submit your founding cohort interest and selected early-access tier. No payment is charged today during validation testing.
          </p>

          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=cohort"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-accent-cyan hover:bg-[#1a7dc4] active:scale-[0.985] text-white rounded-[14px] py-4.5 font-sans text-[15px] font-bold text-decoration-none shadow-[0_4px_14px_rgba(45,143,212,0.4)] transition-all duration-200 group-hover:shadow-[0_6px_20px_rgba(45,143,212,0.5)] cursor-pointer"
          >
            <span>Join Founding Driver Cohort</span>
            <span className="text-[18px] group-hover:translate-x-1.5 transition-transform duration-250">→</span>
          </a>

          {/* Microcopy row */}
          <div className="mt-3.5 text-center text-[10.5px] text-[#7a9bbf] font-medium font-sans tracking-wide">
            No charge today · Pre-launch validation · Canadian driver program
          </div>
        </div>

        {/* SECTION 5 — SECONDARY ACTION CARDS (All 5 in 1 Container) */}
        <div 
          className="bg-white rounded-[24px] border border-[#0e1f3d]/6 shadow-[0_4px_20px_rgba(14,31,61,0.04)] overflow-hidden animate-fade-in-up hover:shadow-[0_8px_24px_rgba(14,31,61,0.07)] transition-shadow duration-300"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Row 1 — Summer Vehicle Readiness Check (Highlighted with Amber/Gold Side priority indicator) */}
          <a 
            href="https://join.astrateqgadgets.com/summer-readiness?entry=linkbio&intent=readiness"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 text-decoration-none bg-white border-l-[4px] border-accent-amber hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[#0e1f3d]/5 group transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-[12px] bg-[#f0a832]/8 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
              <Sun className="w-5 h-5 text-accent-amber animate-spin" style={{ animationDuration: '24s' }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-sans text-[13.5px] font-bold text-navy group-hover:text-accent-cyan transition-colors duration-150">
                  Summer Vehicle Readiness Check
                </h3>
                <span className="text-[9px] font-extrabold bg-[#f0a832]/12 text-[#b87810] px-1.5 py-0.5 rounded-[4px] uppercase tracking-wider select-none">
                  Priority 2
                </span>
              </div>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4] mt-0.5">
                Take a quick 60-second check to understand your summer driving readiness profile.
              </p>
            </div>
            <ChevronRight className="w-4.5 h-4.5 text-[#b0c4dc] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Row 2 — Check Vehicle Compatibility */}
          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=compatibility"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[#0e1f3d]/5 group transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-[12px] bg-frost flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
              <Car className="w-5 h-5 text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13.5px] font-bold text-navy group-hover:text-accent-cyan transition-colors duration-150">
                Check Vehicle Compatibility
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4] mt-0.5">
                Confirm whether your vehicle profile is likely to support the Astrateq pre-launch concept.
              </p>
            </div>
            <ChevronRight className="w-4.5 h-4.5 text-[#b0c4dc] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Row 3 — See How Astrateq Works */}
          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=explainer"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[#0e1f3d]/5 group transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-[12px] bg-frost flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-5 h-5 text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13.5px] font-bold text-navy group-hover:text-accent-cyan transition-colors duration-150">
                See How Astrateq Works
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4] mt-0.5">
                Learn how privacy-first vehicle intelligence could help drivers understand signals, patterns, and readiness context.
              </p>
            </div>
            <ChevronRight className="w-4.5 h-4.5 text-[#b0c4dc] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Row 4 — Privacy-First Data Approach */}
          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=privacy"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[#0e1f3d]/5 group transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-[12px] bg-frost flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
              <Lock className="w-5 h-5 text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13.5px] font-bold text-navy group-hover:text-accent-cyan transition-colors duration-150">
                Privacy-First Data Approach
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4] mt-0.5">
                Review how Astrateq Gadgets is approaching local-first intelligence and reduced data exposure.
              </p>
            </div>
            <ChevronRight className="w-4.5 h-4.5 text-[#b0c4dc] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Row 5 — Project Roadmap & Build Updates */}
          <a 
            href="https://join.astrateqgadgets.com?entry=linkbio&intent=updates"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] group transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-[12px] bg-frost flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
              <Bell className="w-5 h-5 text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13.5px] font-bold text-navy group-hover:text-accent-cyan transition-colors duration-150">
                Project Roadmap & Build Updates
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4] mt-0.5">
                Follow pre-launch progress, product direction, validation updates, and Canadian rollout planning.
              </p>
            </div>
            <ChevronRight className="w-4.5 h-4.5 text-[#b0c4dc] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* SECTION 6 — HOW IT WORKS */}
        <div 
          className="bg-white rounded-[24px] border border-[#0e1f3d]/6 p-6 animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.1)] transition-all duration-200"
          style={{ animationDelay: '0.15s' }}
        >
          {/* Centered decorative accent bar */}
          <div className="w-8 h-[3px] bg-accent-cyan rounded-full mx-auto mb-3.5"></div>
          
          <h2 className="font-serif text-[18px] text-navy text-center mb-6 font-medium">
            How the pre-launch program works
          </h2>

          <div className="flex gap-2.5 items-start relative">
            {/* Connected beautiful dotted line across steps */}
            <div className="absolute top-3.5 left-8 right-8 h-[1px] border-t border-dashed border-[#0e1f3d]/15 z-0 pointer-events-none"></div>

            {/* Step 1 */}
            <div className="flex-1 text-center relative z-10 group/step">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2.5 select-none transition-transform duration-300 group-hover/step:scale-110 shadow-xs border border-white/20">
                1
              </div>
              <h4 className="font-sans text-[12px] font-bold text-navy mb-1 leading-tight group-hover/step:text-accent-cyan transition-colors duration-150">
                Join Early Access
              </h4>
              <p className="font-sans text-[10.5px] text-text-muted leading-[1.45]">
                Submit your founding cohort interest.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center relative z-10 group/step">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2.5 select-none transition-transform duration-300 group-hover/step:scale-110 shadow-xs border border-white/20">
                2
              </div>
              <h4 className="font-sans text-[12px] font-bold text-navy mb-1 leading-tight group-hover/step:text-accent-cyan transition-colors duration-150">
                Confirm Vehicle Fit
              </h4>
              <p className="font-sans text-[10.5px] text-text-muted leading-[1.45]">
                Complete a short compatibility check.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center relative z-10 group/step">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2.5 select-none transition-transform duration-300 group-hover/step:scale-110 shadow-xs border border-white/20">
                3
              </div>
              <h4 className="font-sans text-[12px] font-bold text-navy mb-1 leading-tight group-hover/step:text-accent-cyan transition-colors duration-150">
                Follow Validation
              </h4>
              <p className="font-sans text-[10.5px] text-text-muted leading-[1.45]">
                Receive updates as Astrateq validates readiness.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 — PRIVACY TRUST CARD */}
        <div 
          className="bg-white rounded-[24px] border border-[#0e1f3d]/6 p-6 animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.1)] transition-all duration-200"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-9 h-9 rounded-[10px] bg-navy/5 flex items-center justify-center">
              <Shield className="w-5 h-5 text-navy" />
            </div>
            <div>
              <h3 className="font-sans text-[14px] font-bold text-navy mb-0.5">
                Privacy by design
              </h3>
              <p className="font-sans text-[11px] font-bold text-accent-cyan uppercase tracking-wider text-xs">
                Astrateq data principles
              </p>
            </div>
          </div>

          {/* Trust Rows */}
          <div className="flex flex-col gap-1">
            
            {/* Row 1 */}
            <div className="flex items-start gap-3 py-3 border-t border-[#0e1f3d]/5 hover:bg-frost/40 px-1 rounded-md transition-colors duration-150 group">
              <div className="w-[18px] h-[18px] bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Check className="w-2.5 h-2.5 text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12.5px] font-bold text-[#1a2f4a] mb-0.5 leading-tight">
                  Local-first intelligence direction
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.45]">
                  Designed to reduce unnecessary cloud dependency.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-start gap-3 py-3 border-t border-[#0e1f3d]/5 hover:bg-frost/40 px-1 rounded-md transition-colors duration-150 group">
              <div className="w-[18px] h-[18px] bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Check className="w-2.5 h-2.5 text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12.5px] font-bold text-[#1a2f4a] mb-0.5 leading-tight">
                  User-controlled data expectations
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.45]">
                  Built around clear consent and driver transparency.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-start gap-3 py-3 border-t border-[#0e1f3d]/5 hover:bg-frost/40 px-1 rounded-md transition-colors duration-150 group">
              <div className="w-[18px] h-[18px] bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Check className="w-2.5 h-2.5 text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12.5px] font-bold text-[#1a2f4a] mb-0.5 leading-tight">
                  No unnecessary data sharing
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.45]">
                  Data minimization is a core design principle.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex items-start gap-3 py-3 border-t border-[#0e1f3d]/5 hover:bg-frost/40 px-1 rounded-md transition-colors duration-150 group">
              <div className="w-[18px] h-[18px] bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Check className="w-2.5 h-2.5 text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12.5px] font-bold text-[#1a2f4a] mb-0.5 leading-tight">
                  No ad-tracking resale
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.45]">
                  Astrateq Gadgets is not being designed around advertising resale models.
                </p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex items-start gap-3 py-3 border-t border-[#0e1f3d]/5 hover:bg-frost/40 px-1 rounded-md transition-colors duration-150 group">
              <div className="w-[18px] h-[18px] bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Check className="w-2.5 h-2.5 text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12.5px] font-bold text-[#1a2f4a] mb-0.5 leading-tight">
                  Canadian driver trust
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.45]">
                  Built with Canadian privacy expectations in mind.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 8 — PRE-LAUNCH TRANSPARENCY CARD — Amber-tinted disclosure */}
        <div 
          className="bg-gradient-to-r from-accent-amber/[0.04] to-accent-amber/[0.08] border border-[#f0a832]/30 rounded-[20px] p-5 shadow-xs animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-3.5 bg-accent-amber/70 rounded-full"></span>
            <h4 className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#8a5f10]">
              Pre-launch transparency
            </h4>
          </div>
          <p className="font-sans text-[11px] text-[#7a5a28] leading-[1.65] mb-2">
            Astrateq Gadgets is currently in pre-launch market validation. Hardware availability, compatibility, pricing, and rollout timing are subject to validation results, supplier readiness, and future manufacturing decisions.
          </p>
          <p className="font-sans text-[11px] text-[#7a5a28] leading-[1.65]">
            This page is designed to measure early interest and route Canadian drivers into readiness, compatibility, and founding cohort flows.
          </p>
        </div>

        {/* SECTION 9 — SOCIAL FOOTER WITH PREMIUM ENHANCEMENTS */}
        <div className="mt-6 pt-4 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Fading Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#0e1f3d]/12 to-transparent mb-7"></div>

          {/* Social Icons with Premium Brands Hover Micro-Interactions */}
          <div className="flex justify-center gap-4 mb-6">
            {/* Instagram */}
            <a 
              href="https://instagram.com/astrateq24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-[#0e1f3d]/8 text-navy/80 hover:text-[#d62976] hover:bg-[#d62976]/5 hover:border-[#d62976]/30 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
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
              className="w-11 h-11 rounded-full bg-white border border-[#0e1f3d]/8 text-navy/80 hover:text-black hover:bg-black/5 hover:border-black/30 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
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
              className="w-11 h-11 rounded-full bg-white border border-[#0e1f3d]/8 text-navy/80 hover:text-[#0077b5] hover:bg-[#0077b5]/5 hover:border-[#0077b5]/30 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
              title="Astrateq on LinkedIn"
            >
              <svg className="w-5.5 h-5.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Premium Footer text block with meta items */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-sans text-[10px] font-bold text-text-muted/85 tracking-[0.12em] uppercase bg-frost/90 border border-[#0e1f3d]/4 rounded-full py-1 px-4 shadow-3xs select-none">
              © 2026 Astrateq Gadgets • Toronto, ON • Canada
            </span>
            
            {/* Exquisite statement container with left visual pointer indicator */}
            <div className="max-w-[360px] mx-auto mt-2 p-[8px_16px] rounded-xl bg-[rgba(45,143,212,0.04)] border border-[#2d8fd4]/10 shadow-[inset_0_1px_3px_rgba(45,143,212,0.01)] relative">
              <span className="absolute top-1/2 left-2.5 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <p className="font-sans text-[11px] font-medium text-text-mid leading-relaxed pl-3.5">
                Built for Canadian drivers exploring smarter, privacy-first vehicle awareness.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
