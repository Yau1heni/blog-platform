import { memo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Text } from 'shared/ui/text/text';
import s from './article-text-block.module.scss';

type ArticleTextBlockPropsType = {
  className?: string
  title?: string;
  paragraphs: string[]
}

export const ArticleTextBlock = memo((props: ArticleTextBlockPropsType) => {
  const { className, title, paragraphs } = props;

  return (
    <div className={classNames('', {}, [className])}>
      {title && (
        <Text title={title} className={s.title} />
      )}
      {paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={s.paragraph} />
      ))}
    </div>
  );
});
