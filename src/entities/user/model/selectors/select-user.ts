import { StateSchema } from 'app/providers/store-provider';

export const authDataSelector = (state: StateSchema) => state.user.authDada;
