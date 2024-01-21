import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../article-list-item/article-list-item';
import s from './article-list.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton';

type ArticleListPropsType = {
  className?: string
  articles: Article[]
  isLoading: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton className={s.card} key={index} view={view} />
  ));

export const ArticleList = memo((props: ArticleListPropsType) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
  } = props;
  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={classNames(s.articleList, {}, [className, s[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      className={s.card}
    />
  );

  return (
    <div className={classNames(s.articleList, {}, [className, s[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : <div>{t('Статьи не найдены')}</div>}
    </div>
  );
});
