import { StateSchema } from 'app/providers/store-provider';

export const selectProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
