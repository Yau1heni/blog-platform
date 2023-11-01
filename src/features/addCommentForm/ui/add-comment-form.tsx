import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/input/input';
import { Button } from 'shared/ui/button/button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../model/slices/add-comment-form-slice';
import {
  addCommentFormErrorSelector,
  addCommentFormTextSelector,
} from '../model/selectors/add-comment-form-selectors';
import s from './addCommentForm.module.scss';

type AddCommentFormPropsType = {
  className?: string
}

const reducers: ReducersList = {
  AddCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo((props: AddCommentFormPropsType) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const text = useSelector(addCommentFormTextSelector);
  const error = useSelector(addCommentFormErrorSelector);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText({ text: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(s.addCommentCorm, {}, [className])}>
        <Input placeholder={t('Введите текст комментария')} onChange={onCommentTextChange} />
        <Button>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});
