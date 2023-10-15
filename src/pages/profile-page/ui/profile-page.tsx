import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/profile';

type ProfilePagePropsType = {
    className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePagePropsType) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
