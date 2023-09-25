import {classNames} from 'shared/lib/helpers/class-names';
import {FC} from 'react';
import s from './navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/app-link/app-link';
import {ThemeSwitcher} from 'widgets/theme-switcher';

export const Navbar: FC<NavbarPropsType> = ({className}) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={s.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={s.mainLink}>Main</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
    </div>
  );
};

type NavbarPropsType = {
  className?: string
}