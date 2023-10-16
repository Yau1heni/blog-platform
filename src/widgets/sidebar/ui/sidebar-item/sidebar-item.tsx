import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './sidebar-item.module.scss';
import { SidebarItemType } from '../../model/items';

type SidebarItemPropsType = {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemPropsType) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(s.item, { [s.collapsed]: collapsed })}
    >
      <item.Icon className={s.icon} />
      <span className={s.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});