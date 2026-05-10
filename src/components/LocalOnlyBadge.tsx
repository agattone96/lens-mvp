import React from 'react';
import { Lock } from 'lucide-react';

export function LocalOnlyBadge() {
  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--lens-accent-primary)]/10 text-[var(--lens-accent-primary)] text-xs font-medium">
      <Lock size={12} />
      Local Only
    </div>
  );
}
