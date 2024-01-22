import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Page } from 'widgets/page/ui/page';
import s from './not-found-page.module.scss';

type NotFoundPagePropsType = {
  className?: string
}

export const NotFoundPage: FC<NotFoundPagePropsType> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(s.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};
