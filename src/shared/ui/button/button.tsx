import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square, size, disabled, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [s[theme]]: true,
    [s.square]: square,
    [s[size]]: true,
    [s.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(s.button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
