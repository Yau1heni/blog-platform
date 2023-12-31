import { memo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Theme, useTheme } from 'app/providers/theme-provider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/button/button';

type ThemeSwitcherPropsType = {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherPropsType) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
