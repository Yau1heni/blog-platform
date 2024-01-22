import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page/ui/page';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
    </Page>
  );
};
