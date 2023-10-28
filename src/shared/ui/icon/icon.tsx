import React, { memo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={classNames(s.icon, {}, [className])} />
  );
});
