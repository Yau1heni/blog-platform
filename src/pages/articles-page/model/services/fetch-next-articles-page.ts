import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigType } from 'app/providers/store-provider';
import { articlesPageActions } from '../slices/articles-page-slice';
import { fetchArticlesList } from '../services/fetch-articles-list';
import {
  selectArticlesPageHasMore,
  selectArticlesPageIsLoading,
  selectArticlesPageNumber,
} from '../selectors/select-articles-page';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfigType<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const hasMore = selectArticlesPageHasMore(getState());
    const page = selectArticlesPageNumber(getState());
    const isLoading = selectArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage({ page: page + 1 }));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  },
);
