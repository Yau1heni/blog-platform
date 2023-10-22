import { StateSchema } from 'app/providers/store-provider';

export const selectAuthData = (state: StateSchema) => state.user.authDada;
