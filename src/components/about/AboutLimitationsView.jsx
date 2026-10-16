import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  FileText, 
  Award, 
  ChevronRight, 
  ExternalLink,
  Layers,
  ArrowRight,
  Database,
  Lock,
  GitBranch
} from 'lucide-react';

export default function AboutLimitationsView() {
  const [activeSection, setActiveSection] = useState('scope'); // 'scope' | 'safety' | 'roadmap' | 'checklist'

  return (
    <div className="space-y-6 py-6">
      
      {/* Title & Document Attribution */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-default pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
              Platform Architecture & SFIC 2026 Documentation
            </h1>
            <span className="bg-[#EAF0F8] text-[#17365D] text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-[#17365D]/20">
              Doc Ref: SFIC_2026_T03
            </span>
          </div>
          <p className="text-xs text-text-muted mt-1">
            Authoritative documentation for SOUL Radiology prototype aligned with Theme 03 Swasth & Samavesh Bharat.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFF5E3] text-xs font-semibold text-[#7C4A03] border border-[#F3A536]/30">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F3A536]" />
          <span>Non-Diagnostic Student Prototype</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs (Decent 8px radius buttons) */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-md border border-border-default">
        {[
          { id: 'scope', label: '1. Scope & Implementation Matrix' },
          { id: 'safety', label: '2. Safety & Responsible AI Disclosures' },
          { id: 'roadmap', label: '3. Future Roadmap (Phases 1–6)' },
          { id: 'checklist', label: '4. Acceptance Criteria & Checklist' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`px-3 py-2 text-xs font-semibold rounded-md transition ${
              activeSection === tab.id
                ? 'bg-[#17365D] text-white shadow-xs'
                : 'text-text-muted hover:text-text-primary hover:bg-slate-200/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Scope & Implementation Status Matrix (Doc Section 4) */}
      {activeSection === 'scope' && (
        <div className="space-y-6">
          <div className="brand-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border-default pb-3">
              <div>
                <h2 className="text-base font-bold text-text-primary">
                  Scope and Implementation Status (Section 4)
                </h2>
                <p className="text-xs text-text-muted">
                  Strictly demarcates current demonstrator capabilities versus out-of-scope enterprise features.
                </p>
              </div>
              <span className="text-xs text-[#13836B] font-bold">SFIC Theme 03</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#17365D] text-white">
                  <tr>
                    <th className="py-2.5 px-3.5 font-semibold">Area</th>
                    <th className="py-2.5 px-3.5 font-semibold">Current Demo Scope</th>
                    <th className="py-2.5 px-3.5 font-semibold">Status in Prototype</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default">
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3.5 font-bold text-[#17365D]">Sample report library</td>
                    <td className="py-2.5 px-3.5 text-slate-700">3–5 synthetic reports with matching predefined outputs</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Implemented (5 Cases)</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3.5 font-bold text-[#17365D]">Sample selection</td>
                    <td className="py-2.5 px-3.5 text-slate-700">User chooses a prepared report from a list or card layout</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Implemented</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3.5 font-bold text-[#17365D]">Detailed report view</td>
                    <td className="py-2.5 px-3.5 text-slate-700">Structured sections populated from selected sample's saved result</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Implemented</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3.5 font-bold text-[#17365D]">Potential concern panel</td>
                    <td className="py-2.5 px-3.5 text-slate-700">Predefined demonstration warning linked to sample source text</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Implemented</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3.5 font-bold text-[#17365D]">Source sentence traceability</td>
                    <td className="py-2.5 px-3.5 text-slate-700">Interactive sentence highlighting tying observations to source report</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Implemented</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3.5 font-bold text-[#17365D]">Document file uploading</td>
                    <td className="py-2.5 px-3.5 text-slate-700">Working FileReader for TXT, PDF, image preview, & pre-loaded test files</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Implemented</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="py-2.5 px-3.5 font-bold text-slate-500">Trained ML model inference</td>
                    <td className="py-2.5 px-3.5 text-slate-500">No newly trained model in current demo; deterministic paired JSON</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium text-[10px]">Future Phase 4 Scope</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="py-2.5 px-3.5 font-bold text-slate-500">Direct image pixel interpretation</td>
                    <td className="py-2.5 px-3.5 text-slate-500">Not included; radiology viewer is strictly for visual inspection display</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium text-[10px]">Out of Scope (Display Only)</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-red-50/30">
                    <td className="py-2.5 px-3.5 font-bold text-slate-500">Hospital ERP, billing, appointments</td>
                    <td className="py-2.5 px-3.5 text-slate-500">Not included; prototype is dedicated to report understanding</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-medium text-[10px]">Strictly Out of Scope</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-red-50/30">
                    <td className="py-2.5 px-3.5 font-bold text-slate-500">Clinical diagnosis / treatment advice</td>
                    <td className="py-2.5 px-3.5 text-slate-500">Not provided; strictly requires licensed clinician evaluation</td>
                    <td className="py-2.5 px-3.5"><span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-medium text-[10px]">Not Permitted Use</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Safety & Responsible AI Disclosures (Doc Section 12 & 14) */}
      {activeSection === 'safety' && (
        <div className="space-y-6">
          <div className="brand-card p-6 space-y-4">
            <h2 className="text-base font-bold text-text-primary border-b border-border-default pb-3">
              Safety, Privacy, and Responsible Use (Section 12)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-md bg-[#FFF5E3] border border-[#F3A536] space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#F3A536]" />
                  <h3 className="font-bold text-[#7C4A03]">Zero Hallucination / Invention Safeguard</h3>
                </div>
                <p className="text-slate-800 leading-relaxed">
                  The platform never invents findings, measurements, diagnoses, or probabilities. 
                  Every key finding is mapped directly to a specific sentence in the synthetic source report. 
                  Where information is incomplete (e.g. Sample D), uncertainty is explicitly communicated.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#E8F5F1] border border-[#13836B]/30 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#13836B]" />
                  <h3 className="font-bold text-[#13836B]">Synthetic Data & Privacy Protection</h3>
                </div>
                <p className="text-slate-800 leading-relaxed">
                  Only internally authored synthetic scenarios are used for the public demonstration. 
                  No identifiable patient health records (PHI), hospital numbers, or private dates are stored, preventing data exposure.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#EAF0F8] border border-[#17365D]/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#17365D]" />
                  <h3 className="font-bold text-[#17365D]">Separation of Source vs Interpretation</h3>
                </div>
                <p className="text-slate-800 leading-relaxed">
                  The original radiologist impression and the platform’s plain-language explanation are visually and functionally separated. 
                  This ensures evaluators always know what was written by the doctor versus what was rephrased.
                </p>
              </div>

              <div className="p-4 rounded-md bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-700" />
                  <h3 className="font-bold text-slate-800">Non-Diagnostic Boundary</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  The prototype is not a medical device. It does not replace a radiologist or treating clinician. 
                  Urgency alerts are for demonstration purposes only and must not be used for emergency triage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Future Development Roadmap (Doc Section 15) */}
      {activeSection === 'roadmap' && (
        <div className="space-y-6">
          <div className="brand-card p-6 space-y-4">
            <h2 className="text-base font-bold text-text-primary border-b border-border-default pb-3">
              Six-Phase Development Roadmap (Section 15)
            </h2>

            <div className="space-y-4">
              {[
                { phase: 'Phase 1', title: 'SFIC Demonstration Prototype', desc: 'Build sample library, matching predefined results, structured report screen, concern panel, source traceability, and disclosures.', status: 'CURRENT (SFIC 2026)' },
                { phase: 'Phase 2', title: 'Document & Text Ingestion', desc: 'Add verified PDF text extraction and OCR for scanned reports; handle unreadable and unsupported files safely.', status: 'PROTOTYPED IN DEMO' },
                { phase: 'Phase 3', title: 'Report Information Extraction', desc: 'Evaluate methods for extracting findings, impression, measurements, negation, uncertainty, and recommendations from text.', status: 'PLANNED' },
                { phase: 'Phase 4', title: 'Focused AI/ML Model Evaluation', desc: 'Choose one well-defined task, use authorized labeled data, establish reference benchmarks, and evaluate on separate test sets.', status: 'FUTURE WORK' },
                { phase: 'Phase 5', title: 'Inclusive Accessibility & Indian Languages', desc: 'Test plain-language explanations with diverse patient groups and integrate verified Hindi, Kannada, and regional language translations.', status: 'IN PROGRESS' },
                { phase: 'Phase 6', title: 'Clinical Stakeholder & Governance Review', desc: 'Seek structured feedback from qualified radiologists, determine additional evidence required, and align with CDSCO / ABDM guidelines.', status: 'FUTURE GOVERNANCE' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-md border border-border-default hover:border-[#17365D] transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-[#13836B]">{item.phase}:</span>
                      <h3 className="font-bold text-xs text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold shrink-0 text-center ${
                    item.status.includes('CURRENT') 
                      ? 'bg-[#17365D] text-white' 
                      : item.status.includes('PROTOTYPED') 
                      ? 'bg-[#E8F5F1] text-[#13836B] border border-[#13836B]/30' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Acceptance Criteria & Build Checklist (Doc Section 13 & 19) */}
      {activeSection === 'checklist' && (
        <div className="space-y-6">
          <div className="brand-card p-6 space-y-4">
            <h2 className="text-base font-bold text-text-primary border-b border-border-default pb-3">
              Testing and Acceptance Checklist Verification (Section 13 & 19)
            </h2>

            <div className="space-y-2.5 text-xs">
              {[
                { test: 'Sample Selection', pass: 'PASS', detail: 'Every sample (A through E) opens its respective source report correctly.' },
                { test: 'Result Mapping', pass: 'PASS', detail: 'Each sample displays its matching predefined output without data corruption.' },
                { test: 'No Cross-Sample Leakage', pass: 'PASS', detail: 'Selecting another sample replaces all fields, measurements, and warning states.' },
                { test: 'Source Traceability', pass: 'PASS', detail: 'Every key finding is linked to and highlights its supporting sentence in the report.' },
                { test: 'Uncertainty / Incomplete Case', pass: 'PASS', detail: 'Sample D communicates obscured gallbladder/pancreas without guessing.' },
                { test: 'Non-Alarmist Normal Case', pass: 'PASS', detail: 'Sample A displays clear normal findings without any unsupported warning.' },
                { test: 'Safety & Prototype Disclaimers', pass: 'PASS', detail: 'Visible notices appear prominently across login, overview, and report views.' },
                { test: 'Working Document File Upload', pass: 'PASS', detail: 'File upload studio reads local files and pre-packages SFIC test cases smoothly.' },
                { test: 'Decent Button Geometry', pass: 'PASS', detail: 'Buttons use 8px border radius conforming to human-made public service tone.' },
                { test: 'Diagnostic Image Role', pass: 'PASS', detail: 'Radiological imaging viewer clearly designated strictly for visual display reference.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#17365D]">{item.test}: </span>
                    <span className="text-slate-700">{item.detail}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold font-mono text-[11px] shrink-0">
                    {item.pass}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
