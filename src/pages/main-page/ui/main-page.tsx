import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

function MainPage() {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <Counter />
    </div>
  );
}

export default MainPage;
