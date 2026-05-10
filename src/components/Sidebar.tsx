import React from 'react';
import { LayoutDashboard, Database, Map, PieChart, Settings as SettingsIcon, Terminal } from 'lucide-react';
export function Sidebar({ currentPage, onNavigate, isOpen }) {
  const nav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sources', label: 'Sources', icon: Database },
    { id: 'atlas', label: 'Atlas', icon: Map },
    { id: 'reports', label: 'Reports', icon: PieChart },
    { id: 'developer', label: 'Developer', icon: Terminal }
  ];
  return (
    <aside className={'fixed inset-y-0 left-0 z-50 w-64 lg:relative lg:translate-x-0 transition-transform lens-glass ' + (isOpen ? 'translate-x-0' : '-translate-x-full')}>
      <nav className='p-4 space-y-2'>
        {nav.map(item => (
          <button key={item.id} onClick={() => onNavigate(item.id)} className={'w-full flex items-center gap-3 p-3 rounded-xl ' + (currentPage === item.id ? 'bg-[#ff007f] text-white' : 'text-zinc-500')}>
            <item.icon size={20} /> <span className='font-bold'>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}