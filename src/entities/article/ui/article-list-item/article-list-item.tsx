import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/text/text';
import { Icon } from 'shared/ui/icon/icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/card/card';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route-config/route-config';
import s from './article-list-item.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlockType, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlock } from '../article-text-block/article-text-block';

type ArticleListItemPropsType = {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemPropsType) => {
  const {
    className,
    article,
    view,
  } = props;

  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articles_details + article.id);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={s.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={s.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlockType;

    return (
      <div className={classNames('', {}, [className, s[view]])}>
        <Card className={s.card}>
          <div className={s.header}>
            {article.user.avatar && <Avatar size={30} src={article.user.avatar} alt="ava" />}
            <Text text={article.user.username} className={s.username} />
            <Text text={article.createdAt} className={s.date} />
          </div>
          <Text text={article.title} className={s.title} />
          {types}
          <img className={s.image} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={s.textBlock} />
          )}
          <div className={s.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, s[view]])}>
      <Card onClick={onOpenArticle}>
        <div className={s.imageWrapper}>
          <img src={article.img} alt={article.title} className={s.image} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={s.title} />
      </Card>
    </div>
  );
});
