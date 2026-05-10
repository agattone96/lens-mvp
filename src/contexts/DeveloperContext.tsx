import React, { createContext, useContext, useEffect, useState } from 'react';

interface DeveloperContextType {
  developerMode: boolean;
  setDeveloperMode: (enabled: boolean) => void;
}

const DeveloperContext = createContext<DeveloperContextType | undefined>(undefined);

export function DeveloperProvider({ children }: { children: React.ReactNode }) {
  const [developerMode, setDeveloperModeState] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('lens-dev-mode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('lens-dev-mode', developerMode ? 'true' : 'false');
  }, [developerMode]);

  const setDeveloperMode = (enabled: boolean) => {
    setDeveloperModeState(enabled);
  };

  return (
    <DeveloperContext.Provider value={{ developerMode, setDeveloperMode }}>
      {children}
    </DeveloperContext.Provider>
  );
}

export function useDeveloperMode() {
  const context = useContext(DeveloperContext);
  if (!context) {
    throw new Error('useDeveloperMode must be used within DeveloperProvider');
  }
  return context;
}
