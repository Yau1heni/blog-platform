import {FC} from 'react';
import {classNames} from 'shared/lib/helpers/class-names';
import s from './theme-switcher.module.scss';
import {Theme, useTheme} from 'app/providers/theme-provider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from 'shared/ui/button/button';

export const ThemeSwitcher: FC<ThemeSwitcherPropsType> = ({className}) => {
  const {theme, toggleTheme} = useTheme()
  return (
    <Button
      className={classNames(s.ThemeSwitcher, {}, [className])} onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  );
};

type ThemeSwitcherPropsType = {
  className?: string
}