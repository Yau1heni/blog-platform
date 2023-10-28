import { classNames } from 'shared/lib/class-names/class-names';
import { CSSProperties, memo } from 'react';
import s from './skeleton.module.scss';

type SkeletonPropsType = {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = memo((props: SkeletonPropsType) => {
  const {
    className,
    width,
    height,
    border,
  } = props;

  const style: CSSProperties = {
    width, height, borderRadius: border,
  };

  return (
    <div
      className={classNames(s.skeleton, {}, [className])}
      style={style}
    />
  );
});
