import { FC, lazy } from 'react';
import { AddCommentFormPropsType } from '../ui/add-comment-form';

export const AddCommentFormAsync = lazy<FC<AddCommentFormPropsType>>(
  () => new Promise((resolve) => {
  // @ts-ignore
    setTimeout(() => resolve(import('./add-comment-form')), 1500);
  }),
);
