import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import { Link, LinkProps } from 'react-router-dom';
import s from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkPropsType extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkPropsType> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(s.navbar, {}, [className, s[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
