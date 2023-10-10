import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button/button';
import s from './page-error.module.scss';

type PageErrorProps = {
    className?: string;
}

export const PageError:FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(s.errorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
