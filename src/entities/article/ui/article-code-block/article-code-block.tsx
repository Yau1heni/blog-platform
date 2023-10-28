import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { Code } from 'shared/ui/сode/сode';
import s from './article-code-block.module.scss';

type ArticleCodeBlockPropsType = {
  className?: string
  code: string
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockPropsType) => {
  const { className, code } = props;

  return (
    <div className={classNames(s.articleCodeBlock, {}, [className])}>
      <Code text={code} />
    </div>
  );
});
