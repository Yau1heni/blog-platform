import { Loader } from 'shared/ui/loader/loader';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './page-loader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(s.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
