import { StoreProvider } from './ui/store-provider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateSchema, ReduxStoreWithManager, ThunkConfigType,
} from './config/state-schema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfigType,
};
