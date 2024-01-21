import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page/page';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
    </Page>
  );
};
