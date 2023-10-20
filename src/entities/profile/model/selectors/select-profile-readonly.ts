import { StateSchema } from 'app/providers/store-provider';

export const selectProfileReadonly = (state: StateSchema) => state.profile?.readonly;
