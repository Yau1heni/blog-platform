import { StateSchema } from 'app/providers/store-provider';

export const selectProfileData = (state: StateSchema) => state.profile?.data;
