import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import s from './article-details-page.module.scss';

type ArticleDetailsPagePropsType = {
  className?: string
}

const ArticleDetailsPage = memo((props: ArticleDetailsPagePropsType) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(s.articleDetailsPage, {}, [className])}>
      ArticleDetailsPage
      {t('')}
    </div>
  );
});

export default ArticleDetailsPage;
