import { CSSProperties, useMemo } from 'react';
import { classNames, ModsType } from 'shared/lib/class-names/class-names';
import s from './avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    size?: number;
    alt: string;
}

export const Avatar = ({
  className, src, size, alt,
}: AvatarProps) => {
  const mods: ModsType = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(s.avatar, mods, [className])}
    />
  );
};
