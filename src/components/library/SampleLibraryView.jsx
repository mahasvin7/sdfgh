import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SAMPLE_REPORTS } from '../../data/sampleReports';
import { 
  FolderOpen, 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Eye, 
  FileText,
  Calendar,
  Layers,
  FileCheck
} from 'lucide-react';

export default function SampleLibraryView() {
  const { setSelectedSampleId, setActiveTab, setDisplayModalScan } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [modalityFilter, setModalityFilter] = useState('ALL');
  const [concernFilter, setConcernFilter] = useState('ALL');

  // Filtered samples
  const filteredSamples = SAMPLE_REPORTS.filter((sample) => {
    const matchesSearch = 
      sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.modality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.body_region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.sample_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.scenario_title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesModality = 
      modalityFilter === 'ALL' || sample.modality.toUpperCase().includes(modalityFilter);

    const matchesConcern = 
      concernFilter === 'ALL' || sample.concern_flag === concernFilter;

    return matchesSearch && matchesModality && matchesConcern;
  });

  const handleOpenReport = (sampleId) => {
    setSelectedSampleId(sampleId);
    setActiveTab('detail');
  };

  return (
    <div className="space-y-6 py-6">
      
      {/* Page Title & Scope Notice */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-default pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
              Synthetic Benchmark Sample Library
            </h1>
            <span className="bg-[#E8F5F1] text-[#13836B] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#13836B]/20">
              5 Test Cases
            </span>
          </div>
          <p className="text-xs text-text-muted mt-1">
            Predefined synthetic test cases engineered to demonstrate deterministic report structuring, traceability, and uncertainty handling.
          </p>
        </div>

        {/* Clear Synthetic Data Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFF5E3] border border-[#F3A536]/30 text-xs font-medium text-[#7C4A03]">
          <span className="w-2 h-2 rounded-full bg-[#F3A536]"></span>
          <strong>All Records Synthetic:</strong> Zero identifiable patient data
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="brand-card p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by modality, region, or sample ID..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B]"
            />
          </div>

          {/* Modality Filter */}
          <div className="md:col-span-3">
            <select
              value={modalityFilter}
              onChange={(e) => setModalityFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B]"
              aria-label="Filter by Modality"
            >
              <option value="ALL">All Modalities (X-Ray, CT, MRI, US)</option>
              <option value="X-RAY">Chest X-Ray</option>
              <option value="MRI">Knee MRI</option>
              <option value="CT">Head & Chest CT</option>
              <option value="ULTRASOUND">Abdominal Ultrasound</option>
            </select>
          </div>

          {/* Concern Flag Filter */}
          <div className="md:col-span-4">
            <select
              value={concernFilter}
              onChange={(e) => setConcernFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B]"
              aria-label="Filter by Demonstration Concern State"
            >
              <option value="ALL">All Statuses (Normal, Routine, Review Alert)</option>
              <option value="none">No Concern Flag (Normal/Stable)</option>
              <option value="informational">Informational / Uncertainty Handling</option>
              <option value="review_required">Clinician Review Alert Required</option>
            </select>
          </div>

        </div>
      </div>

      {/* Sample Cards Grid */}
      <div className="space-y-4">
        {filteredSamples.length === 0 ? (
          <div className="brand-card p-12 text-center space-y-3">
            <Info className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-text-primary">No matching sample found</p>
            <p className="text-xs text-text-muted">Try clearing your search query or modality filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setModalityFilter('ALL'); setConcernFilter('ALL'); }}
              className="btn-secondary text-xs !py-1.5 !px-3 mx-auto"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredSamples.map((sample) => {
            const isReview = sample.concern_flag === 'review_required';
            const isInfo = sample.concern_flag === 'informational';

            return (
              <div 
                key={sample.sample_id}
                className="brand-card p-5 hover:border-[#17365D] transition shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  
                  {/* Left: ID & Metadata */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono font-bold text-xs text-[#17365D] bg-[#EAF0F8] px-2.5 py-0.5 rounded border border-[#D9E1EA]">
                        {sample.sample_id}
                      </span>
                      <span className="text-[11px] font-bold text-[#13836B] uppercase tracking-wider bg-[#E8F5F1] px-2 py-0.5 rounded border border-[#13836B]/20">
                        Scenario {sample.scenario_code}
                      </span>
                      <span className="text-[11px] text-text-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {sample.sample_date}
                      </span>
                      <span className="text-[10px] text-slate-600 font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                        {sample.patient_id}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-text-primary pt-1">
                      {sample.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#17365D]">
                      Benchmark Purpose: <span className="font-normal text-slate-700">{sample.scenario_title}</span>
                    </p>
                  </div>

                  {/* Right: Concern Tag */}
                  <div>
                    {isReview ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C4A03] bg-[#FFF5E3] border border-[#F3A536] px-2.5 py-1 rounded">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#F3A536]" />
                        Review Note Present
                      </span>
                    ) : isInfo ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                        <Info className="w-3.5 h-3.5 text-slate-500" />
                        Uncertainty / Routine Finding
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16794B] bg-[#E8F5F1] border border-[#16794B]/30 px-2.5 py-1 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16794B]" />
                        No Concern Panel Triggered
                      </span>
                    )}
                  </div>

                </div>

                {/* Clinical Indication Excerpt */}
                <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900">Documented Indication:</span>
                  <p className="text-text-muted">{sample.clinical_indication}</p>
                </div>

                {/* Footer Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border-default">
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span><strong>Modality:</strong> {sample.modality}</span>
                    <span>•</span>
                    <span><strong>Region:</strong> {sample.body_region}</span>
                    <span>•</span>
                    <span><strong>Key Findings:</strong> {sample.findings.length} points</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDisplayModalScan(sample)}
                      className="btn-secondary text-xs !py-1.5 !px-2.5"
                      title="Open visual scan display reference"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#13836B]" />
                      Scan Display
                    </button>
                    <button
                      onClick={() => handleOpenReport(sample.sample_id)}
                      className="btn-primary text-xs !py-1.5 !px-3 shadow-xs"
                    >
                      Open Detailed Analysis <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
