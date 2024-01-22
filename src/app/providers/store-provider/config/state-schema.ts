import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/article';
import { ArticleDetailsCommentsSchema } from 'pages/article-details-page';
import { AddCommentFormSchema } from 'features/add-comment-form';
import { ArticlesPageSchema } from 'pages/articles-page';
import { ScrollSavingSchema } from 'features/scroll-saving';

export interface StateSchema {
  user: UserSchema
  scrollSaving: ScrollSavingSchema

  // Async reducers
  login?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: MountedReducers
}

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
}

export type ThunkExtraArgType = {
  api: AxiosInstance
}

export type ThunkConfigType<T> = {
  rejectValue: T
  extra: ThunkExtraArgType
  state: StateSchema
}
