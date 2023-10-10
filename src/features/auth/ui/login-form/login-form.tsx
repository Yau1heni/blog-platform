import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import Input from 'shared/ui/input/input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/text/text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { login } from '../../model/services/login/login';
import {
  errorSelector, isLoadingSelector, passwordSelector, usernameSelector,
} from '../../model/selectors/select-login';
import { loginActions, loginReducer } from '../../model/slice/login-slice';
import s from './login-form.module.scss';

export type LoginFormType = {
  className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormType) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector(usernameSelector);
  const password = useSelector(passwordSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername({ username: value }));
  }, [dispatch]);
  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword({ password: value }));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(login({ username, password }));
  }, [username, password, dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(s.loginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}

        <Input
          className={s.input}
          autofocus
          placeholder={t('Имя пользователя')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={s.input}
          autofocus
          placeholder={t('Пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={s.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>

  );
});

export default LoginForm;
