export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isSystemDark: boolean;
}