import { classNames } from 'shared/lib/helpers/class-names';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route-config/route-config';
import s from './navbar.module.scss';

type NavbarPropsType = {
  className?: string
}

export const Navbar: FC<NavbarPropsType> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={s.mainLink}>
          {t('Главная страница')}
        </AppLink>
      </div>
    </div>
  );
};
