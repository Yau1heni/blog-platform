export {
  ProfileType,
  ProfileSchema,
} from './model/types/profile';

export {
  profileActions,
  profileReducer,
} from './model/slice/profile-slice';

export { fetchProfile } from './model/services/fetch-profile';

export { ProfileCard } from './ui/profile-card/profile-card';
