import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Sources } from './pages/Sources';
import { Atlas } from './pages/Atlas';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Developer } from './pages/Developer';
import { WarningBanner } from './components/WarningBanner';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  // Keyboard shortcut: Close sidebar on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentPage} />;
      case 'sources': return <Sources />;
      case 'atlas': return <Atlas />;
      case 'reports': return <Reports />;
      case 'settings': return <Settings />;
      case 'developer': return <Developer />;
      default: return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f0d0c] text-[#f5f5f0] font-sans selection:bg-[#ff007f]/30 selection:text-white overflow-hidden">
      {/* 1. ANTIGRAVITY MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* 2. RESPONSIVE SIDEBAR DRAWER */}
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={(page) => {
          setCurrentPage(page);
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
      />

      {/* 3. MAIN INTERFACE CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-800">
          {/* Dashboard Contextual Warning Banner */}
          {showWarning && currentPage === 'dashboard' && (
            <div className="px-4 sm:px-6 lg:px-10 pt-4">
              <WarningBanner 
                count={2} 
                onAction={() => setCurrentPage('sources')} 
                onClose={() => setShowWarning(false)}
              />
            </div>
          )}

          {/* Dynamic Page Container */}
          <div className="p-4 sm:p-6 lg:p-10 transition-all duration-500 ease-out">
            <div className="max-w-7xl mx-auto">
              {renderPage()}
            </div>
          </div>
          
          {/* Ambient Background Glows for "Antigravity" Depth */}
          <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />
          <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#ff007f]/5 blur-[100px] pointer-events-none rounded-full" />
        </main>
      </div>
    </div>
  );
}

export default App;