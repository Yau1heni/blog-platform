import { classNames } from 'shared/lib/class-names/class-names';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfile,
  profileActions,
  ProfileCard,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileIsLoading,
  selectProfileReadonly,
  selectProfileValidateErrors,
} from 'entities/profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { Text, TextTheme } from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
import { ValidateProfileErrors } from 'entities/profile/model/types/profile';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/page/ui/page';
import ProfileHeaderPage from '../ui/profile-header-page/profile-header-page';

type ProfilePagePropsType = {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePagePropsType) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const { id } = useParams<{
    id: string
  }>();

  const formData = useSelector(selectProfileForm);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);
  const readonly = useSelector(selectProfileReadonly);
  const validateErrors = useSelector(selectProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Некоректный возраст'),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некоректный регион'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),

  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProfile(id));
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ data: { first: value || '' } }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ data: { lastname: value || '' } }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ data: { city: value || '' } }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ data: { age: +(value || 0) } }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ data: { username: value || '' } }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ data: { avatar: value || '' } }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ data: { currency } }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ data: { country } }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ProfileHeaderPage />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />
        ))}
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
