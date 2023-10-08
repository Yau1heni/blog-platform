import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import Input from 'shared/ui/input/input';
import s from './login-form.module.scss';

type LoginFormType = {
  className?: string;
}

export const LoginForm: FC<LoginFormType> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <Input className={s.input} autofocus placeholder="username" />
      <Input className={s.input} autofocus placeholder="password" />
      <Button className={s.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
