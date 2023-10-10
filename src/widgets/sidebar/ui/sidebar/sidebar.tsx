import { FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/button';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher/lang-switcher';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route-config/route-config';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import s from './sidebar.module.scss';

type SidebarPropsType = {
  className?: string
}

export const Sidebar: FC<SidebarPropsType> = (props) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}
      {...otherProps}
    >
      <Button
        onClick={onToggle}
        className={s.collapseButton}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={s.items}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={s.item}>
          <MainIcon className={s.icon} />
          <span className={s.link}>
            {t('Главная страница')}
          </span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={s.item}>
          <AboutIcon className={s.icon} />
          <span className={s.link}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
};
