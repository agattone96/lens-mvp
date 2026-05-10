import React from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="mb-6">
        <Icon size={48} className="text-[var(--lens-text-muted)]" />
      </div>
      <h3 className="text-xl font-semibold text-[var(--lens-text-primary)] mb-2 text-center">{title}</h3>
      <p className="text-center text-[var(--lens-text-secondary)] max-w-sm mb-6">{description}</p>
      {action && (
        <button onClick={action.onClick} className="lens-button-primary">
          {action.label}
        </button>
      )}
    </div>
  );
}
