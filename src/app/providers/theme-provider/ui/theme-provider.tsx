import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/theme-context';
import {FC, useMemo, useState} from 'react';

const defaultValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultValue);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
