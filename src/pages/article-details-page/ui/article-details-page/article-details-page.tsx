import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';

type ArticleDetailsPagePropsType = {
  className?: string
}

const ArticleDetailsPage = memo((props: ArticleDetailsPagePropsType) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div>{t('Статья не найдена')}</div>
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
});

export default ArticleDetailsPage;
