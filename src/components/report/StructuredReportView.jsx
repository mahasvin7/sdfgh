import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SAMPLE_REPORTS } from '../../data/sampleReports';
import { 
  FileText, 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Printer, 
  Copy, 
  Check, 
  Eye, 
  Share2, 
  HelpCircle, 
  Calendar, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function StructuredReportView() {
  const { 
    selectedSampleId, 
    setSelectedSampleId, 
    activeReport, 
    setActiveTab,
    highlightedSentenceId,
    setHighlightedSentenceId,
    setDisplayModalScan
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [activeTabSub, setActiveTabSub] = useState('structured'); // 'structured' | 'plain' | 'original'

  // Copy full summary to clipboard
  const handleCopySummary = () => {
    const textToCopy = `
SOUL RADIOLOGY — STRUCTURED REPORT SUMMARY (SFIC 2026 DEMO)
Sample ID: ${activeReport.sample_id} | ${activeReport.title}
Modality: ${activeReport.modality} | Region: ${activeReport.body_region}
Date: ${activeReport.sample_date}

ORIGINAL RADIOLOGIST IMPRESSION:
${activeReport.impression}

PLAIN LANGUAGE EXPLANATION:
${activeReport.plain_language_summary}

KEY FINDINGS:
${activeReport.findings.map((f, i) => `${i + 1}. ${f.title}: ${f.finding}`).join('\n')}

MEASUREMENTS:
${activeReport.measurements.length > 0 ? activeReport.measurements.map(m => `- ${m.parameter}: ${m.value} ${m.unit}`).join('\n') : 'No specific dimensional measurements stated in this report.'}

RECOMMENDATION:
${activeReport.recommendations}

DISCLAIMER: This output is generated from predefined synthetic demonstration data for SFIC 2026. It is not a clinical diagnosis.
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const isReviewRequired = activeReport.concern_flag === 'review_required';
  const isInformational = activeReport.concern_flag === 'informational';

  return (
    <div className="space-y-6 py-6">
      
      {/* Top Header & Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-default pb-4 no-print">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('library')}
            className="p-2 rounded-md border border-border-default hover:bg-slate-100 text-slate-700 transition"
            title="Return to Sample Library"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-[#17365D] bg-[#EAF0F8] px-2 py-0.5 rounded border border-[#D9E1EA]">
                {activeReport.sample_id}
              </span>
              <span className="text-xs font-bold text-[#13836B] uppercase tracking-wider bg-[#E8F5F1] px-2 py-0.5 rounded border border-[#13836B]/20">
                Scenario {activeReport.scenario_code}
              </span>
              <span className="text-xs text-text-muted">
                {activeReport.sample_date}
              </span>
            </div>
            <h1 className="text-xl font-bold text-text-primary mt-1">
              {activeReport.title}
            </h1>
          </div>
        </div>

        {/* Action Controls (Decent buttons, 8px radius) */}
        <div className="flex items-center gap-2">
          {/* Sample Switcher Dropdown */}
          <select
            value={selectedSampleId}
            onChange={(e) => {
              setSelectedSampleId(e.target.value);
              setHighlightedSentenceId(null);
            }}
            className="text-xs border border-border-default rounded-md px-2.5 py-2 bg-white text-text-primary focus:outline-none focus:border-[#13836B]"
            aria-label="Switch Sample Case"
          >
            {SAMPLE_REPORTS.map((s) => (
              <option key={s.sample_id} value={s.sample_id}>
                {s.sample_id}: {s.title.substring(0, 30)}...
              </option>
            ))}
          </select>

          <button
            onClick={() => setDisplayModalScan(activeReport)}
            className="btn-secondary text-xs !py-2 !px-3"
            title="Inspect radiological imaging scan (Display Reference Only)"
          >
            <Eye className="w-3.5 h-3.5 text-[#13836B]" />
            Scan Display
          </button>

          <button
            onClick={handleCopySummary}
            className="btn-secondary text-xs !py-2 !px-3"
            title="Copy structured summary to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#16794B]" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>

          <button
            onClick={handlePrint}
            className="btn-secondary text-xs !py-2 !px-3"
            title="Print structured report"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>
        </div>
      </div>

      {/* Mandatory Result Disclosure Banner (Brand Kit Section 7) */}
      <div className="p-3.5 rounded-md bg-[#FFF5E3] border border-[#F3A536]/40 flex items-start gap-2.5 text-xs text-[#7C4A03]">
        <AlertTriangle className="w-4 h-4 text-[#F3A536] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-bold">Prototype Demo Notice:</strong> This result is generated from predefined outputs for synthetic sample reports. It is not a trained AI model or a medical diagnosis. All clinical findings must be interpreted by a registered medical practitioner.
        </div>
      </div>

      {/* Main 2-Column Split: Original Report (Left) + Structured Analysis & Plain Language (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (5 Cols): Original Radiologist Report (Verbatim Source) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="brand-card p-5 space-y-3 sticky top-20">
            
            <div className="flex items-center justify-between border-b border-border-default pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#17365D]" />
                <h2 className="font-bold text-sm text-text-primary">
                  Original Source Report
                </h2>
              </div>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                Verbatim Text
              </span>
            </div>

            <p className="text-[11px] text-text-muted">
              Source text is preserved without alteration. Hover or click on structured findings on the right to trace the corresponding sentence below.
            </p>

            {/* Verbatim Source Display with Sentence-Level Traceability Highlighting */}
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200 font-mono text-xs leading-relaxed space-y-3 max-h-[580px] overflow-y-auto">
              
              <div>
                <span className="font-bold text-slate-500 text-[10px] uppercase block tracking-wider">
                  CLINICAL INDICATION:
                </span>
                <p className="text-slate-800 font-sans mt-0.5">
                  {activeReport.clinical_indication}
                </p>
              </div>

              {activeReport.prior_comparison_date && (
                <div>
                  <span className="font-bold text-slate-500 text-[10px] uppercase block tracking-wider">
                    PRIOR COMPARISON:
                  </span>
                  <p className="text-slate-800 font-sans mt-0.5">
                    Prior scan dated {activeReport.prior_comparison_date}
                  </p>
                </div>
              )}

              <div>
                <span className="font-bold text-slate-500 text-[10px] uppercase block tracking-wider mb-1">
                  REPORT FINDINGS & IMPRESSION (INTERACTIVE SENTENCES):
                </span>
                
                <div className="space-y-1.5 font-sans text-xs">
                  {activeReport.source_sentences.map((sent) => {
                    const isHighlighted = highlightedSentenceId === sent.id;
                    return (
                      <div
                        key={sent.id}
                        id={`source-sent-${sent.id}`}
                        onClick={() => setHighlightedSentenceId(highlightedSentenceId === sent.id ? null : sent.id)}
                        className={`p-1.5 rounded transition cursor-pointer border ${
                          isHighlighted
                            ? 'bg-[#E8F5F1] text-[#0f6c58] border-[#13836B] font-medium shadow-xs'
                            : 'hover:bg-slate-200/70 border-transparent text-slate-800'
                        }`}
                        title="Click to toggle sentence traceability"
                      >
                        {sent.text}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="font-bold text-slate-500 text-[10px] uppercase block tracking-wider">
                  STATED RECOMMENDATION:
                </span>
                <p className="text-slate-800 font-sans mt-0.5">
                  {activeReport.recommendations}
                </p>
              </div>

            </div>

            {/* Traceability Legend */}
            <div className="flex items-center gap-2 text-[11px] text-text-muted pt-1">
              <span className="w-3 h-3 rounded bg-[#E8F5F1] border border-[#13836B] shrink-0"></span>
              <span>Highlighted sentence corresponds to active finding trace.</span>
            </div>

          </div>
        </div>

        {/* Right Column (7 Cols): Structured Analysis, Plain-Language Explanation & Clinician Review */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Potential Concern / Clinician Review Panel (Doc Section 6.4) */}
          {isReviewRequired && activeReport.review_notice && (
            <div className="brand-card p-5 bg-[#FFF5E3] border border-[#F3A536] space-y-3 shadow-xs">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#F3A536] text-white flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#7C4A03]">
                      {activeReport.review_notice.heading}
                    </h3>
                    <p className="text-[11px] text-[#935604]">
                      {activeReport.review_notice.subheading}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase bg-white/90 text-[#7C4A03] px-2 py-0.5 rounded border border-[#F3A536]/40">
                  Demonstration Alert
                </span>
              </div>

              {/* Source passage quote */}
              <div className="p-3 rounded bg-white/80 border border-[#F3A536]/30 text-xs space-y-1">
                <span className="font-bold text-[#7C4A03] text-[11px] uppercase tracking-wider block">
                  Documented Source Sentence:
                </span>
                <blockquote className="italic text-slate-800 font-medium">
                  "{activeReport.review_notice.excerpt}"
                </blockquote>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed">
                {activeReport.review_notice.guidance}
              </p>

              <div className="text-[11px] text-[#7C4A03] border-t border-[#F3A536]/20 pt-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F3A536] shrink-0" />
                <span>{activeReport.review_notice.disclaimer}</span>
              </div>
            </div>
          )}

          {/* Section 1: Radiologist Stated Impression (Kept strictly distinct) */}
          <div className="brand-card p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-border-default pb-2.5">
              <h3 className="font-bold text-sm text-[#17365D] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#17365D]" />
                Radiologist Stated Impression
              </h3>
              <span className="text-[11px] text-text-muted font-medium">
                Distinct from Platform Summary
              </span>
            </div>
            
            <div className="p-3.5 rounded-md bg-[#EAF0F8] border border-[#D9E1EA] text-xs font-medium text-slate-900 whitespace-pre-line leading-relaxed">
              {activeReport.impression}
            </div>
          </div>

          {/* Section 2: Plain-Language Explanation (Assistive accessibility) */}
          <div className="brand-card p-5 space-y-3 border-l-4 border-l-[#13836B]">
            <div className="flex items-center justify-between border-b border-border-default pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#13836B]" />
                <h3 className="font-bold text-sm text-text-primary">
                  Plain-Language Explanation
                </h3>
              </div>
              <span className="text-[10px] bg-[#E8F5F1] text-[#13836B] font-semibold px-2 py-0.5 rounded border border-[#13836B]/20">
                Non-Specialist Friendly
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              {activeReport.plain_language_summary}
            </p>

            {/* Terminology Breakdown */}
            {activeReport.plain_language_breakdown && activeReport.plain_language_breakdown.length > 0 && (
              <div className="pt-2 border-t border-border-default space-y-2">
                <span className="text-[11px] font-bold text-text-primary uppercase tracking-wider block">
                  Medical Terminology Simplified:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeReport.plain_language_breakdown.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                      <span className="font-bold text-[#13836B]">{item.term}:</span>
                      <p className="text-slate-600 text-[11px] leading-tight">{item.plain}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Structured Key Findings with Interactive Sentence Traceability */}
          <div className="brand-card p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-border-default pb-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#13836B]" />
                <h3 className="font-bold text-sm text-text-primary">
                  Structured Key Findings & Source Traceability
                </h3>
              </div>
              <span className="text-[11px] text-text-muted">
                {activeReport.findings.length} Documented Observations
              </span>
            </div>

            <div className="space-y-3">
              {activeReport.findings.map((item) => {
                const isSelected = highlightedSentenceId === item.source_sentence_id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHighlightedSentenceId(item.source_sentence_id)}
                    className={`p-3.5 rounded-md border transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#E8F5F1] border-[#13836B] shadow-xs'
                        : 'bg-white border-border-default hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-xs text-text-primary">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#13836B] bg-white px-1.5 py-0.5 rounded border border-[#13836B]/20">
                        Linked to Sentence [{item.source_sentence_id.toUpperCase()}]
                      </span>
                    </div>

                    <p className="text-xs text-slate-800 mt-1">
                      {item.finding}
                    </p>

                    {/* Source Quote Traceability Callout */}
                    <div className="mt-2 pt-2 border-t border-slate-200/60 text-[11px] space-y-0.5">
                      <div className="text-slate-500 font-semibold flex items-center gap-1">
                        <span>Source Quote:</span>
                        <span className="italic font-normal text-slate-700">"{item.source_quote}"</span>
                      </div>
                      <div className="text-[#0f6c58] text-[11px]">
                        <strong>Simplified:</strong> {item.plain_term}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Quantitative Measurements */}
          <div className="brand-card p-5 space-y-3">
            <h3 className="font-bold text-sm text-text-primary border-b border-border-default pb-2.5">
              Explicit Measurements & Values
            </h3>
            
            {activeReport.measurements && activeReport.measurements.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-600 border-b border-border-default">
                    <tr>
                      <th className="py-2 px-3 font-semibold">Parameter</th>
                      <th className="py-2 px-3 font-semibold">Value</th>
                      <th className="py-2 px-3 font-semibold">Unit</th>
                      <th className="py-2 px-3 font-semibold">Documented Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-default">
                    {activeReport.measurements.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="py-2 px-3 font-medium text-text-primary">{m.parameter}</td>
                        <td className="py-2 px-3 font-mono font-bold text-[#17365D]">{m.value}</td>
                        <td className="py-2 px-3 text-text-muted">{m.unit}</td>
                        <td className="py-2 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                            {m.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs text-text-muted italic">
                No specific numerical measurements stated in this synthetic sample report.
              </div>
            )}
          </div>

          {/* Section 5: Recommendations */}
          <div className="brand-card p-5 space-y-2">
            <h3 className="font-bold text-sm text-text-primary border-b border-border-default pb-2">
              Stated Follow-Up Recommendations
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed">
              {activeReport.recommendations || 'No recommendation stated in this sample.'}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
