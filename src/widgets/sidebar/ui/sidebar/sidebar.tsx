import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/button';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher/lang-switcher';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import { selectSidebarItems } from '../../model/selectors/select-sidebar-items';
import s from './sidebar.module.scss';

type SidebarPropsType = {
  className?: string
}

export const Sidebar = memo((props: SidebarPropsType) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItemsList = useSelector(selectSidebarItems);

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemsList]);

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
        {itemsList}
      </div>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
});
