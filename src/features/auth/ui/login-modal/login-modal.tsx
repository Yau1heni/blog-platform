import { Modal } from 'shared/ui/modal/modal';
import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Loader } from 'shared/ui/loader/loader';
import { LoginFormAsync } from '../login-form/login-form.async';

type LoginModalType = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalType> = ({
  className,
  isOpen,
  onClose,
}) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
