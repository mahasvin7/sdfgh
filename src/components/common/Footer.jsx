import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Award, Heart, ExternalLink, HelpCircle } from 'lucide-react';

export default function Footer() {
  const { setActiveTab } = useApp();

  return (
    <footer className="bg-white border-t border-border-default mt-12 text-xs text-text-muted no-print">
      
      {/* Tricolor accent bar */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-[#FFFFFF]"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Project Alignment */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#17365D] flex items-center justify-center text-white font-bold text-xs">
                SR
              </div>
              <div className="text-base font-bold">
                <span className="text-[#17365D]">SOUL</span>{' '}
                <span className="text-[#13836B]">Radiology</span>
              </div>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              A sample-based demonstration platform for structured findings, plain-language explanations, and clinician-review alerts. Developed for SFIC 2026 Theme 03: Swasth & Samavesh Bharat.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E8F5F1] text-[#13836B] font-semibold text-[11px] border border-[#13836B]/20">
              <Award className="w-3.5 h-3.5" />
              Theme 03: Swasth & Samavesh Bharat (Healthy & Inclusive Bharat)
            </div>
          </div>

          {/* Quick Platform Navigation */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold text-text-primary uppercase tracking-wider text-[11px]">
              Platform Modules
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button 
                  onClick={() => setActiveTab('overview')} 
                  className="hover:text-[#17365D] hover:underline"
                >
                  Executive Overview & SFIC Scope
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('library')} 
                  className="hover:text-[#17365D] hover:underline"
                >
                  Synthetic Sample Library (5 Scenarios)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('detail')} 
                  className="hover:text-[#17365D] hover:underline"
                >
                  Structured Report & Sentence Traceability
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('upload')} 
                  className="hover:text-[#17365D] hover:underline"
                >
                  Report Document Ingestion & Upload Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('glossary')} 
                  className="hover:text-[#17365D] hover:underline"
                >
                  Plain-Language Medical Terminology Helper
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('about')} 
                  className="hover:text-[#17365D] hover:underline"
                >
                  Safety, Disclaimers & Future Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Safety & Attribution Notice */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-text-primary uppercase tracking-wider text-[11px]">
              Prototype Scope Notice
            </h4>
            <div className="p-3 rounded bg-slate-50 border border-slate-200 text-[11px] leading-relaxed text-slate-600 space-y-1.5">
              <p>
                <strong>Educational Prototype:</strong> Not an official medical device or government service. Does not provide clinical diagnosis or treatment recommendations.
              </p>
              <p className="text-slate-500">
                All demonstration cases utilize fictional, synthetic clinical records.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-text-muted">
          <div>
            © 2026 SOUL Radiology Prototype Team. Inspired by Guidelines for Indian Government Websites (GIGW).
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#13836B] font-semibold">Swasth Bharat · Inclusive Health Tech</span>
            <span>·</span>
            <button 
              onClick={() => setActiveTab('about')}
              className="text-[#17365D] hover:underline font-medium"
            >
              Acceptance Verification Checklist
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
