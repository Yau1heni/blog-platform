import { FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import { Button } from 'shared/ui/button/button';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher/lang-switcher';
import s from './sidebar.module.scss';

type SidebarPropsType = {
  className?: string
}

export const Sidebar: FC<SidebarPropsType> = (props) => {
  const { className, children, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}
      {...otherProps}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
