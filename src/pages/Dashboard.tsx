import React from 'react';
import { Activity, Database, Layout, PieChart, Settings, Terminal } from 'lucide-react';

export function Dashboard({ onNavigate }) {
  return (
    <div className='space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-700'>
      <header>
        <h1 className='text-4xl font-bold tracking-tight'>Dashboard</h1>
        <p className='text-zinc-500 font-mono text-xs mt-1'>SYSTEM_NODE :: DASHBOARD_v1.0.4</p>
      </header>
      
      <div className='lens-glass p-8 rounded-2xl border border-white/5 min-h-[400px] flex flex-col items-center justify-center text-center'>
        <div className='w-16 h-16 rounded-full bg-[#ff007f]/10 flex items-center justify-center mb-4 lens-neon-glow'>
          <Activity className='text-[#ff007f]' size={32} />
        </div>
        <h2 className='text-xl font-bold mb-2'>Module Initialized</h2>
        <p className='text-zinc-400 max-w-md'>Local forensic analysis is ready for the Dashboard environment. No data has left your Intel iMac.</p>
        <button onClick={() => onNavigate("sources")} className="lens-button-primary mt-6">Begin Forensic Import</button>
      </div>
    </div>
  );
}