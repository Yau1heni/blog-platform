import { StateSchema } from 'app/providers/store-provider';
import { ArticleView } from 'entities/article';

export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const selectArticlesPageIsLoading = (
  state: StateSchema,
) => state.articlesPage?.isLoading || false;
export const selectArticlesPageView = (
  state: StateSchema,
) => state.articlesPage?.view || ArticleView.SMALL;
