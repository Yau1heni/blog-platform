import { memo } from 'react';
import { classNames, ModsType } from 'shared/lib/class-names/class-names';
import s from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}
export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

type TextPropsType = {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props:TextPropsType) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: ModsType = {
    [s[theme]]: true,
    [s[align]]: true,
    [s[size]]: true,
  };

  return (
    <div className={classNames('', mods, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
