import React from 'react';
import { Sun, Moon, Cpu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-[var(--lens-bg-secondary)] rounded-lg p-1 border border-[var(--lens-border)]">
      <button
        onClick={() => setTheme('light')}
        className={`p-1.5 rounded transition-colors ${
          theme === 'light'
            ? 'bg-[var(--lens-accent-primary)] text-[var(--lens-bg-primary)]'
            : 'text-[var(--lens-text-muted)] hover:text-[var(--lens-text-primary)]'
        }`}
        title="Light theme"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1.5 rounded transition-colors ${
          theme === 'dark'
            ? 'bg-[var(--lens-accent-primary)] text-[var(--lens-bg-primary)]'
            : 'text-[var(--lens-text-muted)] hover:text-[var(--lens-text-primary)]'
        }`}
        title="Dark theme"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-1.5 rounded transition-colors ${
          theme === 'system'
            ? 'bg-[var(--lens-accent-primary)] text-[var(--lens-bg-primary)]'
            : 'text-[var(--lens-text-muted)] hover:text-[var(--lens-text-primary)]'
        }`}
        title="System theme"
      >
        <Cpu size={16} />
      </button>
    </div>
  );
}
