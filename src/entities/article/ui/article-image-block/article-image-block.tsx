import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/text/text';
import s from './article-image-block.module.scss';

type ArticleImageBlockPropsType = {
  className?: string
  src: string
  title?: string
}

export const ArticleImageBlock = memo((props: ArticleImageBlockPropsType) => {
  const { className, src, title } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <img src={src} alt="img" className={s.img} />
      {title && (
        (<Text text={title} align={TextAlign.CENTER} />)
      )}
    </div>
  );
});
