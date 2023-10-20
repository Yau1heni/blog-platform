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

type TextPropsType = {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo((props:TextPropsType) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
  } = props;

  const mods: ModsType = {
    [s[theme]]: true,
    [s[align]]: true,
  };

  return (
    <div className={classNames(s.textWrapper, mods, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
