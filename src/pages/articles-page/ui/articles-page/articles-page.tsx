import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import s from './articles-page.module.scss';

type ArticlesPagePropsType = {
  className?: string
}

const ArticlesPage = memo((props: ArticlesPagePropsType) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(s.articlesPage, {}, [className])}>
      ArticlesPage
      {t('')}
    </div>
  );
});

export default ArticlesPage;
