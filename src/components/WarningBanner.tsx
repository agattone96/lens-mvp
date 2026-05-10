import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface WarningBannerProps {
  count: number;
  onReview?: () => void;
}

export function WarningBanner({ count, onReview }: WarningBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="lens-card border-[var(--lens-status-warning)]/50 bg-[var(--lens-status-warning)]/10 p-4 mb-6 flex items-start justify-between">
      <div className="flex items-start gap-3">
        <AlertTriangle size={20} className="text-[var(--lens-status-warning)] flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-[var(--lens-text-primary)]">
            {count} {count === 1 ? 'item needs' : 'items need'} attention
          </p>
          <p className="text-sm text-[var(--lens-text-secondary)]">Some sources have warnings or errors</p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {onReview && (
          <button
            onClick={onReview}
            className="lens-button-primary text-sm"
          >
            Review Fixes
          </button>
        )}
        <button
          onClick={() => setDismissed(true)}
          className="lens-button-ghost"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
