import { StateSchema } from 'app/providers/store-provider';

export const selectInited = (state: StateSchema) => state.user.inited;
