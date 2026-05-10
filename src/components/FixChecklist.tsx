import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export interface FixItem {
  id: string;
  label: string;
  status: 'complete' | 'pending' | 'failed';
}

interface FixChecklistProps {
  title: string;
  items: FixItem[];
}

export function FixChecklist({ title, items }: FixChecklistProps) {
  const statusConfig = {
    complete: {
      icon: CheckCircle2,
      text: 'text-[var(--lens-status-success)]',
      bg: 'bg-[var(--lens-status-success)]/10',
    },
    pending: {
      icon: AlertCircle,
      text: 'text-[var(--lens-status-warning)]',
      bg: 'bg-[var(--lens-status-warning)]/10',
    },
    failed: {
      icon: AlertCircle,
      text: 'text-[var(--lens-status-error)]',
      bg: 'bg-[var(--lens-status-error)]/10',
    },
  };

  return (
    <div className="lens-card p-4">
      <h4 className="font-medium text-[var(--lens-text-primary)] mb-4">{title}</h4>
      <div className="space-y-2">
        {items.map((item) => {
          const config = statusConfig[item.status];
          const Icon = config.icon;
          return (
            <div key={item.id} className={`flex items-center gap-3 p-2 rounded ${config.bg}`}>
              <Icon size={18} className={config.text} />
              <span className="text-sm text-[var(--lens-text-primary)]">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
