import { memo } from 'react';
import { Card } from 'shared/ui/card/card';
import { classNames } from 'shared/lib/class-names/class-names';
import { Skeleton } from 'shared/skeleton/skeleton';
import s from './article-list-item.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames('', {}, [className, s[view]])}>
        <Card className={s.card}>
          <div className={s.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={s.username} />
            <Skeleton width={150} height={16} className={s.date} />
          </div>
          <Skeleton width={250} height={24} className={s.title} />
          <Skeleton height={200} className={s.img} />
          <div className={s.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, s[view]])}>
      <Card className={s.card}>
        <div className={s.imageWrapper}>
          <Skeleton width={200} height={200} className={s.img} />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={s.title} />
      </Card>
    </div>
  );
});
