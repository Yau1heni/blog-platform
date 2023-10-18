import { StateSchema } from 'app/providers/store-provider';

export const selectProfileError = (state: StateSchema) => state.profile?.error;
