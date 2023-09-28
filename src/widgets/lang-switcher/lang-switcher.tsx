import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import { Button, ThemeButton } from 'shared/ui/button/button';
import s from './lang-switcher.module.scss';

type LangSwitcherPropsType = {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherPropsType> = ({ className }) => {
  const { t, i18n } = useTranslation('translation');

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(s.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
