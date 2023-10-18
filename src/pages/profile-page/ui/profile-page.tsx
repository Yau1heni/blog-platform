import { classNames } from 'shared/lib/class-names/class-names';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfile, ProfileCard, profileReducer } from 'entities/profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

type ProfilePagePropsType = {
    className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePagePropsType) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
