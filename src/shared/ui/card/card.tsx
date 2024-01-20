import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(s.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
