import { StateSchema } from 'app/providers/store-provider';

export const selectArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const selectArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const selectArticleDetailsIsLoading = (
  state: StateSchema,
) => state.articleDetails?.isLoading;
