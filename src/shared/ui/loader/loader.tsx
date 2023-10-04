import './loader.scss';
import { classNames } from 'shared/lib/helpers/class-names';

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
