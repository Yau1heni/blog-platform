import { memo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Text } from 'shared/ui/text/text';
import s from './article-text-block.module.scss';
import { ArticleTextBlockType } from '../../model/types/article';

type ArticleTextBlockPropsType = {
  className?: string
  block: ArticleTextBlockType;
}

export const ArticleTextBlock = memo((props: ArticleTextBlockPropsType) => {
  const { className, block } = props;

  return (
    <div className={classNames('', {}, [className])}>
      {block.title && (
        <Text title={block.title} className={s.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={s.paragraph} />
      ))}
    </div>
  );
});
