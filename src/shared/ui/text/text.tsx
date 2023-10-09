import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import s from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

type TextPropsType = {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextPropsType> = (props) => {
  const {
    className, title, text, theme,
  } = props;

  return (
    <div className={classNames(s.textWrapper, { [s[theme]]: true }, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
