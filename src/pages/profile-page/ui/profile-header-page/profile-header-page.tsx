import { classNames } from 'shared/lib/class-names/class-names';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  profileActions, profileReducer, selectProfileData, selectProfileReadonly, updateProfile,
} from 'entities/profile';
import { Text } from 'shared/ui/text/text';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { selectAuthData } from 'entities/user';
import s from './profile-header-page.module.scss';

type ProfileHeaderPagePropsType = {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfileHeaderPage = ({ className }: ProfileHeaderPagePropsType) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(selectProfileReadonly);
  const authData = useSelector(selectAuthData);
  const profileData = useSelector(selectProfileData);

  const isCanEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly({ readonly: false }));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfile());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(s.profilePageHeader, {}, [className])}>
        <Text title={t('Профиль')} />

        {isCanEdit && (
          <div className={s.buttonWrapper}>
            {readonly ? (
              <Button
                className={s.editBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            ) : (
              <>
                <Button
                  className={s.editBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  {t('Сохранить')}
                </Button>
                <Button
                  className={s.saveBtn}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Отменить')}
                </Button>

              </>

            )}
          </div>
        )}

      </div>
    </DynamicModuleLoader>
  );
};

export default ProfileHeaderPage;
