import { StateSchema } from 'app/providers/store-provider';

export const selectProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
