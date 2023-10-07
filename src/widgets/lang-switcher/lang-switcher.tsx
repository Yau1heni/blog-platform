import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import { Button, ButtonTheme } from 'shared/ui/button/button';

type LangSwitcherPropsType = {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherPropsType> = ({ className, short }) => {
  const { t, i18n } = useTranslation('translation');

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'языковое сокращение' : 'Язык')}
    </Button>
  );
};
