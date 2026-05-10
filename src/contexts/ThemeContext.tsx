import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('lens-theme') as ThemeMode | null;
    return stored || 'dark';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    let resolvedMode: 'dark' | 'light' = 'dark';

    if (theme === 'system') {
      resolvedMode = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } else {
      resolvedMode = theme;
    }

    root.setAttribute('data-theme', resolvedMode);
    setResolvedTheme(resolvedMode);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('lens-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
