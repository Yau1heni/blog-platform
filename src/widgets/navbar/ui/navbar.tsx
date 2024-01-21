import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { LoginModal } from 'features/auth';
import { useSelector } from 'react-redux';
import { selectAuthData, userActions } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import s from './navbar.module.scss';

type NavbarPropsType = {
  className?: string
}

export const Navbar = memo(({ className }: NavbarPropsType) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(selectAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(s.navbar, {}, [className])}>
      {authData ? (
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={s.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={s.links}
            onClick={onShowModal}
          >
            {t('Войти')}
          </Button>
          {isAuthModal && (
            <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />
          )}
        </>
      )}
    </header>
  );
});
