import React from 'react';
import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { DeveloperModeToggle } from './DeveloperModeToggle';
import { LocalOnlyBadge } from './LocalOnlyBadge';

interface TopBarProps {
  workspaceName: string;
  onSearch?: (query: string) => void;
}

export function TopBar({ workspaceName, onSearch }: TopBarProps) {
  return (
    <div className="h-16 bg-[var(--lens-surface)] border-b border-[var(--lens-border)] flex items-center px-6 gap-4">
      {/* Workspace Name */}
      <h1 className="text-lg font-semibold text-[var(--lens-text-primary)]">{workspaceName}</h1>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <div className="relative hidden sm:flex items-center max-w-xs">
        <Search size={16} className="absolute left-3 text-[var(--lens-text-muted)]" />
        <input
          type="text"
          placeholder="Search archive..."
          onChange={(e) => onSearch?.(e.target.value)}
          className="lens-input pl-9 pr-3 py-2 w-full text-sm"
        />
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Developer Mode Toggle */}
      <DeveloperModeToggle />

      {/* Local Only Badge */}
      <LocalOnlyBadge />
    </div>
  );
}
