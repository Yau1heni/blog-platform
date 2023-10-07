import { classNames } from 'shared/lib/helpers/class-names';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/modal/modal';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import s from './navbar.module.scss';

type NavbarPropsType = {
  className?: string
}

export const Navbar: FC<NavbarPropsType> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={s.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line */}
        {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
      </Modal>
    </div>
  );
};
