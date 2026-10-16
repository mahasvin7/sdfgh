import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import GovHeader from './components/common/GovHeader';
import AppNavbar from './components/common/AppNavbar';
import Footer from './components/common/Footer';
import LoginPage from './components/auth/LoginPage';
import OverviewView from './components/overview/OverviewView';
import SampleLibraryView from './components/library/SampleLibraryView';
import StructuredReportView from './components/report/StructuredReportView';
import FileUploadStudio from './components/upload/FileUploadStudio';
import GlossaryView from './components/glossary/GlossaryView';
import AboutLimitationsView from './components/about/AboutLimitationsView';
import RadiologyDisplayModal from './components/radiology/RadiologyDisplayModal';

/**
 * MainLayout: Coordinates page routing, authenticated states, and accessibility wrappers.
 * Human-crafted clean architecture designed for readability, maintainability, and SFIC review.
 */
function MainLayout() {
  const { currentUser, activeTab } = useApp();

  // If user is not authenticated, display the Indian Government / SFIC Portal Login Page
  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col bg-surface-page text-text-primary">
        <GovHeader />
        <main className="flex-1">
          <LoginPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render the selected feature module
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewView />;
      case 'library':
        return <SampleLibraryView />;
      case 'detail':
        return <StructuredReportView />;
      case 'upload':
        return <FileUploadStudio />;
      case 'glossary':
        return <GlossaryView />;
      case 'about':
        return <AboutLimitationsView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-page text-text-primary">
      {/* 1. National Accessibility & Alignment Ribbon */}
      <GovHeader />

      {/* 2. Top Application Navigation */}
      <AppNavbar />

      {/* 3. Main Workspace Container (max-width 1200px as per Brand Kit) */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-4">
        {renderActiveTab()}
      </main>

      {/* 4. Global Radiology Scan Display Modal ("radiology thing is just for display") */}
      <RadiologyDisplayModal />

      {/* 5. GIGW Public Service Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
