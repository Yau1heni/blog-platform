import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './not-found-page.module.scss';

type NotFoundPagePropsType = {
  className?: string
}

export const NotFoundPage: FC<NotFoundPagePropsType> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
