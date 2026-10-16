import React, { useState } from 'react';
import { MEDICAL_GLOSSARY } from '../../data/medicalGlossary';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  HelpCircle, 
  Globe, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

export default function GlossaryView() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'Chest / Lungs', 'Heart & Chest', 'Brain / Neuro', 'Joints & Bones', 'Ultrasound', 'General Radiology'];

  const filteredGlossary = MEDICAL_GLOSSARY.filter((item) => {
    const matchesSearch = 
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.simpleMeaning.toLowerCase().includes(search.toLowerCase()) ||
      (item.hindi && item.hindi.toLowerCase().includes(search.toLowerCase())) ||
      (item.kannada && item.kannada.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 py-6">
      
      {/* Title & Introduction */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-default pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
              Plain-Language Medical Terminology Helper
            </h1>
            <span className="bg-[#E8F5F1] text-[#13836B] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#13836B]/20">
              Everyday Language
            </span>
          </div>
          <p className="text-xs text-text-muted mt-1">
            Demystifying complex radiologic terms into simple, jargon-free explanations to ensure inclusive healthcare understanding.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#E8F5F1] text-xs font-semibold text-[#13836B]">
          <Globe className="w-3.5 h-3.5" />
          <span>Multilingual Accessibility Ready</span>
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="brand-card p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          <div className="md:col-span-7 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search medical terms (e.g. Consolidation, Meniscus, Osteophytes)..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B]"
            />
          </div>

          <div className="md:col-span-5 flex flex-wrap gap-1">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-[#17365D] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Terms Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGlossary.map((item, idx) => (
          <div key={idx} className="brand-card p-5 space-y-3 hover:border-[#13836B] transition shadow-xs">
            
            <div className="flex items-start justify-between gap-2 border-b border-border-default pb-2.5">
              <div>
                <h3 className="font-bold text-sm text-[#17365D]">
                  {item.term}
                </h3>
                <span className="text-[10px] text-text-muted font-medium">
                  Category: {item.category}
                </span>
              </div>
              <span className="bg-[#EAF0F8] text-[#17365D] text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                JARGON FREE
              </span>
            </div>

            {/* Plain English Meaning */}
            <div className="text-xs text-slate-800 leading-relaxed">
              <span className="font-bold text-[#13836B] block mb-0.5">Simple Everyday Meaning:</span>
              <p className="bg-slate-50 p-2.5 rounded border border-slate-200">
                {item.simpleMeaning}
              </p>
            </div>

            {/* Example in Context */}
            {item.exampleUsage && (
              <div className="text-xs text-text-muted">
                <span className="font-semibold text-slate-700">In a Report: </span>
                <span className="italic">{item.exampleUsage}</span>
              </div>
            )}

            {/* Bilingual Representation */}
            <div className="pt-2 border-t border-border-default grid grid-cols-2 gap-2 text-[11px]">
              {item.hindi && (
                <div className="p-1.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-bold block text-[10px]">हिन्दी (Hindi):</span>
                  <span className="text-slate-800">{item.hindi}</span>
                </div>
              )}
              {item.kannada && (
                <div className="p-1.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-bold block text-[10px]">ಕನ್ನಡ (Kannada):</span>
                  <span className="text-slate-800">{item.kannada}</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
