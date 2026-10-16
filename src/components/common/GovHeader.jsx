import React from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Eye, Type, AlertCircle } from 'lucide-react';

/**
 * GovHeader: Standard Indian Government (GIGW) Accessibility & National Portal Bar
 * Includes Tricolor accent strip, font sizing controls, contrast toggle, and language switch.
 */
export default function GovHeader() {
  const { 
    fontSize, 
    setFontSize, 
    highContrast, 
    setHighContrast, 
    currentLanguage, 
    setCurrentLanguage 
  } = useApp();

  return (
    <header className="no-print">
      {/* Tiranga 3-color accent strip */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-[#FFFFFF]"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      {/* Top Government & SFIC Showcase Ribbon */}
      <div className="bg-[#17365D] text-white text-xs border-b border-[#234b7a]">
        <div className="max-w-[1200px] mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-3">
          
          {/* Government / SFIC Alignment Tag */}
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide text-slate-200">
              भारत सरकार | Government of India
            </span>
            <span className="text-slate-400">·</span>
            <span className="bg-[#F3A536] text-[#17365D] font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wider uppercase">
              SFIC 2026
            </span>
            <span className="hidden sm:inline text-slate-300">
              Theme 03: Swasth & Samavesh Bharat (Healthy & Inclusive Bharat)
            </span>
          </div>

          {/* Accessibility & Language Controls */}
          <div className="flex items-center gap-3">
            
            {/* Font Resizing (A- / A / A+) */}
            <div className="flex items-center bg-[#102744] rounded px-1.5 py-0.5 border border-[#274872]" title="Adjust Text Size">
              <Type className="w-3 h-3 text-slate-400 mr-1" />
              <button 
                onClick={() => setFontSize('sm')} 
                className={`px-1 text-[11px] font-semibold hover:text-[#F3A536] ${fontSize === 'sm' ? 'text-[#F3A536] underline' : 'text-slate-300'}`}
                title="Decrease font size"
              >
                A-
              </button>
              <span className="text-slate-600">|</span>
              <button 
                onClick={() => setFontSize('base')} 
                className={`px-1 text-[11px] font-semibold hover:text-[#F3A536] ${fontSize === 'base' ? 'text-[#F3A536] underline' : 'text-slate-300'}`}
                title="Default font size"
              >
                A
              </button>
              <span className="text-slate-600">|</span>
              <button 
                onClick={() => setFontSize('lg')} 
                className={`px-1 text-[11px] font-semibold hover:text-[#F3A536] ${fontSize === 'lg' ? 'text-[#F3A536] underline' : 'text-slate-300'}`}
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* High Contrast Toggle */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] transition ${
                highContrast 
                  ? 'bg-yellow-400 text-black border-yellow-300 font-bold' 
                  : 'bg-[#102744] text-slate-300 border-[#274872] hover:text-white'
              }`}
              title="Toggle High Contrast Display"
            >
              <Eye className="w-3 h-3" />
              <span className="hidden md:inline">High Contrast</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-[#102744] rounded px-2 py-0.5 border border-[#274872]">
              <Globe className="w-3 h-3 text-slate-400" />
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="bg-transparent text-slate-200 text-[11px] focus:outline-none cursor-pointer"
                aria-label="Select Interface Language"
              >
                <option value="en" className="bg-[#17365D] text-white">English</option>
                <option value="hi" className="bg-[#17365D] text-white">हिन्दी (Hindi)</option>
                <option value="kn" className="bg-[#17365D] text-white">ಕನ್ನಡ (Kannada demo)</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* Mandatory Student Prototype Disclaimer Notice */}
      <div className="bg-[#FFF5E3] border-b border-[#F3A536]/40 text-[#7C4A03] text-xs py-1.5 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#F3A536] shrink-0" />
            <span>
              <strong>SFIC 2026 Student Prototype:</strong> This platform demonstrates structured report understanding using synthetic sample records and predefined outputs. It does not perform clinical diagnosis or analyse medical images independently.
            </span>
          </div>
          <span className="text-[11px] bg-white/80 border border-[#F3A536]/50 rounded px-1.5 py-0.5 font-medium shrink-0 hidden lg:inline">
            Non-Diagnostic Software Prototype
          </span>
        </div>
      </div>
    </header>
  );
}
