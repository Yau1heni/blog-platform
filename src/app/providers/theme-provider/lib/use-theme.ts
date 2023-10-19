import { useContext } from 'react';
import { Theme, ThemeContext } from 'app/providers/theme-provider/lib/theme-context';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/local-storage';

type UseThemeType = {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};
