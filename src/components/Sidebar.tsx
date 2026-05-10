import React from 'react';
import {
  BarChart3,
  FolderOpen,
  FileText,
  Zap,
  Map,
  Search,
  Settings,
  Code,
  Archive,
  ChevronLeft,
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  section: 'main' | 'advanced' | 'system';
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={20} />, section: 'main' },
  { id: 'workspaces', label: 'Archives', icon: <Archive size={20} />, section: 'main' },
  { id: 'sources', label: 'Imported Files', icon: <FolderOpen size={20} />, section: 'main' },
  { id: 'analysis', label: 'Analysis', icon: <Zap size={20} />, section: 'main' },
  { id: 'reports', label: 'Reports', icon: <FileText size={20} />, section: 'main' },
  { id: 'atlas', label: 'Atlas', icon: <Map size={20} />, section: 'main' },
  { id: 'search', label: 'Search', icon: <Search size={20} />, section: 'advanced' },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, section: 'system' },
  { id: 'developer', label: 'Developer', icon: <Code size={20} />, section: 'system' },
];

export function Sidebar({ currentPage, onNavigate, collapsed, onToggleCollapse }: SidebarProps) {
  const mainItems = navItems.filter((item) => item.section === 'main');
  const advancedItems = navItems.filter((item) => item.section === 'advanced');
  const systemItems = navItems.filter((item) => item.section === 'system');

  return (
    <div
      className={`bg-[var(--lens-bg-secondary)] border-r border-[var(--lens-border)] flex flex-col transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-[var(--lens-border)] flex items-center justify-between">
        {!collapsed && <h2 className="text-lg font-semibold text-[var(--lens-accent-primary)]">LENS</h2>}
        <button
          onClick={onToggleCollapse}
          className="lens-button-ghost p-1"
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronLeft size={18} className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Main */}
        {mainItems.length > 0 && (
          <div className="mb-6">
            {!collapsed && <p className="lens-section-title px-4 mb-2">Main</p>}
            <div className="space-y-1">
              {mainItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'bg-[var(--lens-accent-primary)]/20 text-[var(--lens-accent-primary)] border-r-2 border-[var(--lens-accent-primary)]'
                      : 'text-[var(--lens-text-secondary)] hover:text-[var(--lens-text-primary)] hover:bg-[var(--lens-bg-tertiary)]'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="flex-1 text-left text-sm">{item.label}</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Advanced */}
        {advancedItems.length > 0 && (
          <div className="mb-6">
            {!collapsed && <p className="lens-section-title px-4 mb-2">Explore</p>}
            <div className="space-y-1">
              {advancedItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'bg-[var(--lens-accent-primary)]/20 text-[var(--lens-accent-primary)] border-r-2 border-[var(--lens-accent-primary)]'
                      : 'text-[var(--lens-text-secondary)] hover:text-[var(--lens-text-primary)] hover:bg-[var(--lens-bg-tertiary)]'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="flex-1 text-left text-sm">{item.label}</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* System */}
        {systemItems.length > 0 && (
          <div>
            {!collapsed && <p className="lens-section-title px-4 mb-2">System</p>}
            <div className="space-y-1">
              {systemItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'bg-[var(--lens-accent-primary)]/20 text-[var(--lens-accent-primary)] border-r-2 border-[var(--lens-accent-primary)]'
                      : 'text-[var(--lens-text-secondary)] hover:text-[var(--lens-text-primary)] hover:bg-[var(--lens-bg-tertiary)]'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="flex-1 text-left text-sm">{item.label}</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-[var(--lens-border)] text-xs text-[var(--lens-text-muted)]">
          <p className="opacity-75">Your archive stays on this device.</p>
        </div>
      )}
    </div>
  );
}
