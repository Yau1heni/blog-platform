import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib/helpers/class-names';
import s from './button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
  const {className, children, theme, ...otherProps} = props

  return (
    <button
      className={classNames(s.button, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export enum ThemeButton {
  CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
}