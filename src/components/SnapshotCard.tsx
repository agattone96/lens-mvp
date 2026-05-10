import React from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface SnapshotCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
  onClick?: () => void;
}

export function SnapshotCard({ icon: Icon, label, value, trend, onClick }: SnapshotCardProps) {
  return (
    <div
      className={`lens-card p-4 ${onClick ? 'lens-card-hover' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <Icon size={20} className="text-[var(--lens-accent-primary)]" />
        {trend && (
          <span
            className={`text-xs font-medium ${trend.direction === 'up' ? 'text-[var(--lens-status-success)]' : 'text-[var(--lens-status-warning)]'}`}
          >
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--lens-text-muted)] mb-2">{label}</p>
      <p className="text-2xl font-semibold text-[var(--lens-text-primary)]">{value}</p>
    </div>
  );
}
