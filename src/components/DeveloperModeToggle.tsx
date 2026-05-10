import React from 'react';
import { Zap } from 'lucide-react';
import { useDeveloperMode } from '../contexts/DeveloperContext';

export function DeveloperModeToggle() {
  const { developerMode, setDeveloperMode } = useDeveloperMode();

  return (
    <button
      onClick={() => setDeveloperMode(!developerMode)}
      className={`p-2 rounded-lg transition-colors ${
        developerMode
          ? 'bg-[var(--lens-status-warning)]/20 text-[var(--lens-status-warning)]'
          : 'text-[var(--lens-text-muted)] hover:text-[var(--lens-text-primary)]'
      }`}
      title="Toggle Developer Mode"
    >
      <Zap size={18} />
    </button>
  );
}
