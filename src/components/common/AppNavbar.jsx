import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  FileText, 
  FolderOpen, 
  UploadCloud, 
  BookOpen, 
  Info, 
  LogOut, 
  User, 
  Menu, 
  X,
  Eye,
  Sliders,
  Sparkles
} from 'lucide-react';

export default function AppNavbar() {
  const { 
    activeTab, 
    setActiveTab, 
    currentUser, 
    logoutUser,
    activeReport,
    setDisplayModalScan
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'library', label: 'Sample Library (5)', icon: FolderOpen },
    { id: 'detail', label: 'Structured Report', icon: FileText },
    { id: 'upload', label: 'Upload Document', icon: UploadCloud },
    { id: 'glossary', label: 'Medical Terms', icon: BookOpen },
    { id: 'about', label: 'Scope & Roadmap', icon: Info },
  ];

  return (
    <nav className="bg-white border-b border-border-default sticky top-0 z-30 shadow-xs no-print">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Wordmark (SOUL in navy, Radiology in teal) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2.5 text-left focus:outline-none"
              title="Return to SOUL Radiology Overview"
            >
              <div className="w-9 h-9 rounded-md bg-[#17365D] flex items-center justify-center text-white shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <line x1="8" y1="8" x2="16" y2="8" stroke="#13836B" strokeWidth="2.5" />
                  <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" />
                  <line x1="8" y1="16" x2="12" y2="16" stroke="white" strokeWidth="2" />
                  <circle cx="15.5" cy="16" r="1.5" fill="#13836B" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-tight">
                  <span className="text-[#17365D]">SOUL</span>{' '}
                  <span className="text-[#13836B]">Radiology</span>
                </div>
                <div className="text-[10px] text-text-muted -mt-0.5 font-medium tracking-tight">
                  Report Understanding Prototype
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Tabs (Decent 8px radius, no over-curved pills) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    isActive
                      ? 'bg-[#17365D] text-white shadow-xs'
                      : 'text-text-muted hover:text-text-primary hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Quick Diagnostic Scan Visualizer trigger ("radiology thing is just for display") */}
            <button
              onClick={() => setDisplayModalScan(activeReport)}
              className="px-2.5 py-1.5 rounded-md border border-border-default bg-[#F5F7FA] hover:bg-[#EAF0F8] text-[#17365D] text-xs font-medium flex items-center gap-1.5 transition"
              title="Open Radiology Scan Display Viewer (Display Reference Only)"
            >
              <Eye className="w-3.5 h-3.5 text-[#13836B]" />
              <span>Scan Visualizer</span>
              <span className="text-[10px] bg-white border border-slate-200 px-1 rounded text-slate-500">
                Display Only
              </span>
            </button>

            {/* Authenticated User Pill */}
            {currentUser && (
              <div className="flex items-center gap-2 pl-2 border-l border-border-default">
                <div className="text-right">
                  <p className="text-xs font-bold text-text-primary truncate max-w-[140px]">
                    {currentUser.name}
                  </p>
                  <span className="text-[10px] bg-[#E8F5F1] text-[#13836B] font-semibold px-1.5 py-0.2 rounded border border-[#13836B]/20 uppercase">
                    {currentUser.role}
                  </span>
                </div>
                <button
                  onClick={logoutUser}
                  className="p-2 rounded-md text-slate-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200 transition"
                  title="Sign Out of Evaluation Session"
                  aria-label="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-border-default text-text-primary hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-default bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#17365D] text-white'
                    : 'text-text-muted hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-border-default flex items-center justify-between">
            <button
              onClick={() => {
                setDisplayModalScan(activeReport);
                setMobileMenuOpen(false);
              }}
              className="btn-secondary text-xs !py-1.5 !px-3"
            >
              <Eye className="w-3.5 h-3.5 text-[#13836B]" />
              Scan Visualizer (Display Only)
            </button>
            {currentUser && (
              <button
                onClick={logoutUser}
                className="text-xs text-red-600 font-semibold flex items-center gap-1 hover:underline p-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
