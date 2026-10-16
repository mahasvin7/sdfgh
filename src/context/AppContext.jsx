import React, { createContext, useContext, useState, useEffect } from 'react';
import { SAMPLE_REPORTS } from '../data/sampleReports';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Authentication state - Default to null for login page requirement, or load saved session
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem('soul_user_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Active navigation tab
  const [activeTab, setActiveTab] = useState('overview');

  // Currently selected sample from benchmark library
  const [selectedSampleId, setSelectedSampleId] = useState('SAMPLE_001');

  // Interactive sentence traceability: highlighted sentence ID in source report
  const [highlightedSentenceId, setHighlightedSentenceId] = useState(null);

  // Uploaded file and parsed report state (for working File Upload Studio)
  const [uploadedFile, setUploadedFile] = useState(null);

  // Accessibility settings conforming to Indian Government Web Guidelines (GIGW)
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg'
  const [highContrast, setHighContrast] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en'); // 'en' | 'hi' | 'kn'

  // Diagnostic Visualizer display reference modal state ("radiology thing is just for display")
  const [displayModalScan, setDisplayModalScan] = useState(null);

  // Sync font size to document body
  useEffect(() => {
    document.body.classList.remove('font-size-sm', 'font-size-base', 'font-size-lg');
    document.body.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  // Sync high contrast mode to document body
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  // Authentication Handlers
  const loginUser = (userProfile) => {
    setCurrentUser(userProfile);
    try {
      sessionStorage.setItem('soul_user_session', JSON.stringify(userProfile));
    } catch {
      // Ignore sessionStorage errors
    }
    setActiveTab('overview');
  };

  const logoutUser = () => {
    setCurrentUser(null);
    try {
      sessionStorage.removeItem('soul_user_session');
    } catch {
      // Ignore
    }
    setUploadedFile(null);
  };

  // Helper to get active report object
  const activeReport = SAMPLE_REPORTS.find(r => r.sample_id === selectedSampleId) || SAMPLE_REPORTS[0];

  const value = {
    currentUser,
    loginUser,
    logoutUser,
    activeTab,
    setActiveTab,
    selectedSampleId,
    setSelectedSampleId,
    activeReport,
    highlightedSentenceId,
    setHighlightedSentenceId,
    uploadedFile,
    setUploadedFile,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    currentLanguage,
    setCurrentLanguage,
    displayModalScan,
    setDisplayModalScan
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
