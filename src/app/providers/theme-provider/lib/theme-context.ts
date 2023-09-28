import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextPropsType = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextPropsType>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
