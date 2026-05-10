import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Archive } from 'lucide-react';
import { SourceStatus } from '../types/index';

interface StatusBadgeProps {
  status: SourceStatus;
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const iconSize = size === 'sm' ? 14 : 16;

  const configs: Record<SourceStatus, { bg: string; text: string; icon: React.ReactNode; label: string }> = {
    ready: {
      bg: 'bg-[var(--lens-status-success)]/20',
      text: 'text-[var(--lens-status-success)]',
      icon: <CheckCircle size={iconSize} />,
      label: 'Ready',
    },
    checked: {
      bg: 'bg-[var(--lens-status-info)]/20',
      text: 'text-[var(--lens-status-info)]',
      icon: <CheckCircle size={iconSize} />,
      label: 'Checked',
    },
    needs_attention: {
      bg: 'bg-[var(--lens-status-warning)]/20',
      text: 'text-[var(--lens-status-warning)]',
      icon: <AlertCircle size={iconSize} />,
      label: 'Needs Attention',
    },
    failed: {
      bg: 'bg-[var(--lens-status-error)]/20',
      text: 'text-[var(--lens-status-error)]',
      icon: <XCircle size={iconSize} />,
      label: 'Failed',
    },
    archived: {
      bg: 'bg-[var(--lens-text-muted)]/20',
      text: 'text-[var(--lens-text-muted)]',
      icon: <Archive size={iconSize} />,
      label: 'Archived',
    },
  };

  const config = configs[status];

  return (
    <span className={`lens-badge ${config.bg} ${config.text} ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
      {config.icon}
      {config.label}
    </span>
  );
}
