import './loader.scss';
import { classNames } from 'shared/lib/class-names/class-names';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
