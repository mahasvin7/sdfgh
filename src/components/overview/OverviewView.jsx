import React from 'react';
import { useApp } from '../../context/AppContext';
import { SAMPLE_REPORTS } from '../../data/sampleReports';
import { 
  FolderOpen, 
  UploadCloud, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  FileText, 
  ArrowRight, 
  Activity, 
  Layers, 
  AlertTriangle,
  Info,
  Award
} from 'lucide-react';

export default function OverviewView() {
  const { setActiveTab, setSelectedSampleId } = useApp();

  const handleLaunchSample = (sampleId) => {
    setSelectedSampleId(sampleId);
    setActiveTab('detail');
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Hero / Executive Summary Banner */}
      <div className="brand-card p-6 sm:p-8 bg-gradient-to-r from-white to-[#EAF0F8] border border-border-default">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E8F5F1] text-[#13836B] text-xs font-semibold border border-[#13836B]/20">
            <Award className="w-3.5 h-3.5" />
            SFIC 2026 Student Innovation · Theme 03 Swasth & Samavesh Bharat
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17365D] tracking-tight">
            AI-Assisted Radiology Report Understanding Platform
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Radiology reports often contain dense terminology, cryptic abbreviations, and varied structural formats. 
            <strong> SOUL Radiology</strong> demonstrates how documented findings can be segregated into plain-language summaries, 
            verifiable source text quotes, and non-alarmist clinician review alerts to support transparent, inclusive healthcare communication.
          </p>

          {/* Quick Actions (Decent 8px radius buttons) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('library')}
              className="btn-primary text-sm shadow-sm"
            >
              <FolderOpen className="w-4 h-4" />
              Explore Sample Library (5 Cases)
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className="btn-secondary text-sm shadow-sm"
            >
              <UploadCloud className="w-4 h-4 text-[#13836B]" />
              Upload & Test Report Document
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="px-3 py-2 text-xs font-semibold text-text-muted hover:text-text-primary hover:underline"
            >
              View Scope & Acceptance Checklist →
            </button>
          </div>
        </div>
      </div>

      {/* Mandatory Scope Boundary Box (Brand Kit Section 1 & Doc Section 4) */}
      <div className="p-4 rounded-card bg-[#E8F5F1] border border-[#13836B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#0f6c58]">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#13836B] shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-[#13836B]">Current Demonstration Scope:</strong>
            <p className="text-slate-700 mt-0.5">
              Deterministic sample-based analysis using prepared synthetic benchmark reports. 
              The prototype does not operate a trained machine learning model, does not analyse radiology pixels independently, and is not a clinical diagnostic device.
            </p>
          </div>
        </div>
        <span className="bg-white text-[#13836B] font-bold px-2 py-1 rounded border border-[#13836B]/20 shrink-0 text-[11px]">
          Sample-Based Demo
        </span>
      </div>

      {/* 5-Step Evaluation Workflow (Doc Section 8) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              Demonstration Workflow
            </h2>
            <p className="text-xs text-text-muted">
              Step-by-step navigation model designed for SFIC judges and academic evaluators
            </p>
          </div>
          <span className="text-xs text-[#13836B] font-medium hidden sm:inline">
            5 Repeatable Benchmark Scenarios
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            { step: '01', title: 'Select Case', desc: 'Pick from 5 synthetic reports covering Chest, Knee, Brain, and Abdomen.' },
            { step: '02', title: 'Inspect Source', desc: 'Read the verbatim radiologist findings and clinical indication without alteration.' },
            { step: '03', title: 'Structured View', desc: 'View deterministic mapping: impression, findings, and explicit measurements.' },
            { step: '04', title: 'Traceability', desc: 'Hover or click structured findings to highlight exact source sentences in real-time.' },
            { step: '05', title: 'Clinician Note', desc: 'Review non-alarmist demonstration alerts clearly separated from medical advice.' },
          ].map((item, idx) => (
            <div key={idx} className="brand-card p-4 space-y-2 relative border-t-2 border-t-[#17365D]">
              <div className="text-[11px] font-mono font-bold text-[#13836B]">STEP {item.step}</div>
              <h3 className="font-bold text-sm text-text-primary">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Demonstration Samples Grid (Doc Section 7) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              Synthetic Benchmark Sample Scenarios
            </h2>
            <p className="text-xs text-text-muted">
              Authored test cases specifically calibrated for non-alarmist and uncertainty testing
            </p>
          </div>
          <button
            onClick={() => setActiveTab('library')}
            className="text-xs font-semibold text-[#13836B] hover:underline flex items-center gap-1"
          >
            Open Complete Library <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAMPLE_REPORTS.map((sample) => {
            const isReview = sample.concern_flag === 'review_required';
            const isInfo = sample.concern_flag === 'informational';

            return (
              <div 
                key={sample.sample_id} 
                className="brand-card p-5 flex flex-col justify-between hover:border-[#13836B] transition shadow-xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#17365D] bg-[#EAF0F8] px-2 py-0.5 rounded">
                      {sample.sample_id}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      Sample {sample.scenario_code}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-text-primary group-hover:text-[#17365D] transition">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-[#13836B] font-medium mt-0.5">
                      {sample.scenario_title}
                    </p>
                  </div>

                  <p className="text-xs text-text-muted line-clamp-2">
                    {sample.clinical_indication}
                  </p>

                  {/* Flag Status */}
                  <div className="pt-1">
                    {isReview ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7C4A03] bg-[#FFF5E3] border border-[#F3A536]/40 px-2 py-0.5 rounded">
                        <AlertTriangle className="w-3 h-3 text-[#F3A536]" />
                        Demonstration Review Alert
                      </span>
                    ) : isInfo ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                        <Info className="w-3 h-3 text-slate-500" />
                        Routine / Uncertainty Handling
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#16794B] bg-[#E8F5F1] border border-[#16794B]/30 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-[#16794B]" />
                        No Unsupported Alert (Normal)
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border-default flex items-center justify-between">
                  <span className="text-[11px] text-text-muted font-medium">
                    {sample.modality}
                  </span>
                  <button
                    onClick={() => handleLaunchSample(sample.sample_id)}
                    className="btn-primary text-xs !py-1.5 !px-3 shadow-xs"
                  >
                    View Analysis →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SFIC Theme 03 Alignment Matrix Preview */}
      <div className="brand-card p-6 bg-white border border-border-default space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#F3A536]" />
          <h2 className="text-base font-bold text-text-primary">
            SFIC 2026 Theme 03 Alignment (Swasth & Samavesh Bharat)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
            <p className="font-bold text-[#17365D]">Healthcare Innovation</p>
            <p className="text-slate-600">Demonstrates a structured presentation format to make technical clinical reports navigable.</p>
          </div>
          <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
            <p className="font-bold text-[#17365D]">Preventive Health</p>
            <p className="text-slate-600">Illustrative clinician-review notices surface documented text for prompt medical evaluation.</p>
          </div>
          <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
            <p className="font-bold text-[#17365D]">Assistive Technology</p>
            <p className="text-slate-600">Plain-language explanations decode medical jargon without fabricating new clinical diagnoses.</p>
          </div>
          <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
            <p className="font-bold text-[#17365D]">Inclusive Bharat</p>
            <p className="text-slate-600">High-contrast accessibility, text resizing, and future multilingual translation groundwork.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
