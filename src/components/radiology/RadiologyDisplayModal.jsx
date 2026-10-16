import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sun, 
  Maximize2, 
  AlertCircle, 
  ShieldCheck, 
  Sliders 
} from 'lucide-react';

export default function RadiologyDisplayModal() {
  const { displayModalScan, setDisplayModalScan } = useApp();

  const [zoom, setZoom] = useState(1);
  const [invert, setInvert] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  if (!displayModalScan) return null;

  const scanInfo = displayModalScan.scan_display || {
    type: displayModalScan.modality,
    view: 'Standard Diagnostic Slice',
    resolution: 'Standard Diagnostic Window',
    scanUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Visual reference image.'
  };

  const handleReset = () => {
    setZoom(1);
    setInvert(false);
    setBrightness(100);
    setContrast(100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 no-print">
      <div className="bg-[#111827] text-white rounded-card max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-700 shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-4 bg-[#1f2937] border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#17365D] text-slate-200 flex items-center justify-center">
              <Eye className="w-4 h-4 text-[#13836B]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-slate-100">
                  {displayModalScan.title || 'Diagnostic Imaging Visualizer'}
                </h3>
                <span className="text-[10px] font-bold bg-[#17365D] text-teal-300 px-2 py-0.5 rounded uppercase tracking-wider border border-[#234b7a]">
                  Display Reference Only
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {scanInfo.type} · {scanInfo.view} · Fictional Reference Scan
              </p>
            </div>
          </div>

          <button
            onClick={() => setDisplayModalScan(null)}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prominent Disclaimer Banner */}
        <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700 text-xs text-amber-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Visual Inspection Mode:</strong> Computer vision automated image interpretation is out of prototype scope. Clinical report understanding operates solely on written radiologist documentation.
          </span>
        </div>

        {/* Center: Medical Scan Canvas */}
        <div className="flex-1 bg-black relative overflow-hidden flex items-center justify-center min-h-[380px] p-4 select-none">
          <img
            src={scanInfo.scanUrl}
            alt={displayModalScan.title}
            style={{
              transform: `scale(${zoom})`,
              filter: `${invert ? 'invert(100%)' : ''} brightness(${brightness}%) contrast(${contrast}%)`,
              transition: 'transform 0.15s ease'
            }}
            className="max-h-[460px] max-w-full object-contain pointer-events-none"
          />

          {/* Radiologic Window HUD */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-[11px] font-mono text-emerald-400 p-2 rounded border border-slate-800 space-y-0.5">
            <div>FOV: 350 mm</div>
            <div>SLICE: 1.0 mm</div>
            <div>ZOOM: {(zoom * 100).toFixed(0)}%</div>
            <div>LUT: {invert ? 'INVERTED' : 'STANDARD'}</div>
          </div>

          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-[11px] font-mono text-slate-400 p-2 rounded border border-slate-800">
            {displayModalScan.sample_id} · SYNTHETIC PATIENT RECORD
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-[#1f2937] border-t border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Zoom and Invert Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(Math.min(zoom + 0.2, 2.6))}
              className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1 border border-slate-700"
            >
              <ZoomIn className="w-3.5 h-3.5" /> Zoom In
            </button>
            <button
              onClick={() => setZoom(Math.max(zoom - 0.2, 0.6))}
              className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1 border border-slate-700"
            >
              <ZoomOut className="w-3.5 h-3.5" /> Zoom Out
            </button>
            <button
              onClick={() => setInvert(!invert)}
              className={`px-2.5 py-1.5 rounded flex items-center gap-1 border transition ${
                invert 
                  ? 'bg-teal-600 text-white border-teal-500 font-bold' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              Invert Gray
            </button>
            <button
              onClick={handleReset}
              className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDisplayModalScan(null)}
              className="px-4 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white font-medium"
            >
              Close Visualizer
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
