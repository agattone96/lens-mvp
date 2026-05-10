import React from 'react';
import { Menu, Shield } from 'lucide-react';
export function TopBar({ onMenuClick }) {
  return (
    <header className='h-16 border-b border-white/5 flex items-center justify-between px-6 lens-glass'>
      <div className='flex items-center gap-4'>
        <button onClick={onMenuClick} className='lg:hidden'><Menu /></button>
        <div className='flex items-center gap-2 text-[#d4af37] font-bold'>
          <Shield size={18} /> <span>LENS SYSTEM</span>
        </div>
      </div>
      <div className='text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full'>LOCAL_ONLY_MODE</div>
    </header>
  );
}