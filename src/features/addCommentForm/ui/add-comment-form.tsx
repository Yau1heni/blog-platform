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
  selectCommentFormError,
  selectCommentFormText,
} from '../model/selectors/add-comment-form-selectors';
import s from './add-comment-form.module.scss';

export type AddCommentFormPropsType = {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  AddCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormPropsType) => {
  const { className, onSendComment } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const text = useSelector(selectCommentFormText);
  const error = useSelector(selectCommentFormError);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText({ text: value }));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, text, onCommentTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(s.addCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          onChange={onCommentTextChange}
          className={s.input}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
