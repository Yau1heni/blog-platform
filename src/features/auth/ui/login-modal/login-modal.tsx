import { Modal } from 'shared/ui/modal/modal';
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/class-names';
import { LoginForm } from '../login-form/login-form';

type LoginModalType = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalType> = ({ className, isOpen, onClose }) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
