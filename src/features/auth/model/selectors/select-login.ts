import { StateSchema } from 'app/providers/store-provider';

export const usernameSelector = (state: StateSchema) => state.login.username;
export const passwordSelector = (state: StateSchema) => state.login.password;
export const isLoadingSelector = (state: StateSchema) => state.login.isLoading;
export const errorSelector = (state: StateSchema) => state.login.error;
