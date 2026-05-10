import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { Evidence } from '../types/index';

interface EvidenceSectionProps {
  evidence: Evidence[];
}

export function EvidenceSection({ evidence }: EvidenceSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="lens-card p-4 mt-8 border-t-2 border-[var(--lens-accent-primary)]/30">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 w-full font-medium text-[var(--lens-text-primary)] hover:text-[var(--lens-accent-primary)] transition-colors"
      >
        <ChevronDown size={18} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        Evidence & Source Details ({evidence.length})
      </button>

      {expanded && (
        <div className="mt-4 space-y-3">
          {evidence.map((item) => (
            <div key={item.id} className="bg-[var(--lens-bg-secondary)] rounded p-3">
              <div className="flex items-start gap-2 mb-2">
                <FileText size={14} className="text-[var(--lens-accent-secondary)] flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[var(--lens-text-muted)] uppercase tracking-wide">
                    {item.type}
                  </p>
                  <p className="text-xs text-[var(--lens-text-secondary)] break-words">{item.content}</p>
                </div>
              </div>
              {item.sourceFile && (
                <p className="text-xs text-[var(--lens-text-muted)] ml-5">From: {item.sourceFile}</p>
              )}
              <p className="text-xs text-[var(--lens-accent-secondary)] ml-5">
                Confidence: {Math.round(item.confidence * 100)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
