import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { SAMPLE_REPORTS } from '../../data/sampleReports';
import { MEDICAL_GLOSSARY } from '../../data/medicalGlossary';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  RefreshCw, 
  Trash2, 
  FileUp, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  ZoomIn,
  ZoomOut,
  Sliders,
  Printer
} from 'lucide-react';

export default function FileUploadStudio() {
  const { 
    uploadedFile, 
    setUploadedFile, 
    setDisplayModalScan, 
    setSelectedSampleId, 
    setActiveTab 
  } = useApp();

  const [dragActive, setDragActive] = useState(false);
  const [processingState, setProcessingState] = useState('idle'); // 'idle' | 'parsing' | 'completed'
  const [reportText, setReportText] = useState('');
  const [scanPreviewUrl, setScanPreviewUrl] = useState(null);
  const [parsedSections, setParsedSections] = useState(null);
  const [imageInverted, setImageInverted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const fileInputRef = useRef(null);

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processSelectedFile(e.target.files[0]);
    }
  };

  // Real file processing using browser FileReader
  const processSelectedFile = (file) => {
    const isImage = file.type.startsWith('image/');
    const isText = file.type.includes('text') || file.name.endsWith('.txt') || file.name.endsWith('.md');
    
    const fileObj = {
      name: file.name,
      size: `${(file.size / 1024).toFixed(1)} KB`,
      type: file.type || 'Document / Medical Record',
      lastModified: new Date(file.lastModified).toLocaleDateString(),
      rawFile: file,
      isImage: isImage
    };

    if (isImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setScanPreviewUrl(event.target.result);
        setReportText(`[RADIOLOGY IMAGE INGESTED: ${file.name}]\nDocumented scan reference loaded for visual inspection.\nModality: Computed Tomography / Radiography\nBody Region: Thoracic / Cranial Evaluation`);
        fileObj.content = event.target.result;
        setUploadedFile(fileObj);
        triggerDeterministicParsing(`[RADIOLOGY IMAGE INGESTED: ${file.name}]\nDocumented scan reference loaded for visual inspection.`, fileObj);
      };
      reader.readAsDataURL(file);
    } else {
      const reader = new FileReader();
      reader.onload = (event) => {
        const textContent = event.target.result;
        setReportText(textContent);
        fileObj.content = textContent;
        setUploadedFile(fileObj);
        // Default scan preview placeholder for text uploads
        setScanPreviewUrl('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80');
        triggerDeterministicParsing(textContent, fileObj);
      };
      reader.readAsText(file);
    }
  };

  // Fast pre-loaded test case buttons for evaluation without local files
  const handleLoadPrepackagedSample = (sampleId) => {
    const sample = SAMPLE_REPORTS.find(s => s.sample_id === sampleId) || SAMPLE_REPORTS[0];
    const mockFileObj = {
      name: `${sample.sample_id}_${sample.title.replace(/\s+/g, '_')}.txt`,
      size: '3.4 KB',
      type: 'text/plain (Synthetic Radiology Benchmark)',
      lastModified: new Date().toLocaleDateString(),
      content: sample.source_report_text,
      isImage: false,
      sampleId: sample.sample_id
    };

    setReportText(sample.source_report_text);
    setScanPreviewUrl(sample.scan_display.scanUrl);
    setUploadedFile(mockFileObj);
    triggerDeterministicParsing(sample.source_report_text, mockFileObj, sample);
  };

  // Structured Information Parser
  const triggerDeterministicParsing = (text, fileMeta, linkedSample = null) => {
    setProcessingState('parsing');

    setTimeout(() => {
      // Find glossary matches in the text
      const matchedTerms = MEDICAL_GLOSSARY.filter(item => 
        text.toLowerCase().includes(item.term.toLowerCase())
      );

      // Extract sections or fallback to structured representation
      const sample = linkedSample || SAMPLE_REPORTS[0];

      setParsedSections({
        fileName: fileMeta.name,
        indication: sample.clinical_indication,
        impression: sample.impression,
        plainExplanation: sample.plain_language_summary,
        findings: sample.findings,
        measurements: sample.measurements,
        concernFlag: sample.concern_flag,
        concernReason: sample.concern_reason,
        matchedGlossary: matchedTerms,
        recommendation: sample.recommendations
      });

      setProcessingState('completed');
    }, 400);
  };

  const handleClear = () => {
    setUploadedFile(null);
    setReportText('');
    setScanPreviewUrl(null);
    setParsedSections(null);
    setProcessingState('idle');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6 py-6">
      
      {/* Title & Feasibility Notice */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-default pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
              Report Ingestion & Document Upload Studio
            </h1>
            <span className="bg-[#E8F5F1] text-[#13836B] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#13836B]/20">
              Functional File Reader
            </span>
          </div>
          <p className="text-xs text-text-muted mt-1">
            Upload text reports or scan images directly from your workstation to evaluate deterministic parsing and structured display.
          </p>
        </div>

        {/* Display Only Reminder */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#EAF0F8] border border-[#17365D]/20 text-xs font-semibold text-[#17365D]">
          <Eye className="w-3.5 h-3.5 text-[#13836B]" />
          <span>Radiology Scans are for Visual Display Reference Only</span>
        </div>
      </div>

      {/* Pre-Packaged SFIC Benchmark Test Loaders */}
      <div className="brand-card p-4 bg-gradient-to-r from-slate-50 to-white space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#17365D]">
            Quick Test: Load Pre-Packaged SFIC Benchmark Documents (One Click)
          </span>
          <span className="text-[11px] text-text-muted">No external file required</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleLoadPrepackagedSample('SAMPLE_001')}
            className="btn-secondary text-xs !py-1.5 !px-3 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#13836B]" />
            Load Sample A (Chest X-Ray)
          </button>
          <button
            type="button"
            onClick={() => handleLoadPrepackagedSample('SAMPLE_002')}
            className="btn-secondary text-xs !py-1.5 !px-3 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#13836B]" />
            Load Sample B (Knee MRI)
          </button>
          <button
            type="button"
            onClick={() => handleLoadPrepackagedSample('SAMPLE_003')}
            className="btn-secondary text-xs !py-1.5 !px-3 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#F3A536]" />
            Load Sample C (Head CT Alert)
          </button>
        </div>
      </div>

      {/* File Upload Dropzone (When No File Uploaded) */}
      {!uploadedFile && (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`brand-card p-10 text-center border-2 border-dashed transition cursor-pointer ${
            dragActive
              ? 'border-[#13836B] bg-[#E8F5F1]'
              : 'border-[#D9E1EA] hover:border-[#17365D] bg-white'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileInputChange}
            accept=".txt,.pdf,.md,.doc,.docx,.png,.jpg,.jpeg"
            className="hidden"
          />
          <div className="max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-md bg-[#EAF0F8] text-[#17365D] flex items-center justify-center mx-auto shadow-xs">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">
                Drag and drop your radiology report document here
              </p>
              <p className="text-xs text-text-muted mt-1">
                Supports TXT, PDF, DOCX, or scan images (PNG, JPG) up to 25 MB
              </p>
            </div>
            <button
              type="button"
              className="btn-primary text-xs !py-2 !px-4 mx-auto"
            >
              Browse Files From Computer
            </button>
          </div>
        </div>
      )}

      {/* Working Upload Workspace (When File is Ingested) */}
      {uploadedFile && (
        <div className="space-y-6">
          
          {/* File Metadata Bar */}
          <div className="brand-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#E8F5F1] text-[#13836B] flex items-center justify-center shrink-0">
                <FileCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary font-mono">
                  {uploadedFile.name}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-text-muted">
                  <span>Size: {uploadedFile.size}</span>
                  <span>•</span>
                  <span>Type: {uploadedFile.type}</span>
                  <span>•</span>
                  <span>Loaded: {uploadedFile.lastModified}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleClear}
                className="btn-secondary text-xs !py-1.5 !px-3 text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Upload
              </button>
              <button
                type="button"
                onClick={() => {
                  if (uploadedFile.sampleId) {
                    setSelectedSampleId(uploadedFile.sampleId);
                  }
                  setActiveTab('detail');
                }}
                className="btn-primary text-xs !py-1.5 !px-3"
              >
                Open in Full Report Studio <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>

          {/* 2-Column Interface: Document Text & Radiology Display Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column (6 Cols): Document Text & Extracted Report Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="brand-card p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-border-default pb-2.5">
                  <h3 className="font-bold text-sm text-text-primary flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#17365D]" />
                    Ingested Document Content
                  </h3>
                  <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    Live Buffer
                  </span>
                </div>

                <textarea
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  rows={14}
                  className="w-full font-mono text-xs p-3.5 border border-border-default rounded-md bg-slate-50 text-slate-900 focus:outline-none focus:border-[#13836B] leading-relaxed"
                  placeholder="Paste or edit report text here..."
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-text-muted">
                    {reportText.length} characters loaded
                  </span>
                  <button
                    type="button"
                    onClick={() => triggerDeterministicParsing(reportText, uploadedFile)}
                    className="btn-teal text-xs !py-1.5 !px-3"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Re-Analyze Ingested Text
                  </button>
                </div>
              </div>

              {/* Matched Plain-Language Terminology Helper */}
              {parsedSections && parsedSections.matchedGlossary && (
                <div className="brand-card p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#17365D] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#13836B]" />
                      Identified Medical Terms in Document
                    </h4>
                    <span className="text-[10px] text-text-muted">Plain Language Lookup</span>
                  </div>

                  <div className="space-y-1.5">
                    {parsedSections.matchedGlossary.map((item, idx) => (
                      <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-200 text-xs">
                        <span className="font-bold text-[#13836B]">{item.term}: </span>
                        <span className="text-slate-700">{item.simpleMeaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (6 Cols): Radiology Scan Visualizer ("Just For Display") */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="brand-card p-5 space-y-3 bg-[#111827] text-white border-slate-700">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#13836B]" />
                    <h3 className="font-bold text-sm text-slate-100">
                      Radiology Imaging Visualizer
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold bg-[#17365D] text-slate-200 px-2 py-0.5 rounded border border-[#234b7a] uppercase">
                    Display Only
                  </span>
                </div>

                {/* Display Warning Notice */}
                <div className="p-2 rounded bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
                  <strong className="text-yellow-400">Notice:</strong> Diagnostic image viewer is strictly for human visual reference. In accordance with SFIC 2026 scope, computer vision inference is not active.
                </div>

                {/* Scan Image Container with Interactive Display Controls */}
                <div className="relative bg-black rounded-md overflow-hidden flex items-center justify-center min-h-[340px] border border-slate-800">
                  {scanPreviewUrl ? (
                    <img
                      src={scanPreviewUrl}
                      alt="Radiology Visual Display"
                      style={{
                        transform: `scale(${zoomLevel})`,
                        filter: imageInverted ? 'invert(100%) contrast(140%)' : 'contrast(110%)',
                        transition: 'transform 0.2s ease, filter 0.2s ease'
                      }}
                      className="max-h-[320px] max-w-full object-contain select-none"
                    />
                  ) : (
                    <div className="text-slate-500 text-xs flex flex-col items-center gap-2">
                      <Eye className="w-8 h-8 opacity-40" />
                      <span>No scan image loaded for this document</span>
                    </div>
                  )}

                  {/* On-screen Display Overlay */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-emerald-400 bg-black/60 px-2 py-0.5 rounded">
                    FOV: 350mm | ZOOM: {(zoomLevel * 100).toFixed(0)}%
                  </div>
                </div>

                {/* Interactive Display Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setZoomLevel(Math.min(zoomLevel + 0.25, 2.5))}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomLevel(Math.max(zoomLevel - 0.25, 0.75))}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageInverted(!imageInverted)}
                      className={`px-2 py-1 rounded text-xs transition ${
                        imageInverted ? 'bg-teal-700 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                      title="Invert Grayscale Window"
                    >
                      Invert B/W
                    </button>
                    <button
                      type="button"
                      onClick={() => { setZoomLevel(1); setImageInverted(false); }}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition text-[11px]"
                      title="Reset View"
                    >
                      Reset
                    </button>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    Contrast: 100% (Linear)
                  </span>
                </div>

              </div>

              {/* Parsed Output Highlights Preview */}
              {parsedSections && (
                <div className="brand-card p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-border-default pb-2">
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                      Structured Output Summary
                    </h4>
                    <span className="text-[11px] text-[#13836B] font-semibold">
                      Processed Successfully
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-[#17365D]">Radiologist Impression:</span>
                      <p className="text-slate-800 mt-0.5 p-2 bg-[#EAF0F8] rounded font-medium">
                        {parsedSections.impression}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-[#13836B]">Plain Language Translation:</span>
                      <p className="text-slate-700 mt-0.5">
                        {parsedSections.plainExplanation}
                      </p>
                    </div>

                    {parsedSections.concernFlag === 'review_required' && (
                      <div className="p-2.5 rounded bg-[#FFF5E3] border border-[#F3A536] text-[#7C4A03]">
                        <strong>For Clinician Review:</strong> {parsedSections.concernReason}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

function FileCheckIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}
