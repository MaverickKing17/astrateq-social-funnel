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
    <div className="bg-[#EBF0F7] min-h-screen font-sans text-navy pb-16 px-4">
      <div className="max-w-[480px] w-full mx-auto flex flex-col gap-4">
        
        {/* SECTION 1 — STATUS PILL */}
        <div className="w-full text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-[rgba(26,90,158,0.07)] border border-[rgba(26,90,158,0.18)] rounded-full py-1.5 px-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2d8fd4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2d8fd4] animate-pulse-dot"></span>
            </span>
            <span className="font-sans text-[11px] font-medium tracking-wider text-[#0e4b7a]">
              🇨🇦 Canadian pre-launch validation · active
            </span>
          </div>
        </div>

        {/* SECTION 2 — BRAND HEADER */}
        <div className="text-center py-4 flex flex-col items-center">
          {/* Logo area */}
          <img 
            src="https://i.imgur.com/8Qoqkef.png" 
            alt="Astrateq Gadgets Logo" 
            className="w-[52px] h-[52px] rounded-[14px] object-cover shadow-sm select-none"
            referrerPolicy="no-referrer"
          />
          <h1 className="font-serif text-[22px] text-navy mt-2.5 mb-1">
            Astrateq Gadgets
          </h1>
          <p className="font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-accent-cyan">
            Drive Safer. Drive Smarter.
          </p>
        </div>

        {/* SECTION 3 — HERO CARD */}
        <div 
          className="bg-white rounded-[20px] border border-[rgba(14,31,61,0.07)] shadow-[0_2px_16px_rgba(14,31,61,0.05)] overflow-hidden animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.1)] transition-all duration-200"
          style={{ animationDelay: '0s' }}
        >
          {/* Top — image placeholder area */}
          <div className="h-[200px] w-full relative overflow-hidden select-none">
            {/* Real luxury SUV city image */}
            <img 
              src="/src/assets/images/luxury_suv_hero_1782157912256.jpg" 
              alt="Luxury SUV in Toronto city background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Bottom-left corner badge */}
            <div className="absolute bottom-2.5 left-3 z-10 text-[10px] font-sans font-medium bg-[rgba(255,255,255,0.75)] backdrop-blur-xs rounded-[8px] py-0.5 px-2.5 text-navy border border-[rgba(14,31,61,0.06)]">
              Ontario · Summer 2026
            </div>
          </div>

          {/* Bottom — text body */}
          <div className="p-[20px_22px_22px]">
            <h2 className="font-serif text-[20px] text-navy leading-[1.3] mb-2.5">
              Privacy-first vehicle intelligence for smarter driving decisions.
            </h2>
            <p className="font-sans text-[13px] text-text-mid leading-[1.6] mb-4">
              Join the Canadian pre-launch validation program, check your vehicle fit, or complete the Summer Vehicle Readiness Check before the founding cohort window closes.
            </p>
            
            {/* Trust badge row */}
            <div className="flex gap-[14px] flex-wrap">
              <div className="inline-flex items-center gap-[5px] text-[11px] text-[#4a6e9e] font-sans">
                <Shield className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <span>Privacy by design</span>
              </div>
              <div className="inline-flex items-center gap-[5px] text-[11px] text-[#4a6e9e] font-sans">
                <PlusCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <span>No charge today</span>
              </div>
              <div className="inline-flex items-center gap-[5px] text-[11px] text-[#4a6e9e] font-sans">
                <TrendingUp className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <span>Pre-launch pilot</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 — PRIMARY CTA CARD — Navy background */}
        <div 
          className="bg-navy rounded-[20px] p-[26px_22px] relative overflow-hidden animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.15)] transition-all duration-200"
          style={{ animationDelay: '0.05s' }}
        >
          {/* Decorative background circle */}
          <div className="absolute -top-[30px] -right-[30px] w-[120px] h-[120px] rounded-full bg-[rgba(100,180,240,0.09)] pointer-events-none"></div>

          {/* Eyebrow with cyan bar */}
          <div className="flex items-center mb-2">
            <span className="w-4 h-[2px] bg-accent-cyan rounded-[1px] inline-block mr-2"></span>
            <span className="font-sans text-[10px] font-bold tracking-[0.14em] text-accent-cyan-2">
              FOUNDING DRIVER COHORT
            </span>
          </div>

          <h2 className="font-serif text-[26px] text-[#f0f6fc] leading-[1.2] mb-2.5">
            Reserve Early Access Consideration
          </h2>
          <p className="font-sans text-[13px] text-text-on-navy-2 leading-[1.55] mb-5">
            Submit your founding cohort interest and selected early-access tier. No payment is charged today during validation testing.
          </p>

          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=cohort"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-accent-cyan hover:bg-[#1a7dc4] active:scale-[0.98] text-white rounded-[12px] py-4 font-sans text-[15px] font-semibold text-decoration-none transition-all duration-150 shadow-sm"
          >
            <span>Join Founding Driver Cohort</span>
            <span className="text-[17px]">→</span>
          </a>

          {/* Microcopy row */}
          <div className="mt-3 text-center text-[11px] text-[#4a6e96] font-sans">
            No charge today · Pre-launch validation · Canadian driver program
          </div>
        </div>

        {/* SECTION 5 — SECONDARY ACTION CARDS (All 5 in 1 Container) */}
        <div 
          className="bg-white rounded-[20px] border border-[rgba(14,31,61,0.07)] shadow-[0_2px_12px_rgba(14,31,61,0.05)] overflow-hidden animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Row 1 — Summer Vehicle Readiness Check (Highlighted with Left border) */}
          <a 
            href="https://join.astrateqgadgets.com/summer-readiness?entry=linkbio&intent=readiness"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-[15px_18px] text-decoration-none bg-white border-l-[3px] border-accent-amber pl-[15px] hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[rgba(14,31,61,0.06)] group transition-all duration-150"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-frost flex items-center justify-center flex-shrink-0">
              <Sun className="w-[18px] h-[18px] text-accent-cyan" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13px] font-semibold text-navy mb-0.5 group-hover:text-accent-cyan transition-colors duration-150">
                Summer Vehicle Readiness Check
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                Take a quick 60-second check to understand your summer driving readiness profile.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#b0c4dc] flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>

          {/* Row 2 — Check Vehicle Compatibility */}
          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=compatibility"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-[15px_18px] text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[rgba(14,31,61,0.06)] group transition-all duration-150"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-frost flex items-center justify-center flex-shrink-0">
              <Car className="w-[18px] h-[18px] text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13px] font-semibold text-navy mb-0.5 group-hover:text-accent-cyan transition-colors duration-150">
                Check Vehicle Compatibility
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                Confirm whether your vehicle profile is likely to support the Astrateq pre-launch concept.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#b0c4dc] flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>

          {/* Row 3 — See How Astrateq Works */}
          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=explainer"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-[15px_18px] text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[rgba(14,31,61,0.06)] group transition-all duration-150"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-frost flex items-center justify-center flex-shrink-0">
              <Activity className="w-[18px] h-[18px] text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13px] font-semibold text-navy mb-0.5 group-hover:text-accent-cyan transition-colors duration-150">
                See How Astrateq Works
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                Learn how privacy-first vehicle intelligence could help drivers understand signals, patterns, and readiness context.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#b0c4dc] flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>

          {/* Row 4 — Privacy-First Data Approach */}
          <a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=privacy"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-[15px_18px] text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] border-b border-[rgba(14,31,61,0.06)] group transition-all duration-150"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-frost flex items-center justify-center flex-shrink-0">
              <Lock className="w-[18px] h-[18px] text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13px] font-semibold text-navy mb-0.5 group-hover:text-accent-cyan transition-colors duration-150">
                Privacy-First Data Approach
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                Review how Astrateq Gadgets is approaching local-first intelligence and reduced data exposure.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#b0c4dc] flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>

          {/* Row 5 — Project Roadmap & Build Updates */}
          <a 
            href="https://join.astrateqgadgets.com?entry=linkbio&intent=updates"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-[15px_18px] text-decoration-none bg-white hover:bg-[#f7fafd] active:bg-[#f0f5fa] group transition-all duration-150"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-frost flex items-center justify-center flex-shrink-0">
              <Bell className="w-[18px] h-[18px] text-[#1a5a9e]" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-[13px] font-semibold text-navy mb-0.5 group-hover:text-accent-cyan transition-colors duration-150">
                Project Roadmap & Build Updates
              </h3>
              <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                Follow pre-launch progress, product direction, validation updates, and Canadian rollout planning.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#b0c4dc] flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* SECTION 6 — HOW IT WORKS */}
        <div 
          className="bg-white rounded-[20px] border border-[rgba(14,31,61,0.07)] p-6 animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.1)] transition-all duration-200"
          style={{ animationDelay: '0.15s' }}
        >
          {/* Centered decorative accent bar */}
          <div className="w-7 h-[3px] bg-accent-cyan rounded-[2px] mx-auto mb-3.5"></div>
          
          <h2 className="font-serif text-[17px] text-navy text-center mb-5">
            How the pre-launch program works
          </h2>

          <div className="flex gap-2.5 items-start">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2 select-none">
                1
              </div>
              <h4 className="font-sans text-[12px] font-semibold text-navy mb-1 leading-tight">
                Join Early Access
              </h4>
              <p className="font-sans text-[10px] text-text-muted leading-[1.45]">
                Submit your founding cohort interest.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2 select-none">
                2
              </div>
              <h4 className="font-sans text-[12px] font-semibold text-navy mb-1 leading-tight">
                Confirm Vehicle Fit
              </h4>
              <p className="font-sans text-[10px] text-text-muted leading-[1.45]">
                Complete a short compatibility and readiness check.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-7 h-7 rounded-full bg-navy text-[#c8dff6] text-xs font-bold flex items-center justify-center mx-auto mb-2 select-none">
                3
              </div>
              <h4 className="font-sans text-[12px] font-semibold text-navy mb-1 leading-tight">
                Follow Validation
              </h4>
              <p className="font-sans text-[10px] text-text-muted leading-[1.45]">
                Receive updates as Astrateq Gadgets validates readiness.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 — PRIVACY TRUST CARD */}
        <div 
          className="bg-white rounded-[20px] border border-[rgba(14,31,61,0.07)] p-[20px_22px] animate-fade-in-up hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(14,31,61,0.1)] transition-all duration-200"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[34px] h-[34px] rounded-[10px] bg-[rgba(14,31,61,0.05)] flex items-center justify-center">
              <Shield className="w-[18px] h-[18px] text-navy" />
            </div>
            <div>
              <h3 className="font-sans text-[14px] font-semibold text-navy mb-0.5">
                Privacy by design
              </h3>
              <p className="font-sans text-[11px] text-accent-cyan">
                Astrateq data principles
              </p>
            </div>
          </div>

          {/* Trust Rows */}
          <div className="flex flex-col">
            
            {/* Row 1 */}
            <div className="flex items-start gap-2.5 py-2.5 border-t border-[rgba(14,31,61,0.06)]">
              <div className="w-4 h-4 bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-[9px] h-[9px] text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-semibold text-[#1a2f4a] mb-0.5 leading-tight">
                  Local-first intelligence direction
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                  Designed to reduce unnecessary cloud dependency.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-start gap-2.5 py-2.5 border-t border-[rgba(14,31,61,0.06)]">
              <div className="w-4 h-4 bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-[9px] h-[9px] text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-semibold text-[#1a2f4a] mb-0.5 leading-tight">
                  User-controlled data expectations
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                  Built around clear consent and driver transparency.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-start gap-2.5 py-2.5 border-t border-[rgba(14,31,61,0.06)]">
              <div className="w-4 h-4 bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-[9px] h-[9px] text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-semibold text-[#1a2f4a] mb-0.5 leading-tight">
                  No unnecessary data sharing
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                  Data minimization is a core design principle.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex items-start gap-2.5 py-2.5 border-t border-[rgba(14,31,61,0.06)]">
              <div className="w-4 h-4 bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-[9px] h-[9px] text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-semibold text-[#1a2f4a] mb-0.5 leading-tight">
                  No ad-tracking resale
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                  Astrateq Gadgets is not being designed around advertising resale models.
                </p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex items-start gap-2.5 py-2.5 border-t border-[rgba(14,31,61,0.06)]">
              <div className="w-4 h-4 bg-[#e8f4ed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-[9px] h-[9px] text-[#2e7d52]" strokeWidth={4} />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-semibold text-[#1a2f4a] mb-0.5 leading-tight">
                  Canadian driver trust
                </h4>
                <p className="font-sans text-[11px] text-text-muted leading-[1.4]">
                  Built with Canadian privacy expectations in mind.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 8 — PRE-LAUNCH TRANSPARENCY CARD — Amber-tinted disclosure */}
        <div 
          className="bg-[rgba(240,164,50,0.06)] border border-[rgba(240,164,50,0.22)] rounded-[16px] p-[18px_20px] animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <h4 className="font-sans text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a5f10] mb-2.5">
            Pre-launch transparency
          </h4>
          <p className="font-sans text-[11px] text-[#7a5a28] leading-[1.6] mb-2">
            Astrateq Gadgets is currently in pre-launch market validation. Hardware availability, compatibility, pricing, and rollout timing are subject to validation results, supplier readiness, and future manufacturing decisions.
          </p>
          <p className="font-sans text-[11px] text-[#7a5a28] leading-[1.6]">
            This page is designed to measure early interest and route Canadian drivers into readiness, compatibility, and founding cohort flows.
          </p>
        </div>

        {/* SECTION 9 — SOCIAL FOOTER */}
        <div className="pt-2 text-center">
          <div className="flex justify-center gap-3.5 mb-3.5">
            {/* Instagram */}
            <a 
              href="https://instagram.com/astrateq24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9.5 h-9.5 rounded-full bg-[rgba(14,31,61,0.07)] hover:bg-[rgba(14,31,61,0.13)] active:scale-[0.95] flex items-center justify-center transition-all duration-150"
              title="Astrateq on Instagram"
            >
              <svg className="w-5 h-5 text-navy fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              className="w-9.5 h-9.5 rounded-full bg-[rgba(14,31,61,0.07)] hover:bg-[rgba(14,31,61,0.13)] active:scale-[0.95] flex items-center justify-center transition-all duration-150"
              title="Astrateq on X"
            >
              <svg className="w-4.5 h-4.5 text-navy fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/astrateq-gadgets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9.5 h-9.5 rounded-full bg-[rgba(14,31,61,0.07)] hover:bg-[rgba(14,31,61,0.13)] active:scale-[0.95] flex items-center justify-center transition-all duration-150"
              title="Astrateq on LinkedIn"
            >
              <svg className="w-5 h-5 text-navy fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Footer copy block */}
          <div className="text-[11px] text-text-light font-sans leading-relaxed">
            <p>© 2026 Astrateq Gadgets. Toronto, ON, Canada.</p>
            <p className="text-[10px] text-[#a0b4c8] mt-1">
              Built for Canadian drivers exploring smarter, privacy-first vehicle awareness.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
