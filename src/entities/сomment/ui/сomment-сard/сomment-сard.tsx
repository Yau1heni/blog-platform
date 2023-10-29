import { memo } from 'react';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Text } from 'shared/ui/text/text';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './сomment-сard.module.scss';
import { CommentType } from '../../model/types/commentType';

interface CommentCardProps {
    className?: string;
    comment: CommentType;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment } = props;

  return (
    <div className={classNames(s.commentCard, {}, [className])}>
      <div className={s.header}>
        { comment.user.avatar
          ? <Avatar size={30} src={comment.user.avatar} alt="ava" />
          : null }
        <Text className={s.username} title={comment.user.username} />
      </div>
      <Text className={s.text} text={comment.text} />
    </div>
  );
});
