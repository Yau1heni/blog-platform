import { StateSchema } from 'app/providers/store-provider';

export const selectProfileForm = (state: StateSchema) => state.profile?.form;
