import { classNames } from 'shared/lib/helpers/class-names';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { LoginModal } from 'features/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authDataSelector, userActions } from 'entities/user';
import s from './navbar.module.scss';

type NavbarPropsType = {
  className?: string
}

export const Navbar: FC<NavbarPropsType> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(authDataSelector);

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
    <div className={classNames(s.navbar, {}, [className])}>
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
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </>
      )}
    </div>
  );
};
