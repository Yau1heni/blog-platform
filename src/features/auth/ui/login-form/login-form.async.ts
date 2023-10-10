import { FC, lazy } from 'react';
import { LoginFormType } from './login-form';

export const LoginFormAsync = lazy <FC<LoginFormType>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./login-form')), 1500);
}));
