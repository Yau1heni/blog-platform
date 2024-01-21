import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigType } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import { selectArticlesPageLimit } from '../selectors/select-articles-page';

type FetchArticlesListProps = {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfigType<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const { page = 1 } = props;
    const limit = selectArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
