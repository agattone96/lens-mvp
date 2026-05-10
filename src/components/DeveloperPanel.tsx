import React, { useState } from 'react';
import { ChevronDown, Code } from 'lucide-react';
import { useDeveloperMode } from '../contexts/DeveloperContext';

interface LogEntry {
  timestamp: Date;
  level: 'info' | 'warn' | 'error';
  module: string;
  message: string;
}

const mockLogs: LogEntry[] = [
  { timestamp: new Date(Date.now() - 5000), level: 'info', module: 'intake', message: 'Starting source intake process' },
  { timestamp: new Date(Date.now() - 4000), level: 'info', module: 'extract', message: 'Extracting data from facebook_export.zip' },
  { timestamp: new Date(Date.now() - 3000), level: 'info', module: 'normalize', message: 'Normalizing message formats' },
  { timestamp: new Date(Date.now() - 2000), level: 'warn', module: 'normalize', message: 'Found 3 malformed timestamps' },
  { timestamp: new Date(Date.now() - 1000), level: 'info', module: 'derive', message: 'Building relationship networks' },
];

export function DeveloperPanel() {
  const { developerMode } = useDeveloperMode();
  const [expanded, setExpanded] = useState(false);

  if (!developerMode) return null;

  return (
    <div className="lens-card p-4 mt-8 bg-[var(--lens-bg-secondary)] border-[var(--lens-status-warning)]/30">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 w-full font-medium text-[var(--lens-text-muted)] hover:text-[var(--lens-accent-primary)] transition-colors"
      >
        <Code size={16} />
        Developer Logs
        <ChevronDown size={18} className={`ml-auto transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      {expanded && (
        <div className="mt-4 space-y-2 font-mono text-xs">
          {mockLogs.map((log, idx) => (
            <div key={idx} className="flex gap-2 p-2 bg-[var(--lens-bg-tertiary)] rounded border border-[var(--lens-border)]">
              <span className="text-[var(--lens-text-muted)]">{log.timestamp.toLocaleTimeString()}</span>
              <span
                className={`font-medium ${
                  log.level === 'error'
                    ? 'text-[var(--lens-status-error)]'
                    : log.level === 'warn'
                      ? 'text-[var(--lens-status-warning)]'
                      : 'text-[var(--lens-status-info)]'
                }`}
              >
                [{log.level.toUpperCase()}]
              </span>
              <span className="text-[var(--lens-accent-secondary)]">{log.module}</span>
              <span className="text-[var(--lens-text-secondary)]">{log.message}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-[var(--lens-border)]">
        <h5 className="text-xs font-semibold text-[var(--lens-text-muted)] uppercase mb-2">Pipeline Stages</h5>
        <div className="grid grid-cols-3 gap-2 text-xs">
          {['INTAKE', 'EXTRACT', 'NORMALIZE', 'DERIVE', 'OUTPUT'].map((stage) => (
            <div key={stage} className="bg-[var(--lens-bg-tertiary)] p-1 rounded text-center text-[var(--lens-text-secondary)]">
              {stage}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
