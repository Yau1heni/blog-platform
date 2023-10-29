import { memo } from 'react';
import { Text } from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Skeleton } from 'shared/skeleton/skeleton';
import s from './comment-list.module.scss';
import { CommentCard } from '../сomment-сard/сomment-сard';
import { CommentType } from '../../model/types/commentType';

interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(s.comment, {}, [className])}>
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={s.username} />
        </div>
        <Skeleton className={s.text} width="100%" height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(s.comment, {}, [className])}>
      { comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            className={s.comment}
            comment={comment}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});
